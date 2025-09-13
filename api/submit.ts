import type { VercelRequest, VercelResponse } from '@vercel/node';

export const config = { runtime: 'nodejs' };

// ✨ 수정: rrnFront, rrnBack 대신 birth를 사용하도록 타입을 단순화할 수 있습니다.
type SubmitBody = {
  type: 'phone' | 'online';
  site?: string;
  name?: string;
  phone?: string;
  birth?: string; // YYMMDD or YYYYMMDD
  gender?: '남' | '여';

  // UTM & 유입 정보
  utm_source?: string;
  utm_medium?: string;
  utm_campaign?: string;
  utm_content?: string;
  utm_term?: string;
  landing_page?: string;
  referrer?: string;
  first_utm?: string;
  last_utm?: string;
};

const { GH_TOKEN, GH_REPO_FULLNAME } = process.env;

async function fetchWithTimeout(url: string, options: RequestInit = {}, timeout = 8000) {
  const c = new AbortController();
  const id = setTimeout(() => c.abort(), timeout);
  try {
    return await fetch(url, { ...options, signal: c.signal });
  } finally {
    clearTimeout(id);
  }
}

export default async function handler(req: VercelRequest, res: VercelResponse) {
  if (req.method !== 'POST') {
    return res.status(405).json({ ok: false, error: 'POST only' });
  }
  if (!GH_TOKEN || !GH_REPO_FULLNAME) {
    return res.status(500).json({ ok: false, error: 'Server configuration error: GitHub environment variables are not set.' });
  }

  const body = req.body as SubmitBody;

  const type = body.type;
  const site = body.site || 'teeth';
  const name = body.name || '';
  const gender = body.gender;

  if (!type || (type !== 'phone' && type !== 'online')) {
    return res.status(400).json({ ok: false, error: 'Invalid type' });
  }

  // ✨ 수정: 제목 생성 로직을 'birth' 필드 기준으로 통합합니다.
  const birth = body.birth || ''; // YYYYMMDD 형식
  // YYYYMMDD 형식에서 YYMMDD 부분만 잘라내어 마스킹합니다. (예: 850101-*******)
  const masked = birth.length >= 6 ? `${birth.slice(-6)}-*******` : '생년월일 미입력';
  const requestKo = type === 'phone' ? '전화' : '온라인';
  const title = `[${requestKo}] ${name || '이름 미입력'} / ${gender || '성별 미선택'} / ${masked} / ${body.phone || '전화번호 미입력'}`;

  const labels = [`type:${type}`, `site:${site}`];

  const payload = {
    ...body,
    requestedAt: new Date().toISOString(),
    ua: (req.headers['user-agent'] || '').toString().slice(0, 200),
    ip: (req.headers['x-forwarded-for'] || req.socket.remoteAddress || '').toString(),
  };

  const bodyMd = '```json\n' + JSON.stringify(payload, null, 2) + '\n```';

  try {
    const resp = await fetchWithTimeout(`https://api.github.com/repos/${GH_REPO_FULLNAME}/issues`, {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${GH_TOKEN}`,
        'Content-Type': 'application/json',
        Accept: 'application/vnd.github+json',
        'X-GitHub-Api-Version': '2022-11-28',
      },
      body: JSON.stringify({ title, body: bodyMd, labels }),
    });

    if (!resp.ok) {
      const text = await resp.text();
      return res.status(500).json({ ok: false, error: 'GitHub error', detail: text });
    }

    const issue = await resp.json();
    return res.status(200).json({ ok: true, number: issue.number });
  } catch (e: any) {
    if (e?.name === 'AbortError') return res.status(504).json({ ok: false, error: 'Gateway Timeout from GitHub API' });
    return res.status(500).json({ ok: false, error: 'Internal Server Error', detail: e?.message || String(e) });
  }
}


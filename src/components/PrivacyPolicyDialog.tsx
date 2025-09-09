import { policyContents, FormType, ContentType } from '@/lib/policyContents'; // 1단계에서 만든 파일 import

// Props 타입을 정의합니다.
interface PrivacyPolicyDialogProps {
  isOpen: boolean;
  onClose: () => void;
  formType: FormType;
  contentType: ContentType | null;
}

export function PrivacyPolicyDialog({
  isOpen,
  onClose,
  formType,
  contentType,
}: PrivacyPolicyDialogProps) {
  if (!isOpen || !contentType) {
    return null;
  }

  // formType과 contentType에 맞는 제목과 내용을 가져옵니다.
  const policy = policyContents[formType][contentType];

  return (
    // 아래는 예시 구조입니다. 기존의 Dialog/Modal 구조에 맞게 수정하세요.
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
      <div className="bg-white p-6 rounded-lg max-w-lg w-full">
        <h2 className="text-xl font-bold mb-4">{policy.title}</h2>
        <p className="text-gray-700 whitespace-pre-wrap">{policy.content}</p>
        <div className="text-right mt-6">
          <button
            onClick={onClose}
            className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
          >
            닫기
          </button>
        </div>
      </div>
    </div>
  );
}
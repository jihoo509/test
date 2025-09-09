// ✨ === 경로 수정: 별칭(@/) 대신 상대 경로(../)를 사용합니다 === ✨
import { policyContents, FormType, ContentType } from '../lib/policyContents';

// Props 타입을 정의합니다.
interface PrivacyPolicyDialogProps {
  isOpen: boolean;
  onClose: () => void;
  formType: FormType;
  contentType: ContentType | null;
  // onAgree 프롭은 더 이상 사용되지 않으므로 제거하거나 주석 처리합니다.
  // onAgree?: () => void;
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
    // 기존의 Dialog/Modal 구조와 스타일에 맞게 내부 구조를 조정했습니다.
    <div className="fixed inset-0 bg-black bg-opacity-70 flex justify-center items-center z-50">
      <div className="bg-white p-6 md:p-8 rounded-2xl max-w-lg w-11/12 max-h-[80vh] flex flex-col">
        <h2 className="text-2xl font-bold mb-4 text-gray-800">{policy.title}</h2>
        <div className="flex-grow overflow-y-auto pr-4 text-gray-600 whitespace-pre-wrap">
          <p>{policy.content}</p>
        </div>
        <div className="text-right mt-6">
          <button
            onClick={onClose}
            className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 transition-colors"
          >
            확인
          </button>
        </div>
      </div>
    </div>
  );
}

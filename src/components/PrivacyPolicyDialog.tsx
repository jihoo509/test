import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogClose, // 닫기 버튼을 위해 추가
} from './ui/dialog'; // 기존에 사용하시던 UI 라이브러리를 다시 사용합니다.
import { Button } from './ui/button';
import { policyContents, FormType, ContentType } from '../lib/policyContents';

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
  // 내용이 선택되지 않으면 팝업을 렌더링하지 않습니다.
  if (!contentType) {
    return null;
  }

  // formType과 contentType에 맞는 제목과 내용을 가져옵니다.
  const policy = policyContents[formType][contentType];

  return (
    // ✨ Dialog 컴포넌트를 다시 사용하여 z-index, 외부 클릭 종료 등 모든 기존 기능을 복원합니다.
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="bg-white text-gray-800 rounded-lg">
        <DialogHeader>
          <DialogTitle className="text-xl font-bold">{policy.title}</DialogTitle>
        </DialogHeader>
        {/* 스크롤 가능한 내용 영역 */}
        <div className="max-h-[60vh] overflow-y-auto pr-4 py-4">
          <p className="text-sm text-gray-600 whitespace-pre-wrap">{policy.content}</p>
        </div>
        {/* 기존 디자인처럼 하단에 '확인' 버튼을 추가합니다. */}
        <div className="flex justify-end">
          <Button
            type="button"
            onClick={onClose}
            className="bg-gray-800 text-white hover:bg-gray-700"
          >
            확인
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
}


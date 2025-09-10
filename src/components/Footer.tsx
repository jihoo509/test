import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogFooter,
} from './ui/dialog';
import { Button } from './ui/button';

interface PrivacyPolicyFullDialogProps {
  isOpen: boolean;
  onClose: () => void;
}

export function PrivacyPolicyFullDialog({ isOpen, onClose }: PrivacyPolicyFullDialogProps) {
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="bg-white text-gray-800 rounded-lg p-0 max-w-3xl">
        <DialogHeader className="p-6 pb-4 border-b">
          <DialogTitle className="text-xl font-bold">개인정보 처리방침</DialogTitle>
        </DialogHeader>
        <div className="max-h-[70vh] overflow-y-auto p-6 text-sm text-gray-700 space-y-4">
          {/* 나중에 이곳에 개인정보 처리방침 전체 내용을 넣어주세요. */}
          <h3 className="font-bold text-base text-gray-900">제1조 (총칙)</h3>
          <p>
            프라임에셋 333본부(이하 '회사')는 이용자의 개인정보를 중요시하며, "정보통신망 이용촉진 및 정보보호"에 관한 법률을 준수하고 있습니다.
            회사는 개인정보처리방침을 통하여 이용자께서 제공하시는 개인정보가 어떠한 용도와 방식으로 이용되고 있으며, 개인정보보호를 위해 어떠한 조치가 취해지고 있는지 알려드립니다.
          </p>
          <h3 className="font-bold text-base text-gray-900">제2조 (수집하는 개인정보의 항목)</h3>
          <p>
            회사는 상담, 서비스 신청 등등을 위해 아래와 같은 개인정보를 수집하고 있습니다.
            <br />- 수집항목 : 이름, 생년월일, 성별, 연락처, 주민등록번호
            <br />- 개인정보 수집방법 : 홈페이지(상담신청)
          </p>
          <p>
            (여기에 개인정보 처리방침 전문이 들어갑니다...)
          </p>
        </div>
        <DialogFooter className="p-4 bg-gray-50 border-t">
          <Button type="button" variant="outline" onClick={onClose}>
            닫기
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}

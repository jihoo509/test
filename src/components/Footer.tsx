import primeAssetLogo from '../assets/prime-asset-logo.png'; // 1. 새로운 로고 이미지를 import 합니다.

export function Footer() {
  return (
    <footer className="w-full mt-12 lg:mt-20">
      <div className="w-full max-w-5xl mx-auto py-8 px-4 border-t border-white/20">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* 2. 로고 섹션: SVG 대신 <img> 태그를 사용합니다. */}
          <div className="flex items-center gap-4">
            <img 
              src={primeAssetLogo} 
              alt="프라임에셋 로고" 
              className="h-10" // 로고 높이를 조절하세요.
            />
          </div>
          <div className="text-center md:text-right text-xs text-white/60">
            <p>프라임에셋 333본부</p>
          </div>
        </div>

        <div className="mt-6 pt-6 border-t border-white/30 text-xs text-white/50 space-y-2 text-center md:text-left">
          <p>본 내용은 모집종사자 개인의 의견이며 계약체결에 따른 이익 또는 손실은 보험계약자 등에게 귀속됩니다.</p>
          <p>보험사 및 상품별로 상이할 수 있으므로, 관련한 세부사항은 반드시 해당 약관을 참조하시기 바랍니다.</p>
          <p>본 광고는 광고심의기준을 준수하였으며, 유효기간은 심의일로부터 1년입니다.</p>
          <p>보험계약자가 기존 보험계약을 해지하고 새로운 보험계약을 체결하는 과정에서 질병이력, 연령증가 등으로 가입이 거절되거나 보험료가 인상될 수 있습니다.</p>
          <p>가입 상품에 따라 새로운 면책기간 적용 및 보장 제한 등 기타 불이익이 발생할 수 있습니다.</p>
        </div>

        <div className="mt-4 text-xs text-white/40 text-center md:text-left">
          <p>설계사 신지후 (손.생보 협회 등록번호 00000000000000), 프라임에셋심의필 제0000-00-0000호(2025.00.00 ~ 2026.00.00)</p>
        </div>
      </div>
    </footer>
  );
}


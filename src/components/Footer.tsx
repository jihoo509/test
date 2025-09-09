export function Footer() {
  // 간단한 플레이스홀더 로고 SVG입니다. 실제 로고로 교체할 수 있습니다.
  const Logo = () => (
    <svg width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M12 2L2 7L12 12L22 7L12 2Z" stroke="white" strokeOpacity="0.8" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M2 17L12 22L22 17" stroke="white" strokeOpacity="0.8" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M2 12L12 17L22 12" stroke="white" strokeOpacity="0.8" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );

  return (
    <footer className="w-full bg-black/30 backdrop-blur-sm mt-24 py-12 px-6 border-t border-white/10">
      <div className="max-w-5xl mx-auto">
        
        {/* 로고 및 회사명 */}
        <div className="flex flex-col items-center justify-center space-y-3 mb-8">
          <Logo />
          <span className="text-lg font-semibold text-white/90">프라임에셋 333본부</span>
        </div>

        {/* 안내 문구 */}
        <div className="border-t border-white/10 pt-8 text-xs text-white/60 space-y-3 text-center">
          <p>
            본 내용은 모집종사자 개인의 의견이며 계약체결에 따른 이익 또는 손실은 보험계약자 등에게 귀속됩니다.
          </p>
          <p>
            보험사 및 상품별로 상이할 수 있으므로, 관련한 세부사항은 반드시 해당 약관을 참조하시기 바랍니다.
          </p>
          <p>
            본 광고는 광고심의기준을 준수하였으며, 유효기간은 심의일로부터 1년입니다.
          </p>
          <p>
            보험계약자가 기존 보험계약을 해지하고 새로운 보험계약을 체결하는 과정에서 질병이력, 연령증가 등으로 가입이 거절되거나 보험료가 인상될 수 있습니다.
          </p>
          <p>
            가입 상품에 따라 새로운 면책기간 적용 및 보장 제한 등 기타 불이익이 발생할 수 있습니다.
          </p>
          <p className="pt-4 text-white/80 font-medium">
            설계사 신지후 (손.생보 협회 등록번호 202507-2000-3328), 프라임에셋심의필 제0000-00-0000호(2025.00.00 ~ 2026.00.00)
          </p>
        </div>

      </div>
    </footer>
  );
}


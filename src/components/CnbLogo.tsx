interface CnbLogoProps {
  size?: 'sm' | 'md' | 'lg';
  showText?: boolean;
  variant?: 'stacked' | 'side';
}

const officialLogoUrl = 'https://www.bankatcnb.bank/assets/img/city-national-bank-logo.svg';

export default function CnbLogo({ size = 'md', showText = true, variant = 'stacked' }: CnbLogoProps) {
  const sizes = {
    sm: 'w-[86px]',
    md: 'w-[118px]',
    lg: 'w-[178px]',
  };

  return (
    <div className={`flex ${variant === 'side' ? 'items-center' : 'flex-col items-center'}`}>
      <img
        src={officialLogoUrl}
        alt="City National Bank"
        className={`${sizes[size]} h-auto object-contain ${showText ? '' : 'max-h-12'}`}
      />
    </div>
  );
}

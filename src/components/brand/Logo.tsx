
interface LogoProps {
  className?: string;
  variant?: 'dark' | 'light';
}

const Logo = ({ className = 'h-8 w-auto', variant = 'dark' }: LogoProps) => {
  // This is a placeholder SVG logo - replace with your actual logo
  const textColor = variant === 'light' ? 'text-white' : 'text-gray-900';
  
  return (
    <div className={`flex items-center ${className}`}>
      <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect width="40" height="40" rx="8" fill={variant === 'light' ? '#fff' : '#0ea5e9'} />
        <path d="M20 10L28 15V25L20 30L12 25V15L20 10Z" fill={variant === 'light' ? '#0ea5e9' : '#fff'} />
        <path d="M20 18C21.6569 18 23 16.6569 23 15C23 13.3431 21.6569 12 20 12C18.3431 12 17 13.3431 17 15C17 16.6569 18.3431 18 20 18Z" fill={variant === 'light' ? '#0369a1' : '#bae6fd'} />
      </svg>
      <span className={`ml-2 font-display font-bold text-xl ${textColor}`}>AI Link</span>
    </div>
  );
};

export default Logo;
  
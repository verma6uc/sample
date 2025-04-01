
import { ReactNode } from 'react';

interface ContainerProps {
  children: ReactNode;
  className?: string;
  size?: 'sm' | 'md' | 'lg' | 'xl' | 'full';
}

const Container = ({ 
  children, 
  className = '', 
  size = 'lg' 
}: ContainerProps) => {
  const sizeClasses = {
    sm: 'max-w-4xl',
    md: 'max-w-5xl',
    lg: 'max-w-6xl',
    xl: 'max-w-7xl',
    full: 'max-w-full',
  };
  
  return (
    <div className={`px-4 mx-auto ${sizeClasses[size]} ${className}`}>
      {children}
    </div>
  );
};

export default Container;
  
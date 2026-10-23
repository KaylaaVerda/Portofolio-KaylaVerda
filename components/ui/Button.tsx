import React, { ButtonHTMLAttributes, AnchorHTMLAttributes, ReactNode } from 'react';
import Link from 'next/link';

type BaseProps = {
  children: ReactNode;
  variant?: 'primary' | 'secondary' | 'ghost' | 'outline';
  size?: 'sm' | 'md' | 'lg';
  leftIcon?: ReactNode;
  rightIcon?: ReactNode;
  className?: string;
  isFullWidth?: boolean;
};

type ButtonAsButton = BaseProps &
  Omit<ButtonHTMLAttributes<HTMLButtonElement>, keyof BaseProps> & {
    href?: undefined;
  };

type ButtonAsLink = BaseProps &
  Omit<AnchorHTMLAttributes<HTMLAnchorElement>, keyof BaseProps> & {
    href: string;
    isExternal?: boolean;
  };

export type ButtonProps = ButtonAsButton | ButtonAsLink;

export function Button({
  children,
  variant = 'primary',
  size = 'md',
  leftIcon,
  rightIcon,
  className = '',
  isFullWidth = false,
  ...rest
}: ButtonProps) {
  // Area sentuh minimal 44px agar ramah layar sentuh dan standar aksesibilitas WCAG
  const sizeStyles = {
    sm: 'text-sm px-4 py-2.5 min-h-[44px] gap-2 rounded-full',
    md: 'text-base px-6 py-3 min-h-[44px] gap-2.5 rounded-full',
    lg: 'text-lg px-8 py-3.5 min-h-[48px] gap-3 rounded-full',
  };

  const variantStyles = {
    primary:
      'bg-salmon-pink text-white hover:bg-salmon-pink-soft shadow-sweet hover:shadow-sweet-lg active:scale-[0.98]',
    secondary:
      'bg-wheat-soft text-bole hover:bg-wheat border border-fawn/40 shadow-sm active:scale-[0.98]',
    ghost:
      'bg-transparent text-bole hover:bg-white/50 active:scale-[0.98]',
    outline:
      'bg-white/40 backdrop-blur-sm text-bole border-2 border-salmon-pink/50 hover:border-salmon-pink hover:bg-salmon-pink/10 active:scale-[0.98]',
  };

  const baseStyles =
    'inline-flex items-center justify-center font-serif font-medium tracking-wide transition-all duration-200 ease-out focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-bole focus-visible:ring-offset-2 select-none';

  const widthStyle = isFullWidth ? 'w-full' : '';
  const combinedClasses = `${baseStyles} ${sizeStyles[size]} ${variantStyles[variant]} ${widthStyle} ${className}`.trim();

  // Konten tombol dengan ikon opsional
  const content = (
    <>
      {leftIcon && <span className="inline-flex shrink-0 items-center justify-center">{leftIcon}</span>}
      <span>{children}</span>
      {rightIcon && <span className="inline-flex shrink-0 items-center justify-center">{rightIcon}</span>}
    </>
  );

  // Jika href disediakan, render tautan Next.js atau anchor link eksternal
  if ('href' in rest && rest.href !== undefined) {
    const { href, isExternal, target, rel, ...linkProps } = rest as ButtonAsLink;

    if (isExternal || href.startsWith('http') || href.startsWith('mailto:')) {
      return (
        <a
          href={href}
          target={target || '_blank'}
          rel={rel || 'noopener noreferrer'}
          className={combinedClasses}
          {...linkProps}
        >
          {content}
        </a>
      );
    }

    return (
      <Link href={href} className={combinedClasses} {...linkProps}>
        {content}
      </Link>
    );
  }

  // Jika tidak ada href, render tombol HTML standar
  const buttonProps = rest as ButtonAsButton;
  return (
    <button type={buttonProps.type || 'button'} className={combinedClasses} {...buttonProps}>
      {content}
    </button>
  );
}

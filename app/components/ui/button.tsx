'use client';

import React from 'react';

export const Button = React.forwardRef<
  HTMLButtonElement,
  React.ButtonHTMLAttributes<HTMLButtonElement> & { size?: 'lg' }
>(({ className, size, ...props }, ref) => {
  const sizeClasses = size === 'lg' ? 'px-8 py-3 text-lg' : 'px-4 py-2 text-base';
  return (
    <button
      className={`bg-blue-500 hover:bg-blue-700 text-white font-bold rounded ${sizeClasses} ${className}`}
      ref={ref}
      {...props}
    />
  );
});

Button.displayName = 'Button';

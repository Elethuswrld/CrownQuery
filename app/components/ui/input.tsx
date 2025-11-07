'use client';

import React from 'react';

export const Input = React.forwardRef<
  HTMLInputElement,
  React.InputHTMLAttributes<HTMLInputElement>
>(({ className, ...props }, ref) => {
  return (
    <input
      className={`border border-gray-300 rounded-md px-3 py-2 text-base ${className}`}
      ref={ref}
      {...props}
    />
  );
});

Input.displayName = 'Input';

import React from 'react';

export const GradientText = ({ children, className = "" }: { children: React.ReactNode, className?: string }) => (
  <span className={`text-teal-500 ${className}`}>
    {children}
  </span>
);

export const PrimaryButton = ({ children, className = "" }: { children: React.ReactNode, className?: string }) => (
  <button className={`bg-[#14b8a6] hover:bg-teal-500 text-white rounded-full font-medium transition-transform shadow-md shadow-teal-500/20 ${className}`}>
    {children}
  </button>
);

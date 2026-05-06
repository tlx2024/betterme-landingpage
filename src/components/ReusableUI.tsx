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

export const MiniProgramCode = ({ className = "", dense = false }: { className?: string; dense?: boolean }) => (
  <div className={`relative overflow-hidden rounded-[1.1rem] border border-[#ecf3ee] bg-white p-2 shadow-[inset_0_0_0_1px_rgba(255,255,255,0.8)] ${className}`}>
    <img
      src="/mini-program-code.jpg"
      alt="BetterMe 微信小程序码"
      className={`h-full w-full rounded-[0.85rem] object-contain ${dense ? 'p-0.5' : ''}`}
    />
  </div>
);

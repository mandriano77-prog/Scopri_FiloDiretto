import { ReactNode } from 'react';

export function PhoneFrame({
  children,
  className = '',
  screenClassName = '',
}: {
  children: ReactNode;
  className?: string;
  screenClassName?: string;
}) {
  return (
    <div className={`relative w-[270px] h-[550px] rounded-[3rem] p-3 bg-[#1a1a1a] border border-white/20 shadow-[0_0_80px_rgba(124,58,237,0.25)] flex-shrink-0 ${className}`}>
      {/* Hardware Buttons */}
      <div className="absolute left-[-2px] top-24 w-[2px] h-10 bg-[#333] rounded-l-sm" />
      <div className="absolute left-[-2px] top-36 w-[2px] h-10 bg-[#333] rounded-l-sm" />
      <div className="absolute right-[-2px] top-28 w-[2px] h-14 bg-[#333] rounded-r-sm" />

      {/* Dynamic Island */}
      <div className="absolute top-5 left-1/2 -translate-x-1/2 w-20 h-6 bg-black rounded-full z-50 flex items-center justify-end px-2 shadow-inner">
        <div className="w-2 h-2 rounded-full bg-white/10 mr-1" />
      </div>
      
      {/* Screen */}
      <div className={`relative w-full h-full rounded-[2.25rem] overflow-hidden bg-black shadow-inner ${screenClassName}`}>
        {children}
      </div>
    </div>
  );
}

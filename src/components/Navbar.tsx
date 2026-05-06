import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;
  const navItems = [
    { to: '/', label: '首页' },
    { to: '/features', label: '功能特色' },
    { to: '/solutions', label: '健康方案' },
    { to: '/stories', label: '用户故事' },
    { to: '/pricing', label: '价格' },
    { to: '/ai-customize', label: 'AI 定制' },
  ];

  return (
    <nav className="fixed inset-x-0 top-0 z-50 border-b border-[#edf3ef] bg-white/92 shadow-[0_10px_36px_rgba(32,86,55,0.06)] backdrop-blur-xl transition-all">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-[76px] items-center justify-between">
          <Link to="/" className="flex-shrink-0 flex items-center gap-2 cursor-pointer">
            <span className="flex h-9 w-9 overflow-hidden rounded-full bg-white">
              <img src="/betterme-logo.png" alt="" className="h-full w-full scale-[1.35] object-cover object-top" />
            </span>
            <span className="text-[1.55rem] font-black tracking-tight text-gray-950">
              Better<span className="text-[#208752]">Me</span>
            </span>
          </Link>
          
          <div className="hidden items-center gap-8 md:flex">
            {navItems.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                className={`relative py-2 text-[15px] font-bold transition-colors after:absolute after:inset-x-0 after:-bottom-1 after:mx-auto after:h-[3px] after:w-0 after:rounded-full after:bg-[#208752] after:transition-all ${
                  isActive(item.to)
                    ? 'text-[#208752] after:w-full'
                    : 'text-gray-600 hover:text-gray-900 hover:after:w-1/2'
                }`}
              >
                {item.label}
              </Link>
            ))}
          </div>

          <div className="hidden md:flex items-center">
            <Link to="/download">
              <button className="bm-nav-pill rounded-full bg-[#208752] px-6 py-2.5 font-bold text-white shadow-[0_12px_28px_rgba(32,135,82,0.24)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#1a7144]">
                下载 & 体验
              </button>
            </Link>
          </div>

          <div className="md:hidden flex items-center">
            <button onClick={() => setIsOpen(!isOpen)} className="text-gray-500 hover:text-gray-900">
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="mx-4 mb-4 space-y-2 rounded-[1.5rem] border border-white/75 bg-white/78 px-4 pb-5 pt-3 shadow-[0_20px_55px_rgba(31,82,50,0.12)] backdrop-blur-2xl md:hidden">
          {navItems.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              onClick={() => setIsOpen(false)}
              className={`block rounded-lg px-3 py-2 text-base font-medium ${isActive(item.to) ? 'bg-green-50 text-[#208752]' : 'text-gray-600 hover:bg-gray-50'}`}
            >
              {item.label}
            </Link>
          ))}
          <div className="pt-4">
             <Link to="/download" onClick={() => setIsOpen(false)}>
               <button className="w-full bg-[#208752] text-white px-6 py-3 rounded-full font-medium shadow-md">
                下载 & 体验
               </button>
             </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

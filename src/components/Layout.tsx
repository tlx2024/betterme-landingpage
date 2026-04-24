import React, { useState } from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import { Menu, X, Send } from 'lucide-react';
import { PrimaryButton } from './ReusableUI';

export const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  
  const navLinks = [
    { name: "首页", path: "/" },
    { name: "功能", path: "/features" },
    { name: "定价", path: "/pricing" },
    { name: "关于我们", path: "/about" },
    { name: "帮助中心", path: "/help" }
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-md border-b border-slate-100 transition-all">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <NavLink to="/" className="flex items-center gap-2 cursor-pointer">
            <span className="text-2xl font-bold text-slate-900 tracking-tight">BetterMe</span>
          </NavLink>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link, idx) => (
              <NavLink 
                key={idx} 
                to={link.path} 
                className={({ isActive }) => 
                  `text-[15px] transition-colors relative pb-1 ${isActive ? 'text-teal-600 font-semibold border-b-2 border-teal-500' : 'text-slate-600 hover:text-teal-500'}`
                }
              >
                {link.name}
              </NavLink>
            ))}
          </nav>

          {/* Actions */}
          <div className="hidden md:flex items-center gap-4">
            <button className="text-slate-600 hover:text-slate-900 font-medium text-[15px] px-4">登录</button>
            <PrimaryButton className="px-6 py-2.5 text-[15px]">开始使用</PrimaryButton>
          </div>

          {/* Mobile Menu Toggle */}
          <button className="md:hidden text-slate-600" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Nav */}
      {isOpen && (
        <div className="md:hidden bg-white border-b border-slate-100 px-4 py-4 space-y-4 shadow-lg absolute w-full left-0 top-20">
          {navLinks.map((link, idx) => (
            <NavLink 
              key={idx} 
              to={link.path}
              onClick={() => setIsOpen(false)}
              className={({ isActive }) => 
                `block px-2 py-2 font-medium ${isActive ? 'text-teal-600' : 'text-slate-600'}`
              }
            >
              {link.name}
            </NavLink>
          ))}
          <div className="flex gap-4 pt-4 border-t border-slate-100 px-2 mt-4">
            <button className="flex-1 py-2.5 text-slate-600 font-medium border border-slate-200 rounded-full">登录</button>
            <PrimaryButton className="flex-1 py-2.5 text-[15px]">开始使用</PrimaryButton>
          </div>
        </div>
      )}
    </header>
  );
};

export const Footer = () => {
  return (
    <footer className="bg-slate-50 pt-20 pb-10 border-t border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8 mb-16">
          <div className="col-span-2 lg:col-span-2">
            <div className="flex items-center gap-2 mb-6">
              <span className="text-xl font-bold text-slate-900 tracking-tight">BetterMe</span>
            </div>
            <p className="text-slate-500 text-sm mb-6 max-w-xs leading-relaxed">
              AI 健康减脂陪伴平台，帮你科学减脂，养成健康生活习惯，遇见更好的自己。
            </p>
            <div className="flex items-center gap-4 text-slate-400">
               <a href="#" className="hover:text-teal-500 transition-colors">微信</a>
               <a href="#" className="hover:text-teal-500 transition-colors">微博</a>
               <a href="#" className="hover:text-teal-500 transition-colors">知乎</a>
            </div>
          </div>
          
          <div>
            <h4 className="text-slate-900 font-bold mb-6">产品</h4>
            <ul className="space-y-4 text-sm text-slate-500">
              <li><a href="#" className="hover:text-teal-600">功能介绍</a></li>
              <li><a href="#" className="hover:text-teal-600">使用指南</a></li>
              <li><a href="#" className="hover:text-teal-600">下载 APP</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-slate-900 font-bold mb-6">资源</h4>
            <ul className="space-y-4 text-sm text-slate-500">
              <li><a href="#" className="hover:text-teal-600">文章中心</a></li>
              <li><a href="#" className="hover:text-teal-600">帮助中心</a></li>
              <li><a href="#" className="hover:text-teal-600">视频教程</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-slate-900 font-bold mb-6">社区</h4>
            <ul className="space-y-4 text-sm text-slate-500">
              <li><a href="#" className="hover:text-teal-600">社区讨论</a></li>
              <li><a href="#" className="hover:text-teal-600">活动挑战</a></li>
              <li><a href="#" className="hover:text-teal-600">用户故事</a></li>
            </ul>
          </div>

          <div className="col-span-2 lg:col-span-1">
            <h4 className="text-slate-900 font-bold mb-6">订阅健康资讯</h4>
            <p className="text-xs text-slate-500 mb-4">输入你的邮箱，获取最新健康知识和减脂技巧</p>
            <div className="flex relative">
              <input 
                type="email" 
                placeholder="输入邮箱地址" 
                className="w-full bg-white border border-slate-200 rounded-full py-2.5 px-4 text-sm text-slate-900 focus:outline-none focus:border-teal-500 focus:ring-1 focus:ring-teal-500 shadow-sm"
              />
              <button className="absolute right-1 top-1 bottom-1 bg-[#14b8a6] text-white px-3 rounded-full flex items-center justify-center hover:bg-teal-500 transition-colors">
                <Send size={14} />
              </button>
            </div>
          </div>
        </div>
        
        <div className="pt-8 border-t border-slate-200 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-slate-400">
          <p>© 2026 BetterMe. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <a href="#" className="hover:text-slate-600">隐私政策</a>
            <a href="#" className="hover:text-slate-600">用户协议</a>
            <a href="#" className="hover:text-slate-600">Cookie 政策</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export const Layout = () => {
  return (
    <div className="font-sans text-slate-900 min-h-screen flex flex-col selection:bg-teal-200 selection:text-teal-900 bg-white">
      <Header />
      <main className="flex-1 pt-20">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

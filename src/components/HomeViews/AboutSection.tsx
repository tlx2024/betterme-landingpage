import React from 'react';
import { motion } from 'motion/react';
import { Target, ShieldCheck, Lightbulb, Globe2, Apple } from 'lucide-react';
import { PrimaryButton } from '../ReusableUI';
import { Link } from 'react-router-dom';

export const AboutSection = () => {
  return (
    <section className="py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-8">
          
          <div className="flex-1 w-full relative min-h-[500px]">
            <div className="absolute inset-y-0 left-0 w-full lg:w-[120%] bg-slate-50 rounded-[4rem] rounded-l-none -z-10"></div>
             <img 
               src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=800&h=800&fit=crop" 
               alt="Team" 
               className="w-full h-full object-cover rounded-[3rem] shadow-xl"
               style={{ maskImage: 'linear-gradient(to right, transparent, black 20%, black 80%, transparent)'}}
             />
          </div>

          <div className="flex-1 text-center lg:text-left z-10 lg:pl-12">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">关于 BetterMe</h2>
            <p className="text-base text-slate-500 mb-12 max-w-lg mx-auto lg:mx-0 leading-relaxed">
              BetterMe 的使命是通过 AI 技术与科学方法，帮助每个人建立健康的生活方式，成为更好的自己。
            </p>

            <div className="grid grid-cols-2 gap-y-10 gap-x-6 mb-12">
              {[
                { val: "500万+", label: "用户信赖", icon: <ShieldCheck size={20} className="text-teal-500"/> },
                { val: "95%", label: "用户满意度", icon: <Target size={20} className="text-blue-500"/> },
                { val: "4.9", label: "应用商店评分", icon: <Lightbulb size={20} className="text-amber-500"/>, star: true },
                { val: "专业团队", label: "营养师 & 科学家", icon: <Globe2 size={20} className="text-indigo-500"/> },
              ].map((stat, idx) => (
                <div key={idx} className="flex flex-col gap-1 items-center lg:items-start">
                  <div className="flex items-center gap-2 mb-1">
                    {stat.icon}
                    <div className="text-2xl font-bold text-slate-900 flex items-center gap-1">
                      {stat.val}
                      {stat.star && <span className="text-amber-500 text-lg">★</span>}
                    </div>
                  </div>
                  <div className="text-sm text-slate-500">{stat.label}</div>
                </div>
              ))}
            </div>
            
            <Link to="/about">
              <PrimaryButton className="px-8 py-3.5 text-sm">了解更多</PrimaryButton>
            </Link>
          </div>

        </div>
      </div>
    </section>
  );
};

export const BottomDownload = () => {
  return (
    <section className="py-20 bg-slate-50/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gradient-to-br from-[#f8fafc] to-[#e0f2fe] rounded-[3rem] border border-slate-100 overflow-hidden relative shadow-2xl flex flex-col md:flex-row items-center">
            
           <div className="p-12 lg:p-20 relative z-10 flex-1 text-center md:text-left">
             <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-4 tracking-tight">
               今天就开始你的健康之旅吧
             </h2>
             <p className="text-slate-500 text-lg mb-10">
               BetterMe 陪你一起，坚持成就更好的自己
             </p>
             <div className="flex justify-center md:justify-start gap-4 flex-wrap">
                <button className="bg-slate-900 text-white rounded-xl px-6 py-3 flex items-center gap-2 hover:bg-slate-800 transition-colors shadow-lg">
                  <Apple size={24} />
                  <div className="text-left">
                    <div className="text-[10px] opacity-80 leading-tight">Download on the</div>
                    <div className="text-sm font-semibold leading-tight">App Store</div>
                  </div>
                </button>
                <button className="bg-slate-900 text-white rounded-xl px-6 py-3 flex items-center gap-2 hover:bg-slate-800 transition-colors shadow-lg">
                   <svg viewBox="0 0 24 24" className="w-6 h-6 fill-current"><path d="M17.523 15.3414c-.5511 0-.9993-.4486-.9993-.9997s.4482-.9993.9993-.9993c.5511 0 .9993.4482.9993.9993.0004.5511-.4482.9997-.9993.9997m-11.0456 0c-.5515 0-.9997-.4486-.9997-.9997s.4482-.9993.9997-.9993c.5511 0 .9993.4482.9993.9993 0 .5511-.4482.9997-.9993.9997m11.4045-6.02l1.9973-3.4592a.4158.4158 0 00-.1521-.5676.4162.4162 0 00-.568.1517l-2.0305 3.5173A11.8383 11.8383 0 0012.0004 8.01a11.9026 11.9026 0 00-5.1119.9538L4.858 5.4463a.4158.4158 0 00-.568-.1517.4158.4158 0 00-.1521.5676L6.1352 9.3214C2.6105 11.1963.2954 14.8021 0 19.0069h24c-.2958-4.2048-2.6109-7.8106-6.1139-9.6855"/></svg>
                  <div className="text-left">
                    <div className="text-[10px] opacity-80 leading-tight">GET IT ON</div>
                    <div className="text-sm font-semibold leading-tight">Android</div>
                  </div>
                </button>
             </div>
           </div>

           <div className="flex-1 w-full h-[300px] md:h-[400px] relative overflow-hidden flex justify-center md:justify-end items-end pb-0">
             <div className="w-[300px] bg-white rounded-t-[2rem] border-[6px] border-b-0 border-slate-100 shadow-2xl relative pt-6 px-6 pb-0 translate-y-12 translate-x-4">
                <div className="absolute top-2 inset-x-0 flex justify-center">
                   <div className="w-16 h-1 bg-slate-200 rounded-full"></div>
                </div>
                <div className="flex justify-between items-center mb-6">
                  <div>
                    <div className="text-xs text-slate-400">今日状态</div>
                    <div className="text-xl font-bold text-teal-500">状态良好</div>
                  </div>
                  <div className="w-12 h-12 rounded-full border-[3px] border-teal-500 flex items-center justify-center relative">
                    <span className="font-bold text-sm">86</span>
                    <span className="absolute -bottom-2 text-[8px] bg-white px-1">分</span>
                  </div>
                </div>
                <div className="grid grid-cols-3 gap-2">
                   {['摄入', '消耗', '步数'].map((t, i) => (
                     <div key={i} className="bg-slate-50 p-2 rounded-xl text-center">
                        <div className="text-sm font-bold text-slate-800">{i===0?'1268':i===1?'1865':'8,632'}</div>
                        <div className="text-[9px] text-slate-400">{t} {i!==2?'kcal':''}</div>
                     </div>
                   ))}
                </div>
             </div>
           </div>
        </div>
      </div>
    </section>
  );
};

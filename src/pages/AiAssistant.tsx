import React from 'react';
import { motion } from 'motion/react';
import { User, MessageSquare, Target, Heart, Send } from 'lucide-react';
import { PrimaryButton } from '../components/ReusableUI';
import { localMedia } from '../assets/localMedia';

export const AiAssistant = () => {
  return (
    <div className="bg-slate-50/50 min-h-screen pt-24 pb-16 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-8 min-h-[650px]">

          <div className="flex-1 w-full relative z-10 lg:pr-12">
            <h1 className="text-3xl md:text-5xl font-bold text-slate-900 mb-4 tracking-tight">AI 陪伴 · 懂你，更懂健康</h1>
            <p className="text-lg text-slate-500 mb-12">你的专属 AI 健康伙伴，随时陪伴左右</p>

            <ul className="space-y-8 mb-12">
              {[
                { icon: <User size={24} className="text-purple-500" />, bg: 'bg-purple-100', title: '可以自定义形象', desc: '打造你喜欢的 AI 伙伴形象与声音。' },
                { icon: <MessageSquare size={24} className="text-teal-500" />, bg: 'bg-teal-100', title: '自然对话交流', desc: '像朋友一样聊天，获得建议与鼓励。' },
                { icon: <Target size={24} className="text-blue-500" />, bg: 'bg-blue-100', title: '记住你的目标', desc: '了解你的目标与偏好，提供个性化建议。' },
                { icon: <Heart size={24} className="text-rose-500" />, bg: 'bg-rose-100', title: '情绪支持', desc: '在你需要时，给你温暖的鼓励与支持。' }
              ].map((item, idx) => (
                <li key={idx} className="flex gap-4">
                  <div className={`w-12 h-12 rounded-2xl flex items-center justify-center shrink-0 ${item.bg}`}>
                    {item.icon}
                  </div>
                  <div>
                    <h3 className="font-bold text-slate-800 text-lg mb-1">{item.title}</h3>
                    <p className="text-slate-500 text-sm leading-relaxed">{item.desc}</p>
                  </div>
                </li>
              ))}
            </ul>

            <div className="mb-4 text-sm font-bold text-slate-800">你可以这样问我</div>
            <div className="flex flex-wrap gap-2">
              {['今天晚饭吃什么好？', '这个食物热量高吗？', '我还能吃零食吗？', '如何更快减脂？'].map((q, i) => (
                <button key={i} className="px-4 py-2 rounded-full border border-slate-200 text-slate-600 text-sm hover:bg-white hover:shadow-sm transition-all focus:ring-2 focus:ring-teal-500/20">
                  {q}
                </button>
              ))}
            </div>
          </div>

          <div className="flex-1 w-full relative flex justify-center mt-10 lg:mt-0">

            {/* Background App Shape */}
            <div className="absolute inset-0 bg-[#f8fafc] rounded-[4rem] border-[4px] border-slate-100 shadow-2xl -z-10 w-[90%] mx-auto lg:mr-0 h-[600px] top-6 translate-x-4"></div>

            {/* Character Image */}
            <div className="absolute top-0 right-1/2 translate-x-1/2 w-[280px] z-10 drop-shadow-xl h-[340px] overflow-hidden rounded-b-full bg-slate-100">
              <img
                src={localMedia.avatars.lily}
                alt="AI Partner"
                className="w-full h-full object-cover object-top opacity-90 sepia-[0.1]"
                style={{ maskImage: 'linear-gradient(to top, transparent, black 15%)' }}
              />
            </div>

            {/* Chat Interface overlay */}
            <div className="w-[320px] bg-white/80 backdrop-blur-xl rounded-[2.5rem] p-4 shadow-xl border border-white relative z-20 mt-52 ml-4">
              <button className="w-8 h-8 bg-white shadow-sm border border-slate-100 rounded-full flex items-center justify-center absolute -top-4 -left-4 text-slate-400 hover:text-slate-600">
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" /></svg>
              </button>

              <div className="flex flex-col gap-4 mt-6 mb-4">
                <div className="bg-gradient-to-r from-teal-500 to-teal-400 text-white p-3 px-4 rounded-t-2xl rounded-bl-2xl text-[13px] self-end max-w-[85%] shadow-md shadow-teal-500/20 relative">
                  早上好，Alex！<br />睡得怎么样？今天也要加油哦 💪
                  <div className="absolute -bottom-1 -right-1 w-2 h-2 bg-teal-400 rounded-full"></div>
                </div>
                <div className="bg-slate-100 text-slate-800 p-3 px-4 rounded-t-2xl rounded-br-2xl text-[13px] self-start max-w-[75%] relative border border-slate-200">
                  还不错！我今天想吃点清淡的...
                  <div className="absolute -bottom-1 -left-1 w-2 h-2 bg-slate-100 border border-slate-200 rounded-full"></div>
                </div>
                <div className="bg-gradient-to-r from-teal-500 to-teal-400 text-white p-3 px-4 rounded-t-2xl rounded-bl-2xl text-[13px] self-end max-w-[85%] shadow-md shadow-teal-500/20 relative">
                  好的，给你推荐几<span className="font-bold border-b border-white/50 border-dashed">份低热量又营养的餐单</span>吧！
                  <div className="absolute -bottom-1 -right-1 w-2 h-2 bg-teal-400 rounded-full"></div>
                </div>
              </div>

              {/* Input Bar */}
              <div className="bg-white rounded-full border border-slate-200 p-1 pl-4 flex items-center justify-between shadow-sm">
                <span className="text-sm text-slate-400">和 Lily 聊聊...</span>
                <button className="w-8 h-8 rounded-full bg-[#14b8a6] flex items-center justify-center text-white shrink-0 hover:bg-teal-500 transition-colors shadow-sm">
                  <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2a3 3 0 0 0-3 3v7a3 3 0 0 0 6 0V5a3 3 0 0 0-3-3z"></path><path d="M19 10v2a7 7 0 0 1-14 0v-2"></path><line x1="12" y1="19" x2="12" y2="22"></line></svg>
                </button>
              </div>
            </div>

          </div>

        </div>

      </div>
    </div>
  );
};

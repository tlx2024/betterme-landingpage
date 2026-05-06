import React, { useState } from 'react';
import { motion } from 'motion/react';
import { localMedia } from '../../assets/localMedia';

export const SocialCommunity = () => {
  const [activeTab, setActiveTab] = useState('好友动态');
  const tabs = ['好友动态', '排行榜', '挑战赛'];

  const friends = [
    {
      name: "小美",
      time: "早餐 · 燕麦牛奶碗",
      img: localMedia.scenes.mealBowl,
      avatar: "https://i.pravatar.cc/100?img=5"
    },
    {
      name: "Jason",
      time: "午餐 · 鸡胸肉沙拉",
      img: localMedia.scenes.analysis,
      avatar: "https://i.pravatar.cc/100?img=11"
    },
    {
      name: "Lily",
      time: "晚餐 · 三文鱼糙米",
      img: localMedia.scenes.mealCard,
      avatar: "https://i.pravatar.cc/100?img=9"
    },
    {
      name: "Tom",
      time: "加餐 · 酸奶水果",
      img: localMedia.scenes.community,
      avatar: "https://i.pravatar.cc/100?img=15"
    }
  ];

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">看看朋友 · 互相鼓励，一起进步</h2>
          <p className="text-lg text-slate-500">看看朋友都吃了什么，一起为健康加油</p>
        </div>

        <div className="flex gap-4 mb-10 w-max mx-auto border-b border-slate-100">
          {tabs.map(tab => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`pb-3 px-2 text-sm font-medium transition-colors relative ${activeTab === tab ? 'text-teal-600' : 'text-slate-500 hover:text-slate-800'
                }`}
            >
              {tab}
              {activeTab === tab && (
                <motion.div
                  layoutId="socialTab"
                  className="absolute bottom-0 left-0 right-0 h-0.5 bg-teal-500"
                />
              )}
            </button>
          ))}
        </div>

        <div className="bg-slate-50 border border-slate-100 rounded-[2.5rem] p-6 sm:p-10 shadow-xl shadow-slate-200/20">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 mb-8">
            {friends.map((f, i) => (
              <div key={i} className="flex flex-col">
                <div className="flex items-center gap-2 mb-3">
                  <img src={f.avatar} alt={f.name} className="w-8 h-8 rounded-full border border-slate-200" />
                  <div>
                    <div className="text-[11px] font-bold text-slate-800 leading-tight">{f.name}</div>
                    <div className="text-[9px] text-slate-400">{f.time}</div>
                  </div>
                </div>
                <div className="rounded-3xl overflow-hidden aspect-square border border-slate-100 shadow-sm relative group cursor-pointer">
                  <img src={f.img} alt="Meal" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
                  <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                    <span className="text-white text-xs font-semibold bg-black/40 px-3 py-1 rounded-full backdrop-blur-sm">👍 赞</span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="border-t border-slate-200 pt-6 flex items-center flex-wrap gap-3">
            <span className="text-sm text-slate-600">为他们加油吧 💪</span>
            <div className="flex gap-2">
              {['👏', '🔥', '🤩', '👍', '😍'].map((emoji, i) => (
                <button key={i} className="w-8 h-8 flex items-center justify-center bg-white rounded-full text-sm shadow-sm border border-slate-100 hover:scale-110 transition-transform">
                  {emoji}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

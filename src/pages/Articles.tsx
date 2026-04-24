import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';

export const Articles = () => {
  const [activeTab, setActiveTab] = useState('全部');
  const tabs = ['全部', '减脂知识', '饮食指南', '运动训练', '习惯养成', '平台期突破'];

  const articles = [
    {
      title: "减脂期间如何吃早餐？",
      tag: "饮食指南",
      img: "https://images.unsplash.com/photo-1533089860892-a7c6f0a88666?w=600&h=400&fit=crop",
      author: "BetterMe",
      views: "5320"
    },
    {
      title: "力量训练 vs 有氧，哪个更减脂？",
      tag: "运动训练",
      img: "https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?w=600&h=400&fit=crop",
      author: "BetterMe",
      views: "4120"
    },
    {
      title: "平台期怎么办？6 个有效突破方法",
      tag: "减脂知识",
      img: "https://images.unsplash.com/photo-1518611012118-696072aa579a?w=600&h=400&fit=crop",
      author: "BetterMe",
      views: "6320"
    },
    {
      title: "晚餐怎么吃不胖？减脂晚餐指南",
      tag: "饮食指南",
      img: "https://images.unsplash.com/photo-1490818387583-1b5ba4524be6?w=600&h=400&fit=crop",
      author: "BetterMe",
      views: "3120"
    },
    {
      title: "每天走多少步可以减脂？",
      tag: "习惯养成",
      img: "https://images.unsplash.com/photo-1461896836934-ffe607ba8211?w=600&h=400&fit=crop",
      author: "BetterMe",
      views: "4520"
    },
    {
      title: "如何建立可持续的健康习惯？",
      tag: "习惯养成",
      img: "https://images.unsplash.com/photo-1506126613408-eca07ce68773?w=600&h=400&fit=crop",
      author: "BetterMe",
      views: "5200"
    }
  ];

  return (
    <div className="bg-slate-50/50 min-h-screen pt-24 pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">知识中心</h1>
          <p className="text-slate-500 text-lg">科学知识，助你更好地达成目标</p>
        </div>

        {/* Tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {tabs.map(tab => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-5 py-2 rounded-full text-sm font-medium transition-all relative ${
                activeTab === tab ? 'text-teal-600' : 'text-slate-500 hover:text-slate-800 bg-transparent'
              }`}
            >
              {activeTab === tab && (
                <motion.div
                  layoutId="articleTab"
                  className="absolute inset-0 border border-teal-500 rounded-full"
                  transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                />
              )}
              <span className="relative z-10">{tab}</span>
            </button>
          ))}
        </div>

        {/* Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          <AnimatePresence mode="popLayout">
            {articles.map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.4, delay: idx * 0.1 }}
                className="bg-white rounded-[2rem] p-4 border border-slate-100 shadow-xl shadow-slate-200/20 hover:-translate-y-1 transition-transform duration-300 group cursor-pointer"
              >
                <div className="h-48 w-full overflow-hidden rounded-3xl mb-4">
                  <img src={item.img} alt={item.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                </div>
                <div className="px-2 pb-2">
                  <h3 className="text-base font-bold text-slate-900 mb-4 line-clamp-2 leading-snug group-hover:text-teal-600 transition-colors">{item.title}</h3>
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] font-medium bg-cyan-50 text-cyan-600 px-2 py-1 rounded-full">{item.tag}</span>
                    <div className="flex items-center gap-4 text-[10px] text-slate-400">
                      <div className="flex items-center gap-1.5">
                        <div className="w-4 h-4 rounded-full bg-slate-200 overflow-hidden text-[#14b8a6] flex items-center justify-center font-bold text-[8px]">B</div>
                        <span>{item.author}</span>
                      </div>
                      <span>{item.views} 阅读</span>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        <div className="flex justify-center">
          <button className="px-8 py-3 rounded-full border border-slate-200 text-teal-600 font-medium text-sm hover:bg-slate-50 transition-colors">
            查看更多文章
          </button>
        </div>
      </div>
    </div>
  );
};

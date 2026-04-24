import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export const Solutions = () => {
  const [activeTab, setActiveTab] = useState('减脂');
  const tabs = ['减脂', '塑形', '增肌', '健康管理'];

  const solutions = [
    {
      title: "基础减脂计划",
      subtitle: "适合减脂新手，科学减重",
      img: "https://images.unsplash.com/photo-1490645935967-10de6ba17061?w=400&h=300&fit=crop",
      features: ["热量缺口计算", "饮食建议", "运动计划", "习惯打卡"]
    },
    {
      title: "上班族减脂计划",
      subtitle: "适合久坐人群，轻松减重",
      img: "https://images.unsplash.com/photo-1499951360447-b19be8fe80f5?w=400&h=300&fit=crop",
      features: ["高效燃脂训练", "工作餐建议", "久坐提醒", "压力管理"]
    },
    {
      title: "产后恢复计划",
      subtitle: "科学恢复，重塑自信",
      img: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=400&h=300&fit=crop",
      features: ["温和训练", "营养建议", "身体评估", "心理支持"]
    },
    {
      title: "中老年健康计划",
      subtitle: "改善代谢，健康生活",
      img: "https://images.unsplash.com/photo-1574689211272-bc1550ce15f5?w=400&h=300&fit=crop",
      features: ["健康评估", "饮食建议", "适度运动", "慢病管理"]
    }
  ];

  return (
    <div className="bg-white min-h-screen pt-24 pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">适合你的个性化解决方案</h1>
          <p className="text-slate-500 text-lg">根据不同人群和目标，定制专属计划</p>
        </div>

        {/* Tabs */}
        <div className="flex justify-center gap-2 mb-16">
          {tabs.map(tab => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-6 py-2.5 rounded-full text-sm font-medium transition-all relative ${
                activeTab === tab ? 'text-white' : 'text-slate-600 hover:text-slate-900 bg-white'
              }`}
            >
              {activeTab === tab && (
                <motion.div
                  layoutId="activeTabBg"
                  className="absolute inset-0 bg-[#14b8a6] rounded-full shadow-md shadow-teal-500/20"
                  transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                />
              )}
              <span className="relative z-10">{tab}</span>
            </button>
          ))}
        </div>

        {/* Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          <AnimatePresence mode="popLayout">
            {solutions.map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.4, delay: idx * 0.1 }}
                className="bg-white rounded-3xl border border-slate-100 shadow-xl shadow-slate-200/20 overflow-hidden flex flex-col hover:-translate-y-1 transition-transform duration-300"
              >
                <div className="h-40 w-full overflow-hidden">
                  <img src={item.img} alt={item.title} className="w-full h-full object-cover transition-transform duration-500 hover:scale-105" />
                </div>
                <div className="p-6 flex-1 flex flex-col">
                  <h3 className="text-lg font-bold text-slate-900 mb-1">{item.title}</h3>
                  <p className="text-xs text-slate-400 mb-4 pb-4 border-b border-slate-100">{item.subtitle}</p>
                  
                  <ul className="space-y-2 mb-6 flex-1">
                    {item.features.map((feature, fIdx) => (
                      <li key={fIdx} className="text-sm text-slate-600 flex items-center gap-2">
                        <div className="w-1 h-1 rounded-full bg-slate-300"></div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                  
                  <Link to="/solutions" className="inline-flex items-center gap-1.5 text-teal-600 font-medium text-sm hover:text-teal-700 transition-colors mt-auto">
                    了解更多 <ArrowRight size={16} />
                  </Link>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
};

import React from 'react';
import { motion } from 'motion/react';
import { Apple, Activity, Target, MessageSquare, Coffee, BarChart3, ScanLine } from 'lucide-react';
import { PrimaryButton } from '../ReusableUI';

export const FeatureGrid = () => {
  const cards = [
    {
      icon: <MessageSquare size={24} className="text-teal-500" />,
      bg: "bg-teal-50",
      title: "AI 陪伴聊天",
      desc: "专属 AI 伙伴，随时陪你聊，给你鼓励与建议。"
    },
    {
      icon: <Coffee size={24} className="text-orange-500" />,
      bg: "bg-orange-50",
      title: "餐前建议",
      desc: "每餐前为你量身定制饮食建议，吃得顺心健康。"
    },
    {
      icon: <ScanLine size={24} className="text-purple-500" />,
      bg: "bg-purple-50",
      title: "食物识别分析",
      desc: "上传食物照片，AI 识别原料，分析热量与营养。"
    },
    {
      icon: <Target size={24} className="text-blue-500" />,
      bg: "bg-blue-50",
      title: "每日总结",
      desc: "晚上为你生成当日总结，帮助你复盘与调整。"
    },
    {
      icon: <Activity size={24} className="text-green-500" />,
      bg: "bg-green-50",
      title: "热量平衡",
      desc: "智能计算摄入与消耗，帮你达成热量平衡。"
    },
    {
      icon: <Apple size={24} className="text-rose-500" />,
      bg: "bg-rose-50",
      title: "好友互动",
      desc: "看看朋友的饮食与进步，互相监督鼓励。"
    }
  ];

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">功能一览</h2>
          <p className="text-lg text-slate-500">全方位护航你的健康之旅</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {cards.map((card, idx) => (
             <motion.div 
               key={idx}
               initial={{ opacity: 0, y: 20 }}
               whileInView={{ opacity: 1, y: 0 }}
               viewport={{ once: true }}
               transition={{ duration: 0.5, delay: idx * 0.1 }}
               className="bg-white rounded-3xl p-8 border border-slate-100 shadow-xl shadow-slate-200/20 hover:-translate-y-1 transition-transform duration-300"
             >
               <div className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-6 ${card.bg}`}>
                 {card.icon}
               </div>
               <h3 className="text-lg font-bold text-slate-900 mb-3">{card.title}</h3>
               <p className="text-slate-500 text-sm leading-relaxed">{card.desc}</p>
             </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

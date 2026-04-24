import React from 'react';
import { motion } from 'motion/react';
import { ArrowRight, Apple, Activity, TrendingDown, BrainCircuit, BellRing, BarChart3, ScanLine } from 'lucide-react';
import { Link } from 'react-router-dom';
import { BottomCTA } from '../components/Sections';

export const Features = () => {
  const featureList = [
    {
      icon: <Apple size={24} className="text-orange-500" />,
      bg: "bg-orange-50",
      title: "饮食记录 & 智能识别",
      desc: "拍照识别食物，精准估算热量与营养",
      link: "/solutions"
    },
    {
      icon: <Activity size={24} className="text-teal-500" />,
      bg: "bg-teal-50",
      title: "运动记录",
      desc: "记录运动数据，分析消耗热量",
      link: "/solutions"
    },
    {
      icon: <TrendingDown size={24} className="text-blue-500" />,
      bg: "bg-blue-50",
      title: "体重趋势",
      desc: "多维度体重数据，趋势变化一目了然",
       link: "/solutions"
    },
    {
      icon: <BrainCircuit size={24} className="text-indigo-500" />,
      bg: "bg-indigo-50",
      title: "AI 健康秘书",
      desc: "7x24 小时智能陪伴，提供个性化建议",
      link: "/ai-assistant"
    },
    {
      icon: <BellRing size={24} className="text-yellow-500" />,
      bg: "bg-yellow-50",
      title: "习惯养成",
      desc: "饮水、步数、睡眠等习惯打卡",
      link: "/solutions"
    },
    {
      icon: <BarChart3 size={24} className="text-purple-500" />,
      bg: "bg-purple-50",
      title: "数据分析",
      desc: "多维数据可视化，发现问题与机会",
      link: "/solutions"
    }
  ];

  return (
    <div className="bg-white min-h-screen">
      <div className="pt-24 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">功能介绍</h1>
          <p className="text-slate-500 text-lg">全面记录与分析，科学减脂更高效</p>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-16 text-left">
            {featureList.map((feature, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="bg-white p-8 rounded-3xl border border-slate-100 shadow-xl shadow-slate-200/20 hover:-translate-y-1 transition-all duration-300"
              >
                <div className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-6 shadow-sm ${feature.bg}`}>
                  {feature.icon}
                </div>
                <h3 className="text-lg font-bold text-slate-900 mb-3">{feature.title}</h3>
                <p className="text-slate-500 text-sm mb-6 leading-relaxed min-h-[40px]">{feature.desc}</p>
                <Link to={feature.link} className="inline-flex items-center gap-1.5 text-teal-600 font-medium text-sm hover:text-teal-700 transition-colors">
                  了解更多 <ArrowRight size={16} />
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
      <BottomCTA />
    </div>
  );
};

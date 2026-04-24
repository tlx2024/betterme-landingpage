import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Check } from 'lucide-react';

export const Pricing = () => {
  const [isYearly, setIsYearly] = useState(false);

  const plans = [
    {
      name: "免费版",
      price: "0",
      type: "free",
      features: [
        "基础记录",
        "食物识别 3次/天",
        "每日总结",
        "社区互动"
      ],
      buttonText: "当前方案",
      buttonStyle: "border border-slate-200 text-slate-400 bg-white cursor-default"
    },
    {
      name: "专业版",
      price: isYearly ? "58" : "68",
      type: "pro",
      badge: "超值精选",
      features: [
        "全部免费功能",
        "无限次食物识别",
        "AI 个性化建议",
        "营养深度分析",
        "体重趋势分析",
        "优先客服支持"
      ],
      buttonText: "选择专业版",
      buttonStyle: "bg-[#14b8a6] text-white hover:bg-teal-500 shadow-md shadow-teal-500/20"
    },
    {
      name: "家庭版",
      price: isYearly ? "98" : "118",
      type: "family",
      features: [
        "全部专业版功能",
        "最多 5 位家庭成员",
        "家庭数据共享",
        "专属家庭建议",
        "健康报告导出"
      ],
      buttonText: "选择家庭版",
      buttonStyle: "border border-slate-200 text-slate-700 bg-white hover:bg-slate-50"
    }
  ];

  return (
    <div className="bg-slate-50/50 min-h-screen pt-24 pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center mb-10">
          <h1 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">选择适合你的计划</h1>
          
          <div className="inline-flex items-center bg-white border border-slate-200 rounded-full p-1 relative shadow-sm">
            <button 
              className={`relative w-24 py-2 text-sm font-medium rounded-full z-10 transition-colors ${!isYearly ? 'text-white' : 'text-slate-600'}`}
              onClick={() => setIsYearly(false)}
            >
              月付
            </button>
            <button 
              className={`relative w-28 py-2 text-sm font-medium rounded-full z-10 transition-colors flex items-center justify-center gap-1 ${isYearly ? 'text-white' : 'text-slate-600'}`}
              onClick={() => setIsYearly(true)}
            >
              年付 <span className="text-[10px] bg-teal-100 text-teal-600 px-1.5 py-0.5 rounded-full font-bold">省 20%</span>
            </button>
            
            {/* Sliding Background */}
            <motion.div 
               className="absolute top-1 bottom-1 w-24 bg-[#14b8a6] rounded-full z-0"
               animate={{ x: isYearly ? 96 : 0, width: isYearly ? 112 : 96 }}
               transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
            />
          </div>
        </div>

        <div className="flex flex-col lg:flex-row justify-center gap-6 max-w-5xl mx-auto pt-4">
          {plans.map((plan, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className={`bg-white rounded-3xl p-8 flex flex-col relative w-full lg:w-[320px] ${
                plan.type === 'pro' 
                  ? 'border-2 border-[#14b8a6] shadow-xl shadow-teal-500/10 lg:-translate-y-4' 
                  : 'border border-slate-100 shadow-xl shadow-slate-200/20'
              }`}
            >
              {plan.badge && (
                <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-[#14b8a6] text-white text-xs font-bold px-3 py-1 rounded-full shadow-sm">
                  {plan.badge}
                </div>
              )}
              
              <h3 className="text-xl font-bold text-slate-900 mb-2">{plan.name}</h3>
              <div className="mb-6 flex items-baseline gap-1">
                <span className="text-2xl font-bold text-slate-900">¥</span>
                <span className="text-4xl font-bold text-slate-900 tracking-tight">{plan.price}</span>
                <span className="text-sm text-slate-500">/ 月</span>
              </div>
              
              <ul className="space-y-4 mb-8 flex-1">
                {plan.features.map((feature, fIdx) => (
                  <li key={fIdx} className="flex items-start gap-3 text-slate-600 text-sm">
                    <Check size={18} className="text-[#14b8a6] shrink-0 translate-y-0.5" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
              
              <button className={`w-full py-3.5 rounded-full font-medium transition-colors ${plan.buttonStyle}`}>
                {plan.buttonText}
              </button>
            </motion.div>
          ))}
        </div>

      </div>
    </div>
  );
};

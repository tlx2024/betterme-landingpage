import React from 'react';
import { motion } from 'motion/react';
import { Target } from 'lucide-react';
import { PrimaryButton } from '../ReusableUI';

export const DailySummary = () => {
  return (
    <section className="py-24 bg-slate-50/50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row gap-16 lg:gap-8 items-center">
          
          <div className="flex-1 w-full relative z-10 lg:pr-12">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">每日总结 · 帮你复盘与调整</h2>
            <p className="text-lg text-slate-500 mb-10 mt-2">晚上为你生成当日总结，给出明日建议</p>

            {/* Left Card: Today's Summary */}
            <motion.div 
               initial={{ opacity: 0, scale: 0.95 }}
               whileInView={{ opacity: 1, scale: 1 }}
               viewport={{ once: true }}
               transition={{ duration: 0.5 }}
               className="bg-white rounded-[2.5rem] p-8 border border-slate-100 shadow-xl shadow-slate-200/40 relative z-10"
            >
              <div className="text-sm font-bold text-slate-800 mb-6">今日总结</div>
              
              <div className="flex items-center gap-6 mb-8">
                 <div className="w-20 h-20 rounded-full border-[4px] border-teal-500 flex items-center justify-center relative shadow-sm">
                    <span className="text-2xl font-black text-slate-900">86</span>
                 </div>
                 <div>
                   <div className="text-xl font-bold text-slate-900 mb-1 flex items-center gap-2">优秀 <span className="text-xl">🎉</span></div>
                   <div className="text-xs text-slate-500 leading-snug">太棒了！你今天的饮食和运动都很棒，继续保持哦！</div>
                 </div>
              </div>

              <div className="grid grid-cols-3 gap-4 mb-8">
                 <div>
                   <div className="text-[10px] text-slate-400 mb-1">摄入热量</div>
                   <div className="font-bold text-slate-900 text-sm">1268 <span className="text-[10px] font-normal text-slate-400">/ 1600 kcal</span></div>
                   <div className="w-full bg-slate-100 h-1.5 rounded-full mt-2 overflow-hidden"><div className="w-[80%] h-full bg-teal-500 rounded-full"></div></div>
                 </div>
                 <div>
                   <div className="text-[10px] text-slate-400 mb-1">运动消耗</div>
                   <div className="font-bold text-slate-900 text-sm">532 <span className="text-[10px] font-normal text-slate-400">/ 500 kcal</span></div>
                   <div className="w-full bg-slate-100 h-1.5 rounded-full mt-2 overflow-hidden"><div className="w-full h-full bg-blue-500 rounded-full"></div></div>
                 </div>
                 <div>
                   <div className="text-[10px] text-slate-400 mb-1">净摄入</div>
                   <div className="font-bold text-slate-900 text-sm">736 <span className="text-[10px] font-normal text-slate-400">kcal</span></div>
                   <div className="w-full bg-slate-100 h-1.5 rounded-full mt-2 overflow-hidden"><div className="w-1/2 h-full bg-indigo-500 rounded-full"></div></div>
                 </div>
              </div>

              <div className="text-xs font-bold text-slate-800 mb-3">饮食分析</div>
              <div className="grid grid-cols-2 gap-y-3 gap-x-4">
                 {[
                   { label: '蛋白质摄入充足', status: '提优', color: 'text-teal-600', bg: 'bg-teal-50' },
                   { label: '脂肪摄入偏多', status: '提醒', color: 'text-amber-600', bg: 'bg-amber-50' },
                   { label: '碳水摄入适中', status: '达标', color: 'text-blue-600', bg: 'bg-blue-50' },
                   { label: '蔬菜摄入过少', status: '注意', color: 'text-rose-600', bg: 'bg-rose-50' },
                 ].map((item, i) => (
                   <div key={i} className="flex justify-between items-center text-xs">
                      <div className="flex items-center gap-1.5 text-slate-600">
                         <div className={`w-1.5 h-1.5 rounded-full ${item.bg.replace('50', '400')}`}></div>
                         {item.label}
                      </div>
                      <span className={`px-1.5 py-0.5 rounded text-[9px] font-medium ${item.color} ${item.bg}`}>{item.status}</span>
                   </div>
                 ))}
              </div>
            </motion.div>
          </div>

          <div className="flex-1 w-full relative flex justify-center lg:justify-end">
             {/* Right Card: Tomorrow's suggestion */}
             <motion.div 
               initial={{ opacity: 0, x: 20 }}
               whileInView={{ opacity: 1, x: 0 }}
               viewport={{ once: true }}
               transition={{ duration: 0.6, delay: 0.2 }}
               className="w-full sm:w-[360px] bg-white rounded-[2.5rem] p-8 border border-slate-100 shadow-2xl shadow-teal-500/10 -translate-y-8 lg:translate-x-4 lg:-translate-y-12"
             >
                <div className="text-sm font-bold text-slate-800 mb-6">明日建议</div>
                <div className="space-y-6">
                   <div>
                     <div className="flex items-center gap-1.5 text-sm font-bold text-slate-800 mb-2">
                       <Target size={16} className="text-teal-500"/> 早餐建议
                     </div>
                     <div className="text-xs text-slate-500 pl-5">优先选择高蛋白早餐</div>
                   </div>
                   <div>
                     <div className="flex items-center gap-1.5 text-sm font-bold text-slate-800 mb-2">
                       <Target size={16} className="text-teal-500"/> 午餐建议
                     </div>
                     <div className="text-xs text-slate-500 pl-5">多吃蔬菜，控制主食量</div>
                   </div>
                   <div>
                     <div className="flex items-center gap-1.5 text-sm font-bold text-slate-800 mb-2">
                       <Target size={16} className="text-teal-500"/> 运动建议
                     </div>
                     <div className="text-xs text-slate-500 pl-5">建议进行 30 分钟有氧运动</div>
                   </div>
                </div>
                <PrimaryButton className="w-full mt-10 py-3.5">开启新的一天</PrimaryButton>
             </motion.div>
          </div>
          
        </div>
      </div>
    </section>
  );
};

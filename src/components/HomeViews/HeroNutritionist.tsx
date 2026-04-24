import React from 'react';
import { motion } from 'motion/react';
import { Apple } from 'lucide-react';
import { GradientText } from '../ReusableUI';

export const HeroNutritionist = () => {
  return (
    <section className="bg-slate-50/50 pt-32 pb-20 lg:pt-40 lg:pb-24 overflow-hidden border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          
          <div className="flex-1 text-center lg:text-left z-10">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-slate-900 tracking-tight leading-[1.15] mb-6">
              你的专属 <br className="hidden lg:block"/>
              AI 营养健康师
            </h1>
            <p className="text-lg text-slate-600 mb-8">
              AI 陪伴 • 科学饮食 • 热量平衡，<GradientText>一起变得更好</GradientText>
            </p>
            
            <ul className="space-y-4 mb-10 inline-block text-left text-slate-600">
              {["每餐前个性化饮食建议", "AI 识别食物，分析营养与热量", "每日总结，帮你达成热量平衡", "和朋友一起坚持，互相鼓励"].map((item, idx) => (
                <li key={idx} className="flex items-center gap-3">
                  <div className="w-5 h-5 rounded-full bg-teal-100 text-teal-600 flex items-center justify-center shrink-0">
                    <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" /></svg>
                  </div>
                  <span className="text-[15px]">{item}</span>
                </li>
              ))}
            </ul>

            <div className="flex flex-wrap justify-center lg:justify-start gap-4">
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

          <div className="flex-1 w-full relative min-h-[500px] flex justify-center lg:justify-end mt-10 lg:mt-0">
             <div className="absolute right-0 top-0 bottom-0 w-3/4 bg-teal-500/5 rounded-[4rem] rounded-tr-[8rem] -z-10"></div>
             
             {/* Character Image */}
             <div className="absolute bottom-0 right-0 w-[80%] h-[120%] z-0 translate-x-12">
               <img 
                 src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=800&h=800&fit=crop" 
                 alt="AI Avatar" 
                 className="w-full h-full object-cover object-top drop-shadow-2xl opacity-90 sepia-[0.1]"
                 style={{ maskImage: 'linear-gradient(to top, transparent, black 40%)'}}
               />
             </div>

             {/* Phone Mockup overlay */}
             <motion.div 
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="w-[280px] sm:w-[320px] bg-[#f8fafc] rounded-[2.5rem] border-[8px] border-slate-900 shadow-2xl relative z-10 mr-12 lg:mr-24 self-center flex flex-col p-4 pb-0 h-[600px] overflow-hidden"
             >
                <div className="absolute top-0 inset-x-0 h-5 flex justify-center z-20">
                   <div className="w-24 h-5 bg-slate-900 rounded-b-[1rem]"></div>
                </div>
                
                <div className="flex justify-between items-center px-2 py-4 pb-2 z-10 mt-1">
                  <span className="text-[11px] font-semibold text-slate-800">9:41</span>
                  <div className="flex items-center gap-1 opacity-70">
                     <div className="w-4 h-2.5 outline outline-1 outline-slate-400 rounded-sm p-[1px] flex justify-end">
                       <div className="w-2.5 h-full bg-slate-800 rounded-[1px]"></div>
                     </div>
                  </div>
                </div>

                <div className="flex-1 flex flex-col gap-4 overflow-y-auto no-scrollbar pb-6 relative z-10">
                   {/* Greeting Chat */}
                   <div className="bg-white rounded-2xl rounded-tr-sm p-4 shadow-sm border border-slate-50 w-[90%] self-start relative">
                      <div className="absolute top-3 right-3 text-slate-300"><svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg></div>
                      <h3 className="text-lg font-bold text-slate-800 mb-1">Hi, Alex 👋</h3>
                      <p className="text-xs text-slate-500">今天也要好好照顾自己哦！</p>
                   </div>

                   {/* Today's Card */}
                   <div className="bg-gradient-to-br from-[#14b8a6] to-[#0ea5e9] rounded-2xl p-4 text-white shadow-lg shadow-teal-500/30">
                      <div className="flex justify-between items-center mb-4">
                         <span className="text-xs font-medium bg-white/20 px-2 py-0.5 rounded backdrop-blur-sm">今日健康卡片</span>
                      </div>
                      <div className="grid grid-cols-3 gap-2 mb-4">
                        <div>
                          <div className="text-[9px] opacity-80 mb-0.5">摄入</div>
                          <div className="font-bold flex items-baseline gap-0.5">1268<span className="text-[8px] font-normal opacity-80">kcal</span></div>
                        </div>
                        <div>
                          <div className="text-[9px] opacity-80 mb-0.5">消耗</div>
                          <div className="font-bold flex items-baseline gap-0.5">1865<span className="text-[8px] font-normal opacity-80">kcal</span></div>
                        </div>
                        <div>
                          <div className="text-[9px] opacity-80 mb-0.5">步数</div>
                          <div className="font-bold flex items-baseline gap-0.5">8,632<span className="text-[8px] font-normal opacity-80">步</span></div>
                        </div>
                      </div>
                      <div className="text-[10px] flex items-center bg-black/10 rounded-full px-2 py-1 w-max">
                        明日目标还差 <span className="font-bold ml-1">0.8 kg</span>
                      </div>
                   </div>

                   {/* Today's Records */}
                   <div className="bg-white rounded-2xl p-4 shadow-sm border border-slate-50 relative">
                     <div className="absolute top-3 right-3 text-slate-300"><svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg></div>
                     <h3 className="font-bold text-slate-800 text-sm mb-3">今日记录</h3>
                     <div className="text-xs font-medium text-slate-600 mb-2">早餐建议</div>
                     <div className="bg-slate-50 rounded-xl p-2 flex gap-3 items-center">
                        <div className="w-12 h-12 rounded-full overflow-hidden shadow-sm">
                          <img src="https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=100&h=100&fit=crop" className="w-full h-full object-cover" alt="food" />
                        </div>
                        <div>
                           <div className="font-bold text-xs text-slate-800 mb-0.5">烤鸡肉沙拉</div>
                           <div className="text-[9px] text-slate-400 mb-1">高蛋白蔬菜餐，增加饱腹感</div>
                           <div className="text-[9px] text-teal-600">推荐热量 420 kcal</div>
                        </div>
                     </div>
                   </div>
                </div>
             </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Check } from 'lucide-react';
import { PrimaryButton } from '../ReusableUI';

export const MealRecommendation = () => {
  const [activeTab, setActiveTab] = useState('早餐');
  const tabs = [
    { name: '早餐', icon: '🍳' },
    { name: '午餐', icon: '🥗' },
    { name: '晚餐', icon: '🥩' },
    { name: '加餐', icon: '☕' }
  ];

  return (
    <section className="py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row gap-16 lg:gap-8 items-center">
          
          <div className="flex-1 w-full relative z-10 lg:pr-12">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">每餐前 · 为你量身推荐</h2>
            <p className="text-lg text-slate-500 mb-10">科学饮食，从每一餐开始</p>

            <div className="flex gap-2 mb-8 bg-slate-50 p-1 rounded-full w-max">
              {tabs.map(tab => (
                <button
                  key={tab.name}
                  onClick={() => setActiveTab(tab.name)}
                  className={`px-5 py-2 rounded-full text-sm font-medium transition-all flex items-center gap-1.5 ${
                    activeTab === tab.name ? 'bg-white text-slate-900 shadow-sm' : 'text-slate-500 hover:text-slate-800'
                  }`}
                >
                  <span className="opacity-70">{tab.icon}</span> {tab.name}
                </button>
              ))}
            </div>

            <AnimatePresence mode="popLayout">
               <motion.div
                 key={activeTab}
                 initial={{ opacity: 0, x: -20 }}
                 animate={{ opacity: 1, x: 0 }}
                 exit={{ opacity: 0, x: 20 }}
                 transition={{ duration: 0.3 }}
                 className="bg-white rounded-[2rem] p-6 sm:p-8 border border-slate-100 shadow-xl shadow-slate-200/40"
               >
                 <div className="text-sm font-bold text-slate-800 mb-4">餐前建议</div>
                 <div className="flex items-center gap-4 bg-orange-50/50 p-4 rounded-2xl mb-6">
                    <img src="https://images.unsplash.com/photo-1490645935967-10de6ba17061?w=200&h=200&fit=crop" alt="Meal" className="w-16 h-16 rounded-full shadow-sm object-cover" />
                    <div>
                      <div className="font-bold text-slate-900 text-lg">燕麦牛奶水果碗</div>
                      <div className="text-slate-500 text-sm">约 420 kcal</div>
                    </div>
                 </div>

                 <div className="text-sm font-bold text-slate-800 mb-3">推荐理由</div>
                 <ul className="space-y-3 mb-8">
                   {['高纤维，饱腹感强', '富含蛋白质与优质碳水', '搭配坚果，营养均衡'].map((reason, i) => (
                     <li key={i} className="flex items-center gap-2 text-sm text-slate-600">
                       <Check size={16} className="text-[#14b8a6]" /> {reason}
                     </li>
                   ))}
                 </ul>

                 <div className="flex gap-4">
                   <button className="flex-1 py-3 rounded-full border border-slate-200 text-slate-600 font-medium hover:bg-slate-50 transition-colors">换一个</button>
                   <PrimaryButton className="flex-1 py-3">我会吃这个</PrimaryButton>
                 </div>
               </motion.div>
            </AnimatePresence>
          </div>

          <div className="flex-1 w-full relative flex justify-center mt-10 lg:mt-0">
             {/* Mockup */}
             <motion.div 
               initial={{ opacity: 0, y: 30 }}
               whileInView={{ opacity: 1, y: 0 }}
               viewport={{ once: true }}
               transition={{ duration: 0.6 }}
               className="w-[300px] sm:w-[340px] bg-white rounded-[2rem] p-4 shadow-2xl shadow-slate-300/50 border border-slate-100 z-10"
             >
               <div className="flex justify-between items-center mb-4 px-2">
                 <h3 className="font-bold text-slate-900">食物识别分析</h3>
                 <button className="text-slate-400"><svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg></button>
               </div>
               
               <div className="relative mb-4">
                 <img src="https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=600&h=400&fit=crop" alt="Analysis" className="w-full h-48 object-cover rounded-2xl" />
                 <div className="absolute inset-0 border-2 border-teal-500 rounded-2xl border-dashed opacity-50 m-2"></div>
               </div>

               <div className="bg-slate-50 rounded-2xl p-4">
                  <div className="text-xs font-bold text-slate-500 mb-3">识别结果</div>
                  <div className="space-y-3 mb-4">
                    {[
                      { name: '鸡胸肉', weight: '120g', cal: '165 kcal' },
                      { name: '西兰花', weight: '80g', cal: '28 kcal' },
                      { name: '玉米', weight: '50g', cal: '54 kcal' },
                      { name: '藜麦', weight: '80g', cal: '96 kcal' },
                      { name: '圣女果', weight: '60g', cal: '18 kcal' },
                    ].map((item, i) => (
                      <div key={i} className="flex justify-between items-center text-sm">
                        <span className="text-slate-700 w-24">{item.name}</span>
                        <span className="text-slate-400 w-12 text-right">{item.weight}</span>
                        <span className="text-slate-600 font-medium w-16 text-right">{item.cal}</span>
                      </div>
                    ))}
                  </div>
                  <div className="border-t border-slate-200 pt-3 flex justify-between items-center">
                    <span className="font-bold text-slate-800">合计热量</span>
                    <span className="text-xl font-black text-slate-900">361 kcal</span>
                  </div>
               </div>
             </motion.div>
          </div>
          
        </div>
      </div>
    </section>
  );
};

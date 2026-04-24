import React from 'react';
import { Search, ChevronDown, MessageCircle, FileText, Settings, Shield } from 'lucide-react';
import { motion } from 'motion/react';
import { PrimaryButton } from '../components/ReusableUI';

export const Help = () => {
  const categories = [
    { icon: <MessageCircle size={24} className="text-teal-500" />, name: "常见问题", desc: "注册、登录及基本使用" },
    { icon: <FileText size={24} className="text-blue-500" />, name: "饮食建议", desc: "关于如何看懂卡路里和建议" },
    { icon: <Settings size={24} className="text-orange-500" />, name: "账号设置", desc: "修改密码、解绑等操作" },
    { icon: <Shield size={24} className="text-purple-500" />, name: "隐私与安全", desc: "了解我们如何保护您的数据" }
  ];

  const faqs = [
    { question: "如何重置我的密码？", answer: "您可以在登录页面点击「忘记密码」，然后输入您的注册邮箱。我们会给您发送一封包含重置密码链接的邮件。" },
    { question: "是否可以将数据导出？", answer: "是的，家庭版和专业版用户可以在「设置」-「数据导出」中导出您的所有饮食和运动记录。" },
    { question: "AI 营养师的建议准确吗？", answer: "我们的 AI 模型经过海量专业营养数据的训练，并结合了科学的计算方法。但它仍仅作为参考，不能替代专业医生的诊断。" },
    { question: "如何取消订阅？", answer: "您可以随时在「设置」-「订阅管理」中取消自动续费。取消后，您仍能在当前账单周期内继续使用高级功能。" },
    { question: "拍照识别食物有时不准怎么办？", answer: "您可以尝试在光线充足的环境下拍摄，并将食物居中，避免背景杂乱。如有偏差，您也可以手动调整或搜索添加食物。" }
  ];

  return (
    <div className="bg-slate-50/50 min-h-screen pt-24 pb-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Search */}
        <div className="text-center mb-16">
          <h1 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">帮助中心</h1>
          <p className="text-lg text-slate-500 mb-8">有什么我们可以帮您的？</p>
          <div className="max-w-2xl mx-auto relative">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={20} />
            <input 
              type="text" 
              placeholder="搜索问题，例如：如何取消订阅" 
              className="w-full bg-white border border-slate-200 rounded-full py-4 pl-12 pr-4 text-sm focus:outline-none focus:border-teal-500 focus:ring-1 focus:ring-teal-500 shadow-sm transition-shadow hover:shadow-md"
            />
          </div>
        </div>

        {/* Categories */}
        <div className="grid sm:grid-cols-2 gap-4 flex-wrap mb-16">
           {categories.map((cat, idx) => (
             <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: idx * 0.1 }}
                className="bg-white rounded-2xl p-6 border border-slate-100 shadow-sm hover:shadow-md transition-shadow cursor-pointer flex items-start gap-4"
             >
                <div className="w-12 h-12 rounded-xl bg-slate-50 flex items-center justify-center shrink-0">
                  {cat.icon}
                </div>
                <div>
                  <h3 className="font-bold text-slate-800 mb-1">{cat.name}</h3>
                  <p className="text-sm text-slate-500 leading-relaxed">{cat.desc}</p>
                </div>
             </motion.div>
           ))}
        </div>

        {/* FAQ Section */}
        <div className="bg-white rounded-[2rem] p-8 border border-slate-100 shadow-sm mb-12">
           <h2 className="text-2xl font-bold text-slate-900 mb-8">常见问题</h2>
           <div className="space-y-4">
             {faqs.map((faq, idx) => (
               <details key={idx} className="group border-b border-slate-100 last:border-0 pb-4 last:pb-0">
                 <summary className="flex justify-between items-center font-medium cursor-pointer list-none text-slate-800 py-2 hover:text-teal-600 transition-colors">
                   {faq.question}
                   <span className="transition group-open:rotate-180 text-slate-400">
                     <ChevronDown size={20} />
                   </span>
                 </summary>
                 <div className="text-slate-600 text-sm mt-3 leading-relaxed pl-2 pr-8 pb-3">
                   {faq.answer}
                 </div>
               </details>
             ))}
           </div>
        </div>

        {/* Contact Support */}
        <div className="text-center bg-teal-50 rounded-3xl p-8 border border-teal-100">
           <h3 className="text-xl font-bold text-slate-900 mb-3">没有找到您需要的答案？</h3>
           <p className="text-slate-600 text-sm mb-6 max-w-md mx-auto">
             我们的支持团队随时准备为您提供帮助。工作时间：周一至周五 9:00 - 18:00。
           </p>
           <PrimaryButton className="px-8 py-3 text-sm">联系客服</PrimaryButton>
        </div>

      </div>
    </div>
  );
};

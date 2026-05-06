import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import {
  Menu,
  X,
  PlayCircle,
  Activity,
  Apple,
  BrainCircuit,
  BellRing,
  PencilLine,
  BarChart3,
  Lightbulb,
  Settings2,
  ChevronLeft,
  ChevronRight,
  TrendingDown,
  Droplets,
  Target,
  HeartPulse,
  Send,
  ScanLine,
  ArrowRight
} from 'lucide-react';
import { GradientText, PrimaryButton } from './ReusableUI';

// --- Sections ---



export const Hero = () => {
  return (
    <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden bg-white">
      {/* Dot Pattern Background */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <div className="absolute right-0 top-0 w-1/2 h-full opacity-30" style={{
          backgroundImage: 'radial-gradient(#cbd5e1 2px, transparent 2px)',
          backgroundSize: '24px 24px',
          maskImage: 'linear-gradient(to left, black, transparent)',
          WebkitMaskImage: 'linear-gradient(to left, black, transparent)'
        }}></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="lg:grid lg:grid-cols-2 lg:gap-16 items-center">

          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center lg:text-left mb-16 lg:mb-0"
          >
            <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-teal-50/80 text-teal-600 text-xs font-medium mb-8">
              <span>✨</span>
              AI 健康减脂陪伴平台
            </div>

            <h1 className="text-[2.5rem] sm:text-5xl lg:text-[4rem] font-bold text-slate-900 tracking-tight mb-4 leading-[1.15]">
              科学减脂，长期陪伴 <br />
              <GradientText>遇见更好的自己</GradientText>
            </h1>

            <p className="text-base sm:text-lg text-slate-500 mb-10 max-w-xl mx-auto lg:mx-0 leading-relaxed">
              记录饮食、运动、体重，AI 智能分析<br className="hidden sm:block" />
              为你提供个性化建议，健康减脂不反弹
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 mb-12">
              <PrimaryButton className="w-full sm:w-auto px-6 py-3.5 text-base shadow-teal-500/30">
                免费开始减脂计划
              </PrimaryButton>
              <Link to="/features" className="w-full sm:w-auto px-6 py-3.5 rounded-full border border-teal-500 text-teal-600 font-medium hover:bg-teal-50 transition-colors flex items-center justify-center gap-2 shadow-sm">
                查看功能介绍
                <PlayCircle size={18} className="text-teal-500" />
              </Link>
            </div>

            {/* Social Proof */}
            <div className="flex items-center justify-center lg:justify-start gap-4">
              <div className="flex -space-x-3">
                {[1, 2, 3, 4].map(i => (
                  <img key={i} className="w-10 h-10 rounded-full border-2 border-white object-cover" src={`https://i.pravatar.cc/100?img=${i + 10}`} alt={`User ${i}`} />
                ))}
                <div className="w-10 h-10 rounded-full border-2 border-white bg-slate-100 flex items-center justify-center text-xs font-medium text-slate-600">
                  +99k
                </div>
              </div>
              <p className="text-sm text-slate-500">
                已帮助 <span className="font-semibold text-teal-600">2,356,862+</span> 用户达成健康目标
              </p>
            </div>
          </motion.div>

          {/* Mockup */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative mx-auto w-[320px] sm:w-[350px] lg:ml-auto lg:mr-0 z-10"
          >
            {/* Phone Frame */}
            <div className="relative border-[10px] border-slate-900 rounded-[3rem] shadow-2xl shadow-slate-300/50 bg-[#f8fafc] overflow-hidden h-[700px]">
              {/* Notch */}
              <div className="absolute top-0 inset-x-0 h-6 flex justify-center z-20">
                <div className="w-32 h-6 bg-slate-900 rounded-b-[1rem]"></div>
              </div>

              {/* Phone Header */}
              <div className="pt-10 px-5 pb-2 text-center text-slate-800 font-medium text-sm flex justify-between items-center bg-white z-10 relative">
                <span className="text-xs font-semibold">9:41</span>
                <div className="flex items-center gap-1">
                  <div className="w-4 h-2.5 outline outline-1 outline-slate-400 rounded-sm p-[1px] flex justify-end">
                    <div className="w-2.5 h-full bg-slate-800 rounded-[1px]"></div>
                  </div>
                </div>
              </div>

              {/* App Content */}
              <div className="h-full px-4 pb-24 flex flex-col gap-3 overflow-y-auto no-scrollbar relative pt-2">

                {/* 今日总览 */}
                <div className="bg-white p-4 rounded-2xl shadow-sm border border-slate-50">
                  <div className="flex justify-between items-center mb-3">
                    <h3 className="text-sm font-semibold text-slate-800">今日总览</h3>
                    <ScanLine size={16} className="text-slate-400" />
                  </div>
                  <div className="flex justify-between items-center">
                    <div>
                      <div className="text-xs text-slate-400 flex items-center gap-1 mb-1">热量缺口 <span className="w-2 h-2 rounded-full bg-teal-400"></span> 推荐状态</div>
                      <div className="text-2xl font-bold text-slate-800">618 <span className="text-xs font-normal">千卡</span></div>
                    </div>
                    {/* Circle Chart */}
                    <div className="w-16 h-16 rounded-full border-4 border-slate-100 flex items-center justify-center relative">
                      <svg className="absolute inset-0 w-full h-full -rotate-90">
                        <circle cx="28" cy="28" r="28" fill="none" stroke="#14b8a6" strokeWidth="4" strokeDasharray="176" strokeDashoffset="50" strokeLinecap="round" className="origin-center translate-x-[2px] translate-y-[2px]" />
                      </svg>
                    </div>
                  </div>

                  <div className="grid grid-cols-3 gap-2 mt-4 text-center">
                    <div>
                      <div className="text-[10px] text-slate-400">摄入</div>
                      <div className="text-xs font-bold text-slate-800">1286 <span className="font-normal text-[8px] text-slate-400">千卡</span></div>
                    </div>
                    <div>
                      <div className="text-[10px] text-slate-400">消耗</div>
                      <div className="text-xs font-bold text-slate-800">1904 <span className="font-normal text-[8px] text-slate-400">千卡</span></div>
                    </div>
                    <div>
                      <div className="text-[10px] text-slate-400">运动</div>
                      <div className="text-xs font-bold text-slate-800">618 <span className="font-normal text-[8px] text-teal-500">超标</span></div>
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-3">
                  {/* 饮食记录 */}
                  <div className="bg-white p-3.5 rounded-2xl shadow-sm border border-slate-50 flex flex-col items-center">
                    <div className="flex items-center gap-1 text-[11px] font-medium text-slate-600 mb-2 w-full justify-start">
                      <div className="w-1.5 h-1.5 rounded-full bg-teal-500"></div>
                      饮食记录
                    </div>
                    <div className="h-16 w-16 rounded-full overflow-hidden mb-2 shadow-sm">
                      <img src="/media/scene-analysis.jpg" className="w-full h-full object-cover" alt="food" />
                    </div>
                    <div className="text-[10px] text-slate-400">早餐可乐饼等...</div>
                    <div className="text-sm font-bold text-slate-800">523 <span className="text-[9px] font-normal text-slate-400">千卡</span></div>
                  </div>

                  {/* 今天运动量 */}
                  <div className="bg-white p-3.5 rounded-2xl shadow-sm border border-slate-50 flex flex-col">
                    <div className="flex justify-between items-center mb-1">
                      <div className="flex items-center gap-1 text-[11px] font-medium text-slate-600">
                        <div className="w-1.5 h-1.5 rounded-full bg-blue-400"></div>
                        今日步数
                      </div>
                    </div>
                    <div className="text-xl font-bold text-slate-800 mb-2">8632<span className="text-[9px] font-normal text-slate-400">/10000</span></div>
                    <div className="flex items-end gap-[2px] h-12 flex-1 pt-1">
                      {[30, 40, 30, 80, 50, 60, 100, 70, 40, 20].map((h, i) => (
                        <div key={i} className={`flex-1 rounded-sm ${i === 6 ? 'bg-teal-400' : 'bg-slate-100'}`} style={{ height: `${h}%` }}></div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* 体重趋势 */}
                <div className="bg-white p-4 rounded-2xl shadow-sm border border-slate-50">
                  <div className="flex justify-between items-center mb-2">
                    <h3 className="text-[11px] font-semibold text-slate-600 flex items-center gap-1">
                      <div className="w-1.5 h-1.5 rounded-full bg-indigo-400"></div> 体重趋势
                    </h3>
                    <span className="text-[9px] bg-slate-100 text-slate-500 px-1.5 py-0.5 rounded font-medium">目标 64.0kg</span>
                  </div>
                  <div className="flex items-baseline gap-1 mb-2">
                    <span className="text-2xl font-bold text-slate-800">67.2</span>
                    <span className="text-xs text-slate-400">kg</span>
                    <span className="text-[10px] text-teal-500 flex items-center ml-1"><TrendingDown size={10} className="mr-0.5" />0.8 kg</span>
                  </div>
                  <div className="h-16 w-full relative mt-2 pt-2">
                    <svg viewBox="0 0 100 40" className="w-full h-full overflow-visible">
                      <path d="M0,35 L20,30 L40,32 L60,15 L80,20 L100,5" fill="none" stroke="#60a5fa" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                      <circle cx="0" cy="35" r="1.5" fill="#60a5fa" />
                      <circle cx="60" cy="15" r="1.5" fill="#60a5fa" />
                      <circle cx="100" cy="5" r="1.5" fill="#60a5fa" />
                    </svg>
                    <div className="absolute bottom-[-15px] w-full flex justify-between text-[7px] text-slate-300">
                      <span>05/14</span>
                      <span>05/15</span>
                      <span>05/16</span>
                      <span>今日</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Bottom Nav Bar - iOS style */}
              <div className="absolute bottom-0 inset-x-0 h-[88px] bg-white/90 backdrop-blur-md border-t border-slate-100 flex justify-around items-start pt-3 px-6 pb-6 shadow-[0_-10px_20px_rgba(0,0,0,0.02)]">
                <div className="flex flex-col items-center gap-1 opacity-50"><Apple size={20} className="stroke-[1.5]" /><span className="text-[9px]">饮食记录</span></div>
                <div className="flex flex-col items-center gap-1 opacity-50"><Activity size={20} className="stroke-[1.5]" /><span className="text-[9px]">活动记录</span></div>
                <div className="flex flex-col items-center gap-1 text-teal-600"><Droplets size={20} className="stroke-[1.5]" /><span className="text-[9px] font-medium">饮水记录</span></div>
                <div className="flex flex-col items-center gap-1 opacity-50"><BarChart3 size={20} className="stroke-[1.5]" /><span className="text-[9px]">体重记录</span></div>
                {/* Home Indicator */}
                <div className="absolute bottom-2 left-1/2 -translate-x-1/2 w-32 h-1 bg-slate-900 rounded-full"></div>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export const LogoCloud = () => {
  return (
    <section className="py-10 border-y border-slate-100 bg-slate-50/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-wrap justify-center items-center gap-x-12 gap-y-8 opacity-60 grayscale hover:grayscale-0 transition-all duration-500">
          <div className="text-xl font-bold font-serif text-slate-800">36Kr</div>
          <div className="flex items-center gap-2"><div className="w-6 h-6 rounded-full bg-slate-800 text-white flex items-center justify-center text-xs font-bold">少</div><span className="font-bold text-slate-800">少数派</span></div>
          <div className="text-xl font-bold tracking-tighter text-slate-800 flex items-center gap-1"><HeartPulse size={24} />爱范儿</div>
          <div className="text-xl font-black text-slate-800 italic">AppSo</div>
          <div className="text-lg font-bold text-slate-800">最美应用</div>
          <div className="text-xl font-bold text-red-500">小红书</div>
          <div className="text-xl font-bold text-blue-500">知乎</div>
        </div>
      </div>
    </section>
  );
};

export const Features = () => {
  const features = [
    {
      title: "饮食记录 & 智能识别",
      desc: "拍照识别食物，精准估算热量与营养",
      visual: (
        <div className="h-48 w-full bg-slate-100 rounded-t-2xl relative overflow-hidden">
          <img src="/media/scene-meal-bowl.jpg" className="w-full h-full object-cover" alt="Healthy bowl" />
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-white/90 backdrop-blur-md px-4 py-2 rounded-full text-xs font-medium text-slate-700 shadow-lg flex items-center gap-2">
            <ScanLine size={14} className="text-teal-500" />
            <span className="whitespace-nowrap">智能识别中... 虾仁沙拉 320大卡</span>
          </div>
        </div>
      )
    },
    {
      title: "数据分析 & 趋势",
      desc: "多维度数据分析，趋势变化一目了然",
      visual: (
        <div className="h-48 w-full bg-slate-50 rounded-t-2xl p-6 relative">
          <div className="flex justify-between items-center mb-6">
            <div className="h-4 w-20 bg-slate-200 rounded-full"></div>
            <div className="h-4 w-12 bg-teal-100 rounded-full"></div>
          </div>
          <svg viewBox="0 0 200 60" className="w-full h-16 overflow-visible opacity-50">
            <path d="M0,50 L40,40 L80,55 L120,20 L160,30 L200,10" fill="none" stroke="#e2e8f0" strokeWidth="2" />
          </svg>
          <svg viewBox="0 0 200 60" className="w-full h-16 overflow-visible absolute top-[52px] left-6 right-6">
            <path d="M0,60 C40,40 60,50 100,20 C140,-10 180,30 200,0" fill="none" stroke="#14b8a6" strokeWidth="3" strokeLinecap="round" />
            <circle cx="100" cy="20" r="4" fill="white" stroke="#14b8a6" strokeWidth="2" />
            <circle cx="200" cy="0" r="4" fill="white" stroke="#14b8a6" strokeWidth="2" />
          </svg>
        </div>
      )
    },
    {
      title: "AI 健康秘书",
      desc: "7x24 小时智能建议，陪你科学减脂",
      visual: (
        <div className="h-48 w-full bg-[#f8fafc] rounded-t-2xl p-4 flex flex-col justify-end gap-3 pb-6 relative overflow-hidden">
          <div className="w-[80%] bg-white p-3 rounded-2xl rounded-tl-sm text-xs text-slate-700 shadow-sm border border-slate-100 self-start">
            今天的饮食搭配很棒！<br />建议晚餐可以适当减少碳水摄入哦～
          </div>
          <div className="w-[70%] bg-[#0ea5e9] p-3 rounded-2xl rounded-tr-sm text-xs text-white self-end text-left shadow-sm">
            好的，晚餐吃什么比较好？
          </div>
          <div className="absolute top-4 left-4 w-8 h-8 rounded-full bg-[#14b8a6] flex items-center justify-center text-white shadow-md">
            <BrainCircuit size={16} />
          </div>
        </div>
      )
    },
    {
      title: "习惯养成 & 提醒",
      desc: "定制提醒计划，帮助你坚持下去",
      visual: (
        <div className="h-48 w-full bg-[#f8fafc] rounded-t-2xl p-4 flex flex-col gap-2.5 justify-center">
          {[
            { icon: Droplets, name: "喝水提醒", time: "08:00", active: true },
            { icon: Activity, name: "运动提醒", time: "18:30", active: true },
            { icon: BellRing, name: "睡眠提醒", time: "22:30", active: false }
          ].map((item, i) => (
            <div key={i} className="bg-white p-2.5 rounded-xl flex items-center justify-between shadow-sm border border-slate-50">
              <div className="flex items-center gap-2.5">
                <div className={`p-1.5 rounded-lg ${item.active ? 'bg-teal-50 text-teal-500' : 'bg-slate-50 text-slate-400'}`}>
                  <item.icon size={14} />
                </div>
                <span className="text-xs font-medium text-slate-700">{item.name}</span>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-xs text-slate-400">{item.time}</span>
                {/* iOS Toggle Switch */}
                <div className={`w-9 h-5 rounded-full flex items-center p-0.5 transition-colors ${item.active ? 'bg-[#14b8a6] justify-end' : 'bg-slate-200 justify-start'}`}>
                  <div className="w-4 h-4 bg-white rounded-full shadow-sm"></div>
                </div>
              </div>
            </div>
          ))}
        </div>
      )
    }
  ];

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
            一站式健康减脂解决方案
          </h2>
          <p className="text-lg text-slate-500">
            从记录到分析，从建议到行动，帮你养成健康的生活习惯
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="bg-white rounded-3xl border border-slate-100 shadow-xl shadow-slate-200/20 overflow-hidden group hover:-translate-y-1 transition-all duration-300"
            >
              {feature.visual}
              <div className="p-6">
                <h3 className="text-base font-bold text-slate-900 mb-2">{feature.title}</h3>
                <p className="text-sm text-slate-500 leading-relaxed">{feature.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export const Steps = () => {
  const steps = [
    { icon: PencilLine, title: "1 记录数据", desc: "记录饮食、运动、体重等" },
    { icon: BarChart3, title: "2 数据分析", desc: "AI 分析你的数据，洞察规律" },
    { icon: Lightbulb, title: "3 获取建议", desc: "个性化建议与行动计划" },
    { icon: Settings2, title: "4 行动 & 调整", desc: "坚持执行，持续调整优化" },
  ];

  return (
    <section className="py-24 bg-slate-50/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
            科学减脂的核心步骤
          </h2>
          <p className="text-lg text-slate-500">
            简单 4 步，开启你的蜕变之旅
          </p>
        </div>

        <div className="relative">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-4 relative z-10">
            {steps.map((step, idx) => (
              <div key={idx} className="relative flex flex-col items-center text-center group">
                {/* Arrow connector */}
                {idx < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-[40px] left-[60%] w-full">
                    <svg width="100%" height="24" viewBox="0 0 100 24" preserveAspectRatio="none">
                      <path d="M0,12 L80,12" fill="none" stroke="#e2e8f0" strokeWidth="2" strokeDasharray="4 4" />
                      <polyline points="75,7 80,12 75,17" fill="none" stroke="#e2e8f0" strokeWidth="2" />
                    </svg>
                  </div>
                )}

                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  className="w-20 h-20 rounded-t-[24px] rounded-br-[24px] rounded-bl-[8px] bg-white border border-slate-50 shadow-xl shadow-slate-200/40 flex items-center justify-center mb-6 relative group-hover:scale-105 transition-transform duration-300"
                >
                  <step.icon size={28} className="text-[#14b8a6]" />
                  {idx < 2 && (
                    <div className="absolute -top-1 -right-1 w-5 h-5 bg-[#14b8a6] rounded-full border-[3px] border-white flex items-center justify-center">
                      <span className="text-[10px] text-white font-bold">✓</span>
                    </div>
                  )}
                  {idx >= 2 && (
                    <div className="absolute -top-1 -right-1 w-5 h-5 bg-orange-400 rounded-full border-[3px] border-white flex items-center justify-center">
                      <span className="text-[10px] text-white font-bold">✓</span>
                    </div>
                  )}
                </motion.div>
                <h3 className="text-lg font-bold text-slate-800 mb-2">{step.title}</h3>
                <p className="text-sm text-slate-500">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export const DashboardMock = () => {
  const [activeTab, setActiveTab] = useState('趋势');
  const tabs = ['趋势', '营养', '运动', '体重'];

  return (
    <section className="py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">营养跟踪 · 数据一目了然</h2>
          <p className="text-lg text-slate-500">多维度数据追踪，帮你科学管理健康</p>
        </div>

        <div className="flex gap-4 mb-10 w-max border-b border-slate-100">
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
                  layoutId="dashTab"
                  className="absolute bottom-0 left-0 right-0 h-0.5 bg-teal-500"
                />
              )}
            </button>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="bg-white border border-slate-100 rounded-[2.5rem] p-6 md:p-8 shadow-xl shadow-slate-200/20"
        >
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">

            {/* Calories Trend */}
            <div className="bg-slate-50/50 rounded-2xl p-5 border border-slate-50">
              <h3 className="text-sm font-bold text-slate-800 mb-1">热量趋势</h3>
              <div className="text-[10px] text-slate-400 mb-3">日平均 <span className="text-lg font-bold text-slate-900 ml-1">1268 <span className="font-normal text-[10px]">kcal</span></span></div>
              <div className="h-24 w-full relative pt-2">
                <svg viewBox="0 0 100 40" className="w-full h-full overflow-visible">
                  <path d="M0,20 L20,30 L40,15 L60,25 L80,10 L100,5" fill="none" stroke="#14b8a6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  <circle cx="100" cy="5" r="2" fill="#14b8a6" />
                </svg>
                <div className="absolute left-0 inset-y-0 w-4 flex flex-col justify-between text-[7px] text-slate-300 py-1 font-mono">
                  <span>50</span>
                  <span>30</span>
                  <span>0</span>
                </div>
              </div>
            </div>

            {/* Weight Change */}
            <div className="bg-slate-50/50 rounded-2xl p-5 border border-slate-50">
              <h3 className="text-sm font-bold text-slate-800 mb-1">体重变化</h3>
              <div className="text-[10px] text-slate-400 mb-3 flex items-center gap-2">
                <span className="text-lg font-bold text-slate-900">67.2 <span className="font-normal text-[10px]">kg</span></span>
                <span className="text-teal-500 font-medium flex items-center"><TrendingDown size={10} className="mr-0.5" /> 0.8 kg</span>
              </div>
              <div className="h-24 w-full relative pt-4">
                <svg viewBox="0 0 100 40" className="w-full h-full overflow-visible">
                  <path d="M0,10 C20,12 40,30 60,25 C80,20 90,35 100,35" fill="none" stroke="#14b8a6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  {[0, 20, 40, 60, 80, 100].map((x, i) => <circle key={i} cx={x} cy={i === 0 ? 10 : i === 1 ? 12 : i === 2 ? 30 : i === 3 ? 25 : i === 4 ? 28 : 35} r="1.5" fill="#14b8a6" />)}
                </svg>
              </div>
            </div>

            {/* Steps */}
            <div className="bg-slate-50/50 rounded-2xl p-5 border border-slate-50">
              <h3 className="text-sm font-bold text-slate-800 mb-1">步数</h3>
              <div className="text-[10px] text-slate-400 mb-3"><span className="text-lg font-bold text-slate-900 mr-1">8,632</span>步</div>
              <div className="h-24 w-full flex items-end justify-between gap-1 pt-2">
                {[40, 60, 30, 80, 50, 70, 100, 40].map((h, i) => (
                  <div key={i} className="flex-1 bg-teal-400 rounded-sm opacity-80" style={{ height: `${h}%` }}></div>
                ))}
              </div>
            </div>

            {/* Nutrition Distribution */}
            <div className="bg-slate-50/50 rounded-2xl p-5 border border-slate-50 flex flex-col">
              <h3 className="text-sm font-bold text-slate-800 mb-3">营养分布</h3>
              <div className="flex-1 flex items-center justify-between gap-2">
                <div className="w-20 h-20 relative">
                  <svg viewBox="0 0 100 100" className="w-full h-full -rotate-90">
                    <circle cx="50" cy="50" r="40" fill="none" stroke="#e2e8f0" strokeWidth="12" />
                    <circle cx="50" cy="50" r="40" fill="none" stroke="#f59e0b" strokeWidth="12" strokeDasharray="251" strokeDashoffset="180" />
                    <circle cx="50" cy="50" r="40" fill="none" stroke="#3b82f6" strokeWidth="12" strokeDasharray="251" strokeDashoffset="120" />
                    <circle cx="50" cy="50" r="40" fill="none" stroke="#14b8a6" strokeWidth="12" strokeDasharray="251" strokeDashoffset="75" />
                  </svg>
                </div>
                <div className="flex flex-col gap-2 flex-1">
                  <div className="flex justify-between items-center text-[10px]">
                    <div className="flex items-center gap-1 text-slate-500"><div className="w-1.5 h-1.5 bg-teal-500 rounded-full"></div> 蛋白质</div>
                    <div className="font-bold text-slate-800">28%</div>
                  </div>
                  <div className="flex justify-between items-center text-[10px]">
                    <div className="flex items-center gap-1 text-slate-500"><div className="w-1.5 h-1.5 bg-blue-500 rounded-full"></div> 脂肪</div>
                    <div className="font-bold text-slate-800">32%</div>
                  </div>
                  <div className="flex justify-between items-center text-[10px]">
                    <div className="flex items-center gap-1 text-slate-500"><div className="w-1.5 h-1.5 bg-amber-500 rounded-full"></div> 碳水</div>
                    <div className="font-bold text-slate-800">40%</div>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </motion.div>
      </div>
    </section>
  );
};

export const Testimonials = () => {
  const reviews = [
    {
      name: "小鹿要瘦",
      intro: "32 岁 | 减重 8.6kg",
      content: "\"坚持使用 BetterMe 3 个月，不仅瘦了 8 斤，更重要的是学会了如何科学饮食和运动，现在的状态越来越好了！\"",
      avatar: "https://i.pravatar.cc/150?img=47"
    },
    {
      name: "阿Ken",
      intro: "28 岁 | 减重 12.3kg",
      content: "\"AI 健康秘书真的贴心，每次给出的建议都很实用，让我少走了很多弯路，强烈推荐！\"",
      avatar: "https://i.pravatar.cc/150?img=11"
    },
    {
      name: "Sophie",
      intro: "25 岁 | 减重 6.8kg",
      content: "\"界面简洁，功能强大，数据分析非常直观，让我对减脂充满了信心，爱了爱了！\"",
      avatar: "https://i.pravatar.cc/150?img=5"
    }
  ];

  return (
    <section className="py-24 bg-slate-50/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
            真实用户的改变
          </h2>
          <p className="text-lg text-slate-500">
            来自 BetterMe 社区的真实反馈
          </p>
        </div>

        <div className="relative">
          <button className="hidden lg:flex absolute left-0 top-1/2 -translate-y-1/2 -translate-x-12 w-10 h-10 bg-white rounded-full items-center justify-center shadow-md text-slate-400 hover:text-slate-800 z-10 transition-colors">
            <ChevronLeft size={20} />
          </button>

          <div className="grid md:grid-cols-3 gap-6">
            {reviews.map((review, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="bg-white rounded-[2rem] p-8 border border-slate-50 shadow-lg shadow-slate-200/40 relative"
              >
                <div className="flex items-center gap-4 mb-5">
                  <img src={review.avatar} alt={review.name} className="w-12 h-12 rounded-full border border-slate-100 object-cover" />
                  <div>
                    <h4 className="text-sm font-bold text-slate-800">@{review.name}</h4>
                    <p className="text-[11px] text-slate-400">{review.intro}</p>
                  </div>
                </div>
                <p className="text-sm text-slate-600 leading-relaxed font-medium">
                  {review.content}
                </p>
              </motion.div>
            ))}
          </div>

          <button className="hidden lg:flex absolute right-0 top-1/2 -translate-y-1/2 translate-x-12 w-10 h-10 bg-white rounded-full items-center justify-center shadow-md text-slate-400 hover:text-slate-800 z-10 transition-colors">
            <ChevronRight size={20} />
          </button>
        </div>

        <div className="flex justify-center gap-2 mt-8">
          <div className="w-2 h-2 rounded-full bg-teal-500"></div>
          <div className="w-2 h-2 rounded-full bg-slate-200 cursor-pointer hover:bg-slate-300"></div>
          <div className="w-2 h-2 rounded-full bg-slate-200 cursor-pointer hover:bg-slate-300"></div>
          <div className="w-2 h-2 rounded-full bg-slate-200 cursor-pointer hover:bg-slate-300"></div>
        </div>
      </div>
    </section>
  );
};

export const BottomCTA = () => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gradient-to-br from-teal-800 to-cyan-900 rounded-[3rem] overflow-hidden relative shadow-2xl">
          {/* Decor */}
          <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-teal-500/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3"></div>

          <div className="grid lg:grid-cols-2 items-center">
            <div className="p-12 lg:p-20 relative z-10 text-center lg:text-left">
              <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
                开始你的健康减脂之旅
              </h2>
              <p className="text-teal-100 text-lg mb-10">
                加入 BetterMe，遇见更好的自己
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <button className="bg-white text-teal-800 px-8 py-4 rounded-full font-bold text-lg hover:bg-teal-50 transition-colors shadow-lg shadow-black/10">
                  免费开始
                </button>
                <Link to="/features" className="border border-teal-500/30 text-white hover:bg-teal-800/50 px-8 py-4 rounded-full font-medium text-lg transition-colors flex justify-center">
                  了解更多
                </Link>
              </div>
            </div>

            <div className="hidden lg:flex relative h-full min-h-[400px] justify-center items-end pb-8">
              {/* CSS Mock App 1 (Back) */}
              <div className="absolute right-32 bottom-[-10px] w-[260px] h-[520px] bg-white rounded-[2.5rem] border-[10px] border-slate-900 shadow-2xl -rotate-6 flex flex-col justify-between p-5 overflow-hidden z-0">
                {/* Notch */}
                <div className="absolute top-0 inset-x-0 h-5 flex justify-center z-20">
                  <div className="w-24 h-5 bg-slate-900 rounded-b-xl"></div>
                </div>
                <div className="w-full flex justify-between gap-3 mb-4 mt-6">
                  <div className="h-24 flex-1 bg-slate-100 rounded-2xl"></div>
                  <div className="h-24 flex-1 bg-slate-100 rounded-2xl"></div>
                </div>
                <div className="w-full h-40 bg-slate-50 rounded-2xl mb-4"></div>
                <div className="w-full h-48 bg-[#14b8a6] rounded-2xl"></div>
              </div>

              {/* CSS Mock App 2 (Front) */}
              <div className="absolute right-4 bottom-[-40px] w-[260px] h-[520px] bg-slate-900 rounded-[2.5rem] border-[10px] border-white/20 shadow-2xl rotate-6 flex flex-col p-5 overflow-hidden z-10 backdrop-blur-sm shadow-black/40 text-white">
                {/* Notch */}
                <div className="absolute top-0 inset-x-0 h-5 flex justify-center z-20">
                  <div className="w-24 h-5 bg-white/20 rounded-b-xl backdrop-blur-sm"></div>
                </div>
                <div className="w-full h-28 bg-slate-800 rounded-2xl mb-4 mt-6"></div>
                <div className="w-full h-36 bg-[#14b8a6] rounded-2xl mb-4 opacity-90"></div>
                <div className="w-full flex justify-between gap-3">
                  <div className="h-28 w-16 bg-slate-800 rounded-xl"></div>
                  <div className="h-28 w-16 bg-teal-500 rounded-xl"></div>
                  <div className="h-28 w-16 bg-slate-800 rounded-xl"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};



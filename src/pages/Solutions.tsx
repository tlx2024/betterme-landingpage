import React, { useState } from 'react';
import { Activity, Apple, ArrowRight, CheckCircle2, Heart, Home, Leaf, LineChart, ShieldCheck, Star, Target, TrendingUp, Users } from 'lucide-react';
import { Link } from 'react-router-dom';
import { appLinks } from '../config/appLinks';

const solutionImages = {
  hero: '/solutions/gpt-hero-plan.png',
  work: '/solutions/plan-work.png',
  mom: '/solutions/plan-mom.png',
  senior: '/solutions/plan-senior.png',
};

const planTabs = [
  { id: 'fat-loss', label: '轻盈减脂', icon: <Apple className="h-4 w-4" /> },
  { id: 'energy', label: '职场活力', icon: <Activity className="h-4 w-4" /> },
  { id: 'postpartum', label: '产后恢复', icon: <Heart className="h-4 w-4" /> },
  { id: 'elderly', label: '中老年健康', icon: <Users className="h-4 w-4" /> },
];

const JourneyIcon = ({ children }: { children: React.ReactNode }) => (
  <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-full border-2 border-white bg-[#e8f7ee] text-[#208752] shadow-[0_12px_30px_rgba(32,135,82,0.12)]">
    {children}
  </div>
);

export const SolutionsPage = () => {
  const [activeTab, setActiveTab] = useState('fat-loss');

  return (
    <main className="min-h-screen bg-[#fbfdfc] pb-8 pt-20">
      <section className="bm-page-hero relative overflow-hidden">
        <div className="bm-hero-shell relative mx-auto min-h-[560px] max-w-[1800px] overflow-hidden">
          <img src={solutionImages.hero} alt="" className="absolute inset-0 h-full w-full object-cover object-top" />
          <div className="absolute inset-0 bg-[linear-gradient(90deg,#fff_0%,rgba(255,255,255,0.97)_31%,rgba(255,255,255,0.66)_55%,rgba(255,255,255,0)_82%)]" aria-hidden="true" />
          <div className="relative mx-auto flex min-h-[560px] max-w-7xl items-center px-6 py-12 sm:px-8 lg:px-10 lg:py-14">
          <div className="bm-hero-copy max-w-[36rem]">
            <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-green-100 bg-green-50 px-3 py-1.5 text-[12px] font-bold text-[#208752]">
              <Target className="h-3.5 w-3.5" />
              为不同的你，定制科学的改变
            </div>
            <h1 className="mb-6 text-[2.8rem] font-bold leading-[1.15] tracking-tight text-gray-900 sm:text-[3.4rem] lg:text-[3.85rem]">
              你的目标，<br />
              有<span className="text-[#208752]">专属的科学方案</span>
            </h1>
            <p className="mb-9 max-w-[32rem] text-[16px] font-medium leading-8 text-gray-600">
              BetterMe 基于你的身体数据、生活习惯与目标，用 AI 为你量身定制可执行的健康计划，陪你一步步成为更好的自己。
            </p>
            <div className="grid max-w-[31rem] grid-cols-3 gap-5">
              {[
                { icon: <Heart className="h-6 w-6" />, title: '更懂你', desc: '个性化营养与运动建议' },
                { icon: <TrendingUp className="h-6 w-6" />, title: '更科学', desc: '营养师顾问团专业支持' },
                { icon: <ShieldCheck className="h-6 w-6" />, title: '更安心', desc: '数据安全同步，隐私保护' },
              ].map((item) => (
                <div key={item.title} className="text-center sm:text-left">
                  <div className="mx-auto mb-3 flex h-12 w-12 items-center justify-center rounded-2xl bg-[#e8f7ee] text-[#208752] sm:mx-0">{item.icon}</div>
                  <div className="mb-1 text-[14px] font-bold text-gray-900">{item.title}</div>
                  <div className="text-[11px] font-medium leading-5 text-gray-500">{item.desc}</div>
                </div>
              ))}
            </div>
          </div>
          </div>
        </div>
      </section>

      <section id="plans-overview" className="relative z-20 mx-auto -mt-14 max-w-[1170px] px-4 sm:px-6 lg:px-8">
        <div className="overflow-hidden rounded-[2rem] border border-[#edf3ef] bg-white p-6 shadow-[0_18px_60px_rgba(36,79,52,0.06)] sm:p-8">
          <div className="mb-7 text-center">
            <div className="mb-2 flex items-center justify-center gap-3">
              <Leaf className="h-5 w-5 text-[#208752]/45" />
              <h2 className="text-[2rem] font-bold tracking-tight text-gray-900">找到属于你的方案</h2>
              <Leaf className="h-5 w-5 scale-x-[-1] text-[#208752]/45" />
            </div>
            <p className="text-[14px] font-medium text-gray-500">选择你的目标，查看专属方案如何帮助你一步步改变</p>
          </div>

          <div className="mb-8 flex flex-wrap justify-center rounded-full border border-gray-100 bg-white p-2 shadow-sm">
            {planTabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex min-w-[170px] items-center justify-center gap-2 rounded-full px-6 py-3 text-[14px] font-bold transition-all ${activeTab === tab.id ? 'bg-[#208752] text-white shadow-md' : 'text-gray-600 hover:bg-gray-50'}`}
              >
                {tab.icon}
                {tab.label}
              </button>
            ))}
          </div>

          <div className="grid gap-8 rounded-[1.8rem] bg-[#f7fbf9] p-6 lg:grid-cols-[0.85fr_1.15fr] lg:p-8">
            <div>
              <h3 className="mb-3 text-[2rem] font-bold tracking-tight text-gray-900">轻盈减脂计划</h3>
              <p className="mb-7 text-[15px] font-medium text-gray-500">温和减少热量，营养优先，不节食不反弹</p>
              <ul className="mb-8 space-y-4">
                {['AI 智能计算热量缺口', '高蛋白饮食建议，保留肌肉', '平台期自动调整，持续进步', '每日复盘，习惯养成系统'].map((item) => (
                  <li key={item} className="flex items-center gap-3 text-[15px] font-bold text-gray-800">
                    <CheckCircle2 className="h-5 w-5 fill-[#208752] text-white" />
                    {item}
                  </li>
                ))}
              </ul>
              <div className="mb-7 rounded-[1.4rem] bg-white/90 p-4 shadow-sm">
                <div className="flex items-center gap-3">
                  <img src="/media/avatar-deer.jpg" alt="" className="h-11 w-11 rounded-full object-cover" />
                  <div>
                    <div className="mb-1 text-[13px] font-bold text-gray-900">@小鹿 <span className="ml-2 font-medium text-gray-500">32岁</span></div>
                    <div className="text-[13px] font-medium leading-6 text-gray-600">90天减重 6.8kg，体脂率下降 5%，至今1年未反弹 ✨</div>
                  </div>
                </div>
              </div>
              <Link to={appLinks.download} className="inline-flex items-center gap-2 rounded-full border border-[#bfe8cf] bg-white px-6 py-3 text-[14px] font-bold text-[#208752] hover:bg-green-50">
                查看完整减脂方案
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
            <div className="relative min-h-[330px] overflow-hidden rounded-[1.5rem] bg-white p-6 shadow-[inset_0_0_0_1px_rgba(237,243,239,0.9)]">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_88%_20%,rgba(232,247,238,0.95)_0%,rgba(255,255,255,0)_42%)]" aria-hidden="true" />
              <div className="relative grid h-full gap-5 md:grid-cols-[0.78fr_1fr]">
                <div className="mx-auto flex w-[230px] flex-col overflow-hidden rounded-[2rem] border-[6px] border-gray-900 bg-white shadow-2xl">
                  <div className="px-5 pb-4 pt-6">
                    <div className="mb-2 text-[11px] font-bold text-gray-500">今日摄入</div>
                    <div className="text-[2rem] font-black text-gray-900">1650<span className="ml-1 text-[11px] font-medium text-gray-400">大卡</span></div>
                    <div className="mt-3 h-2 rounded-full bg-gray-100"><div className="h-full w-full rounded-full bg-[#208752]" /></div>
                  </div>
                  <div className="space-y-4 border-t border-gray-50 px-5 py-4">
                    {[
                      ['蛋白质', '112g', '75%', 'w-[75%]'],
                      ['脂肪', '56g', '55%', 'w-[55%]'],
                      ['碳水', '178g', '82%', 'w-[82%]'],
                    ].map(([label, value, pct, width]) => (
                      <div key={label}>
                        <div className="mb-1 flex justify-between text-[11px] font-medium text-gray-500"><span>{label}</span><span className="font-bold text-gray-900">{value} <span className="text-[#208752]">{pct}</span></span></div>
                        <div className="h-1.5 rounded-full bg-gray-100"><div className={`h-full rounded-full bg-[#208752] ${width}`} /></div>
                      </div>
                    ))}
                  </div>
                  <div className="mx-4 mb-4 mt-auto rounded-xl bg-yellow-50 p-3 text-[11px] font-medium leading-5 text-yellow-900">
                    今日建议：蛋白质偏低，明天早餐加个鸡蛋吧~
                  </div>
                </div>
                <div className="flex flex-col justify-center gap-5">
                  <div className="rounded-[1.3rem] bg-white p-5 shadow-[0_14px_36px_rgba(28,82,48,0.08)]">
                    <div className="mb-3 flex items-center justify-between">
                      <div className="text-[13px] font-bold text-gray-900">体重趋势</div>
                      <div className="text-[12px] font-bold text-[#208752]">-0.8kg</div>
                    </div>
                    <svg className="h-20 w-full" viewBox="0 0 220 80" fill="none">
                      <path d="M8 18C36 28 50 35 78 42C108 50 134 64 164 55C184 49 198 47 212 51" stroke="#208752" strokeWidth="4" strokeLinecap="round" />
                      <path d="M8 18C36 28 50 35 78 42C108 50 134 64 164 55C184 49 198 47 212 51" stroke="#208752" strokeOpacity=".12" strokeWidth="18" strokeLinecap="round" />
                    </svg>
                  </div>
                  <div className="grid grid-cols-4 gap-3">
                    {['热量缺口', '蛋白质达标', '步数目标', '饮水目标'].map((item) => (
                      <div key={item} className="rounded-2xl bg-[#fbfdfc] p-3 text-center text-[11px] font-bold text-gray-600 shadow-sm">
                        <CheckCircle2 className="mx-auto mb-2 h-5 w-5 text-[#208752]" />
                        {item}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-6 grid gap-5 md:grid-cols-3">
            {[
              { title: '职场活力计划', desc: '在外卖和久坐中，保持能量与好状态', image: solutionImages.work },
              { title: '产后恢复计划', desc: '安全恢复，兼顾哺乳，温和回到理想状态', image: solutionImages.mom },
              { title: '中老年健康计划', desc: '关注三高，增强体力，延缓衰老', image: solutionImages.senior },
            ].map((plan) => (
              <Link key={plan.title} to={appLinks.download} className="group relative min-h-[128px] overflow-hidden rounded-[1.4rem] bg-white p-5 shadow-sm transition-transform hover:-translate-y-1">
                <img src={plan.image} alt="" className="absolute inset-0 h-full w-full object-cover opacity-45" />
                <div className="relative z-10 max-w-[58%]">
                  <h4 className="mb-2 text-[17px] font-bold text-gray-900">{plan.title}</h4>
                  <p className="mb-4 text-[12px] font-medium leading-5 text-gray-600">{plan.desc}</p>
                  <span className="inline-flex items-center gap-1 text-[12px] font-bold text-[#208752]">查看方案 <ArrowRight className="h-3.5 w-3.5" /></span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto mt-7 max-w-[1170px] rounded-[1.8rem] border border-[#edf3ef] bg-white px-6 py-8 shadow-[0_14px_45px_rgba(36,79,52,0.045)] sm:px-8">
        <div className="mb-8 text-center">
          <div className="flex items-center justify-center gap-3">
            <Leaf className="h-5 w-5 text-[#208752]/45" />
            <h2 className="text-[1.8rem] font-bold tracking-tight text-gray-900">BetterMe 如何陪伴你的改变之旅</h2>
            <Leaf className="h-5 w-5 scale-x-[-1] text-[#208752]/45" />
          </div>
        </div>
        <div className="grid gap-7 md:grid-cols-5">
          {[
            { icon: <Star className="h-5 w-5" />, title: '1 了解你', desc: '填写基础信息与目标' },
            { icon: <Heart className="h-5 w-5" />, title: '2 定制计划', desc: 'AI 为你生成专属方案' },
            { icon: <Home className="h-5 w-5" />, title: '3 日常跟踪', desc: '饮食、运动、睡眠全面记录' },
            { icon: <LineChart className="h-5 w-5" />, title: '4 智能调整', desc: '根据进展动态优化方案' },
            { icon: <ShieldCheck className="h-5 w-5" />, title: '5 看见改变', desc: '数据可视化，持续激励你' },
          ].map((step) => (
            <div key={step.title} className="text-center">
              <JourneyIcon>{step.icon}</JourneyIcon>
              <div className="mb-1 text-[14px] font-bold text-gray-900">{step.title}</div>
              <div className="text-[11px] font-medium text-gray-500">{step.desc}</div>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto mt-7 max-w-[1170px] rounded-[1.8rem] border border-[#edf3ef] bg-white px-6 py-7 shadow-[0_14px_45px_rgba(36,79,52,0.045)] sm:px-8">
        <div className="mb-6 flex items-center justify-between">
          <h2 className="text-[1.8rem] font-bold tracking-tight text-gray-900">他们的改变，正在发生</h2>
          <Link to={appLinks.stories} className="text-[13px] font-bold text-[#208752]">查看更多故事 →</Link>
        </div>
        <div className="grid gap-5 md:grid-cols-3">
          {[
            ['@阿Ken', '28岁 程序员', '外卖也能吃对，现在腰围少了 9cm，下午不再犯困了！', '减重 12.2kg', '/media/avatar-ken.jpg'],
            ['@Sophie', '26岁 宝妈', '带娃的间隙也能轻松记录，一年回到孕前体重！', '恢复 8.5kg', '/media/avatar-sophie.jpg'],
            ['@张姨', '58岁', '遵循推荐饮食后，血糖稳定了，走路也轻快了很多。', '血糖恢复正常', '/media/avatar-senior.jpg'],
          ].map(([name, meta, quote, result, avatar]) => (
            <div key={name} className="rounded-[1.4rem] bg-[#fbfdfc] p-5">
              <div className="mb-3 flex items-center gap-3">
                <img src={avatar} alt="" className="h-12 w-12 rounded-full object-cover" />
                <div>
                  <div className="text-[14px] font-bold text-gray-900">{name}</div>
                  <div className="text-[12px] font-medium text-gray-500">{meta}</div>
                </div>
              </div>
              <p className="mb-4 text-[13px] font-medium leading-6 text-gray-600">“{quote}”</p>
              <div className="text-[13px] font-bold text-[#208752]">{result}</div>
            </div>
          ))}
        </div>
      </section>

    </main>
  );
};

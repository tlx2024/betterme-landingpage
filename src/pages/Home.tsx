import React from 'react';
import { Star, CheckCircle2, Users, ShieldCheck, Sun, MessageSquare, ChevronRight, Leaf } from 'lucide-react';
import { Link } from 'react-router-dom';
import { localMedia } from '../assets/localMedia';
import { appLinks } from '../config/appLinks';
import { MiniProgramCode } from '../components/ReusableUI';

const LeafIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className} xmlns="http://www.w3.org/2000/svg">
    <path fillRule="evenodd" clipRule="evenodd" d="M12 22C12 22 20 18 20 12C20 6 12 2 12 2C12 2 4 6 4 12C4 18 12 22 12 22ZM12 4.5C12.5 5 17.5 8 17.5 12C17.5 15.5 13.5 19 12 19.5C10.5 19 6.5 15.5 6.5 12C6.5 8 11.5 5 12 4.5Z" />
    <path d="M12 2L12 22" stroke="white" strokeWidth="2" strokeLinecap="round" />
  </svg>
);

const HOMEPAGE_IMAGES = {
  heroLily: '/homepage/lily-sayhi-clean.png',
  lilyDay: '/homepage/lily-oneday.png',
};

const Hero = () => {
  return (
    <section className="bm-page-hero relative overflow-hidden pt-[76px]">
      <div className="bm-hero-shell relative mx-auto min-h-[640px] max-w-[1800px] overflow-hidden">
        <img
          src={HOMEPAGE_IMAGES.heroLily}
          alt=""
          className="absolute bottom-0 right-0 h-full w-[66%] object-cover object-center lg:w-[60%]"
        />
        <div className="absolute inset-y-0 left-[34%] w-[25%] bg-gradient-to-r from-white via-white/94 to-transparent" aria-hidden="true" />
        <div className="absolute inset-y-0 left-0 w-[45%] bg-white" aria-hidden="true" />
        <div className="absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-white to-transparent" aria-hidden="true" />

        <div className="bm-glass-card bm-float-card pointer-events-none absolute right-[3.5%] top-[130px] hidden w-[220px] rounded-[1.25rem] p-4 text-left lg:block">
          <div className="mb-2 text-[13px] font-bold text-gray-500">早上好，Alex 🌞</div>
          <div className="text-[14px] font-medium leading-7 text-gray-700">
            今日预算 <span className="font-bold text-[#208752]">1650</span> 大卡
          </div>
          <div className="mt-2 text-[12px] font-medium text-gray-300">07:30</div>
        </div>
        <div className="bm-glass-card bm-float-card pointer-events-none absolute right-[7%] top-[335px] hidden w-[285px] rounded-[1.25rem] p-5 text-left lg:block">
          <div className="mb-2 text-[13px] font-bold text-gray-500">午餐时间到了 🍳</div>
          <div className="text-[14px] font-medium leading-7 text-gray-700">
            你还可以摄入约 <span className="font-bold text-[#f58a2a]">580</span> 大卡<br />
            推荐：糙米饭 + 蒸鱼 + 时蔬
          </div>
          <div className="mt-2 text-right text-[12px] font-medium text-gray-300">11:45</div>
        </div>
        <div className="bm-glass-card bm-float-card pointer-events-none absolute left-[47%] top-[445px] hidden w-[250px] rounded-[1.15rem] p-4 text-left lg:block">
          <div className="mb-1 text-[13px] font-bold text-gray-700">识别完成 ✨</div>
          <div className="text-[12px] font-medium text-gray-500">番茄炒蛋 + 米饭 + 菜心</div>
          <div className="mt-2 text-[15px] font-bold text-gray-800">热量 <span className="text-[#208752]">523</span> 大卡</div>
        </div>
        <div className="bm-glass-card bm-float-card pointer-events-none absolute right-[8%] top-[500px] hidden w-[300px] rounded-[1.25rem] p-5 text-left lg:block">
          <div className="mb-2 text-[13px] font-bold text-gray-500">今日复盘 🌙</div>
          <div className="text-[14px] font-medium leading-7 text-gray-700">
            热量缺口 <span className="font-bold text-[#208752]">532</span> 大卡<br />
            蛋白质偏少，明天加个鸡蛋吧
          </div>
          <div className="mt-2 text-right text-[12px] font-medium text-gray-300">22:00</div>
        </div>

        <div className="relative z-10 mx-auto flex min-h-[640px] w-full max-w-7xl items-center px-6 pb-12 pt-8 text-center sm:px-8 lg:px-10 lg:pb-16 lg:pt-0 lg:text-left">
        <div className="bm-hero-copy max-w-[34rem]">
          <h1 className="mb-5 text-[2.7rem] font-bold leading-[1.08] tracking-tight text-gray-900 sm:text-5xl lg:text-[3.85rem]">
            你的专属<br />
            <span className="text-[#208752]">AI 营养健康师</span><br />
            现在就在身边
          </h1>
          <p className="mx-auto mb-8 max-w-[29rem] text-[16px] font-medium leading-8 text-gray-600 lg:mx-0">
            定制你的 AI 伙伴形象，餐前给建议，拍照看营养，睡前陪你复盘进展。
          </p>

          <div className="mb-7 flex flex-col items-center justify-center gap-4 lg:flex-row lg:items-stretch lg:justify-start">
            <div className="flex flex-col gap-3 sm:flex-row">
              <Link to={appLinks.download} className="flex min-h-14 w-full items-center justify-center gap-2 rounded-full bg-[#208752] px-8 text-[16px] font-bold text-white shadow-[0_14px_34px_rgba(32,135,82,0.23)] transition-all hover:-translate-y-0.5 hover:bg-[#1a7144] sm:w-auto">
                <Users className="w-5 h-5" /> 下载 BetterMe App
              </Link>
              <Link to={appLinks.miniProgram} className="flex min-h-14 w-full items-center justify-center gap-2 rounded-full border border-[#e5f0ea] bg-white px-7 text-[15px] font-bold text-gray-800 shadow-[0_10px_26px_rgba(18,70,42,0.06)] transition-all hover:-translate-y-0.5 hover:bg-gray-50 sm:w-auto">
                <div className="flex h-5 w-5 items-center justify-center rounded-full bg-[#07C160]"><MessageSquare className="w-3 h-3 fill-white text-white" /></div>
                微信小程序体验
              </Link>
            </div>
            <Link to={appLinks.miniProgram} className="hidden items-center gap-3 rounded-[1.15rem] border border-gray-100 bg-white/92 px-3 py-2 shadow-[0_12px_30px_rgba(18,70,42,0.08)] transition-transform hover:-translate-y-0.5 lg:flex">
              <MiniProgramCode className="h-[66px] w-[66px] p-1.5" dense />
              <span className="text-left">
                <span className="block text-[12px] font-bold text-[#208752]">扫码即刻体验</span>
                <span className="mt-1 block text-[11px] font-medium text-gray-500">无需下载</span>
              </span>
            </Link>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-x-5 gap-y-3 text-[13px] font-medium text-gray-500 lg:justify-start">
            <div className="flex items-center gap-1.5"><CheckCircle2 className="w-4 h-4 text-[#208752]" /> 核心功能免费</div>
            <div className="flex items-center gap-1.5"><Star className="w-4 h-4 text-[#208752]" /> 评分 4.8/5</div>
          </div>
        </div>
        </div>
      </div>
    </section>
  );
};

const StatsSection = () => {
  const stats = [
    { icon: <Users className="w-6 h-6 text-[#208752]" />, value: "2,356,862+", label: "累计用户" },
    { icon: <Star className="w-6 h-6 text-[#208752]" />, value: "4.8 / 5", label: "用户评分" },
    { icon: <ShieldCheck className="w-6 h-6 text-[#208752]" />, value: "180+", label: "覆盖国家与地区" },
    { icon: <Leaf className="w-6 h-6 text-[#208752]" />, value: "营养师顾问团", label: "专业审核机制" },
  ];

  return (
    <div className="relative z-20 -mt-14 bg-transparent pb-2">
      <div className="max-w-[1150px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="overflow-hidden rounded-[1.6rem] border border-gray-100 bg-white/96 shadow-[0_14px_50px_rgba(28,82,48,0.07)] backdrop-blur-sm">
          <div className="flex flex-wrap items-center justify-center gap-7 px-7 py-6 sm:px-9">
            {stats.map((stat, idx) => (
              <div key={idx} className="flex min-w-[200px] flex-1 items-center justify-center gap-4 sm:justify-start">
                <div className="relative">
                  <div className="relative z-10 flex h-12 w-12 items-center justify-center shrink-0">{stat.icon}</div>
                  <div className="clip-path-polygon-[0_0,100%_0,100%_100%] absolute left-2 top-1 z-0 h-10 w-10 rounded-full bg-[#e8f7ee]"></div>
                </div>
                <div><div className="mb-0.5 text-[19px] font-bold text-gray-900">{stat.value}</div><div className="text-[12px] font-medium text-gray-500">{stat.label}</div></div>
              </div>
            ))}
          </div>
          <div className="border-t border-gray-100 px-7 py-5 sm:px-9">
            <div className="flex flex-wrap items-center justify-center gap-x-10 gap-y-4 opacity-[0.55] grayscale transition-all duration-300 hover:grayscale-0">
              {[
                { name: '36Kr', font: 'font-serif' },
                { name: '少数派', font: 'font-sans' },
                { name: '爱范儿', font: 'font-mono' },
                { name: '最美应用', font: 'font-sans' },
                { name: 'AppSo', font: 'font-serif' },
                { name: '小红书', font: 'font-sans text-red-500' },
                { name: '知乎', font: 'font-sans text-blue-500' },
                { name: '微博健康', font: 'font-sans text-orange-500' },
              ].map((brand, idx) => (
                <div key={idx} className={`mx-2 flex cursor-pointer items-center gap-2 text-lg font-bold text-gray-600 ${brand.font}`}>
                  {brand.name}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const FeaturesSection = () => {
  const features = [
    { title: "科学内核", subtitle: "营养学基础 + AI 识别", desc: "基于《中国居民膳食指南》构建算法，识别结果更稳定，建议更贴近日常饮食。", cta: "了解 AI 识别原理", bgClass: "bg-[linear-gradient(180deg,#ffffff_0%,#f6fcf8_100%)]", iconBg: "bg-[#e8f7ee] text-[#208752]", icon: <CheckCircle2 className="h-7 w-7" /> },
    { title: "全天候陪伴", subtitle: "从早安到晚安，都在", desc: "清晨推送今日计划，午餐前给出建议，晚上自动生成复盘提醒。", cta: "看完整陪伴时间线", bgClass: "bg-[linear-gradient(180deg,#ffffff_0%,#fdf9ef_100%)]", iconBg: "bg-[#fff1d8] text-[#e08936]", icon: <Sun className="h-7 w-7" /> },
    { title: "和朋友一起变好", subtitle: "看到同伴的餐桌，更有动力", desc: "在社区里记录、围观和点赞朋友的健康餐，让坚持不再只靠自律。", cta: "逛逛朋友餐桌", bgClass: "bg-[linear-gradient(180deg,#ffffff_0%,#fdf6f4_100%)]", iconBg: "bg-[#fde7dd] text-[#d97757]", icon: <Users className="h-7 w-7" /> }
  ];

  return (
    <div className="relative bg-white py-16 lg:py-20">
      <div className="mb-10 text-center lg:mb-12">
        <div className="relative mb-4 flex flex-col items-center justify-center gap-2">
          <div className="flex items-center gap-3">
            <LeafIcon className="w-8 h-8 text-[#208752]/30" />
            <h2 className="text-[1.75rem] sm:text-[2rem] font-bold text-gray-900 tracking-tight">三分钟读懂 BetterMe</h2>
            <LeafIcon className="w-8 h-8 text-[#208752]/30 transform scale-x-[-1]" />
          </div>
          <p className="text-[15px] font-medium text-gray-500">它不只帮你记录，更懂得如何陪你</p>
        </div>
      </div>

      <div className="mx-auto flex max-w-6xl justify-center px-4 sm:px-6 lg:px-8">
        <div className="grid w-full max-w-[1040px] gap-6 md:grid-cols-3 sm:gap-8">
          {features.map((ft, idx) => (
            <div key={idx} className={`group relative flex min-h-[288px] flex-col overflow-hidden rounded-[1.6rem] border border-[#edf2ee] p-6 text-left shadow-[0_14px_40px_rgba(48,78,58,0.05)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_20px_50px_rgba(48,78,58,0.10)] sm:p-7 ${ft.bgClass}`}>
              <div className={`mb-5 flex h-14 w-14 items-center justify-center rounded-[1.2rem] ${ft.iconBg} shadow-[inset_0_0_0_1px_rgba(255,255,255,0.7)]`}>
                {ft.icon}
              </div>
              <h3 className="mb-2 text-[1.45rem] font-bold tracking-tight text-gray-900">{ft.title}</h3>
              <div className="mb-4 text-[14px] font-bold text-gray-600">{ft.subtitle}</div>
              <p className="mb-6 flex-1 text-[13px] font-medium leading-7 text-gray-500">{ft.desc}</p>
              <div className="inline-flex items-center gap-1 text-[13px] font-bold text-[#208752] transition-transform duration-300 group-hover:translate-x-1">
                {ft.cta}
                <ChevronRight className="h-4 w-4" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

const TimelineSection = () => {
  return (
    <div className="relative overflow-hidden bg-white py-14 lg:py-16">
      <div className="mb-8 text-center lg:mb-10">
        <h2 className="mb-3 text-[1.9rem] font-bold tracking-tight text-gray-900 sm:text-[2.45rem]">Lily 的一天</h2>
        <p className="text-[15px] font-medium text-gray-500">不止是 AI，这一天都有她陪你</p>
      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="relative overflow-x-auto pb-3">
          <img
            src={HOMEPAGE_IMAGES.lilyDay}
            alt="Lily 的一天：早安、午餐建议、拍照识食和睡前复盘"
            className="mx-auto min-w-[980px] max-w-none rounded-[2rem] object-contain lg:min-w-0 lg:w-full lg:rounded-none"
          />
        </div>
      </div>
    </div>
  );
};

const TestimonialsSection = () => {
  const reviews = [
    { name: "@小鹿", age: "32岁", tag: "减脂塑形", tagColor: "bg-green-50 text-[#208752]", resultTitle: "90天减重 6.8 kg", quote: "“坚持使用 BetterMe 3个月，瘦了...”", avatar: localMedia.avatars.deer },
    { name: "@阿Ken", age: "28岁", tag: "职场活力", tagColor: "bg-blue-50 text-blue-600", resultTitle: "减重 12.2 kg", quote: "“久坐程序员的救星，外卖党也能吃对。”", avatar: localMedia.avatars.ken },
    { name: "@Sophie", age: "26岁", tag: "产后恢复", tagColor: "bg-pink-50 text-pink-600", resultTitle: "产后1年恢复", quote: "“界面简洁，拍照识食在带娃间隙也轻松完成。”", avatar: localMedia.avatars.sophie }
  ];

  return (
    <div className="bg-white py-16 lg:py-18">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-10 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <h2 className="text-[2rem] font-bold tracking-tight text-gray-900 sm:text-[2.35rem]">真实改变，正在发生</h2>
          </div>
          <div className="flex items-center gap-3">
            <Link to={appLinks.stories} className="text-[13px] font-bold text-[#208752] transition-colors hover:text-[#1a7144]">查看全部真实故事 →</Link>
            <div className="hidden h-11 w-11 items-center justify-center rounded-full border border-[#edf2ee] bg-white text-gray-500 shadow-sm lg:flex">
              <ChevronRight className="h-4 w-4" />
            </div>
          </div>
        </div>
        <div className="grid gap-6 md:grid-cols-3 lg:gap-7">
          {reviews.map((rv, idx) => (
            <div key={idx} className="rounded-[1.8rem] border border-gray-100 bg-white p-6 shadow-[0_8px_30px_rgb(0,0,0,0.04)]">
              <div className="mb-5 flex items-center gap-3">
                <img src={rv.avatar} className="h-12 w-12 rounded-full object-cover" />
                <div>
                  <div className="text-[15px] font-bold text-gray-900">{rv.name} <span className="ml-1 text-[13px] font-medium text-gray-500">{rv.age}</span></div>
                  <div className={`mt-1 inline-flex rounded-full px-2 py-0.5 text-[11px] font-bold ${rv.tagColor}`}>{rv.tag}</div>
                </div>
              </div>
              <div className="mb-4 text-[21px] font-bold leading-tight text-gray-900">{rv.resultTitle}</div>
              <p className="mb-6 min-h-[78px] text-[13px] font-medium leading-relaxed text-gray-600">{rv.quote}</p>
              <div className="flex items-center gap-1 text-[#208752]">
                {Array.from({ length: 5 }).map((_, starIndex) => (
                  <Star key={starIndex} className="h-4 w-4 fill-current" />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export const HomePage = () => {
  return (
    <div>
      <Hero />
      <StatsSection />
      <FeaturesSection />
      <TimelineSection />
      <TestimonialsSection />
    </div>
  )
}

import React from 'react';
import { ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { appLinks } from '../config/appLinks';

const featureImages = {
  hero: '/feature/gpt-hero-wide.png',
  morning: '/feature/morning.png',
  mealGuide: '/feature/meal-guide.png',
  cameraGirl: '/feature/camera-girl.png',
  nightGirl: '/feature/night-girl.png',
  mealBowl: '/feature/meal-bowl.png',
  nutritionReport: '/feature/nutrition-report.png',
  sleepReview: '/feature/sleep-review.png',
  lilyPresent: '/feature/lily-present.png',
  friendsTable: '/feature/friends-table.png',
  cta: '/feature/cta.png',
};

type FeaturePanelProps = {
  index: string;
  title: React.ReactNode;
  description: string;
  reverse?: boolean;
  children: React.ReactNode;
};

const FeaturePanel = ({ index, title, description, reverse = false, children }: FeaturePanelProps) => (
  <section className="relative overflow-hidden rounded-[1.8rem] border border-[#edf3ef] bg-white px-6 py-7 shadow-[0_14px_50px_rgba(36,79,52,0.055)] sm:px-9 lg:px-12 lg:py-9">
    <div className="absolute inset-0 bg-[radial-gradient(circle_at_88%_50%,rgba(232,247,238,0.82)_0%,rgba(255,255,255,0)_42%)]" aria-hidden="true" />
    <div className={`relative grid items-center gap-7 lg:grid-cols-2 lg:gap-10 ${reverse ? 'lg:[&>div:first-child]:order-2' : ''}`}>
      <div className="max-w-[25rem]">
        <div className="mb-5 flex h-10 w-10 items-center justify-center rounded-full bg-[#e8f7ee] text-[14px] font-black text-[#208752]">{index}</div>
        <h2 className="mb-4 text-[1.8rem] font-bold leading-tight tracking-tight text-gray-900 sm:text-[2.1rem]">{title}</h2>
        <p className="mb-6 text-[14px] font-medium leading-7 text-gray-500">{description}</p>
        <Link to={appLinks.download} className="inline-flex items-center gap-1 text-[13px] font-bold text-[#208752] hover:text-[#1a7144]">
          了解更多
          <ChevronRight className="h-4 w-4" />
        </Link>
      </div>
      <div className="relative min-h-[220px]">{children}</div>
    </div>
  </section>
);

export const FeaturesPage = () => {
  return (
    <main id="feature-overview" className="min-h-screen bg-[#fbfdfc] pb-10 pt-20">
      <section className="bm-page-hero relative overflow-hidden">
        <div className="bm-hero-shell relative mx-auto min-h-[560px] max-w-[1800px] overflow-hidden">
          <img src={featureImages.hero} alt="" className="absolute inset-0 h-full w-full object-cover object-top" />
          <div className="absolute inset-0 bg-[linear-gradient(90deg,#fff_0%,rgba(255,255,255,0.97)_31%,rgba(255,255,255,0.64)_55%,rgba(255,255,255,0)_82%)]" aria-hidden="true" />
          <div className="relative mx-auto flex min-h-[560px] max-w-7xl items-center px-6 py-14 sm:px-8 lg:px-10 lg:py-16">
          <div className="bm-hero-copy max-w-[34rem]">
            <h1 className="mb-6 text-[2.8rem] font-bold leading-[1.16] tracking-tight text-gray-900 sm:text-[3.3rem] lg:text-[3.7rem]">
              Lily 每天都在，<br />
              陪你<span className="text-[#208752]">把健康变简单</span>
            </h1>
            <p className="max-w-[32rem] text-[16px] font-medium leading-8 text-gray-600">
              从早安问候到睡前复盘，从饮食建议到好友互助，每一个细节都为你设计，让你不再一个人硬撑。
            </p>
          </div>
          </div>
        </div>
      </section>

      <div className="relative z-20 mx-auto -mt-14 max-w-[1170px] space-y-5 px-4 sm:px-6 lg:px-8">
        <FeaturePanel
          index="01"
          title={<>早安卡片，<br />开启美好一天</>}
          description="根据你的目标、睡眠、天气和昨日完成情况，生成专属早安卡片，给你今天的饮食预算和小行动建议。"
        >
          <div className="relative mx-auto flex h-full max-w-[560px] items-center justify-end">
            <div className="absolute left-[2%] top-[21%] z-10 w-[57%] rounded-[1.6rem] bg-white/95 p-5 shadow-[0_18px_45px_rgba(38,78,55,0.12)]">
              <div className="mb-3 flex items-center gap-3">
                <img src="/media/portrait-lily.jpg" alt="" className="h-9 w-9 rounded-full object-cover object-top" />
                <div className="text-[15px] font-bold text-gray-900">早上好，Alex ☀</div>
              </div>
              <p className="text-[14px] font-medium leading-7 text-gray-600">
                今天气温18°C，适合快走~<br />
                今日建议摄入 <span className="font-bold text-[#208752]">1650 大卡</span>
                <span className="float-right mt-1 text-[11px] text-gray-300">07:30</span>
              </p>
            </div>
            <div className="absolute right-[30%] top-[22%] h-12 w-12 rounded-full bg-[#fff7e8] text-center text-4xl leading-[3rem] text-[#f2b15e]">☀</div>
            <img src={featureImages.morning} alt="Lily 晨间问候" className="relative z-0 h-[245px] w-auto object-contain" />
          </div>
        </FeaturePanel>

        <FeaturePanel
          index="02"
          reverse
          title={<>餐前建议，<br />每餐都有好选择</>}
          description="AI 结合你的热量预算和口味偏好，在饭前给出 3 种科学搭配方案，不纠结，不踩雷。"
        >
          <div className="relative mx-auto flex h-full max-w-[560px] items-center justify-start">
            <div className="relative z-10 w-[240px] rounded-[1.5rem] bg-white p-5 shadow-[0_18px_45px_rgba(38,78,55,0.12)]">
              <div className="mb-3 text-[13px] font-bold text-gray-900">餐前建议 <span className="ml-2 text-[11px] font-medium text-gray-400">11:45</span></div>
              <p className="mb-4 text-[14px] font-medium leading-7 text-gray-600">午餐时间到了，你还可以摄入约 <span className="font-bold text-gray-900">580 大卡</span></p>
              <div className="mb-3 text-[12px] font-bold text-gray-800">推荐搭配</div>
              <div className="grid grid-cols-3 gap-2 text-center text-[10px] font-medium text-gray-500">
                {['糙米饭', '清蒸鱼', '清炒西兰花'].map((item, index) => (
                  <div key={item}>
                    <img src={featureImages.mealBowl} alt="" className="mx-auto mb-1 h-12 w-12 rounded-full object-cover" style={{ objectPosition: `${index * 38}% 50%` }} />
                    {item}
                  </div>
                ))}
              </div>
              <div className="mx-auto mt-4 w-max rounded-full border border-[#a9e3c1] px-4 py-1 text-[11px] font-bold text-[#208752]">换一换</div>
            </div>
            <img src={featureImages.mealGuide} alt="Lily 推荐餐食" className="absolute bottom-[-22px] left-[210px] h-[248px] object-contain" />
          </div>
        </FeaturePanel>

        <FeaturePanel
          index="03"
          title={<>拍照识食，<br />营养一秒看见</>}
          description="拍一拍食物，AI 自动识别食材与热量，还会分析三大营养素占比，告诉你哪里需要优化。"
        >
          <div className="mx-auto grid h-full max-w-[520px] grid-cols-[0.98fr_1fr] items-center gap-4">
            <img src={featureImages.mealBowl} alt="健康餐盘" className="h-[230px] w-full rounded-[1.4rem] object-cover shadow-[0_16px_40px_rgba(28,82,48,0.09)]" />
            <img src={featureImages.nutritionReport} alt="营养识别结果" className="h-[230px] w-full rounded-[1.4rem] object-cover shadow-[0_16px_40px_rgba(28,82,48,0.09)]" />
          </div>
        </FeaturePanel>

        <FeaturePanel
          index="04"
          reverse
          title={<>睡前复盘，<br />今天的努力被看见</>}
          description="生成今日饮食与行为报告，指出亮点，给出明天可执行的小建议。不焦虑，明天继续加油！"
        >
          <div className="relative mx-auto flex h-full max-w-[560px] items-center justify-center">
            <img src={featureImages.sleepReview} alt="Lily 睡前复盘" className="h-[248px] object-contain" />
            <div className="absolute left-0 top-4 w-[250px] rounded-[1.5rem] bg-white/95 p-5 shadow-[0_18px_45px_rgba(38,78,55,0.12)]">
              <div className="mb-3 text-[13px] font-bold text-gray-900">睡前复盘 <span className="ml-2 text-[11px] font-medium text-gray-400">22:00</span></div>
              <p className="mb-4 text-[14px] font-bold text-gray-900">今天你很棒！<br />热量缺口 <span className="text-[#208752]">532 大卡</span></p>
              {[
                ['热量', '1168 / 1700 kcal', '70%'],
                ['蛋白质', '68 / 90 g', '76%'],
                ['步数', '8632 / 8000 步', '100%'],
                ['饮水', '6 / 8 杯水', '75%'],
              ].map(([label, value, width]) => (
                <div key={label} className="mb-2">
                  <div className="mb-1 flex justify-between text-[10px] font-medium text-gray-500"><span>{label}</span><span>{value}</span></div>
                  <div className="h-1.5 rounded-full bg-gray-100"><div className="h-full rounded-full bg-[#208752]" style={{ width }} /></div>
                </div>
              ))}
            </div>
          </div>
        </FeaturePanel>

        <FeaturePanel
          index="05"
          title={<>朋友餐桌，<br />一起变好更有动力</>}
          description="看看朋友今天吃了什么，互相点赞，加油打气，在温暖的社区里，坚持变得更轻松。"
        >
          <div className="relative mx-auto flex h-full max-w-[560px] items-center justify-center">
            <img src={featureImages.friendsTable} alt="朋友餐桌社区" className="h-[240px] w-full object-contain" />
            <div className="absolute right-[3%] top-[30%] rounded-[1.2rem] bg-white px-5 py-4 text-[14px] font-bold text-gray-700 shadow-[0_14px_36px_rgba(38,78,55,0.12)]">
              太棒啦！<br />
              <span className="text-gray-500">你很厉害！👏</span>
            </div>
          </div>
        </FeaturePanel>

      </div>
    </main>
  );
};

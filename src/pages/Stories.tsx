import React, { useState } from 'react';
import { ChevronRight, Heart, ShieldCheck, Star, Users } from 'lucide-react';
import { Link } from 'react-router-dom';
import { appLinks } from '../config/appLinks';

const storyImages = {
  hero: '/stories/gpt-hero-collage.png',
  main1: '/stories/gpt-main-1.png',
  main2: '/stories/gpt-main-2.png',
  main3: '/stories/gpt-main-3.png',
  main4: '/stories/gpt-main-4.png',
  more1: '/stories/gpt-main-1.png',
  more2: '/stories/gpt-main-2.png',
  more3: '/stories/gpt-main-3.png',
  more4: '/stories/gpt-main-4.png',
  more5: '/stories/gpt-main-1.png',
};

const tabs = ['全部故事', '减脂塑形', '职场活力', '产后恢复', '中老年健康', '情侣/家庭', '学生党'];

const mainStories = [
  {
    tag: '减脂塑形',
    color: 'text-[#208752] border-[#bfe8cf]',
    image: storyImages.main1,
    author: '@小唐',
    meta: '32岁 | 教师',
    title: '90天减重 6.8kg，体脂率下降 5%',
    quote: '坚持使用 BetterMe 3 个月，不仅瘦了，更重要的是学会了科学饮食，AI 给的每一条建议都很实用。',
    stats: ['90 天', '-6.8 kg', '-5 %'],
  },
  {
    tag: '职场活力',
    color: 'text-orange-500 border-orange-200',
    image: storyImages.main2,
    author: '@阿Ken',
    meta: '28岁 | 程序员',
    title: '腰围减少 9cm，找回专注力与好状态',
    quote: '久坐程序员的救星。外卖党也能吃对，AI 提醒我起身活动，身体和精神都变好了。',
    stats: ['120 天', '-12.2 kg', '-9 cm'],
  },
  {
    tag: '产后恢复',
    color: 'text-pink-500 border-pink-200',
    image: storyImages.main3,
    author: '@Sophie',
    meta: '26岁 | 妈妈',
    title: '产后 1 年恢复孕前体重，更爱现在的自己',
    quote: '界面简洁，拍照识食在带娃间隙也能轻松完成。数据趋势让我看到了每天的进步，很有安全感。',
    stats: ['365 天', '-8.6 kg', '100 %'],
  },
  {
    tag: '中老年健康',
    color: 'text-amber-700 border-amber-200',
    image: storyImages.main4,
    author: '@张姨',
    meta: '62岁 | 退休教师',
    title: '坚持 6 个月，血糖恢复正常，走路更轻松',
    quote: '医生说我的血糖和血压控制得很稳定，这个年纪还能保持这样的状态，真的很感谢 Lily 的陪伴。',
    stats: ['180 天', '-4.2 kg', '血糖'],
  },
];

const moreStories = [
  ['减脂塑形', storyImages.more1, '@小鹿', '24岁 | 市场专员', '不节食，也能瘦下来', '60 天减重 4.3kg', '4.7'],
  ['职场活力', storyImages.more2, '@David', '31岁 | 设计师', '告别下午犯困', '90 天精力评分提升 40%', '4.9'],
  ['产后恢复', storyImages.more3, '@暖暖', '29岁 | 新手妈妈', '哺乳期也能安心减重', '150 天减重 7.1kg', '4.8'],
  ['中老年健康', storyImages.more4, '@王叔叔', '66岁 | 工程师', '三高指标全面改善', '6 个月指标改善明显', '4.7'],
  ['减脂塑形', storyImages.more5, '@Elaine', '27岁 | 自由职业', '健身 + 饮食双向管理', '120 天体脂率下降 6%', '4.9'],
];

export const StoriesPage = () => {
  const [activeTab, setActiveTab] = useState('全部故事');

  return (
    <main className="min-h-screen bg-[#fbfdfc] pb-10 pt-20">
      <section className="bm-page-hero relative overflow-hidden">
        <div className="bm-hero-shell relative mx-auto min-h-[540px] max-w-[1800px] overflow-hidden">
          <img src={storyImages.hero} alt="" className="absolute inset-0 h-full w-full object-cover object-top" />
          <div className="absolute inset-0 bg-[linear-gradient(90deg,#fff_0%,rgba(255,255,255,0.97)_31%,rgba(255,255,255,0.68)_56%,rgba(255,255,255,0)_84%)]" aria-hidden="true" />
          <div className="relative mx-auto flex min-h-[540px] max-w-7xl items-center px-6 py-13 sm:px-8 lg:px-10 lg:py-14">
          <div className="bm-hero-copy max-w-[38rem]">
            <h1 className="mb-6 text-[2.75rem] font-bold leading-[1.15] tracking-tight text-gray-900 sm:text-[3.25rem] lg:text-[3.65rem]">
              真实改变，正在发生<br />
              <span className="text-[#208752]">每一个坚持，都被看见</span>
            </h1>
            <p className="mb-9 max-w-[31rem] text-[16px] font-medium leading-8 text-gray-600">
              他们来自不同的生活，有不同的目标，但都在 BetterMe 找到属于自己的节奏。你，下一位会是你吗？
            </p>
            <div className="grid max-w-[35rem] grid-cols-4 gap-5">
              {[
                [<Users className="h-5 w-5" />, '2,356,862+', '陪伴用户'],
                [<Star className="h-5 w-5" />, '4.8 / 5', '应用商店评分'],
                [<ShieldCheck className="h-5 w-5" />, '180+', '国家与地区'],
                [<Heart className="h-5 w-5" />, '100万+', '真实故事'],
              ].map(([icon, value, label]) => (
                <div key={String(value)} className="border-r border-gray-100 last:border-r-0">
                  <div className="mb-2 flex h-10 w-10 items-center justify-center rounded-2xl bg-[#e8f7ee] text-[#208752]">{icon}</div>
                  <div className="text-[17px] font-bold text-gray-900">{value}</div>
                  <div className="text-[11px] font-medium text-gray-500">{label}</div>
                </div>
              ))}
            </div>
          </div>
          </div>
        </div>
      </section>

      <section id="story-list" className="relative z-20 mx-auto -mt-12 max-w-[1180px] rounded-[2rem] border border-[#edf3ef] bg-white px-5 py-6 shadow-[0_18px_60px_rgba(36,79,52,0.055)] sm:px-7">
        <div className="mb-8 flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <div className="flex flex-wrap gap-x-8 gap-y-3">
            {tabs.map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`relative pb-3 text-[14px] font-bold transition-colors ${activeTab === tab ? 'text-[#208752]' : 'text-gray-500 hover:text-gray-900'}`}
              >
                {tab}
                {activeTab === tab && <span className="absolute bottom-0 left-0 h-[3px] w-full rounded-full bg-[#208752]" />}
              </button>
            ))}
          </div>
          <button className="flex w-max items-center gap-2 rounded-full border border-gray-100 bg-white px-5 py-2.5 text-[13px] font-bold text-gray-700 shadow-sm">
            最新发布
            <ChevronRight className="h-4 w-4 rotate-90" />
          </button>
        </div>

        <div className="grid gap-6 lg:grid-cols-4">
          {mainStories.map((story) => (
            <article key={story.author} className="overflow-hidden rounded-[1.55rem] border border-gray-100 bg-white shadow-sm transition-transform hover:-translate-y-1">
              <div className="relative h-[181px] overflow-hidden">
                <img src={story.image} alt={story.author} className="h-full w-full object-cover" />
                <span className={`absolute left-4 top-4 rounded-full border bg-white/92 px-3 py-1 text-[11px] font-bold shadow-sm ${story.color}`}>{story.tag}</span>
              </div>
              <div className="p-5">
                <div className="mb-3 text-[12px] font-medium text-gray-500"><span className="font-bold text-gray-900">{story.author}</span> &nbsp; {story.meta}</div>
                <h3 className="mb-4 min-h-[58px] text-[18px] font-bold leading-tight tracking-tight text-gray-900">{story.title}</h3>
                <p className="mb-5 min-h-[78px] text-[13px] font-medium leading-6 text-gray-600">“{story.quote}”</p>
                <div className="mb-5 grid grid-cols-3 gap-2 rounded-xl bg-[#fbfdfc] p-3">
                  {story.stats.map((stat, index) => (
                    <div key={stat} className="text-center">
                      <div className="text-[12px] font-bold text-gray-900">{stat}</div>
                      <div className="text-[10px] font-medium text-gray-500">{['坚持时长', '体重变化', '目标'][index]}</div>
                    </div>
                  ))}
                </div>
                <Link to={appLinks.download} className="flex items-center justify-center gap-1 rounded-full border border-[#bfe8cf] py-3 text-[13px] font-bold text-[#208752] hover:bg-green-50">
                  查看完整故事
                  <ChevronRight className="h-4 w-4" />
                </Link>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="mx-auto mt-9 max-w-[1180px] px-4 sm:px-6 lg:px-0">
        <div className="mb-6 flex items-center justify-between">
          <h2 className="text-[1.8rem] font-bold tracking-tight text-gray-900">更多用户的真实故事</h2>
          <Link to={appLinks.download} className="text-[13px] font-bold text-[#208752]">查看全部故事 →</Link>
        </div>
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-5">
          {moreStories.map(([tag, image, author, meta, title, desc, rating]) => (
            <article key={author} className="rounded-[1.35rem] border border-gray-100 bg-white p-4 shadow-sm">
              <div className="relative mb-4 h-[110px] overflow-hidden rounded-[1rem]">
                <img src={image} alt={author} className="h-full w-full object-cover" />
                <span className="absolute left-2 top-2 rounded-full bg-white/90 px-2 py-0.5 text-[10px] font-bold text-[#208752]">{tag}</span>
              </div>
              <div className="mb-1 text-[11px] font-medium text-gray-500">{author} &nbsp; {meta}</div>
              <h3 className="mb-1 text-[14px] font-bold text-gray-900">{title}</h3>
              <p className="mb-3 text-[12px] font-medium text-gray-500">{desc}</p>
              <div className="flex items-center justify-between border-t border-gray-50 pt-3 text-[11px] font-medium text-gray-500">
                <span>坚持记录</span>
                <span className="flex items-center gap-1 font-bold text-yellow-500"><Star className="h-3 w-3 fill-current" /> {rating}</span>
              </div>
            </article>
          ))}
        </div>
      </section>

    </main>
  );
};

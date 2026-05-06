import React from 'react';
import { Lock, ShieldCheck, CheckCircle2 } from 'lucide-react';
import { Link } from 'react-router-dom';
import { appLinks } from '../config/appLinks';

const pricingImages = {
    hero: '/pricing/gpt-hero-pricing.png',
};

export const PricingPage = () => {
    return (
        <div className="pt-20 bg-[#fafcfb] min-h-screen">
            {/* Hero */}
            <div className="bm-page-hero relative overflow-hidden pb-24">
                <div className="bm-hero-shell relative mx-auto min-h-[560px] max-w-[1800px] overflow-hidden">
                <img src={pricingImages.hero} alt="" className="absolute inset-0 h-full w-full object-cover object-top" />
                <div className="absolute inset-0 bg-[linear-gradient(90deg,#fff_0%,rgba(255,255,255,0.97)_31%,rgba(255,255,255,0.66)_56%,rgba(255,255,255,0)_84%)]" aria-hidden="true"></div>

                <div className="relative z-10 mx-auto flex min-h-[560px] max-w-7xl items-center px-6 sm:px-8 lg:px-10">
                    <div className="bm-hero-copy max-w-[34rem]">
                        <h1 className="text-4xl lg:text-[3rem] font-bold text-gray-900 mb-6 tracking-tight leading-[1.2]">
                            你可以免费开始，<br />也可以<span className="text-[#208752]">走得更远</span>
                        </h1>
                        <p className="text-[17px] text-gray-600 mb-10 max-w-md leading-relaxed font-medium">
                            BetterMe 不强迫改变，只在你需要的时候，给你更多支持
                        </p>

                        <div className="flex flex-wrap gap-x-6 gap-y-4">
                            <div className="flex items-center gap-2 text-[13px] font-bold text-gray-700"><div className="w-6 h-6 rounded-full bg-green-50 flex items-center justify-center text-[#208752]"><HeartIcon className="w-3.5 h-3.5" /></div> 核心功能永久免费</div>
                            <div className="flex items-center gap-2 text-[13px] font-bold text-gray-700"><div className="w-6 h-6 rounded-full bg-green-50 flex items-center justify-center text-[#208752]"><ShieldCheck className="w-3.5 h-3.5" /></div> 无广告干扰</div>
                            <div className="flex items-center gap-2 text-[13px] font-bold text-gray-700"><div className="w-6 h-6 rounded-full bg-green-50 flex items-center justify-center text-[#208752]"><Lock className="w-3.5 h-3.5" /></div> 你的数据，安全私密</div>
                        </div>
                    </div>
                </div>
                </div>
            </div>

            {/* Pricing Cards */}
            <div id="premium-plans" className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20 pb-20 mt-[-5rem]">
                <div className="grid md:grid-cols-3 gap-6 lg:gap-8 items-start">
                    {/* Free Plan */}
                    <div className="bg-white rounded-[2rem] p-8 lg:p-10 shadow-sm border border-gray-200">
                        <div className="text-xl font-bold text-gray-900 mb-2">免费版</div>
                        <div className="flex items-baseline gap-1 mb-2">
                            <span className="text-3xl font-bold text-gray-900">¥</span>
                            <span className="text-[3.5rem] font-black text-gray-900 tracking-tighter">0</span>
                        </div>
                        <p className="text-[13px] text-gray-500 font-medium mb-8">已经足够让你开始改变</p>

                        <ul className="space-y-4 mb-10 text-[14px] text-gray-700 font-medium h-[240px]">
                            <li className="flex items-center gap-3"><CheckCircle2 className="w-4 h-4 text-[#208752] shrink-0" /> 每日健康卡片</li>
                            <li className="flex items-center gap-3"><CheckCircle2 className="w-4 h-4 text-[#208752] shrink-0" /> 饮食记录 (拍照识别)</li>
                            <li className="flex items-center gap-3"><CheckCircle2 className="w-4 h-4 text-[#208752] shrink-0" /> 基础热量分析</li>
                            <li className="flex items-center gap-3"><CheckCircle2 className="w-4 h-4 text-[#208752] shrink-0" /> AI 基础建议</li>
                            <li className="flex items-center gap-3"><CheckCircle2 className="w-4 h-4 text-[#208752] shrink-0" /> 数据趋势查看</li>
                            <li className="flex items-center gap-3"><CheckCircle2 className="w-4 h-4 text-[#208752] shrink-0" /> 朋友餐桌 (社群互动)</li>
                        </ul>
                        <Link to={appLinks.download} className="block w-full py-4 rounded-xl border-2 border-[#208752] text-[#208752] font-bold hover:bg-green-50 transition-colors text-center">直接开始</Link>
                    </div>

                    {/* Premium Monthly */}
                    <div className="bg-white rounded-[2rem] p-8 lg:p-10 shadow-sm border border-gray-200 relative mt-4 md:mt-0">
                        <div className="text-xl font-bold text-gray-900 mb-2">Premium 月度</div>
                        <div className="flex items-baseline gap-1 mb-2">
                            <span className="text-3xl font-bold text-gray-900">¥</span>
                            <span className="text-[3.5rem] font-black text-gray-900 tracking-tighter">28</span>
                            <span className="text-gray-500 font-medium">/ 月</span>
                        </div>
                        <p className="text-[13px] text-gray-500 font-medium mb-8">当你想更认真一点</p>

                        <div className="mb-4 text-[13px] font-bold text-[#208752]">免费版全部功能 +</div>
                        <ul className="space-y-4 mb-10 text-[14px] text-gray-700 font-medium h-[200px]">
                            <li className="flex items-center gap-3"><CheckCircle2 className="w-4 h-4 text-[#208752] shrink-0" /> 更精准营养分析</li>
                            <li className="flex items-center gap-3"><CheckCircle2 className="w-4 h-4 text-[#208752] shrink-0" /> 每日个性化饮食计划</li>
                            <li className="flex items-center gap-3"><CheckCircle2 className="w-4 h-4 text-[#208752] shrink-0" /> 高级 AI 建议 (更具体)</li>
                            <li className="flex items-center gap-3"><CheckCircle2 className="w-4 h-4 text-[#208752] shrink-0" /> 睡前深度复盘报告</li>
                            <li className="flex items-center gap-3"><CheckCircle2 className="w-4 h-4 text-[#208752] shrink-0" /> 多 AI 形象 (声音/风格)</li>
                            <li className="flex items-center gap-3"><CheckCircle2 className="w-4 h-4 text-[#208752] shrink-0" /> 无限制历史数据</li>
                        </ul>
                        <Link to={appLinks.download} className="block w-full py-4 rounded-xl bg-white border border-gray-200 text-gray-900 font-bold hover:bg-gray-50 transition-colors shadow-sm mt-4 text-center">升级体验</Link>
                    </div>

                    {/* Premium Yearly - Highlighted */}
                    <div className="bg-[#208752] rounded-[2rem] p-8 lg:p-10 shadow-xl border border-[#1a7144] relative md:-mt-4">
                        <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white text-[#208752] px-4 py-1.5 rounded-full text-[12px] font-black tracking-widest shadow-sm">最受欢迎</div>
                        <div className="text-xl font-bold text-white mb-2">Premium 年度</div>
                        <div className="flex items-baseline gap-1 mb-2">
                            <span className="text-3xl font-bold text-white/90">¥</span>
                            <span className="text-[3.5rem] font-black text-white tracking-tighter">198</span>
                            <span className="text-white/70 font-medium">/ 年</span>
                        </div>
                        <div className="text-[13px] text-white/80 font-medium mb-1">约 ¥0.54 / 天</div>
                        <p className="text-[13px] text-white/80 font-medium mb-8">慢慢变好，比什么都重要</p>

                        <div className="mb-4 text-[13px] font-bold text-white/90">月度全部功能 +</div>
                        <ul className="space-y-4 mb-10 text-[14px] text-white/90 font-medium h-[180px]">
                            <li className="flex items-center gap-3"><CheckCircle2 className="w-4 h-4 text-white shrink-0" /> 周报 / 月报导出</li>
                            <li className="flex items-center gap-3"><CheckCircle2 className="w-4 h-4 text-white shrink-0" /> 长期趋势分析</li>
                            <li className="flex items-center gap-3"><CheckCircle2 className="w-4 h-4 text-white shrink-0" /> 优先体验新功能</li>
                            <li className="flex items-center gap-3"><CheckCircle2 className="w-4 h-4 text-white shrink-0" /> 专属客服支持</li>
                        </ul>
                        <Link to={appLinks.download} className="block w-full py-4 rounded-xl bg-white text-[#208752] font-black hover:bg-green-50 transition-colors shadow-lg mt-8 text-center">开始长期陪伴</Link>
                    </div>
                </div>
            </div>

            {/* Features Comparison Table */}
            <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16 hidden md:block border-t border-gray-100">
                <div className="grid grid-cols-4 gap-4 pb-4 border-b-2 border-gray-900 font-bold text-[15px] text-gray-900">
                    <div className="col-span-1">功能对比</div>
                    <div className="text-center">免费版</div>
                    <div className="text-center">Premium 月度</div>
                    <div className="text-center text-[#208752]">Premium 年度</div>
                </div>

                {[
                    { name: '每日健康卡片', icon: '📋', free: true, mon: true, yr: true },
                    { name: '饮食记录 (拍照识别)', icon: '📸', free: true, mon: true, yr: true },
                    { name: '基础热量分析', icon: '📊', free: true, mon: true, yr: true },
                    { name: '深度营养分析', icon: '🔬', free: false, mon: true, yr: true },
                    { name: '个性化饮食计划', icon: '🎯', free: false, mon: true, yr: true },
                    { name: 'AI 高级建议', icon: '✨', free: false, mon: true, yr: true },
                    { name: '多 AI 形象 (声音/风格)', icon: '🎭', free: false, mon: true, yr: true },
                    { name: '睡前深度复盘报告', icon: '🌙', free: false, mon: true, yr: true },
                    { name: '周报 / 月报导出', icon: '📄', free: false, mon: false, yr: true },
                    { name: '长期趋势分析', icon: '📈', free: false, mon: false, yr: true },
                    { name: '优先体验新功能', icon: '🚀', free: false, mon: false, yr: true },
                    { name: '专属客服支持', icon: '🎧', free: false, mon: false, yr: true },
                ].map((row, idx) => (
                    <div key={idx} className="grid grid-cols-4 gap-4 py-4 border-b border-gray-100 text-[14px] text-gray-700 items-center hover:bg-gray-50 transition-colors">
                        <div className="col-span-1 flex items-center gap-2"><span className="text-lg w-6 text-center">{row.icon}</span> {row.name}</div>
                        <div className="text-center flex justify-center">{row.free ? <CheckCircle2 className="w-4 h-4 text-[#208752]" /> : <span className="text-gray-300">—</span>}</div>
                        <div className="text-center flex justify-center">{row.mon ? <CheckCircle2 className="w-4 h-4 text-[#208752]" /> : <span className="text-gray-300">—</span>}</div>
                        <div className="text-center flex justify-center">{row.yr ? <CheckCircle2 className="w-4 h-4 text-[#208752]" /> : <span className="text-gray-300">—</span>}</div>
                    </div>
                ))}
            </div>

            {/* Why Upgrade */}
            <div className="bg-white py-20">
                <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h2 className="text-2xl font-bold text-gray-900 mb-10 tracking-tight">为什么升级 Premium？</h2>
                    <div className="grid md:grid-cols-3 gap-6">
                        <div className="bg-[#f8fbf9] rounded-[2rem] p-8 border border-green-50 shadow-sm flex items-start gap-4">
                            <div className="w-12 h-12 bg-white rounded-2xl shadow-sm flex items-center justify-center shrink-0 text-3xl">🤖</div>
                            <div>
                                <h4 className="font-bold text-gray-900 mb-2">更聪明的 Lily</h4>
                                <p className="text-[13px] text-gray-500 font-medium leading-relaxed">不只是提醒，而是理解你每一天的状态</p>
                            </div>
                        </div>
                        <div className="bg-[#fcfdfd] rounded-[2rem] p-8 border border-blue-50 shadow-sm flex items-start gap-4">
                            <div className="w-12 h-12 bg-white rounded-2xl shadow-sm flex items-center justify-center shrink-0 text-3xl">📊</div>
                            <div>
                                <h4 className="font-bold text-gray-900 mb-2">更深的分析</h4>
                                <p className="text-[13px] text-gray-500 font-medium leading-relaxed">不只是数字，而是知道你该怎么调整</p>
                            </div>
                        </div>
                        <div className="bg-[#fdfdfc] rounded-[2rem] p-8 border border-orange-50 shadow-sm flex items-start gap-4">
                            <div className="w-12 h-12 bg-white rounded-2xl shadow-sm flex items-center justify-center shrink-0 text-3xl">🌱</div>
                            <div>
                                <h4 className="font-bold text-gray-900 mb-2">更稳定的改变</h4>
                                <p className="text-[13px] text-gray-500 font-medium leading-relaxed">不靠意志力，而是靠节奏，变成更好的自己</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* FAQ */}
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
                <h2 className="text-2xl font-bold text-gray-900 mb-10 tracking-tight">常见问题</h2>
                <div className="grid md:grid-cols-2 gap-x-12 gap-y-8">
                    {[
                        { q: "必须付费才能使用吗？", a: "不需要。免费版已经可以支持你完成大部分的健康管理。" },
                        { q: "什么时候需要升级？", a: "当你希望更细致地了解身体变化，或想要更个性化建议时。" },
                        { q: "可以随时取消吗？", a: "可以，随时取消，没有任何隐藏费用。" },
                        { q: "数据安全吗？", a: "所有数据均加密处理，不会被用于任何商业用途。" },
                    ].map((faq, idx) => (
                        <div key={idx} className="border-b border-gray-100 pb-6">
                            <div className="flex justify-between items-start gap-4 mb-2">
                                <h4 className="font-bold text-gray-900 text-[15px] leading-tight">{faq.q}</h4>
                                <span className="text-gray-400 font-light">+</span>
                            </div>
                            <p className="text-[13.5px] text-gray-500 font-medium leading-relaxed pr-6">{faq.a}</p>
                        </div>
                    ))}
                </div>
            </div>

        </div>
    );
};

const HeartIcon = ({ className }: { className?: string }) => (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
        <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
    </svg>
)

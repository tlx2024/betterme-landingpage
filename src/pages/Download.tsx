import React from 'react';
import { ShieldCheck, Lock, Shield, CheckCircle2, Leaf, Camera, Moon, Heart, ChevronRight, Apple } from 'lucide-react';
import { Link } from 'react-router-dom';
import { localMedia } from '../assets/localMedia';
import { appLinks } from '../config/appLinks';
import { MiniProgramCode } from '../components/ReusableUI';

const downloadImages = {
    hero: '/download/gpt-hero-download.png',
};

export const DownloadPage = () => {
    return (
        <div className="pt-20 bg-[#fafcfb] min-h-screen">
            {/* Hero Section */}
            <div className="bm-page-hero relative overflow-hidden pb-28">
                <div className="bm-hero-shell relative mx-auto min-h-[580px] max-w-[1800px] overflow-hidden">
                <img src={downloadImages.hero} alt="" className="absolute inset-0 h-full w-full object-cover object-top" />
                <div className="absolute inset-0 bg-[linear-gradient(90deg,#fff_0%,rgba(255,255,255,0.97)_31%,rgba(255,255,255,0.68)_56%,rgba(255,255,255,0)_84%)]" aria-hidden="true"></div>
                <div className="relative z-10 mx-auto flex min-h-[580px] max-w-7xl items-center px-6 sm:px-8 lg:px-10">
                    <div className="bm-hero-copy max-w-[36rem]">
                        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 tracking-tight leading-[1.2]">
                            慢慢变好，<br />
                            从今天开始 <span className="text-[#208752]">🌱</span>
                        </h1>
                        <p className="text-lg text-gray-600 mb-10 max-w-md leading-relaxed font-medium">
                            BetterMe 通过科学的饮食、运动和生活习惯建议，<br />陪你一起成为更好的自己。
                        </p>

                        <div className="flex flex-wrap gap-8">
                            <div className="flex flex-col items-center sm:items-start text-center sm:text-left gap-3">
                                <div className="w-12 h-12 rounded-2xl border border-gray-100 shadow-sm flex items-center justify-center shrink-0">
                                    <Heart className="w-6 h-6 text-[#208752]" />
                                </div>
                                <div>
                                    <div className="text-[14px] font-bold text-[#208752]">AI 个性化陪伴</div>
                                    <div className="text-[12px] text-gray-500 font-medium">更懂你的健康助手</div>
                                </div>
                            </div>
                            <div className="flex flex-col items-center sm:items-start text-center sm:text-left gap-3">
                                <div className="w-12 h-12 rounded-2xl border border-gray-100 shadow-sm flex items-center justify-center shrink-0">
                                    <Leaf className="w-6 h-6 text-[#208752]" />
                                </div>
                                <div>
                                    <div className="text-[14px] font-bold text-[#208752]">科学有效</div>
                                    <div className="text-[12px] text-gray-500 font-medium">专业团队研发</div>
                                </div>
                            </div>
                            <div className="flex flex-col items-center sm:items-start text-center sm:text-left gap-3">
                                <div className="w-12 h-12 rounded-2xl border border-gray-100 shadow-sm flex items-center justify-center shrink-0">
                                    <CheckCircle2 className="w-6 h-6 text-[#208752]" />
                                </div>
                                <div>
                                    <div className="text-[14px] font-bold text-[#208752]">温暖不焦虑</div>
                                    <div className="text-[12px] text-gray-500 font-medium">小改变，长期陪伴</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                </div>
            </div>

            {/* Download Card */}
            <div id="app-download" className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20 mt-[-8rem] mb-16 lg:mb-24">
                <div className="bg-gradient-to-r from-[#e8f7ee] to-[#f4fcf6] rounded-[2rem] p-8 lg:p-12 shadow-xl border border-white shadow-[#208752]/5 flex flex-col md:flex-row items-center justify-between gap-8">
                    <div>
                        <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-2">免费下载<br />BetterMe</h2>
                        <div className="text-[#208752] font-medium flex items-center gap-2">开始你的健康之旅 <span className="text-2xl transform rotate-[20deg] inline-block -ml-1">✏️</span></div>
                    </div>

                    <div className="flex flex-col sm:flex-row items-center gap-6 shrink-0 bg-white p-6 rounded-[2rem] shadow-sm border border-gray-50">
                        <div id="mini-program" className="w-32 h-32 bg-white rounded-xl overflow-hidden p-2 flex items-center justify-center shrink-0 scroll-mt-28">
                            <MiniProgramCode className="h-full w-full p-2" />
                        </div>
                        <div className="flex flex-col gap-3">
                            <a href={appLinks.appStore} target="_blank" rel="noreferrer" className="bg-gray-900 text-white px-6 py-3 rounded-xl flex items-center gap-3 hover:bg-gray-800 transition-colors">
                                <Apple className="w-6 h-6 fill-current" />
                                <div className="text-left">
                                    <div className="text-[10px] text-gray-300">Download on the</div>
                                    <div className="text-[15px] font-semibold leading-tight">App Store</div>
                                </div>
                            </a>
                            <a href={appLinks.googlePlay} target="_blank" rel="noreferrer" className="bg-gray-900 text-white px-6 py-3 rounded-xl flex items-center gap-3 hover:bg-gray-800 transition-colors">
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path d="M3.4 2.8C3.1 3.2 3 3.7 3 4.4V19.6C3 20.3 3.1 20.8 3.4 21.2L3.5 21.3L13.8 11.2V11V10.8L3.5 0.7L3.4 2.8Z" fill="#3BCCA6" /><path d="M17.2 14.5L13.8 11.2V10.8L17.2 7.5L17.3 7.6L21.3 9.9C22.4 10.5 22.4 11.5 21.3 12.1L17.3 14.4L17.2 14.5Z" fill="#FCE244" /><path d="M17.3 14.4L13.8 11V11.2L3.5 21.3C4 21.8 4.7 21.9 5.5 21.4L17.3 14.4Z" fill="#F14E5D" /><path d="M17.3 7.6L5.5 2.6C4.7 2.1 4 2.2 3.5 2.8L13.8 10.8V11L17.3 7.6Z" fill="#4B90EF" /></svg>
                                <div className="text-left">
                                    <div className="text-[10px] text-gray-300">GET IT ON</div>
                                    <div className="text-[15px] font-semibold leading-tight">Google Play</div>
                                </div>
                            </a>
                        </div>
                    </div>
                </div>
            </div>

            {/* Testimonials Banner */}
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
                <div className="text-center font-bold text-gray-500 mb-8 flex items-center justify-center gap-2">
                    <span className="text-[#208752] opacity-50">🍃</span>
                    已经有超过 <span className="text-gray-900 text-lg mx-1">50,000,000</span> 人选择 BetterMe
                    <span className="text-[#208752] opacity-50 scale-x-[-1]">🍃</span>
                </div>

                <div className="grid md:grid-cols-3 gap-6">
                    {[
                        { name: "小雨", avatar: localMedia.avatars.deer, text: "Lily 就像一个朋友，会提醒我、鼓励我，让我更有动力坚持。" },
                        { name: "Alex", avatar: localMedia.avatars.ken, text: "之前总是三分钟热度，现在慢慢养成了习惯，身体也更轻松了！" },
                        { name: "妈妈圆圈", avatar: localMedia.avatars.sophie, text: "产后恢复很难，BetterMe 给了我很多实用的建议和陪伴。" }
                    ].map((t, i) => (
                        <div key={i} className="bg-white rounded-[2rem] p-6 shadow-sm border border-gray-100 relative">
                            <div className="text-3xl text-gray-200 absolute top-4 left-6">"</div>
                            <p className="text-[13px] text-gray-600 font-medium leading-relaxed mb-6 mt-4 relative z-10 h-12 flex items-center">{t.text}</p>
                            <div className="flex items-center gap-3 pt-4 border-t border-gray-50">
                                <img src={t.avatar} className="w-10 h-10 rounded-full object-cover" />
                                <div className="flex-1">
                                    <div className="font-bold text-[13px] text-gray-900">{t.name}</div>
                                    <div className="flex text-yellow-400 mt-0.5">
                                        {[1, 2, 3, 4, 5].map(s => <svg key={s} className="w-3 h-3 fill-current" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" /></svg>)}
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Privacy Section */}
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
                <div className="bg-white rounded-[2rem] shadow-sm border border-gray-100 p-8 flex flex-col md:flex-row items-center justify-between gap-8">
                    <div className="flex items-center gap-4">
                        <div className="w-14 h-14 rounded-full bg-green-50 flex items-center justify-center shrink-0">
                            <Heart className="w-6 h-6 text-[#208752]" />
                        </div>
                        <div>
                            <h3 className="font-bold text-[17px] text-gray-900 mb-1">你的健康数据，始终属于你</h3>
                            <p className="text-[13px] text-gray-500 font-medium">我们严格保护你的隐私，不会用于任何商业用途。</p>
                        </div>
                    </div>
                    <div className="flex items-center gap-6 md:gap-12 text-center">
                        <div className="flex flex-col items-center gap-2">
                            <div className="w-10 h-10 border border-gray-100 rounded-xl flex items-center justify-center shadow-sm text-gray-400"><Lock className="w-5 h-5" /></div>
                            <div className="text-[11px] font-bold text-gray-600">隐私保护</div>
                        </div>
                        <div className="flex flex-col items-center gap-2">
                            <div className="w-10 h-10 border border-gray-100 rounded-xl flex items-center justify-center shadow-sm text-gray-400"><ShieldCheck className="w-5 h-5" /></div>
                            <div className="text-[11px] font-bold text-gray-600">数据加密</div>
                        </div>
                        <div className="flex flex-col items-center gap-2">
                            <div className="w-10 h-10 border border-gray-100 rounded-xl flex items-center justify-center shadow-sm text-gray-400"><Shield className="w-5 h-5" /></div>
                            <div className="text-[11px] font-bold text-gray-600">安全可靠</div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Bottom Features Gradient */}
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
                <div className="bg-gradient-to-br from-[#f8fcf9] to-[#ebf7ef] rounded-[3rem] p-10 lg:p-12 border border-green-50 text-center relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-64 h-64 bg-white rounded-full blur-3xl opacity-50 -z-10"></div>
                    <div className="absolute bottom-0 left-0 w-64 h-64 bg-white rounded-full blur-3xl opacity-50 -z-10"></div>

                    <h2 className="text-2xl font-bold text-gray-900 mb-10 tracking-tight flex items-center justify-center gap-2 z-10 relative">
                        每一步小改变，都会带来大不同 <span className="text-[#e08936]">✨</span>
                    </h2>

                    <div className="flex flex-wrap justify-center gap-y-8 gap-x-12 mb-12 relative z-10">
                        {[
                            { icon: <Camera className="w-6 h-6" />, label: "饮食记录" },
                            { icon: <Leaf className="w-6 h-6" />, label: "运动指导" },
                            { icon: <Moon className="w-6 h-6" />, label: "睡眠改善" },
                            { icon: <Heart className="w-6 h-6" />, label: "情绪支持" },
                            { icon: <ShieldCheck className="w-6 h-6" />, label: "健康数据追踪" },
                        ].map((m, i) => (
                            <div key={i} className="flex flex-col items-center gap-3">
                                <div className="w-14 h-14 rounded-2xl bg-white shadow-sm border border-gray-50 flex items-center justify-center text-[#208752] hover:-translate-y-1 transition-transform cursor-pointer">
                                    {m.icon}
                                </div>
                                <div className="text-[13px] font-bold text-gray-600">{m.label}</div>
                            </div>
                        ))}
                    </div>

                    <Link to={appLinks.pricing} className="text-[#208752] font-bold flex items-center justify-center gap-1 mx-auto hover:text-[#1a7144] relative z-10">
                        了解更多高级功能 <ChevronRight className="w-4 h-4" />
                    </Link>
                </div>
            </div>
        </div>
    );
};

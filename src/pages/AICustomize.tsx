import React, { useState } from 'react';
import { Settings2, User, Palette, MessageCircle, PlayCircle, Heart, Lock, CheckCircle2, ChevronRight, Apple, Play, MessageSquare, Mic, Pause, RefreshCw, LayoutGrid } from 'lucide-react';
import { Link } from 'react-router-dom';
import { localMedia } from '../assets/localMedia';
import { appLinks } from '../config/appLinks';

const customizeImages = {
    hero: '/ai-custom/gpt-hero-customize.png',
};

export const AICustomizePage = () => {
    const [activeTab, setActiveTab] = useState('hair');
    const [selectedPortraitIndex, setSelectedPortraitIndex] = useState(0);
    const [selectedColorIndex, setSelectedColorIndex] = useState(1);
    const [selectedVoice, setSelectedVoice] = useState('温柔治愈');
    const [companionName, setCompanionName] = useState('小Lily');
    const [isPreviewingVoice, setIsPreviewingVoice] = useState(false);

    const avatarImages = localMedia.aiPortraits;
    const colors = ['#5c4033', '#8b5a2b', '#cd853f', '#d2b48c', '#e6c280', '#eebd7f', '#d4a373', '#e4a0f7', '#6c5ce7'];
    const selectedPortrait = avatarImages[selectedPortraitIndex];
    const selectedColor = colors[selectedColorIndex];

    return (
        <div className="pt-20 bg-[#f6f9f8] min-h-screen">
            {/* Hero Section */}
            <div className="bm-page-hero relative overflow-hidden pb-24">
                <div className="bm-hero-shell relative mx-auto min-h-[600px] max-w-[1800px] overflow-hidden">
                <img src={customizeImages.hero} alt="" className="absolute inset-0 h-full w-full object-cover object-top" />
                <div className="absolute inset-0 bg-[linear-gradient(90deg,#fff_0%,rgba(255,255,255,0.97)_31%,rgba(255,255,255,0.68)_56%,rgba(255,255,255,0)_84%)]" aria-hidden="true"></div>

                <div className="relative z-10 mx-auto flex min-h-[600px] max-w-7xl items-center px-6 sm:px-8 lg:px-10">
                    <div className="bm-hero-copy max-w-[39rem]">
                        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white text-gray-500 text-xs font-bold mb-6 border border-gray-100 shadow-sm">
                            <Settings2 className="w-3.5 h-3.5 text-[#208752]" /> 你的专属 AI 健康伙伴，由你定义
                        </div>
                        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 tracking-tight leading-[1.2]">
                            定制一个只属于你的<br />
                            <span className="text-[#208752]">AI 健康伙伴 Lily</span>
                        </h1>
                        <p className="text-lg text-gray-600 max-w-lg leading-relaxed mb-10">
                            她会记得你的目标、喜好与习惯，<br />用最合适的方式陪伴你每天进步一点点。
                        </p>

                        <div className="flex gap-8">
                            <div className="flex flex-col items-center sm:items-start text-center sm:text-left">
                                <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center text-[#208752] mb-3 shadow-sm border border-gray-50"><Heart className="w-6 h-6" /></div>
                                <div className="font-bold text-gray-900 text-[13px] mb-1">更懂你</div>
                                <div className="text-[11px] text-gray-500 font-medium">记住你的偏好</div>
                            </div>
                            <div className="flex flex-col items-center sm:items-start text-center sm:text-left">
                                <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center text-[#208752] mb-3 shadow-sm border border-gray-50"><MessageCircle className="w-6 h-6" /></div>
                                <div className="font-bold text-gray-900 text-[13px] mb-1">更贴心</div>
                                <div className="text-[11px] text-gray-500 font-medium">用你喜欢的方式说话</div>
                            </div>
                            <div className="flex flex-col items-center sm:items-start text-center sm:text-left">
                                <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center text-[#208752] mb-3 shadow-sm border border-gray-50"><Lock className="w-6 h-6" /></div>
                                <div className="font-bold text-gray-900 text-[13px] mb-1">更安心</div>
                                <div className="text-[11px] text-gray-500 font-medium">你的数据只属于你</div>
                            </div>
                        </div>
                    </div>
                </div>
                </div>
            </div>

            {/* Main Configuration Section */}
            <div id="customize-studio" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20 pb-24 mt-[-5rem] scroll-mt-28">
                {/* Step 1: Design Lily */}
                <div className="mb-8 bg-white rounded-[2rem] shadow-sm border border-gray-100 p-8 flex flex-col xl:flex-row gap-8">
                    <div className="flex-1">
                        <div className="flex items-center gap-3 mb-6">
                            <div className="w-8 h-8 rounded-full bg-[#208752] text-white flex items-center justify-center font-bold font-mono">1</div>
                            <h2 className="text-xl font-bold text-gray-900 tracking-tight">设计你的 Lily</h2>
                        </div>

                        <div className="flex gap-6 h-[400px]">
                            {/* Sidebar Tabs */}
                            <div className="w-[120px] shrink-0 flex flex-col gap-2 border-r border-gray-100 pr-4">
                                {[
                                    { id: 'hair', label: '发型', icon: <User className="w-4 h-4" /> },
                                    { id: 'face', label: '脸型', icon: <div className="w-4 h-4 rounded-full border-2 border-current"></div> },
                                    { id: 'skin', label: '肤色', icon: <Palette className="w-4 h-4" /> },
                                    { id: 'eyes', label: '眼睛', icon: <div className="w-4 h-2 rounded-full border-2 border-current"></div> },
                                    { id: 'outfit', label: '穿搭', icon: <div className="w-4 h-4 border-2 border-current rounded-sm"></div> },
                                    { id: 'voice', label: '声音', icon: <Mic className="w-4 h-4" /> },
                                ].map(tab => (
                                    <button
                                        key={tab.id}
                                        onClick={() => setActiveTab(tab.id)}
                                        className={`flex items-center gap-2 px-3 py-2.5 rounded-xl text-[13px] font-bold transition-colors ${activeTab === tab.id ? 'bg-[#e8f7ee] text-[#208752]' : 'text-gray-500 hover:bg-gray-50'
                                            }`}
                                    >
                                        {tab.icon} {tab.label}
                                    </button>
                                ))}
                            </div>

                            {/* Content Area */}
                            <div className="flex-1 flex flex-col">
                                <div className="grid grid-cols-4 gap-4 mb-auto">
                                    {avatarImages.slice(0, 8).map((img, idx) => (
                                        <button key={idx} onClick={() => setSelectedPortraitIndex(idx)} className={`aspect-square rounded-2xl overflow-hidden cursor-pointer border-2 transition-all ${idx === selectedPortraitIndex ? 'border-[#208752] shadow-md' : 'border-transparent hover:border-gray-200'}`}>
                                            <img src={img} className="w-full h-full object-contain bg-transparent" />
                                        </button>
                                    ))}
                                </div>

                                {/* Color Picker */}
                                <div className="mt-6 flex items-center gap-3">
                                    <button onClick={() => setSelectedPortraitIndex((selectedPortraitIndex - 1 + avatarImages.length) % avatarImages.length)} className="w-6 h-6 rounded-full border border-gray-200 flex items-center justify-center text-gray-400 hover:text-gray-600"><ChevronRight className="w-4 h-4 rotate-180" /></button>
                                    {colors.map((color, idx) => (
                                        <button key={idx} onClick={() => setSelectedColorIndex(idx)} className={`w-8 h-8 rounded-full border-2 transition-transform hover:scale-110 ${idx === selectedColorIndex ? 'border-gray-400 scale-110 shadow-sm' : 'border-transparent'}`} style={{ backgroundColor: color }}>
                                            {idx === selectedColorIndex && <CheckCircle2 className="w-4 h-4 text-white mx-auto opacity-50" />}
                                        </button>
                                    ))}
                                    <button onClick={() => setSelectedPortraitIndex((selectedPortraitIndex + 1) % avatarImages.length)} className="w-6 h-6 rounded-full border border-gray-200 flex items-center justify-center text-gray-400 hover:text-gray-600"><ChevronRight className="w-4 h-4" /></button>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Preview Area */}
                    <div className="xl:w-[400px] shrink-0 rounded-[1.5rem] relative overflow-hidden flex items-center justify-center min-h-[400px]" style={{ background: `linear-gradient(180deg, ${selectedColor}22 0%, #f9fafb 58%, #f3f4f6 100%)` }}>
                        <img src={selectedPortrait} className="absolute bottom-10 h-[70%] rounded-[2rem] object-cover shadow-lg" />

                        <div className="absolute right-4 top-1/2 -translate-y-1/2 flex flex-col gap-3">
                            <button onClick={() => setSelectedPortraitIndex((selectedPortraitIndex + 1) % avatarImages.length)} className="w-14 h-14 bg-white/80 backdrop-blur rounded-2xl shadow-sm border border-gray-100 flex flex-col items-center justify-center gap-1 hover:bg-white transition-colors">
                                <RefreshCw className="w-5 h-5 text-[#208752]" />
                                <span className="text-[10px] font-bold text-[#208752]">换个动作</span>
                            </button>
                            <button onClick={() => {
                                setSelectedPortraitIndex(Math.floor(Math.random() * avatarImages.length));
                                setSelectedColorIndex(Math.floor(Math.random() * colors.length));
                            }} className="w-14 h-14 bg-white/80 backdrop-blur rounded-2xl shadow-sm border border-gray-100 flex flex-col items-center justify-center gap-1 hover:bg-white transition-colors">
                                <LayoutGrid className="w-5 h-5 text-[#208752]" />
                                <span className="text-[10px] font-bold text-[#208752]">随机搭配</span>
                            </button>
                        </div>
                    </div>
                </div>

                {/* Step 2 & 3 row */}
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
                    {/* Step 2 */}
                    <div className="bg-white rounded-[2rem] shadow-sm border border-gray-100 p-8 flex flex-col">
                        <div className="flex items-center gap-3 mb-2">
                            <div className="w-8 h-8 rounded-full bg-[#208752] text-white flex items-center justify-center font-bold font-mono">2</div>
                            <h2 className="text-lg font-bold text-gray-900 tracking-tight">选择 Lily 的声音</h2>
                        </div>
                        <p className="text-[13px] text-gray-500 mb-6">找到你最喜欢的声音风格</p>

                        <div className="space-y-3 flex-1">
                            {['温柔治愈', '活力元气', '知性温暖', '轻快俏皮'].map((voice) => (
                                <button key={voice} onClick={() => {
                                    setSelectedVoice(voice);
                                    setIsPreviewingVoice(true);
                                }} className={`w-full flex items-center justify-between px-4 py-3 rounded-xl border transition-all ${selectedVoice === voice ? 'border-[#208752] bg-[#f2fbf5]' : 'border-gray-100 hover:border-gray-200'}`}>
                                    <div className="flex items-center gap-3">
                                        {selectedVoice === voice && isPreviewingVoice ? <Pause className="w-5 h-5 text-[#208752] fill-[#208752]" /> : <PlayCircle className="w-5 h-5 text-gray-400" />}
                                        <span className={`text-[14px] font-bold ${selectedVoice === voice ? 'text-[#208752]' : 'text-gray-700'}`}>{voice}</span>
                                    </div>
                                    {selectedVoice === voice && isPreviewingVoice && (
                                        <div className="flex items-center gap-0.5 h-4">
                                            {[1, 2, 1, 3, 1, 2, 1, 2, 3, 1, 2, 1].map((h, i) => (
                                                <div key={i} className={`w-1 bg-[#208752]/50 rounded-full animate-pulse`} style={{ height: `${h * 30}%`, animationDelay: `${i * 0.1}s` }}></div>
                                            ))}
                                        </div>
                                    )}
                                </button>
                            ))}
                        </div>
                    </div>

                    {/* Step 3 */}
                    <div className="bg-white rounded-[2rem] shadow-sm border border-gray-100 p-8 flex flex-col">
                        <div className="flex items-center gap-3 mb-2">
                            <div className="w-8 h-8 rounded-full bg-[#208752] text-white flex items-center justify-center font-bold font-mono">3</div>
                            <h2 className="text-lg font-bold text-gray-900 tracking-tight">给她起一个专属称呼</h2>
                        </div>
                        <p className="text-[13px] text-gray-500 mb-6">一个只有你们知道的名字</p>

                        <div className="mb-6">
                            <input
                                type="text"
                                value={companionName}
                                onChange={(event) => setCompanionName(event.target.value.slice(0, 12))}
                                className="w-full px-4 py-3 border-2 border-gray-100 rounded-xl focus:border-[#208752] focus:ring-0 outline-none text-gray-800 font-bold"
                            />
                            <div className="text-right text-[11px] text-gray-400 mt-1">{companionName.length}/12</div>
                        </div>

                        <div className="mt-auto">
                            <div className="text-[12px] font-bold text-gray-500 mb-3">推荐称呼</div>
                            <div className="flex flex-wrap gap-2">
                                {['Lily', '小Lily', '莉莉', '小葵', '元气酱', '健康小管家'].map((name, idx) => (
                                    <button key={idx} onClick={() => setCompanionName(name)} className={`px-4 py-1.5 rounded-full text-[13px] font-medium transition-colors ${name === companionName ? 'bg-[#e8f7ee] text-[#208752] border border-[#208752]/20' : 'bg-gray-50 text-gray-600 hover:bg-gray-100'}`}>
                                        {name}
                                    </button>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Final Preview Card */}
                    <div className="bg-gradient-to-br from-[#f8fbf9] to-[#edf7f1] rounded-[2rem] border border-green-50 p-8 flex flex-col items-center text-center relative overflow-hidden lg:col-span-1 md:col-span-2">
                        <div className="relative z-10 w-full">
                            <h3 className="text-lg font-bold text-gray-900 mb-1">预览你的专属 {companionName}</h3>
                            <p className="text-[12px] text-gray-500 mb-6">她已经迫不及待想和你见面啦！</p>
                        </div>

                        <div className="relative h-[180px] w-full flex items-end justify-center z-10">
                            <img src={selectedPortrait} className="h-[90%] rounded-[2rem] object-contain absolute bottom-0 shadow-lg" />
                        </div>

                        <button onClick={() => setIsPreviewingVoice(!isPreviewingVoice)} className="relative z-20 mt-4 bg-white/80 backdrop-blur shadow-sm border border-gray-100 px-5 py-2 rounded-full text-[13px] font-bold text-gray-700 flex items-center gap-2 hover:bg-white hover:text-[#208752] transition-colors">
                            {isPreviewingVoice ? <Pause className="w-4 h-4 text-[#208752]" /> : <PlayCircle className="w-4 h-4 text-[#208752]" />} {isPreviewingVoice ? `暂停 ${selectedVoice}` : `试听 ${selectedVoice}`}
                        </button>
                    </div>
                </div>

                {/* CTA Button */}
                <div className="text-center mb-16">
                    <Link to={appLinks.download} className="inline-block bg-[#208752] text-white px-10 py-4 rounded-full font-bold text-lg hover:bg-[#1a7144] hover:shadow-xl hover:shadow-[#208752]/20 transition-all hover:-translate-y-1 mb-3">
                        完成定制，开始我的健康之旅
                    </Link>
                    <div className="text-[13px] text-gray-500">稍后也可以在「我的」页面随时修改哦</div>
                </div>

                {/* Why Customize */}
                <div className="bg-white rounded-[3rem] p-10 lg:p-12 shadow-sm border border-gray-50 mb-16">
                    <div className="text-center mb-10 flex items-center justify-center gap-2">
                        <span className="text-[#208752] opacity-50">🍃</span>
                        <h3 className="text-2xl font-bold text-gray-900">为什么要定制专属 Lily？</h3>
                        <span className="text-[#208752] opacity-50 scale-x-[-1]">🍃</span>
                    </div>
                    <div className="grid md:grid-cols-4 gap-8">
                        {[
                            { icon: <Heart className="w-6 h-6 text-[#208752]" />, title: "更懂你的需求", desc: "记住你的目标、口味、生活习惯，建议更精准。" },
                            { icon: <MessageCircle className="w-6 h-6 text-[#e08936]" />, title: "更有动力坚持", desc: "每天一句鼓励，一份陪伴，让健康习惯变得有温度。" },
                            { icon: <User className="w-6 h-6 text-[#1a9a5a]" />, title: "更有归属感", desc: "一个独一无二的伙伴，让坚持不再孤单。" },
                            { icon: <Lock className="w-6 h-6 text-[#8b5cf6]" />, title: "更注重隐私", desc: "所有对话与数据安全加密，只为更好的你服务。" }
                        ].map((item, idx) => (
                            <div key={idx} className="flex flex-col items-center text-center">
                                <div className="w-14 h-14 rounded-full bg-gray-50 border border-gray-100 flex items-center justify-center mb-4 shadow-[inset_0_2px_10px_rgb(0,0,0,0.02)]">
                                    {item.icon}
                                </div>
                                <h4 className="font-bold text-gray-900 mb-2">{item.title}</h4>
                                <p className="text-[13px] text-gray-500 leading-relaxed max-w-[200px]">{item.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Reviews */}
                <div className="text-center mb-10 flex items-center justify-between">
                    <h3 className="text-2xl font-bold text-gray-900 flex-1">他们的 Lily，他们的改变</h3>
                    <Link to={appLinks.stories} className="flex items-center text-[#208752] font-bold text-sm hover:text-[#1a7144]">查看更多故事 <ChevronRight className="w-4 h-4 ml-1" /></Link>
                </div>
                <div className="grid md:grid-cols-3 gap-6">
                    {[
                        { name: "@小鹿", status: "32岁 / 减重 6.8kg", avatar: localMedia.avatars.deer, quote: "“我的 Lily 会在我想要放弃时，说刚好再坚持一下~”" },
                        { name: "@阿Ken", status: "28岁 / 腰围 -9cm", avatar: localMedia.avatars.ken, quote: "“风格和声音都可以自己选，感觉她真的很懂我。”" },
                        { name: "@Sophie", status: "26岁 / 产后恢复", avatar: localMedia.avatars.sophie, quote: "“每天早安卡片是我带娃后最期待的时刻。”" }
                    ].map((review, idx) => (
                        <div key={idx} className="bg-white rounded-3xl p-6 border border-gray-100 shadow-sm flex items-start gap-4">
                            <img src={review.avatar} className="w-12 h-12 rounded-full object-cover shrink-0" />
                            <div>
                                <p className="text-[13px] text-gray-700 font-medium mb-3 h-10">
                                    {review.quote}
                                </p>
                                <div className="flex items-center justify-between">
                                    <span className="font-bold text-[13px] text-gray-900">{review.name}</span>
                                    <span className="text-[11px] text-gray-400">{review.status}</span>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

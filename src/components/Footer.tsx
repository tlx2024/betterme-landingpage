import React from 'react';
import { Apple, Mail, Play } from 'lucide-react';
import { Link } from 'react-router-dom';
import { appLinks } from '../config/appLinks';
import { siteConfig } from '../config/siteConfig';
import { MiniProgramCode } from './ReusableUI';

const StoreButton = ({ type }: { type: 'apple' | 'google' }) => (
    <a
        href={type === 'apple' ? appLinks.appStore : appLinks.googlePlay}
        target="_blank"
        rel="noreferrer"
        className="inline-flex h-11 min-w-[154px] items-center justify-center gap-2 rounded-lg bg-[#101827] px-4 text-white shadow-[0_8px_20px_rgba(16,24,39,0.16)] transition-transform hover:-translate-y-0.5"
    >
        {type === 'apple' ? <Apple className="h-6 w-6 fill-white" /> : <Play className="h-5 w-5 fill-white" />}
        <span className="text-left">
            <span className="block text-[8px] uppercase leading-none text-white/65">
                {type === 'apple' ? 'Download on the' : 'Get it on'}
            </span>
            <span className="block text-[14px] font-bold leading-tight">
                {type === 'apple' ? 'App Store' : 'Google Play'}
            </span>
        </span>
    </a>
);

const ChinaStoreButton = ({ href, label, className }: { href: string; label: string; className: string }) => (
    <a
        href={href}
        target="_blank"
        rel="noreferrer"
        className={`inline-flex h-8 min-w-[92px] items-center justify-center rounded-md px-3 text-[11px] font-bold text-white shadow-sm transition-transform hover:-translate-y-0.5 ${className}`}
    >
        {label}
    </a>
);

export const FooterSection = () => {
    return (
        <footer className="bg-white pb-8 pt-16">
            <div className="mx-auto max-w-[1180px] px-4 sm:px-6 lg:px-8">
                <section className="relative">
                    <div className="overflow-hidden rounded-[1.35rem] border border-[#e7f0eb] bg-[#f3faf6] shadow-[0_18px_50px_rgba(30,82,52,0.08)]">
                        <div className="absolute inset-0 overflow-hidden rounded-[1.35rem] bg-[linear-gradient(90deg,#f7fcf9_0%,#f0f8f3_54%,#e7f4ed_100%)]" aria-hidden="true">
                            <div className="absolute -left-10 bottom-[-48px] h-44 w-44 rounded-full border border-white/70 bg-[#dcefe4]/55" />
                            <div className="absolute left-[42%] top-[-86px] h-72 w-72 rounded-full bg-white/55" />
                            <div className="absolute right-4 top-4 h-28 w-28 rounded-full bg-white/45" />
                        </div>
                    <div className="relative grid min-h-[214px] items-center gap-6 px-6 py-8 sm:px-8 lg:grid-cols-[1fr_1.15fr_0.7fr_0.65fr] lg:px-10 lg:pr-[300px]">
                        <div>
                            <h2 className="mb-3 text-[1.55rem] font-bold leading-tight tracking-tight text-gray-900 sm:text-[1.8rem]">
                                准备好和 Lily 一起，<br />开启你的健康之旅了吗？
                            </h2>
                            <p className="text-[13px] font-medium text-gray-500">下载 App 或扫码体验小程序，立即开始第一天。</p>
                        </div>

                        <div>
                            <div className="mb-3 text-[13px] font-bold text-gray-900">下载 BetterMe App</div>
                            <div className="flex flex-wrap gap-3">
                                <StoreButton type="apple" />
                                <StoreButton type="google" />
                            </div>
                            <div className="mt-3 flex flex-wrap gap-2">
                                <ChinaStoreButton href={appLinks.huaweiStore} label="华为应用市场" className="bg-[#d9363e]" />
                                <ChinaStoreButton href={appLinks.xiaomiStore} label="小米应用商店" className="bg-[#f47c20]" />
                                <ChinaStoreButton href={appLinks.appBao} label="应用宝" className="bg-[#2c88d9]" />
                            </div>
                        </div>

                        <div className="flex items-center gap-4 lg:justify-center">
                            <div>
                                <div className="mb-2 text-[13px] font-bold text-gray-900">微信小程序 即刻体验</div>
                                <Link to={appLinks.miniProgram} className="inline-flex rounded-[0.9rem] bg-white p-2 shadow-[0_8px_24px_rgba(21,72,43,0.08)]">
                                    <MiniProgramCode className="h-[96px] w-[96px] p-2" />
                                </Link>
                                <div className="mt-1 text-[11px] font-medium text-gray-500">扫一扫，立即开始</div>
                            </div>
                        </div>

                        <div className="hidden min-h-[142px] lg:block" aria-hidden="true" />
                    </div>
                    </div>
                    <img
                        src="/lily/cuts/lily-heart-hoodie.png"
                        alt=""
                        className="pointer-events-none absolute -top-12 bottom-auto right-4 z-20 hidden h-[330px] w-auto object-contain object-top drop-shadow-[0_18px_28px_rgba(33,86,53,0.16)] lg:block xl:-top-16 xl:right-6 xl:h-[360px]"
                    />
                </section>

                <div className="mt-7 flex flex-col gap-4 border-t border-gray-100 pt-5 md:flex-row md:items-center md:justify-between">
                    <div>
                        <div className="text-[22px] font-bold tracking-tight text-gray-950">
                            Better<span className="text-[#208752]">Me</span>
                        </div>
                        <div className="mt-2 text-[12px] font-medium text-gray-500">
                            © {new Date().getFullYear()} {siteConfig.brandName}. All rights reserved.
                        </div>
                    </div>

                    <nav className="flex flex-wrap gap-x-7 gap-y-2 text-[12px] font-medium text-gray-500">
                        <Link to="/about" className="transition-colors hover:text-[#208752]">关于我们</Link>
                        <Link to="/help" className="transition-colors hover:text-[#208752]">帮助中心</Link>
                        <Link to="/articles" className="transition-colors hover:text-[#208752]">健康文章</Link>
                        <Link to="/download" className="transition-colors hover:text-[#208752]">下载 App</Link>
                    </nav>

                    <a
                        href={appLinks.supportEmail}
                        className="inline-flex items-center gap-2 text-[12px] font-bold text-[#208752] transition-colors hover:text-[#1a7144]"
                    >
                        <Mail className="h-4 w-4" />
                        hello@betterme.app
                    </a>
                </div>
            </div>
        </footer>
    );
};

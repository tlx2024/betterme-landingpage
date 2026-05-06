import React from 'react';
import { ShieldCheck, Target, Globe2, Lightbulb } from 'lucide-react';
import { localMedia } from '../assets/localMedia';

export const About = () => {
  const stats = [
    { value: "2,356,862+", label: "用户信任与支持", color: "text-[#14b8a6]" },
    { value: "120+", label: "专业团队成员", color: "text-blue-500" },
    { value: "180+", label: "国家和地区用户", color: "text-indigo-500" },
    { value: "4.8 / 5", label: "用户评分", color: "text-amber-500" }
  ];

  const values = [
    { icon: <Target size={28} className="text-slate-700" />, title: "科学专业", desc: "基于科学研究和实践" },
    { icon: <ShieldCheck size={28} className="text-slate-700" />, title: "隐私安全", desc: "严格保护用户隐私" },
    { icon: <Lightbulb size={28} className="text-slate-700" />, title: "持续创新", desc: "不断优化产品体验" },
    { icon: <Globe2 size={28} className="text-slate-700" />, title: "全球视野", desc: "服务全球用户" },
  ];

  return (
    <div className="bg-white min-h-screen pt-24 pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="text-center mb-16">
          <h1 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">关于 BetterMe</h1>
          <p className="text-slate-500 text-base md:text-lg max-w-2xl mx-auto leading-relaxed">
            BetterMe 致力于通过科技和专业知识，<br className="hidden md:block" />
            帮助全球用户建立健康的生活方式，遇见更好的自己。
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-12 lg:gap-20 items-center lg:items-stretch mb-24">
          <div className="flex-1 w-full relative min-h-[400px]">
            <div className="absolute inset-0 bg-slate-100 rounded-[2.5rem] overflow-hidden">
              {/* Note: I am using an abstract team image as a placeholder for the large team portrait shown in the original art. */}
              <img
                src={localMedia.scenes.team}
                alt="Team"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          <div className="w-full lg:w-72 flex flex-col justify-center gap-10">
            {stats.map((stat, idx) => (
              <div key={idx}>
                <div className={`text-3xl font-bold mb-1 ${stat.color}`}>{stat.value}</div>
                <div className="text-sm text-slate-500">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Company Values */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {values.map((val, idx) => (
            <div key={idx} className="flex flex-col items-center text-center">
              <div className="w-16 h-16 rounded-2xl bg-slate-50 flex items-center justify-center mb-4 transition-transform hover:scale-110 duration-300">
                {val.icon}
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-2">{val.title}</h3>
              <p className="text-sm text-slate-500">{val.desc}</p>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
};

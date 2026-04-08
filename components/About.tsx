"use client";
import { career } from "@/data/career";
import ScrollReveal from "./ScrollReveal";
import CountUp from "./CountUp";
import { useState } from "react";

const stats = [
  { value: 200, suffix: "+", label: "교육 운영 인원" },
  { value: 92, suffix: "%", label: "긍정 인식 전환" },
  { value: 15, suffix: "%↑", label: "수료율 개선" },
  { value: 23, suffix: "개", label: "파트너사 협업" },
];

export default function About() {
  const [activeNode, setActiveNode] = useState<number | null>(null);

  return (
    <section id="about" className="py-24 px-6">
      <div className="max-w-content mx-auto">
        <ScrollReveal>
          <p className="text-stone text-[13px] font-semibold tracking-widest uppercase mb-4">About</p>
          <p className="text-charcoal text-[16px] leading-relaxed max-w-2xl mb-16">
            누구나 자신이 진정으로 원하는 일에 몰입하고, 그 과정에서 최고의 역량을 발휘할 수 있도록 돕는 일을 통해 세상에 기여하고자 합니다.
          </p>
        </ScrollReveal>

        <ScrollReveal delay={0.1}>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16">
            {stats.map((stat, i) => (
              <div key={i} className="bg-ivory border border-sand rounded-card p-5 text-center">
                <div className="text-[28px] font-bold text-near_black">
                  <CountUp end={stat.value} suffix={stat.suffix} />
                </div>
                <div className="text-stone text-[13px] mt-1">{stat.label}</div>
              </div>
            ))}
          </div>
        </ScrollReveal>

        <ScrollReveal delay={0.2}>
          <p className="text-stone text-[13px] font-semibold tracking-widest uppercase mb-6">Career</p>
          <div className="relative">
            <div className="absolute top-5 left-0 right-0 h-[2px] bg-sand hidden md:block" />
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              {career.map((node, i) => (
                <button
                  key={i}
                  onClick={() => setActiveNode(activeNode === i ? null : i)}
                  className="text-left relative"
                >
                  <div className="flex items-center gap-3 md:flex-col md:items-center md:text-center">
                    <div className="w-3 h-3 rounded-full bg-terra shrink-0 relative z-10" />
                    <div>
                      <div className="text-stone text-[12px]">{node.year}</div>
                      <div className="text-near_black font-semibold text-[15px]">{node.company}</div>
                      <div className="text-olive text-[13px]">{node.role}</div>
                    </div>
                  </div>
                  {activeNode === i && (
                    <div className="mt-3 bg-ivory border border-sand rounded-card p-4 text-[13px] text-charcoal leading-relaxed md:text-center">
                      {node.detail}
                    </div>
                  )}
                </button>
              ))}
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}

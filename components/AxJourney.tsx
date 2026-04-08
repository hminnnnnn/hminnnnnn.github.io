"use client";
import { axWhy, axItems, axInsights } from "@/data/ax-journey";
import ScrollReveal from "./ScrollReveal";

export default function AxJourney() {
  return (
    <section id="ax-journey" className="py-24 px-6">
      <div className="max-w-content mx-auto">
        <ScrollReveal>
          <p className="text-stone text-[13px] font-semibold tracking-widest uppercase mb-4">AX Journey</p>
          <h2 className="text-[24px] font-bold text-near_black mb-4">향하고 있는 곳</h2>
          <p className="text-charcoal text-[15px] leading-relaxed max-w-2xl mb-16">
            {axWhy}
          </p>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-16">
          {axItems.map((item, i) => (
            <ScrollReveal key={i} delay={i * 0.1}>
              <div className="bg-ivory border border-sand rounded-card p-6 h-full">
                <h3 className="text-[16px] font-semibold text-near_black mb-3">{item.title}</h3>
                <p className="text-olive text-[13px] leading-relaxed mb-4">{item.description}</p>
                <div className="flex flex-wrap gap-2">
                  {item.tags.map((tag, j) => (
                    <span key={j} className="bg-[rgba(94,106,210,0.15)] text-[#828fff] px-3 py-1 rounded-md text-[11px] font-medium">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>

        <ScrollReveal delay={0.2}>
          <p className="text-stone text-[13px] font-semibold tracking-widest uppercase mb-6">Lessons Learned</p>
          <div className="bg-ivory border border-sand rounded-card p-6">
            <ul className="space-y-4">
              {axInsights.map((insight, i) => (
                <li key={i} className="flex gap-3">
                  <span className="text-terra font-semibold shrink-0 text-[14px]">{i + 1}.</span>
                  <p className="text-charcoal text-[14px] leading-relaxed">{insight}</p>
                </li>
              ))}
            </ul>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}

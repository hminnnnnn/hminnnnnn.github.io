"use client";
import { projects } from "@/data/projects";
import ScrollReveal from "./ScrollReveal";
import { useState } from "react";

export default function Projects() {
  const [expanded, setExpanded] = useState<number | null>(null);

  return (
    <section id="projects" className="py-24 px-6 bg-ivory">
      <div className="max-w-content mx-auto">
        <ScrollReveal>
          <p className="text-stone text-[13px] font-semibold tracking-widest uppercase mb-4">Projects</p>
          <p className="text-charcoal text-[16px] leading-relaxed max-w-2xl mb-12">
            성장의 선순환 구조를 만드는 일. 교육 과정에 꼭 필요한 잠재력을 가진 수강생을 선발하고, 현업 멘토와 열정적인 수강생을 연결하여 시너지를 만들어 왔습니다.
          </p>
        </ScrollReveal>

        <div className="flex flex-col gap-4">
          {projects.map((project, i) => (
            <ScrollReveal key={i} delay={i * 0.1}>
              <button
                onClick={() => setExpanded(expanded === i ? null : i)}
                className="w-full text-left bg-parchment border border-sand rounded-card p-6 hover:border-terra/30 transition-colors"
              >
                <div className="flex justify-between items-start">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-1">
                      <h3 className="text-[17px] font-semibold text-near_black">{project.title}</h3>
                      <span className="text-stone text-[12px]">{project.period}</span>
                    </div>
                    <p className="text-olive text-[13px]">{project.role}</p>
                  </div>
                  <div className="text-right shrink-0 ml-4">
                    <div className="text-[20px] font-bold text-terra">{project.stat.value}</div>
                    <div className="text-stone text-[11px]">{project.stat.label}</div>
                  </div>
                </div>

                {expanded === i && (
                  <div className="mt-4 pt-4 border-t border-sand">
                    <p className="text-charcoal text-[14px] leading-relaxed mb-3">{project.description}</p>
                    <ul className="space-y-1">
                      {project.highlights.map((h, j) => (
                        <li key={j} className="text-olive text-[13px] before:content-['·'] before:mr-2 before:text-stone">
                          {h}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </button>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}

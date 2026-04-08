"use client";
import { motion } from "framer-motion";

export default function Hero() {
  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="min-h-screen flex items-center justify-center px-6">
      <div className="max-w-content mx-auto w-full">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <h1 className="text-[42px] font-bold leading-tight mb-4">
            김현민
          </h1>
          <p className="text-[20px] text-terra leading-relaxed mb-2">
            개발자 출신 테크 교육 PM에서,
            <br />
            AI로 성장 시스템을 설계하는 사람으로
          </p>
          <p className="text-stone text-[15px] mb-10">
            교육 · HRD · AX
          </p>
          <div className="flex gap-3">
            <button
              onClick={() => scrollTo("projects")}
              className="bg-terra text-ivory px-6 py-3 rounded-[10px] text-[15px] font-medium hover:bg-coral transition-colors"
            >
              프로젝트 보기
            </button>
            <button
              onClick={() => scrollTo("contact")}
              className="bg-[rgba(255,255,255,0.05)] border border-[rgba(255,255,255,0.08)] text-charcoal px-6 py-3 rounded-[10px] text-[15px] font-medium hover:bg-[rgba(255,255,255,0.08)] transition-colors"
            >
              연락하기
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

import ScrollReveal from "./ScrollReveal";

export default function Contact() {
  return (
    <section id="contact" className="py-24 px-6 bg-ivory">
      <div className="max-w-content mx-auto text-center">
        <ScrollReveal>
          <p className="text-stone text-[13px] font-semibold tracking-widest uppercase mb-4">Contact</p>
          <h2 className="text-[24px] font-bold text-near_black mb-3">
            함께 이야기 나눠요
          </h2>
          <p className="text-charcoal text-[15px] mb-10">
            하고 싶은 일을, 잘 할 수 있도록.
          </p>
          <div className="flex justify-center gap-4">
            <a
              href="mailto:hmkim0008@gmail.com"
              className="bg-terra text-ivory px-6 py-3 rounded-[10px] text-[15px] font-medium hover:bg-coral transition-colors"
            >
              이메일 보내기
            </a>
            <a
              href="https://github.com/hminnnnnn"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-sand text-charcoal px-6 py-3 rounded-[10px] text-[15px] font-medium hover:bg-cream transition-colors"
            >
              GitHub
            </a>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}

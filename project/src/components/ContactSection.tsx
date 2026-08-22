import { useState } from 'react';
import { Mail, Send, Github, Twitter, Instagram } from 'lucide-react';
import FadeIn from './FadeIn';

const ContactSection = () => {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSent(true);
    setTimeout(() => {
      setSent(false);
      setForm({ name: '', email: '', message: '' });
    }, 3000);
  };

  return (
    <section
      id="contact"
      className="bg-[#0C0C0C]
        rounded-t-[40px] sm:rounded-t-[50px] md:rounded-t-[60px]
        -mt-10 sm:-mt-12 md:-mt-14 relative z-10
        px-5 sm:px-8 md:px-10 py-20 sm:py-24 md:py-32"
    >
      <FadeIn delay={0} y={40}>
        <h2 className="hero-heading font-black uppercase text-center mb-6 sm:mb-8">
          Contact
        </h2>
      </FadeIn>

      <FadeIn delay={0.1} y={20}>
        <p className="text-[#D7E2EA] text-center max-w-xl mx-auto mb-12 sm:mb-16
          font-light leading-relaxed text-[clamp(0.9rem,2vw,1.25rem)] opacity-70">
          Have a project in mind? Let's create something unforgettable together.
        </p>
      </FadeIn>

      <div className="max-w-2xl mx-auto">
        <FadeIn delay={0.2} y={30}>
          <form
            onSubmit={handleSubmit}
            className="flex flex-col gap-5 sm:gap-6
              rounded-[32px] sm:rounded-[40px] md:rounded-[50px]
              border-2 border-[#D7E2EA]/20 bg-[#141414]
              p-6 sm:p-8 md:p-10"
          >
            <div className="flex flex-col sm:flex-row gap-5 sm:gap-6">
              <input
                type="text"
                placeholder="Your Name"
                required
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                className="flex-1 rounded-2xl bg-[#0C0C0C] border border-[#D7E2EA]/15
                  px-4 sm:px-5 py-3 sm:py-4
                  text-[#D7E2EA] placeholder:text-[#D7E2EA]/40
                  text-sm sm:text-base
                  focus:outline-none focus:border-[#D7E2EA]/50 transition-colors"
              />
              <input
                type="email"
                placeholder="Your Email"
                required
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                className="flex-1 rounded-2xl bg-[#0C0C0C] border border-[#D7E2EA]/15
                  px-4 sm:px-5 py-3 sm:py-4
                  text-[#D7E2EA] placeholder:text-[#D7E2EA]/40
                  text-sm sm:text-base
                  focus:outline-none focus:border-[#D7E2EA]/50 transition-colors"
              />
            </div>

            <textarea
              placeholder="Tell me about your project..."
              required
              rows={5}
              value={form.message}
              onChange={(e) => setForm({ ...form, message: e.target.value })}
              className="rounded-2xl bg-[#0C0C0C] border border-[#D7E2EA]/15
                px-4 sm:px-5 py-3 sm:py-4
                text-[#D7E2EA] placeholder:text-[#D7E2EA]/40
                text-sm sm:text-base resize-none
                focus:outline-none focus:border-[#D7E2EA]/50 transition-colors"
            />

            <button
              type="submit"
              disabled={sent}
              className="self-start rounded-full font-medium uppercase tracking-widest text-white
                px-8 py-3 sm:px-10 sm:py-3.5
                text-xs sm:text-sm md:text-base
                flex items-center gap-2 cursor-pointer
                disabled:opacity-70 transition-opacity"
              style={{
                background: 'linear-gradient(123deg, #18011F 7%, #B600A8 37%, #7621B0 72%, #BE4C00 100%)',
                boxShadow: '0px 4px 4px rgba(181, 1, 167, 0.25), inset 4px 4px 12px #7721B1',
                outline: '2px solid white',
                outlineOffset: '-3px',
              }}
            >
              {sent ? 'Message Sent!' : (
                <>
                  Send Message
                  <Send size={16} />
                </>
              )}
            </button>
          </form>
        </FadeIn>

        <FadeIn delay={0.3} y={20}>
          <div className="flex flex-col sm:flex-row items-center justify-between gap-6 mt-12">
            <a
              href="mailto:jack@example.com"
              className="flex items-center gap-3 text-[#D7E2EA] hover:opacity-70 transition-opacity"
            >
              <Mail size={20} />
              <span className="text-sm sm:text-base font-light">jack@example.com</span>
            </a>

            <div className="flex gap-5">
              {[Github, Twitter, Instagram].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="text-[#D7E2EA]/60 hover:text-[#D7E2EA] transition-colors"
                  aria-label="social link"
                >
                  <Icon size={22} />
                </a>
              ))}
            </div>
          </div>
        </FadeIn>
      </div>

      <FadeIn delay={0.4} y={20}>
        <p className="text-center text-[#D7E2EA]/40 font-light text-xs sm:text-sm mt-16 sm:mt-24">
          © 2025 Jack — 3D Creator. All rights reserved.
        </p>
      </FadeIn>

      <style>{`
        section h2 {
          font-size: clamp(3rem, 12vw, 160px);
        }
      `}</style>
    </section>
  );
};

export default ContactSection;

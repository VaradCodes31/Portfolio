import { useState, useRef } from "react";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Send, Github, Linkedin, CheckCircle, Sparkles, Copy, Check } from "lucide-react";
import confetti from "canvas-confetti";
import { EarthCanvas3D } from "./canvas/EarthCanvas3D";
import { SpotlightCard } from "./ui/SpotlightCard";
import { MagneticButton } from "./ui/MagneticButton";

export const ContactSection = () => {
  const formRef = useRef();
  const [copied, setCopied] = useState(false);
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleCopyEmail = () => {
    navigator.clipboard.writeText("varadalshi7@gmail.com");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    // Realistic transmission delay simulation
    setTimeout(() => {
      setLoading(false);
      setSuccess(true);
      confetti({
        particleCount: 100,
        spread: 70,
        origin: { y: 0.6 },
      });
      setFormData({ name: "", email: "", message: "" });
      setTimeout(() => setSuccess(false), 6000);
    }, 1000);
  };

  return (
    <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 relative z-10 max-w-6xl mx-auto">
      {/* Header */}
      <div className="flex flex-col items-center text-center mb-14">
        <span className="text-xs font-mono uppercase tracking-widest text-cyan-400 font-semibold mb-2 flex items-center gap-2">
          <Mail size={14} /> Get In Touch
        </span>
        <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
          Let's Build Something Exceptional
        </h2>
        <p className="text-slate-400 text-sm sm:text-base max-w-xl mt-3">
          Have an AI research collaboration, engineering role, or project inquiry? Send a message directly.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
        {/* Left Column: 3D Earth Globe & Coordinates */}
        <div className="lg:col-span-5 flex flex-col space-y-6">
          <div className="rounded-2xl border border-white/10 bg-slate-900/40 backdrop-blur-xl p-4 shadow-2xl flex flex-col items-center">
            <div className="w-full flex items-center justify-between px-3 py-1.5 border-b border-slate-800 text-[11px] font-mono text-slate-400">
              <span className="text-cyan-400 font-semibold">// 3D Celestial Globe</span>
              <span className="text-slate-500">Drag to Orbit</span>
            </div>

            {/* Adrian Hajdin 3D Earth Canvas */}
            <EarthCanvas3D />
          </div>

          {/* Quick Contact Pills */}
          <div className="space-y-2.5">
            <button
              onClick={handleCopyEmail}
              className="w-full p-3.5 rounded-xl bg-slate-900/70 border border-slate-800 hover:border-cyan-500/40 transition-colors flex items-center justify-between text-left group"
            >
              <div className="flex items-center gap-3">
                <div className="p-2 rounded-lg bg-cyan-500/10 text-cyan-400">
                  <Mail size={16} />
                </div>
                <div>
                  <div className="text-[11px] font-mono text-slate-400 uppercase">Direct Email</div>
                  <div className="text-sm font-mono text-white group-hover:text-cyan-300">varadalshi7@gmail.com</div>
                </div>
              </div>
              <span className="text-xs font-mono text-slate-400 flex items-center gap-1">
                {copied ? <Check size={14} className="text-emerald-400" /> : <Copy size={14} />}
                {copied ? "Copied!" : "Copy"}
              </span>
            </button>

            <a
              href="https://linkedin.com/in/varadalshi"
              target="_blank"
              rel="noreferrer"
              className="w-full p-3.5 rounded-xl bg-slate-900/70 border border-slate-800 hover:border-violet-500/40 transition-colors flex items-center justify-between text-left group"
            >
              <div className="flex items-center gap-3">
                <div className="p-2 rounded-lg bg-violet-500/10 text-violet-400">
                  <Linkedin size={16} />
                </div>
                <div>
                  <div className="text-[11px] font-mono text-slate-400 uppercase">LinkedIn</div>
                  <div className="text-sm font-mono text-white group-hover:text-violet-300">in/varadalshi</div>
                </div>
              </div>
              <span className="text-xs font-mono text-cyan-400">Connect →</span>
            </a>

            <a
              href="https://github.com/VaradCodes31"
              target="_blank"
              rel="noreferrer"
              className="w-full p-3.5 rounded-xl bg-slate-900/70 border border-slate-800 hover:border-cyan-500/40 transition-colors flex items-center justify-between text-left group"
            >
              <div className="flex items-center gap-3">
                <div className="p-2 rounded-lg bg-cyan-500/10 text-cyan-400">
                  <Github size={16} />
                </div>
                <div>
                  <div className="text-[11px] font-mono text-slate-400 uppercase">GitHub</div>
                  <div className="text-sm font-mono text-white group-hover:text-cyan-300">@VaradCodes31</div>
                </div>
              </div>
              <span className="text-xs font-mono text-cyan-400">Follow →</span>
            </a>
          </div>
        </div>

        {/* Right Column: Contact Form */}
        <div className="lg:col-span-7">
          <SpotlightCard className="border-slate-800" spotlightColor="rgba(6, 182, 212, 0.15)">
            <h3 className="text-2xl font-bold text-white mb-1 flex items-center gap-2">
              Send a Transmission <Sparkles size={18} className="text-cyan-400" />
            </h3>
            <p className="text-slate-400 text-xs sm:text-sm mb-6">
              I usually respond within 24 hours.
            </p>

            {success ? (
              <div className="p-6 rounded-xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-300 flex flex-col items-center text-center space-y-2">
                <CheckCircle size={32} className="text-emerald-400" />
                <h4 className="text-lg font-bold text-white">Message Transmitted!</h4>
                <p className="text-xs text-emerald-200">
                  Thank you for reaching out, Varad will be in touch shortly.
                </p>
              </div>
            ) : (
              <form ref={formRef} onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block text-xs font-mono text-slate-400 uppercase mb-1.5">
                    Your Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="e.g. Geoffrey Hinton"
                    className="w-full px-4 py-3 rounded-xl bg-slate-950/80 border border-slate-800 text-white placeholder-slate-600 focus:outline-none focus:border-cyan-500/80 text-sm transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-xs font-mono text-slate-400 uppercase mb-1.5">
                    Your Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="you@domain.com"
                    className="w-full px-4 py-3 rounded-xl bg-slate-950/80 border border-slate-800 text-white placeholder-slate-600 focus:outline-none focus:border-cyan-500/80 text-sm transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-xs font-mono text-slate-400 uppercase mb-1.5">
                    Your Message
                  </label>
                  <textarea
                    name="message"
                    rows={4}
                    required
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Discuss an opportunity, AI research, or project..."
                    className="w-full px-4 py-3 rounded-xl bg-slate-950/80 border border-slate-800 text-white placeholder-slate-600 focus:outline-none focus:border-cyan-500/80 text-sm transition-colors resize-none"
                  />
                </div>

                <MagneticButton
                  type="submit"
                  disabled={loading}
                  className="w-full py-3.5 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-slate-950 font-bold text-sm shadow-lg shadow-cyan-500/20 flex items-center justify-center gap-2 transition-all disabled:opacity-50"
                >
                  {loading ? (
                    <span>Transmitting...</span>
                  ) : (
                    <>
                      <span>Send Message</span>
                      <Send size={15} />
                    </>
                  )}
                </MagneticButton>
              </form>
            )}
          </SpotlightCard>
        </div>
      </div>
    </section>
  );
};
import { CheckCircle2, Github, Instagram, Linkedin, Mail, MapPin, MessageSquare, Phone, Send, Sparkles, Twitter } from "lucide-react";
import { cn } from "@/lib/utils";
import { useToast } from "@/hooks/use-toast";
import { useState } from "react";
import { sendEmail } from "@/lib/sendEmail";

export const ContactSection = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    const { name, email, message } = formData;

    if (!name.trim() || !email.trim() || !message.trim()) {
      toast({
        title: "Incomplete Memo",
        description: "Please fill in all fields before transmitting.",
        variant: "destructive",
      });
      setIsSubmitting(false);
      return;
    }

    try {
      await sendEmail(name, email, message);
      
      toast({
        title: "Field Memo Transmitted!",
        description: "Thank you for reaching out. I'll respond to your inquiry shortly.",
      });
      
      setFormData({
        name: "",
        email: "",
        message: ""
      });
    } catch (err) {
      console.error("Error sending email:", err);
      toast({
        title: "Transmission Error",
        description: "Could not send message. Please email directly at varadalshi7@gmail.com",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 relative grid-engineering">
      <div className="max-w-6xl mx-auto">
        
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-8 pb-4 border-b border-[#24344d]">
          <div>
            <div className="flex items-center gap-2 text-xs font-mono text-amber-400 mb-2">
              <span className="w-2 h-2 rounded-full bg-amber-400" />
              SECTION 05 // FIELD MEMO & DIRECT COMMUNICATION
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-white font-sans">
              Transmit a Message to Varad's Desk
            </h2>
          </div>
          <div className="text-xs font-mono text-slate-400">
            Channel: <span className="text-amber-400">SECURE DISPATCH</span>
          </div>
        </div>

        {/* Dual Panel Contact Form */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Left Column: Direct Coordinates & Handwritten Memo Note */}
          <div className="lg:col-span-5 flex flex-col justify-between space-y-6">
            <div className="blueprint-card rounded-2xl p-6 sm:p-8 flex flex-col justify-between h-full">
              <div>
                <h3 className="text-xl font-bold text-white font-sans mb-1">
                  Direct Coordinates
                </h3>
                <p className="text-xs text-slate-300 font-sans mb-6">
                  Open to full-time AI/ML opportunities, research collaborations in neural operators, and quantum ML projects.
                </p>

                <div className="space-y-4">
                  <div className="flex items-start gap-3 p-3 rounded-xl bg-[#141e30] border border-[#233450]">
                    <div className="p-2 rounded-lg bg-amber-500/10 text-amber-400 mt-0.5">
                      <Mail size={16} />
                    </div>
                    <div>
                      <div className="text-[10px] font-mono text-slate-400 uppercase">Primary Email</div>
                      <a
                        href="mailto:varadalshi7@gmail.com"
                        className="text-xs font-mono text-slate-200 hover:text-amber-400 transition-colors font-bold break-all"
                      >
                        varadalshi7@gmail.com
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 p-3 rounded-xl bg-[#141e30] border border-[#233450]">
                    <div className="p-2 rounded-lg bg-cyan-500/10 text-cyan-400 mt-0.5">
                      <Phone size={16} />
                    </div>
                    <div>
                      <div className="text-[10px] font-mono text-slate-400 uppercase">Phone Contact</div>
                      <a
                        href="tel:+918421828974"
                        className="text-xs font-mono text-slate-200 hover:text-cyan-300 transition-colors font-bold"
                      >
                        +91 8421828974
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 p-3 rounded-xl bg-[#141e30] border border-[#233450]">
                    <div className="p-2 rounded-lg bg-emerald-500/10 text-emerald-400 mt-0.5">
                      <MapPin size={16} />
                    </div>
                    <div>
                      <div className="text-[10px] font-mono text-slate-400 uppercase">Current Station</div>
                      <div className="text-xs font-mono text-slate-200 font-bold">
                        Pune, Maharashtra, India
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Social Channels Strip */}
              <div className="mt-8 pt-4 border-t border-[#23344d]">
                <div className="text-xs font-mono text-slate-400 mb-3">Connect Across Networks:</div>
                <div className="flex items-center gap-3">
                  <a
                    href="https://github.com/VaradCodes31"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2.5 rounded-lg bg-[#141e30] border border-[#233450] text-slate-300 hover:text-amber-400 hover:border-amber-500/40 transition-all flex items-center gap-2 text-xs font-mono"
                  >
                    <Github size={15} />
                    <span className="hidden sm:inline">GitHub</span>
                  </a>
                  <a
                    href="https://linkedin.com/in/varadalshi"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2.5 rounded-lg bg-[#141e30] border border-[#233450] text-slate-300 hover:text-amber-400 hover:border-amber-500/40 transition-all flex items-center gap-2 text-xs font-mono"
                  >
                    <Linkedin size={15} />
                    <span className="hidden sm:inline">LinkedIn</span>
                  </a>
                  <a
                    href="https://x.com/Varad42451141"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2.5 rounded-lg bg-[#141e30] border border-[#233450] text-slate-300 hover:text-amber-400 hover:border-amber-500/40 transition-all flex items-center gap-2 text-xs font-mono"
                  >
                    <Twitter size={15} />
                    <span className="hidden sm:inline">X / Twitter</span>
                  </a>
                  <a
                    href="https://instagram.com/itsvarad_27"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2.5 rounded-lg bg-[#141e30] border border-[#233450] text-slate-300 hover:text-amber-400 hover:border-amber-500/40 transition-all flex items-center gap-2 text-xs font-mono"
                  >
                    <Instagram size={15} />
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Interactive Field Memo Dispatch Form */}
          <div className="lg:col-span-7">
            <div className="blueprint-card rounded-2xl p-6 sm:p-8 relative">
              <div className="flex items-center justify-between pb-3 border-b border-[#24344d] mb-6">
                <span className="text-xs font-mono text-amber-400 uppercase font-semibold flex items-center gap-2">
                  <MessageSquare size={14} /> FIELD MEMO COMPOSER
                </span>
                <span className="text-[11px] font-mono text-slate-400">
                  DISPATCH REF: #TX-{Math.floor(1000 + Math.random() * 9000)}
                </span>
              </div>

              <form onSubmit={handleSubmit} className="space-y-4 font-mono text-xs">
                <div>
                  <label htmlFor="name" className="block text-slate-300 mb-1.5 font-semibold">
                    // SENDER IDENTITY (YOUR NAME)
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    placeholder="e.g. Dr. Jane Smith / Tech Recruiter"
                    className="w-full px-4 py-3 rounded-lg bg-[#0e1522] border border-[#243450] text-slate-100 placeholder-slate-500 focus:outline-hidden focus:border-amber-400 focus:ring-1 focus:ring-amber-400 transition-all"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-slate-300 mb-1.5 font-semibold">
                    // SENDER EMAIL COORDINATE
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    placeholder="jane.smith@deeptech.org"
                    className="w-full px-4 py-3 rounded-lg bg-[#0e1522] border border-[#243450] text-slate-100 placeholder-slate-500 focus:outline-hidden focus:border-amber-400 focus:ring-1 focus:ring-amber-400 transition-all"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-slate-300 mb-1.5 font-semibold">
                    // MEMO PAYLOAD (MESSAGE & INQUIRY)
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows="5"
                    placeholder="Hello Varad, I reviewed your 3D FNO and Quantum XAI research and would love to connect regarding..."
                    className="w-full px-4 py-3 rounded-lg bg-[#0e1522] border border-[#243450] text-slate-100 placeholder-slate-500 focus:outline-hidden focus:border-amber-400 focus:ring-1 focus:ring-amber-400 resize-none font-sans text-sm leading-relaxed transition-all"
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={cn(
                    "w-full py-3.5 px-6 rounded-lg bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold font-mono text-sm tracking-wider uppercase transition-all duration-200 flex items-center justify-center gap-2 shadow-[0_0_20px_rgba(245,158,11,0.25)] hover:scale-[1.01] active:scale-[0.99]",
                    isSubmitting && "opacity-60 cursor-not-allowed"
                  )}
                >
                  <Send size={15} />
                  <span>{isSubmitting ? "Transmitting Memo..." : "Transmit Field Memo"}</span>
                </button>
              </form>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
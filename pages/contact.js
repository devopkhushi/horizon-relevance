import { Mail, Phone, MapPin, Send, MessageCircle } from "lucide-react";
import { useState } from "react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    // Add your form submission logic here
  };

  return (
    <section className="min-h-screen relative overflow-hidden bg-[#05070f] text-white">
      <div className="absolute inset-0">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: "url('/Contact-bg.png')",
            backgroundPosition: 'top center',
            backgroundSize: 'contain',
            backgroundRepeat: 'no-repeat',
          }}
        />
        <div className="absolute inset-0 bg-black/25" />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/10 to-black/40" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 pt-24 pb-20">
        <div className="mx-auto max-w-5xl min-h-[92vh] flex flex-col justify-end text-center space-y-6 pb-20">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass border border-white/10 mx-auto">
            <MessageCircle size={18} className="text-emerald-400" />
            <p className="text-emerald-300 text-sm font-semibold uppercase tracking-[2px]">Contact Us</p>
          </div>

          <div className="space-y-4">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight drop-shadow-lg">
              Contact Us
            </h1>
            <p className="mx-auto max-w-2xl text-white text-lg md:text-xl leading-8 opacity-90">
              Tell us what’s on your mind — a project, a pitch, a plan. We’ll take it from there.
            </p>
          </div>
        </div>

        <div className="relative z-20 mt-12 grid lg:grid-cols-2 gap-8">
          <div className="glass rounded-[32px] p-10 border border-white/10 bg-gradient-to-b from-[#2b0540] to-[#32104f] shadow-2xl">
            <p className="text-sm uppercase tracking-[2px] text-emerald-300 mb-4">Contact Information</p>
            <h2 className="text-3xl font-bold text-white mb-4">Say something to start a live chat!</h2>
            <p className="text-gray-400 mb-8">We’re here to help with your next big idea. Drop us a note and we’ll reply as soon as possible.</p>

            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-2xl bg-emerald-500/10 border border-emerald-500/20">
                  <Mail size={24} className="text-emerald-400" />
                </div>
                <div>
                  <h3 className="font-semibold text-white">Email</h3>
                  <p className="text-gray-400">contact@horizonrelevance.com</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-2xl bg-emerald-500/10 border border-emerald-500/20">
                  <Phone size={24} className="text-emerald-400" />
                </div>
                <div>
                  <h3 className="font-semibold text-white">Phone</h3>
                  <p className="text-gray-400">+1 (000) 000-0000</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-2xl bg-emerald-500/10 border border-emerald-500/20">
                  <MapPin size={24} className="text-emerald-400" />
                </div>
                <div>
                  <h3 className="font-semibold text-white">Office</h3>
                  <p className="text-gray-400">123 Innovation Street, Tech City, TC 12345</p>
                </div>
              </div>
            </div>

            <div className="mt-10 flex flex-wrap gap-3">
              {['Facebook', 'Instagram', 'Pinterest', 'LinkedIn', 'YouTube', 'X'].map((social) => (
                <span key={social} className="text-xs uppercase tracking-[2px] text-gray-400 bg-white/5 rounded-full px-4 py-3">
                  {social}
                </span>
              ))}
            </div>
          </div>

          <div className="glass rounded-[32px] p-10 border border-white/10 bg-black/40">
            <p className="text-sm uppercase tracking-[2px] text-emerald-300 mb-4">Contact us</p>
            <h2 className="text-3xl font-bold text-white mb-4">Get in touch with our team</h2>
            <p className="text-gray-400 mb-10">Share your idea, ask a question, or request a quote — we’ll make it happen.</p>

            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-semibold text-gray-300 mb-2">Full name *</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Your name"
                    className="w-full px-4 py-3 rounded-2xl bg-[#0c1629] border border-white/10 text-white placeholder-gray-500 focus:border-emerald-400 outline-none transition"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-300 mb-2">Email *</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="your@email.com"
                    className="w-full px-4 py-3 rounded-2xl bg-[#0c1629] border border-white/10 text-white placeholder-gray-500 focus:border-emerald-400 outline-none transition"
                    required
                  />
                </div>
              </div>

              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-semibold text-gray-300 mb-2">Phone</label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="+1 (000) 000-0000"
                    className="w-full px-4 py-3 rounded-2xl bg-[#0c1629] border border-white/10 text-white placeholder-gray-500 focus:border-emerald-400 outline-none transition"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-300 mb-2">Subject *</label>
                  <select
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-2xl bg-[#0c1629] border border-white/10 text-white focus:border-emerald-400 outline-none transition"
                    required
                  >
                    <option value="" className="text-gray-500">Select subject</option>
                    <option value="project">Project Discussion</option>
                    <option value="support">Support</option>
                    <option value="partnership">Partnership</option>
                    <option value="feedback">Feedback</option>
                    <option value="other">Other</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-300 mb-2">Message *</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Tell us about your project, requirements, or anything else..."
                  rows="6"
                  className="w-full px-4 py-3 rounded-2xl bg-[#0c1629] border border-white/10 text-white placeholder-gray-500 focus:border-emerald-400 outline-none transition resize-none"
                  required
                />
              </div>

              <button
                type="submit"
                className="w-full py-4 rounded-2xl bg-gradient-to-r from-emerald-500 to-emerald-400 text-slate-900 font-bold text-base hover:shadow-2xl hover:shadow-emerald-500/30 transition duration-300"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
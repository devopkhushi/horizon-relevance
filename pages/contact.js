import { Mail, Phone, MapPin, Send } from "lucide-react";

const Contact = () => {
  return (
    <section className="min-h-screen py-28 px-6">
      <div className="max-w-7xl mx-auto">

        <div className="text-center mb-16">

          <p className="text-green-400 uppercase tracking-[3px]">
            Contact Us
          </p>

          <h1 className="text-5xl font-black mt-4">
            Let's Build{" "}
            <span className="gradient-text">
              Together
            </span>
          </h1>

          <p className="text-gray-400 mt-6 max-w-2xl mx-auto">
            Get in touch with Horizon Relevance and discover how
            AI-driven solutions can transform your business.
          </p>

        </div>

        <div className="grid md:grid-cols-2 gap-8">

          {/* LEFT SIDE */}

          <div className="space-y-6">

            <div className="glass p-6 border border-green-500/10">
              <Mail className="text-green-400 mb-3" />
              <h3 className="font-bold">Email</h3>
              <p className="text-gray-400">
                contact@horizonrelevance.com
              </p>
            </div>

            <div className="glass p-6 border border-green-500/10">
              <Phone className="text-green-400 mb-3" />
              <h3 className="font-bold">Phone</h3>
              <p className="text-gray-400">
                +1 (000) 000-0000
              </p>
            </div>

            <div className="glass p-6 border border-green-500/10">
              <MapPin className="text-green-400 mb-3" />
              <h3 className="font-bold">Office</h3>
              <p className="text-gray-400">
                Horizon Relevance LLC
              </p>
            </div>

          </div>

          {/* RIGHT SIDE FORM */}

          <div className="glass p-8 border border-green-500/10">

            <h2 className="text-2xl font-bold mb-6">
              Send Message
            </h2>

            <form className="space-y-5">

              <input
                type="text"
                placeholder="Your Name"
                className="w-full p-4 rounded-xl bg-[#111] border border-green-500/20 text-white focus:border-green-400 outline-none"
              />

              <input
                type="email"
                placeholder="Your Email"
                className="w-full p-4 rounded-xl bg-[#111] border border-green-500/20 text-white focus:border-green-400 outline-none"
              />

              <textarea
                rows="5"
                placeholder="Your Message"
                className="w-full p-4 rounded-xl bg-[#111] border border-green-500/20 text-white focus:border-green-400 outline-none"
              />

              <button
                type="submit"
                className="primary-btn px-8 py-4 flex items-center gap-2"
              >
                Send Message <Send size={18}/>
              </button>

            </form>

          </div>

        </div>
      </div>
    </section>
  );
};

export default Contact;
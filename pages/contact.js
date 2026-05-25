import { MapPin } from "lucide-react";
import { useState } from "react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <section className="min-h-screen relative overflow-hidden bg-[#05070f] text-white">

      {/* Background */}

      <div className="absolute inset-0">

        <div
          className="absolute inset-0"
          style={{
            backgroundImage: "url('/Contact-bg.png')",
            backgroundPosition: "center top",
            backgroundSize: "100% auto",
            backgroundRepeat: "no-repeat",
          }}
        />

        <div className="absolute inset-0 bg-black/35" />

      </div>


      {/* Original glow animation */}

      <div
      className="
      absolute
      top-[15%]
      left-[8%]
      w-[280px]
      h-[280px]
      bg-emerald-500/10
      blur-[140px]
      rounded-full
      animate-pulse
      "
      />

      <div
      className="
      absolute
      bottom-[10%]
      right-[8%]
      w-[320px]
      h-[320px]
      bg-blue-500/10
      blur-[150px]
      rounded-full
      animate-pulse
      "
      />


      <div className="relative z-10 max-w-7xl mx-auto px-6">

        {/* Heading */}

        <div className="text-center pt-[320px]">

          <h1
          className="
          text-5xl
          md:text-6xl
          font-extrabold
          text-white
          "
          >
            Contact Us
          </h1>

          <p
          className="
          mt-6
          text-white
          text-lg
          leading-8
          font-medium
          max-w-3xl
          mx-auto
          "
          >
            Tell us what's on your mind — a project, a plan or an idea.
          </p>

        </div>


        {/* Main Content */}

        <div className="grid lg:grid-cols-2 gap-8 mt-20 pb-20">

          {/* LEFT CARD */}

          <div
          className="
          rounded-[32px]
          p-10
          border border-white/10
          bg-black/40
          backdrop-blur-xl
          "
          >

            <h2
            className="
            text-4xl
            font-bold
            mb-10
            "
            >
              LOCATIONS
            </h2>

            <div className="mb-12">

              <h3
              className="
              text-2xl
              font-bold
              text-emerald-400
              mb-5
              "
              >
                USA
              </h3>

              <div className="flex gap-4">

                <MapPin
                className="text-emerald-400 mt-1"
                />

                <p
                className="
                text-gray-300
                text-lg
                leading-8
                "
                >
                  16 Homes park avenue,
                  Iselin,
                  New Jersey 08830,
                  USA
                </p>

              </div>

            </div>


            <div>

              <h3
              className="
              text-2xl
              font-bold
              text-emerald-400
              mb-5
              "
              >
                India
              </h3>

              <div className="flex gap-4">

                <MapPin
                className="text-emerald-400 mt-1"
                />

                <p
                className="
                text-gray-400
                italic
                text-lg
                "
                >
                  Location will be added later...
                </p>

              </div>

            </div>

          </div>


          {/* RIGHT CARD */}

          <div
          className="
          rounded-[32px]
          p-10
          border border-white/10
          bg-black/40
          backdrop-blur-xl
          "
          >

            <h2
            className="
            text-3xl
            font-bold
            mb-3
            "
            >
              Get In Touch
            </h2>

            <p
            className="
            text-gray-300
            mb-8
            "
            >
              Share your idea, ask a question, or request a quote.
            </p>

            <form
            onSubmit={handleSubmit}
            className="space-y-5"
            >

              <div className="grid sm:grid-cols-2 gap-4">

                <input
                  type="text"
                  name="name"
                  placeholder="Full Name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-2xl bg-[#0c1629] border border-white/10 text-white outline-none"
                />

                <input
                  type="email"
                  name="email"
                  placeholder="Email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-2xl bg-[#0c1629] border border-white/10 text-white outline-none"
                />

              </div>

              <input
                type="tel"
                name="phone"
                placeholder="Phone"
                value={formData.phone}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-2xl bg-[#0c1629] border border-white/10 text-white outline-none"
              />

              <textarea
                rows="6"
                name="message"
                placeholder="Your message..."
                value={formData.message}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-2xl bg-[#0c1629] border border-white/10 text-white outline-none resize-none"
              />

              <button
                type="submit"
                className="
                w-full
                py-4
                rounded-2xl
                bg-gradient-to-r
                from-emerald-500
                to-emerald-400
                text-black
                font-bold
                hover:scale-[1.02]
                transition
                "
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
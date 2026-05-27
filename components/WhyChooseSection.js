import Image from "next/image";
import { Check } from "lucide-react";
import { motion } from "framer-motion";

const features = [
  "AI Driven Insights",
  "Cloud Optimization",
  "Secure Infrastructure",
  "Automation First",
  "Enterprise Reliability",
];

export default function WhyChooseSection() {
  return (
    <section className="bg-[#07111f] py-28">

      <div className="max-w-7xl mx-auto px-6">

        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* LEFT IMAGE */}

          <motion.div
            initial={{ opacity:0, x:-50 }}
            whileInView={{ opacity:1, x:0 }}
            transition={{ duration:.8 }}
            className="relative"
          >

            {/* glow */}

            <div className="
            absolute
            inset-0
            bg-green-500/10
            blur-[100px]
            rounded-full
            " />

            <div className="
            relative
            rounded-[30px]
            overflow-hidden
            border
            border-white/10
            ">

              <Image
                src="/ai-monitoring.png"
                width={650}
                height={700}
                alt="AI"
                className="
                w-full
                h-[550px]
                object-cover
                hover:scale-105
                transition
                duration-700
                "
              />

            </div>

          </motion.div>



          {/* RIGHT CONTENT */}

          <motion.div
            initial={{ opacity:0, x:50 }}
            whileInView={{ opacity:1, x:0 }}
            transition={{ duration:.8 }}
          >

            <p className="
            text-green-400
            uppercase
            tracking-[0.3em]
            mb-4
            ">

            WHY HORIZON RELEVANCE

            </p>


            <h2 className="
            text-5xl
            font-black
            text-white
            leading-tight
            ">

            Built For Intelligent
            <br/>
            Digital Transformation

            </h2>


            <p className="
            text-gray-400
            mt-8
            leading-9
            text-lg
            ">

            Horizon Relevance delivers AI-powered
            monitoring, cloud optimization,
            secure SDLC and enterprise automation
            solutions that help organizations
            scale faster and operate efficiently.

            Our solutions combine intelligent insights,
            automation and security to create reliable
            digital experiences.

            </p>



            <div className="mt-10 space-y-5">

              {

              features.map((item,index)=>(

              <div
              key={index}
              className="flex items-center gap-4"
              >

                <div className="
                w-8
                h-8
                rounded-md
                bg-green-500/10
                flex
                items-center
                justify-center
                ">

                <Check
                size={18}
                className="text-green-400"
                />

                </div>

                <span className="text-gray-300 text-lg">

                {item}

                </span>

              </div>

              ))

              }

            </div>



            <button
            className="
            mt-12
            px-8
            py-5
            rounded-2xl
            bg-green-400
            text-black
            font-bold
            hover:scale-105
            transition
            "
            >

            EXPLORE OUR SOLUTIONS →

            </button>

          </motion.div>

        </div>

      </div>

    </section>
  );
}
export default function Services() {

  const services = [
    {
      title: "Cloud Infrastructure",
      description:
        "Scalable cloud ecosystems engineered for modern enterprise performance.",
    },
    {
      title: "DevSecOps Automation",
      description:
        "Secure CI/CD pipelines with integrated monitoring and deployment workflows.",
    },
    {
      title: "AI-Powered Monitoring",
      description:
        "Detect incidents faster using intelligent analytics and predictive systems.",
    },
    {
      title: "Serverless Architecture",
      description:
        "Build high-performance event-driven applications with minimal overhead.",
    },
  ];

  return (

<section className="relative pt-32 pb-32 overflow-hidden">

{/* background glow */}

<div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-green-500/5 blur-[150px] rounded-full"></div>

<div className="relative z-10 max-w-7xl mx-auto px-6">

<div className="text-center mb-20">

<p className="text-green-400 uppercase tracking-[0.35em] text-sm mb-5">

Our Expertise

</p>

<h2 className="text-4xl md:text-6xl font-black leading-tight mb-8">

Intelligent Solutions
<br/>

Built For Scale

</h2>

<p className="text-gray-400 text-xl leading-9 max-w-3xl mx-auto">

We combine cloud engineering, AI automation, and DevSecOps practices
to help organizations modernize infrastructure and accelerate growth.

</p>

</div>

<div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-8">

{services.map((service,index)=>(

<div
key={index}
className="group
rounded-[32px]
p-8
bg-[#0b0b0b]
border border-green-500/10
hover:border-green-400/30
transition
duration-500
hover:-translate-y-3
hover:shadow-[0_0_30px_rgba(34,197,94,0.15)]"
>

{/* ICON */}

<div
className="w-16 h-16 rounded-3xl
bg-gradient-to-r
from-green-400
to-green-600
flex
items-center
justify-center
text-black
text-2xl
font-bold
mb-8"
>

{index+1}

</div>

<h3 className="text-2xl font-bold mb-5">

{service.title}

</h3>

<p className="text-gray-400 leading-8">

{service.description}

</p>

</div>

))}

</div>

</div>

</section>

);

}
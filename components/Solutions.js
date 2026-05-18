export default function Solutions() {

const solutions = [

{
title:"AI Incident Response",
desc:"Intelligent monitoring and automated threat detection."
},

{
title:"Cloud Cost Optimization",
desc:"Reduce infrastructure expenses using AI analytics."
},

{
title:"Multi-Cloud Management",
desc:"Manage AWS, Azure and Google Cloud environments."
},

{
title:"DevSecOps Pipeline",
desc:"Secure CI/CD deployment with automation."
}

];

return (

<section className="relative py-32 overflow-hidden">

<div className="max-w-7xl mx-auto px-6">

<div className="text-center mb-20">

<p className="text-green-400 uppercase tracking-[0.35em] text-sm mb-5">

SOLUTIONS

</p>

<h2 className="text-5xl font-black text-white">

Enterprise Solutions
<br />

Built For Growth

</h2>

<p className="text-gray-400 mt-8 max-w-3xl mx-auto text-lg">

Intelligent enterprise solutions designed for cloud-native
businesses and future-ready infrastructure.

</p>

</div>

<div className="grid lg:grid-cols-2 gap-10">

{solutions.map((item,index)=>(

<div
key={index}
className="group rounded-[35px]
bg-white/5
border border-white/10
backdrop-blur-xl
p-10
hover:border-green-400/30
hover:-translate-y-3
duration-500
relative overflow-hidden"
>

<div className="absolute inset-0 opacity-0 group-hover:opacity-100 duration-500 bg-gradient-to-r from-green-500/10 to-green-700/10"></div>

<div className="relative z-10">

<div className="text-green-400 text-5xl font-black mb-6">

0{index+1}

</div>

<h3 className="text-3xl font-bold text-white mb-5">

{item.title}

</h3>

<p className="text-gray-400 leading-8">

{item.desc}

</p>

</div>

</div>

))}

</div>

</div>

</section>

);

}
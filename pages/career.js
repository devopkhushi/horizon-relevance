import Head from 'next/head';
import { useState } from 'react';

export default function Career() {
  const roles = [
    {
      title: 'Full Stack Developer',
      location: 'Delhi - Remote',
      bullets: [
        'Build and maintain web applications end-to-end',
        'Write clean, testable, production-ready code',
        'Integrate APIs and optimize performance',
      ],
    },
    {
      title: 'Cloud Engineer',
      location: 'Delhi - Remote',
      bullets: [
        'Design scalable cloud infrastructure',
        'Work with multi-cloud deployments and best practices',
        'Monitor, troubleshoot, and improve reliability',
      ],
    },
    {
      title: 'DevOps Engineer',
      location: 'Delhi - Remote',
      bullets: [
        'Automate CI/CD pipelines and infrastructure provisioning',
        'Improve build/release reliability and deployment speed',
        'Collaborate with engineering teams on observability',
      ],
    },
    {
      title: 'DB Administrator',
      location: 'Delhi - Remote',
      bullets: [
        'Manage database performance, backups, and recovery',
        'Design and optimize schemas and queries',
        'Ensure security, availability, and integrity',
      ],
    },
  ];

  const [isOpen, setIsOpen] = useState(false);
  const [selectedRole, setSelectedRole] = useState('');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    portfolio: '',
    resume: null,
    coverLetter: null,
  });

  function openModal(role) {
    setSelectedRole(role);
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
    setFormData({ name: '', email: '', phone: '', portfolio: '', resume: null, coverLetter: null });
  }

  function handleChange(e) {
    const { name, value } = e.target;
    setFormData((s) => ({ ...s, [name]: value }));
  }

  function handleFileChange(e) {
    const { name, files } = e.target;
    setFormData((s) => ({ ...s, [name]: files && files[0] ? files[0] : null }));
  }

  function handleSubmit(e) {
    e.preventDefault();
    // For now just log the submission — implement server upload when available
    const payload = {
      role: selectedRole,
      name: formData.name,
      email: formData.email,
      phone: formData.phone,
      portfolio: formData.portfolio,
      resume: formData.resume ? formData.resume.name : null,
      coverLetter: formData.coverLetter ? formData.coverLetter.name : null,
    };
    console.log('Application submitted', payload);
    alert('Application submitted (files are local only).');
    closeModal();
  }

  return (
    <>
      <Head>
        <title>Careers - Horizon Relevance</title>
        <meta
          name="description"
          content="Explore career opportunities at Horizon Relevance. Roles in Delhi - Remote: Full Stack Developer, Cloud Computing, DevOps Engineering, Database Administration."
        />
      </Head>

      <main className="min-h-screen relative overflow-hidden bg-[#05070f] text-white">
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
          <div className="absolute inset-0 bg-black/30" />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/10 to-black/50" />
        </div>

        {/* Watermark-style decorative image (inline SVG, no external asset) */}
        <div className="pointer-events-none absolute inset-0 overflow-hidden">
          <svg
            className="absolute -top-24 left-1/2 -translate-x-1/2 opacity-20"
            width="900"
            height="420"
            viewBox="0 0 900 420"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <defs>
              <linearGradient id="wm" x1="120" y1="30" x2="780" y2="390" gradientUnits="userSpaceOnUse">
                <stop stopColor="#10D981" stopOpacity="0.65" />
                <stop offset="0.55" stopColor="#34D399" stopOpacity="0.35" />
                <stop offset="1" stopColor="#3B82F6" stopOpacity="0.25" />
              </linearGradient>
              <filter id="blur" x="-50" y="-50" width="1000" height="520" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                <feGaussianBlur stdDeviation="18" />
              </filter>
            </defs>
            <path
              d="M110 240C175 85 315 65 420 125C520 182 580 110 650 55C720 0 825 40 840 120C860 230 740 320 620 330C520 338 430 395 320 378C200 360 45 350 110 240Z"
              fill="url(#wm)"
              filter="url(#blur)"
            />
            <path
              d="M245 300C300 215 372 200 444 230C515 260 555 230 610 185C668 135 760 160 765 225C773 322 655 355 580 350C505 345 420 375 345 360C283 348 200 356 245 300Z"
              fill="url(#wm)"
              filter="url(#blur)"
            />
          </svg>
        </div>

        {/* Background glow */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[900px] h-[380px] bg-green-500/10 blur-[170px] rounded-full" />
        <div className="absolute -top-24 -right-24 w-[380px] h-[380px] bg-blue-500/10 blur-[160px] rounded-full" />


        <div className="relative z-10 max-w-7xl mx-auto px-6 pt-16 pb-20">
          <div className="mx-auto max-w-5xl min-h-[92vh] flex flex-col justify-center text-center space-y-6 pb-0">
            {/* HERO */}
            <section className="text-center">
            <h1 className="text-5xl md:text-7xl font-black leading-tight mb-4">
              Join Our Team
            </h1>
            {/* Location removed as requested */}
            <p className="text-white/90 text-xl leading-9 max-w-3xl mx-auto">
              We’re hiring for multiple roles. Choose your track and apply.
            </p>
          </section>
          </div>

          {/* CARDS */}
          <section className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-7">
            {roles.map((role) => (
              <div
                key={role.title}
                className="card rounded-[32px] p-7 bg-[#0b0b0b] border border-green-500/10"
              >
                <div className="flex items-start justify-between gap-4 mb-4">
                  <div>
                    <h2 className="text-2xl font-bold leading-tight">{role.title}</h2>
                    <p className="text-green-300/90 mt-2 text-sm">{role.location}</p>
                  </div>
                  {/* avatar initials removed as requested */}
                </div>

                <ul className="mt-4 space-y-2">
                  {role.bullets.map((b) => (
                    <li key={b} className="text-gray-300 text-sm leading-6 flex gap-2">
                      <span className="mt-2 h-1.5 w-1.5 rounded-full bg-green-300 shrink-0" />
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>

                <div className="mt-6">
                  <button
                    onClick={() => openModal(role.title)}
                    className="inline-flex items-center justify-center primary-btn px-5 py-3 w-full"
                  >
                    Apply Now
                  </button>
                  <p className="text-gray-400 text-xs mt-2 text-center">
                    Send your resume to <span className="text-gray-300">careers@horizonrelevence.com</span>
                  </p>
                </div>
              </div>
            ))}
          </section>

          {/* Bottom note */}
          <section className="mt-12 text-center">
            <div className="glass rounded-[32px] p-8 border border-green-500/10 max-w-3xl mx-auto">
              <p className="text-gray-300 leading-7">
                Shortlisting is based on skill fit and hands-on experience. If you don’t see your exact match,
                you can still apply—our team will review your profile.
              </p>
            </div>
          </section>
        </div>
        {isOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center px-4">
            <div className="absolute inset-0 bg-black/60" onClick={closeModal} />
            <form onSubmit={handleSubmit} className="relative z-60 w-full max-w-2xl glass p-6 rounded-2xl">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-xl font-bold">{selectedRole}</h3>
                <button type="button" onClick={closeModal} className="text-gray-300">Close</button>
              </div>

              <div className="grid grid-cols-1 gap-4">
                <input name="name" value={formData.name} onChange={handleChange} required placeholder="Full name *" className="w-full px-4 py-3 rounded-2xl bg-[#0c1629] border border-white/10 text-white placeholder-gray-500" />
                <input name="email" type="email" value={formData.email} onChange={handleChange} required placeholder="Email *" className="w-full px-4 py-3 rounded-2xl bg-[#0c1629] border border-white/10 text-white placeholder-gray-500" />
                <input name="phone" value={formData.phone} onChange={handleChange} placeholder="Phone" className="w-full px-4 py-3 rounded-2xl bg-[#0c1629] border border-white/10 text-white placeholder-gray-500" />
                <input name="portfolio" type="url" value={formData.portfolio} onChange={handleChange} placeholder="Portfolio (link)" className="w-full px-4 py-3 rounded-2xl bg-[#0c1629] border border-white/10 text-white placeholder-gray-500" />

                <label className="text-sm text-gray-300">Resume (PDF/DOC)</label>
                <input name="resume" type="file" accept=".pdf,.doc,.docx" onChange={handleFileChange} className="w-full text-sm text-gray-300" />

                <label className="text-sm text-gray-300">Cover Letter (PDF/DOC)</label>
                <input name="coverLetter" type="file" accept=".pdf,.doc,.docx" onChange={handleFileChange} className="w-full text-sm text-gray-300" />

                <div className="flex items-center gap-3">
                  <button type="submit" className="py-3 px-5 bg-emerald-500 rounded-2xl font-bold">Submit Application</button>
                  <button type="button" onClick={closeModal} className="py-3 px-5 border rounded-2xl">Cancel</button>
                </div>
              </div>
            </form>
          </div>
        )}
      </main>
    </>
  );
}


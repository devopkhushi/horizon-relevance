export default function ProductCard({
  title,
  tagline,
  features,
  useCases,
  idealFor,
  cta,
}) {

  return (
    <div className="group relative overflow-hidden glass rounded-[36px] p-8 border border-white/10 hover:border-green-400/30 hover:-translate-y-2 transition duration-500">

      {/* HOVER GLOW */}
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-500 bg-gradient-to-br from-green-500/10 via-green-600/10 to-green-400/10"></div>

      <div className="relative z-10">

        {/* TOP */}
        <div className="flex items-start justify-between gap-6 mb-8">

          <div>

            <h3 className="text-3xl font-black leading-tight mb-4">
              {title}
            </h3>

            <p className="text-gray-400 text-lg leading-8">
              {tagline}
            </p>

          </div>

          {/* ICON */}
          <div className="min-w-[70px] h-[70px] rounded-3xl bg-gradient-to-r from-green-400 to-green-600 flex items-center justify-center text-2xl font-bold text-black shadow-[0_0_30px_rgba(34,197,94,0.35)]">

            AI

          </div>

        </div>

        {/* FEATURES */}
        <div className="mb-8">

          <h4 className="text-white text-lg font-semibold mb-5">
            Key Features
          </h4>

          <div className="flex flex-wrap gap-3">

            {features.map((feature, index) => (
              <div
                key={index}
                className="px-4 py-2 rounded-full bg-white/5 border border-white/10 text-sm text-gray-300"
              >
                {feature}
              </div>
            ))}

          </div>

        </div>

        {/* USE CASES */}
        <div className="mb-8">

          <h4 className="text-white text-lg font-semibold mb-4">
            Use Cases
          </h4>

          <div className="space-y-3">

            {useCases.map((useCase, index) => (
              <div
                key={index}
                className="glass rounded-2xl px-5 py-4 text-gray-300 leading-7"
              >
                {useCase}
              </div>
            ))}

          </div>

        </div>

        {/* IDEAL FOR */}
        <div className="mb-10">

          <h4 className="text-white text-lg font-semibold mb-4">
            Ideal For
          </h4>

          <div className="flex flex-wrap gap-3">

            {idealFor.map((item, index) => (
              <div
                key={index}
                className="px-4 py-2 rounded-full bg-green-500/10 border border-green-400/20 text-green-300 text-sm"
              >
                {item}
              </div>
            ))}

          </div>

        </div>

        {/* CTA */}
        {cta?.calendlyUrl && (

          <button
            onClick={() =>
              window.Calendly?.initPopupWidget({
                url: cta.calendlyUrl,
              })
            }
            className="w-full py-4 rounded-2xl bg-gradient-to-r from-green-700 to-green-400 text-black font-semibold hover:scale-[1.02] transition duration-300 shadow-[0_0_30px_rgba(34,197,94,0.3)]"
          >

            {cta.label}

          </button>

        )}

      </div>

    </div>
  );
}
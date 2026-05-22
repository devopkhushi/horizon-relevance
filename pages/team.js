import Navbar from '../components/Navbar';

export default function Team() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-[#020617] text-white px-6 py-24">
        <div className="max-w-5xl mx-auto">
          <header className="mb-12 text-center">
            <p className="text-emerald-300 uppercase tracking-[2px] text-sm mb-3">Who we are</p>
            <h1 className="text-4xl font-bold mb-4">Team</h1>
            <p className="text-gray-300 max-w-2xl mx-auto">A small, cross-functional team building data-driven products that help customers make better decisions.</p>
          </header>

          <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="card p-6 rounded-2xl">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-16 h-16 rounded-full bg-gradient-to-r from-green-400 to-green-600 flex items-center justify-center font-bold text-black">AR</div>
                <div>
                  <h3 className="font-bold text-lg"></h3>
                  <p className="text-sm text-gray-400">Co-founder & CTO</p>
                </div>
              </div>
              <p className="text-gray-300">Leads engineering and AI strategy. Loves designing reliable systems and mentoring engineers.</p>
            </div>

            <div className="card p-6 rounded-2xl">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-16 h-16 rounded-full bg-gradient-to-r from-blue-400 to-purple-500 flex items-center justify-center font-bold text-black">MS</div>
                <div>
                  <h3 className="font-bold text-lg"></h3>
                  <p className="text-sm text-gray-400">Head of Product</p>
                </div>
              </div>
              <p className="text-gray-300">Drives product vision and customer research. Focused on clear outcomes and fast experiments.</p>
            </div>

            <div className="card p-6 rounded-2xl">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-16 h-16 rounded-full bg-gradient-to-r from-teal-300 to-emerald-400 flex items-center justify-center font-bold text-black">RK</div>
                <div>
                  <h3 className="font-bold text-lg"></h3>
                  <p className="text-sm text-gray-400">Data Scientist</p>
                </div>
              </div>
              <p className="text-gray-300">Builds models and experiments to turn customer data into usable signals for product teams.</p>
            </div>

            <div className="card p-6 rounded-2xl">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-16 h-16 rounded-full bg-gradient-to-r from-yellow-300 to-orange-400 flex items-center justify-center font-bold text-black">SS</div>
                <div>
                  <h3 className="font-bold text-lg"></h3>
                  <p className="text-sm text-gray-400">DevOps & Cloud</p>
                </div>
              </div>
              <p className="text-gray-300">Ensures our systems are secure, observable and cost-efficient across environments.</p>
            </div>
          </section>
        </div>
      </main>
    </>
  );
}

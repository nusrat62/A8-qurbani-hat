

import tipsData from "../../public/tipsData.json";

const Tips = () => {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <h2 className="text-3xl md:text-4xl font-bold text-emerald-700 mb-4">
            Qurbani Tips & Guidelines
          </h2>

          <p className="text-gray-600 max-w-2xl mx-auto">
            Important things to check before buying an animal for Qurbani.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {tipsData.map((tip) => (
            <div
              key={tip.id}
              className="bg-green-50 rounded-2xl p-6 shadow-sm hover:shadow-xl transition duration-300 border border-green-100"
            >
              <h3 className="text-lg font-bold text-gray-800 mb-3">
                {tip.id}. {tip.title}
              </h3>

              <p className="text-gray-600 text-sm leading-relaxed">
                {tip.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Tips;
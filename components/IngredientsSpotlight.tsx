export default function IngredientsSpotlight() {
  return (
    <section className="py-24 bg-forest-green text-white transition-colors overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center gap-16">
          <div className="md:w-1/2">
            <h2 className="text-4xl font-serif mb-6 text-white">Purity Starts with Ingredients</h2>
            <p className="text-lg opacity-80 mb-8 leading-relaxed text-white">
              In Vedic cooking, we choose ingredients in the mode of goodness (Sattva). Fresh
              organic vegetables, whole grains, pure A2 ghee, and fragrant spices are the foundation
              of every meal.
            </p>
            <ul className="space-y-4 mb-8">
              <li className="flex items-center space-x-3">
                <span className="text-vedic-gold">✔</span>
                <span>Golden Ghee: The essence of liquid gold</span>
              </li>
              <li className="flex items-center space-x-3">
                <span className="text-vedic-gold">✔</span>
                <span>Medicinal Spices: Turmeric, Ginger, Hing</span>
              </li>
              <li className="flex items-center space-x-3">
                <span className="text-vedic-gold">✔</span>
                <span>Seasonal Produce: In harmony with nature</span>
              </li>
            </ul>
            <button className="border-2 border-vedic-gold text-vedic-gold hover:bg-vedic-gold hover:text-forest-green px-8 py-3 rounded-md font-bold transition-all">
              Ingredient Guide
            </button>
          </div>
          <div className="md:w-1/2 grid grid-cols-2 gap-4">
            <img
              alt="Colorful Spices"
              className="rounded-lg shadow-2xl"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuAzF97LcV2FpO42K1Kg2Mf7MHy74Vsj96WgqKy2Vi9aLsm62hB_kGoE_uB-LQCyZDWqWTDaE3APU9jTkRsDSFh_KfNgP47Qp3WGTNynvstPIhApg7_g3GSyJ2ijqYaPmUCs8rtLeey9EmuVrj-UNuIXUNpxybzhX7-8Fkj4bm9r7n_6iLVBfFWC9jxyTlUZF30ggIj9flTsSZIT-5vUFwocn3ac9cmuFqWE3eo3FqiG9Z52NTaqSfKn5XFbCQatLx5wGM6rgZVz7Og"
            />
            <img
              alt="Fresh Greens"
              className="rounded-lg shadow-2xl mt-8"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuDy3U9K2HEt5y3SW9oQHHqFnHlxs8py1K_OFGJg9vyCRJIFV1C56wM_geo2GWFgaWa-B4pNSh1JzW4Y95BllW_cJZFPdPtbhYiMq9C19qNC-oc_r6S7N_iK939jsr6dvnvyAcNhZaeUehWj4RJz6Xn9xHCpE64Q4GB6Gb5QiOZf-rf_LEJSmce6CDnvxODB0Fj_2IZ1LU72iEo81V1OFbvSz1tJQgSxcbF_khH0JANSwpX_iLicoNDQzX7nimfjhptHqk98ea0DDP4"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

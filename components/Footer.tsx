export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-16">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-2 mb-6">
              <div className="w-8 h-8 bg-deep-saffron rounded-full flex items-center justify-center">
                <span className="text-white text-sm">ॐ</span>
              </div>
              <span className="text-xl font-serif font-bold text-white">Ananda Rasa</span>
            </div>
            <p className="text-gray-400 max-w-sm mb-6">
              Dedicated to sharing the joy of Krishna consciousness through the universal language
              of sanctified food.
            </p>
            <div className="flex space-x-4">
              <a
                className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-deep-saffron transition-colors"
                href="#"
              >
                f
              </a>
              <a
                className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-deep-saffron transition-colors"
                href="#"
              >
                i
              </a>
              <a
                className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-deep-saffron transition-colors"
                href="#"
              >
                y
              </a>
            </div>
          </div>
          <div>
            <h4 className="font-bold mb-6 border-b border-gray-800 pb-2">Quick Links</h4>
            <ul className="space-y-4 text-gray-400">
              <li>
                <a className="hover:text-vedic-gold transition-colors" href="#">
                  Recipe Index
                </a>
              </li>
              <li>
                <a className="hover:text-vedic-gold transition-colors" href="#">
                  Vedic Philosophy
                </a>
              </li>
              <li>
                <a className="hover:text-vedic-gold transition-colors" href="#">
                  Kitchen Essentials
                </a>
              </li>
              <li>
                <a className="hover:text-vedic-gold transition-colors" href="#">
                  Community Blog
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold mb-6 border-b border-gray-800 pb-2">Newsletter</h4>
            <p className="text-sm text-gray-400 mb-4">
              Receive weekly spiritual recipes and inspiration.
            </p>
            <form className="flex flex-col space-y-2">
              <input
                className="bg-gray-800 border-none rounded-md px-4 py-2 text-white focus:ring-2 focus:ring-deep-saffron"
                placeholder="Email Address"
                type="email"
              />
              <button className="bg-deep-saffron hover:bg-orange-600 px-4 py-2 rounded-md font-bold transition-all">
                Subscribe
              </button>
            </form>
          </div>
        </div>
        <div className="border-t border-gray-800 pt-8 text-center text-gray-500 text-sm">
          <p>© 2023 Ananda Rasa - Hare Krishna Cooking. Serve with Love.</p>
        </div>
      </div>
    </footer>
  );
}

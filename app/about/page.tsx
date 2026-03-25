import Header from "@/components/Header";
import Footer from "@/components/Footer";

interface OtherSite {
  id: number;
  name: string;
  webUrl: string;
}

async function getOtherSites(): Promise<OtherSite[]> {
  try {
    const res = await fetch("https://api.askharekrishna.com/api/ourOtherSites/", {
      next: { revalidate: 3600 }, // Cache for 1 hour
    });
    if (!res.ok) return [];
    return res.json();
  } catch (error) {
    console.error("Failed to fetch other sites:", error);
    return [];
  }
}

export default async function AboutPage() {
  const otherSites = await getOtherSites();

  return (
    <div className="bg-spiritual-cream min-h-screen text-gray-800 font-sans">
      <Header />
      
      <main className="container mx-auto px-6 py-16">
        {/* About Hero Section */}
        <section className="max-w-4xl mx-auto mb-24 text-center">
          <span className="text-forest-green font-bold tracking-[0.3em] uppercase text-xs mb-4 block">
            Our Mission
          </span>
          <h1 className="text-4xl md:text-6xl font-serif text-deep-saffron mb-8">
            Nourishing the Soul through Sattiv Cooking
          </h1>
          <div className="w-24 h-1 bg-forest-green mx-auto mb-10"></div>
          <p className="text-xl text-gray-600 leading-relaxed mb-8">
            Sattiv Cooking is more than just a recipe platform. It is a humble attempt to share the 
            ancient wisdom of Krishna Conscious culinary arts, where every ingredient is selected 
            with compassion and every meal is prepared as a divine offering.
          </p>
        </section>

        <div className="grid lg:grid-cols-2 gap-16 items-start max-w-6xl mx-auto">
          {/* Founder Section */}
          <section className="bg-white p-10 md:p-16 rounded-[4rem] shadow-sm border border-orange-100">
            <h2 className="text-3xl font-serif text-forest-green mb-8">Meet the Founder</h2>
            <div className="flex items-center space-x-6 mb-8">
              <div className="w-24 h-24 bg-spiritual-cream rounded-full flex items-center justify-center text-3xl">
                🙏
              </div>
              <div>
                <h3 className="text-2xl font-bold text-gray-900">Narasimha dasa</h3>
                <p className="text-deep-saffron font-medium">Devotee & Culinary Guide</p>
              </div>
            </div>
            
            <p className="text-gray-600 leading-relaxed mb-10">
              Dedicated to spreading the bliss of Sattvik lifestyle, Narasimha dasa 
              curates this collection of Krishna Conscious principles and recipes to help 
              seekers transform their relationship with food and spirituality.
            </p>

            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="w-10 h-10 rounded-full bg-forest-green/10 flex items-center justify-center text-forest-green shrink-0">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <div>
                  <p className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-1">Direct Contact</p>
                  <a href="tel:+916382043976" className="text-lg font-bold text-forest-green hover:text-deep-saffron transition-colors">
                    +91 6382043976
                  </a>
                </div>
              </div>

              <div className="pt-4">
                <a 
                  href="https://wa.me/916382043976" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center px-8 py-4 bg-[#25D366] text-white rounded-2xl font-bold hover:bg-[#20bd5a] transition-all shadow-lg hover:-translate-y-1"
                >
                  <svg className="w-6 h-6 mr-3" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                  </svg>
                  WhatsApp Narasimha dasa
                </a>
              </div>
            </div>
          </section>

          {/* Other Sites Section */}
          <section>
            <h2 className="text-3xl font-serif text-forest-green mb-8 px-4">Our Other Initiatives</h2>
            <div className="grid gap-6">
              {otherSites.map((site) => (
                <a 
                  key={site.id} 
                  href={site.webUrl} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="bg-spiritual-cream p-8 rounded-[2rem] border border-transparent hover:border-vedic-gold/30 hover:bg-white hover:shadow-xl transition-all group block"
                >
                  <div className="flex justify-between items-center">
                    <div>
                      <h3 className="text-xl font-bold text-gray-800 group-hover:text-deep-saffron transition-colors">
                        {site.name}
                      </h3>
                      <p className="text-gray-500 text-sm mt-1">{site.webUrl.replace('https://', '')}</p>
                    </div>
                    <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center text-vedic-gold group-hover:bg-deep-saffron group-hover:text-white transition-all">
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                      </svg>
                    </div>
                  </div>
                </a>
              ))}
            </div>
          </section>
        </div>
      </main>

      <Footer />
    </div>
  );
}

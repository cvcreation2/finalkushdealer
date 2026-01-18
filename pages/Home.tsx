import React, { useState } from 'react';
import { useStore } from '../lib/StoreContext';
import { IMAGES, CATEGORY_IMAGES } from '../constants';
import ProductCard from '../components/ProductCard';
import { Truck, ShieldCheck, CreditCard, Leaf, MapPin, ArrowRight, Zap, Star, Quote } from 'lucide-react';
import { Link } from 'react-router-dom';

const Home = () => {
  const { products } = useStore();
  const [activeFilter, setActiveFilter] = useState('All');

  // Filter products logic
  const getFilteredProducts = () => {
    let filtered = products;
    
    if (activeFilter !== 'All') {
        // Map simple filter names to exact category names in data
        const categoryMap: Record<string, string> = {
            'Flower': 'Cannabis',
            'Edibles': 'Edibles',
            'Concentrates': 'Concentrates',
            'Accessories': 'Accessories'
        };
        const targetCategory = categoryMap[activeFilter] || activeFilter;
        filtered = products.filter(p => p.category === targetCategory);
    }
    
    // Return max 8 items (adjusted for 4 column grid)
    return filtered.slice(0, 8);
  };

  const displayedProducts = getFilteredProducts();
  const filters = ['All', 'Flower', 'Edibles', 'Concentrates', 'Accessories'];

  // Select Top Products for the "Top Rated" section - Limit to 4 for bigger cards
  const topProducts = products.filter(p => (p.rating || 0) >= 4.8).slice(0, 4);

  const experientialCategories = [
      { name: 'Flower', image: CATEGORY_IMAGES['Cannabis'], link: '/shop?category=Cannabis', desc: 'Premium Buds' },
      { name: 'Concentrates', image: CATEGORY_IMAGES['Concentrates'], link: '/shop?category=Concentrates', desc: 'Potent Extracts' },
      { name: 'Edibles', image: CATEGORY_IMAGES['Edibles'], link: '/shop?category=Edibles', desc: 'Tasty Treats' },
      { name: 'Vapes', image: CATEGORY_IMAGES['Vapes'], link: '/shop?category=Vapes', desc: 'Discreet Pens' },
      { name: 'CBD', image: CATEGORY_IMAGES['CBD'], link: '/shop?category=CBD', desc: 'Wellness' },
      { name: 'Bulk', image: CATEGORY_IMAGES['Bulk'], link: '/shop?category=Cannabis', desc: 'Wholesale Deals' }, // Bulk maps to Cannabis for now
  ];

  const testimonials = [
      {
        id: 1,
        name: "Marcus Thorne",
        date: "January 15, 2025",
        image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?fit=crop&w=200&h=200",
        text: "Absolutely blown away by the quality. The delivery was faster than expected and the driver was super professional. Def my new go-to for premium flower.",
        rating: 5
      },
      {
        id: 2,
        name: "Sarah Jenkins",
        date: "February 2, 2025",
        image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?fit=crop&w=200&h=200",
        text: "The edibles selection is insane. Tried the twisted extracts and they hit perfect. Packaging was discreet too which I appreciate given where I live.",
        rating: 5
      },
      {
        id: 3,
        name: "David Chen",
        date: "January 28, 2025",
        image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?fit=crop&w=200&h=200",
        text: "Been ordering for months now. Consistency is key and these guys never miss. The craft flower is actually top tier AAAA+.",
        rating: 5
      },
      {
        id: 4,
        name: "Emily Ross",
        date: "February 10, 2025",
        image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?fit=crop&w=200&h=200",
        text: "Customer service helped me pick out the right CBD oil for my anxiety. Really knowledgeable staff and great vibes all around.",
        rating: 5
      }
  ];

  return (
    <div className="animate-fade-in bg-zinc-50 overflow-x-hidden font-sans text-black">
        <style dangerouslySetInnerHTML={{__html: `
            @keyframes smoke {
                0% { background-position: 0 0; opacity: 0; }
                15% { opacity: 0.8; }
                100% { background-position: -500px -200px; opacity: 0; }
            }
            @keyframes kenburns {
                0% { transform: scale(1); }
                100% { transform: scale(1.15); }
            }
            @keyframes marquee {
                0% { transform: translateX(0); }
                100% { transform: translateX(-50%); }
            }
            .smoke-layer {
                position: absolute;
                top: 0;
                left: 0;
                width: 100%;
                height: 100%;
                background: url('${IMAGES.SMOKE_TEXTURE}') repeat;
                background-size: cover;
                opacity: 0.6;
                animation: smoke 25s linear infinite;
                pointer-events: none;
                z-index: 10;
                mix-blend-mode: screen; 
            }
            .smoke-layer:nth-child(2) {
                animation-duration: 35s;
                background-position: 100px 50px;
                opacity: 0.4;
            }
        `}} />
      
      {/* HERO SECTION */}
      <section className="relative h-screen min-h-[700px] flex items-center justify-center bg-zinc-900 overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0 z-0">
             <div className="w-full h-full animate-[kenburns_40s_ease-out_infinite_alternate]">
                <img
                    src="https://images.unsplash.com/photo-1603909223429-69bb7101f420?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80" 
                    alt="Premium Cannabis Background"
                    className="w-full h-full object-cover opacity-50 filter brightness-50"
                />
             </div>
             {/* Vignette Overlay */}
             <div className="absolute inset-0 bg-radial-gradient from-transparent via-zinc-900/60 to-zinc-900"></div>
             <div className="absolute inset-0 bg-gradient-to-t from-zinc-900 via-transparent to-zinc-900/50"></div>
        </div>

        {/* Content */}
        <div className="relative z-10 container mx-auto px-4 flex flex-col items-center text-center pt-10">
            {/* Badge */}
            <div className="mb-10 animate-fade-in-up">
                <span className="bg-[#059669]/20 border border-[#059669]/30 text-[#4ade80] text-sm font-bold px-6 py-3 rounded-full uppercase tracking-[0.2em] flex items-center gap-2 backdrop-blur-sm font-display">
                    <Star size={16} className="fill-current" /> Voted #1 Local Dispensary
                </span>
            </div>

            {/* Headline */}
            <h1 className="text-6xl md:text-8xl lg:text-9xl font-black text-white mb-8 uppercase tracking-tighter leading-[0.9] drop-shadow-2xl font-display">
                Premium Greens <br/>
                <span className="text-primary">For The Local Scene</span>
            </h1>

            {/* Subtext */}
            <p className="text-white text-xl md:text-2xl max-w-3xl mb-12 leading-relaxed font-light drop-shadow-md">
                Experience top-shelf strains, handcrafted edibles, and pure concentrates. Delivered discreetly or ready for pickup. Elevate your vibe today.
            </p>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row gap-6 w-full sm:w-auto font-display">
                <Link to="/shop" className="bg-primary hover:bg-primary-dark text-white px-10 py-5 rounded font-bold uppercase tracking-widest transition-all flex items-center justify-center gap-3 shadow-lg hover:shadow-primary/30 transform hover:-translate-y-1 text-lg">
                    Shop Now <ArrowRight size={22} />
                </Link>
            </div>
        </div>
        
        {/* Subtle Smoke at bottom */}
        <div className="absolute bottom-0 w-full h-1/2 bg-gradient-to-t from-zinc-900 to-transparent z-0 pointer-events-none"></div>
      </section>

      {/* Kinetic Text Divider */}
      <section className="bg-primary text-black py-8 border-y-4 border-black overflow-hidden relative z-30">
        <div className="flex whitespace-nowrap" style={{ animation: 'marquee 20s linear infinite' }}>
            {[1, 2, 3, 4, 5, 6].map((i) => (
                <span key={i} className="text-5xl md:text-6xl font-display font-bold italic tracking-tighter mx-12">
                    LOCAL KUSH DEALER • PREMIUM FLOWER • DISCREET DELIVERY •
                </span>
            ))}
        </div>
      </section>

      {/* Top Products Slider */}
      <section className="py-20 bg-white border-b border-zinc-200">
          <div className="container mx-auto px-4 md:px-8">
               <div className="flex items-center justify-between mb-12">
                  <div className="flex items-center gap-4">
                     <div className="h-10 w-1.5 bg-primary rounded-full"></div>
                     <h2 className="text-3xl md:text-4xl font-display font-bold text-black">Highest Rated Fire</h2>
                  </div>
                  <Link to="/shop" className="text-base font-bold text-primary hover:text-black uppercase tracking-widest flex items-center gap-2 font-display">
                     See All <ArrowRight size={18} />
                  </Link>
              </div>
              {/* Changed to 4 columns to make images bigger */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                  {topProducts.map((product) => (
                      <ProductCard key={product.id} product={product} />
                  ))}
              </div>
          </div>
      </section>

      {/* NEW EXPERIENTIAL CATEGORIES */}
      <section className="py-24 bg-stone-50">
          <div className="container mx-auto px-4 md:px-8">
              <div className="text-center mb-20">
                  <h2 className="text-6xl md:text-8xl font-black italic uppercase text-black tracking-tighter transform -skew-x-6 font-display">
                    THE STASH
                  </h2>
                  <p className="text-black mt-6 text-xl font-serif italic">Curated collections for every vibe.</p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {experientialCategories.map((cat, index) => (
                      <Link 
                        key={cat.name} 
                        to={cat.link}
                        className="group relative h-[450px] overflow-hidden rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-500 border border-zinc-200"
                      >
                          <div className="absolute inset-0 bg-black z-0">
                              <img 
                                src={cat.image} 
                                alt={cat.name}
                                className="w-full h-full object-cover opacity-90 group-hover:opacity-70 group-hover:scale-110 transition-all duration-700 ease-out grayscale-[10%] group-hover:grayscale-0"
                              />
                          </div>
                          
                          {/* Dark Gradient Overlay */}
                          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent opacity-80 group-hover:opacity-100 transition-opacity" />
                          
                          {/* Content */}
                          <div className="absolute bottom-0 left-0 w-full p-10 z-10 translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                              <span className="text-primary font-bold tracking-[0.2em] text-sm uppercase mb-3 block opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100 font-display">
                                  {cat.desc}
                              </span>
                              <h3 className="text-6xl font-black italic uppercase text-white tracking-tighter transform -skew-x-6 drop-shadow-lg mb-4 font-display">
                                  {cat.name}
                              </h3>
                              <div className="w-16 h-1.5 bg-primary transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
                          </div>

                          {/* Top Right Arrow */}
                          <div className="absolute top-8 right-8 z-10 opacity-0 group-hover:opacity-100 transition-all duration-500 translate-x-4 group-hover:translate-x-0">
                              <div className="bg-white/10 backdrop-blur-md p-4 rounded-full border border-white/20">
                                  <ArrowRight className="text-white w-8 h-8" />
                              </div>
                          </div>
                      </Link>
                  ))}
              </div>
          </div>
      </section>

      {/* GLOBAL DELIVERY INFO SECTION */}
      <section className="py-28 bg-zinc-900 text-white relative overflow-hidden">
          <div className="absolute inset-0 bg-[url('https://fs.hubspotusercontent00.net/hubfs/6063852/CBDBanner-1.jpg')] bg-cover bg-center opacity-20 mix-blend-overlay"></div>
          <div className="container mx-auto px-4 md:px-8 relative z-10 text-center">
             <div className="max-w-4xl mx-auto">
                <span className="inline-block py-2 px-4 rounded border border-primary/30 text-primary text-sm font-bold uppercase tracking-widest mb-8 bg-primary/10 backdrop-blur-sm font-display">
                    Worldwide Shipping
                </span>
                <h2 className="text-5xl md:text-6xl font-display font-bold mb-10 text-white">The Best Kush Delivered Worldwide</h2>
                <p className="text-white text-xl leading-loose font-light">
                    We’re bringing the heat straight to your doorstep with the cleanest, loudest Kush in the game—delivered worldwide and fully discreet so you can stay low-key. Our lineup is built on pharmaceutical-grade purity and expert infusion, making sure every hit is accurately dosed and hits exactly how it should with no cap. Whether you’re looking for a heavy couch-lock Indica or a high-energy Sativa, we provide an elite-tier delivery system that guarantees maximum potency every single time.
                </p>
             </div>
          </div>
      </section>

      {/* FRESH INVENTORY - Filtered Grid of 10 */}
      <section className="py-28 bg-white relative">
         <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-12 opacity-5 pointer-events-none">
            <Leaf size={500} />
         </div>

         <div className="container mx-auto px-4 md:px-8 relative z-10">
            <div className="text-center mb-16">
                  <h2 className="text-5xl font-display font-bold text-black mb-6">Fresh Inventory</h2>
                  <p className="text-black text-lg max-w-2xl mx-auto">Browse our latest selection of premium cannabis products.</p>
            </div>

            {/* Filter Buttons */}
            <div className="flex flex-wrap justify-center gap-6 mb-16">
                {filters.map((filter) => (
                    <button
                        key={filter}
                        onClick={() => setActiveFilter(filter)}
                        className={`px-8 py-3 rounded-full text-sm font-bold uppercase tracking-wider transition-all transform duration-300 font-display ${
                            activeFilter === filter
                                ? 'bg-black text-white shadow-lg scale-105 ring-2 ring-primary ring-offset-2'
                                : 'bg-zinc-100 text-black hover:bg-zinc-200'
                        }`}
                    >
                        {filter}
                    </button>
                ))}
            </div>

            {/* Product Grid (Adjusted to 4 cols for bigger images) */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-y-12 gap-x-8 mb-20 min-h-[400px]">
                {displayedProducts.length > 0 ? (
                    displayedProducts.map((product) => (
                        <ProductCard key={product.id} product={product} />
                    ))
                ) : (
                    <div className="col-span-full flex justify-center items-center text-black italic text-xl">
                        No products found in this category.
                    </div>
                )}
            </div>

            {/* View All Link */}
            <div className="flex justify-center">
                <Link to="/shop" className="group flex flex-col items-center gap-2">
                    <span className="font-black text-3xl uppercase tracking-tighter text-black group-hover:text-primary transition-colors font-display">
                        View All Products
                    </span>
                    <div className="h-2 w-full bg-primary transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left skew-x-[-12deg]"></div>
                </Link>
            </div>
         </div>
      </section>

      {/* TESTIMONIALS SECTION - ADDED */}
      <section className="py-28 bg-stone-50 border-t border-zinc-200 relative">
          <div className="container mx-auto px-4 md:px-8">
              <div className="flex flex-col items-center text-center mb-20">
                  <div className="bg-primary/10 p-5 rounded-full mb-8">
                      <Quote size={40} className="text-primary fill-current" />
                  </div>
                  <h2 className="text-5xl md:text-6xl font-display font-bold text-black mb-6">Client Love</h2>
                  <p className="text-black text-xl max-w-xl">See what our community is saying about the stash.</p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
                  {testimonials.map((t) => (
                      <div key={t.id} className="bg-white p-10 rounded-3xl shadow-sm hover:shadow-2xl transition-shadow duration-300 border border-zinc-200 flex flex-col relative group">
                          {/* Stars */}
                          <div className="flex gap-1.5 mb-8">
                              {[...Array(5)].map((_, i) => (
                                  <Star key={i} size={20} className={`fill-yellow-400 text-yellow-400`} />
                              ))}
                          </div>

                          <p className="text-black leading-relaxed mb-10 flex-grow italic font-serif text-lg">"{t.text}"</p>

                          <div className="flex items-center gap-5 mt-auto border-t border-zinc-100 pt-8">
                              <img 
                                src={t.image} 
                                alt={t.name}
                                className="w-14 h-14 rounded-full object-cover border-2 border-primary/20"
                              />
                              <div>
                                  <h4 className="font-bold text-base text-black font-display uppercase tracking-wide">{t.name}</h4>
                                  <span className="text-sm text-black block mt-1">{t.date}</span>
                              </div>
                          </div>
                      </div>
                  ))}
              </div>
          </div>
      </section>

      {/* Benefits Strip */}
      <section className="py-20 bg-white border-t border-zinc-200">
        <div className="container mx-auto px-4 md:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 text-center divide-y md:divide-y-0 md:divide-x divide-zinc-200">
            <div className="flex flex-col items-center p-6">
              <div className="mb-6 text-primary bg-primary/5 p-5 rounded-full">
                <Truck size={36} strokeWidth={1.5} />
              </div>
              <h3 className="text-2xl font-display font-bold mb-3 text-black">Fast Delivery</h3>
              <p className="text-black text-base">Same-day delivery in GTA for orders before 2PM.</p>
            </div>
            <div className="flex flex-col items-center p-6">
              <div className="mb-6 text-primary bg-primary/5 p-5 rounded-full">
                <ShieldCheck size={36} strokeWidth={1.5} />
              </div>
              <h3 className="text-2xl font-display font-bold mb-3 text-black">Secure Payment</h3>
              <p className="text-black text-base">100% secure encrypted checkout process.</p>
            </div>
            <div className="flex flex-col items-center p-6">
              <div className="mb-6 text-primary bg-primary/5 p-5 rounded-full">
                <CreditCard size={36} strokeWidth={1.5} />
              </div>
              <h3 className="text-2xl font-display font-bold mb-3 text-black">Best Prices</h3>
              <p className="text-black text-base">Price match guarantee on all regular items.</p>
            </div>
          </div>
        </div>
      </section>
      
    </div>
  );
};

export default Home;
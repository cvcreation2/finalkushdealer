import React, { useState, useEffect } from 'react';
import { useStore } from '../lib/StoreContext';
import { ShoppingBag, Menu, X, Leaf, Search, Phone, Mail, Instagram, Facebook, Twitter, User } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import { MAIN_MENU } from '../constants';

const Layout = ({ children }: { children?: React.ReactNode }) => {
  const { settings, cart } = useStore();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const isAdmin = location.pathname.includes('/admin');
  const isHome = location.pathname === '/';

  const cartTotal = cart.reduce((acc, item) => acc + item.quantity, 0);

  // Handle scroll for sticky header transition
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Header State Styles
  const headerBaseClass = "w-full transition-all duration-300 z-50";
  const headerStateClass = isHome && !scrolled
    ? "fixed top-0 bg-transparent text-white border-transparent" 
    : "sticky top-0 bg-white text-black border-b border-zinc-100 shadow-sm";
    
  // Utility bar logic - Absolute on home/unscrolled to sit nicely at top without pushing content
  const utilityBarClass = isHome && !scrolled
    ? "absolute top-0 left-0 w-full bg-transparent text-white/80 border-white/10 z-[60]"
    : "bg-zinc-50 text-black border-zinc-200 relative z-50";

  return (
    <div className="min-h-screen flex flex-col font-sans text-black bg-stone-50">
      {/* Announcement Bar - Only show on non-home pages or if scrolled to keep hero clean */}
      {!isAdmin && (!isHome || scrolled) && (
        <div className="bg-primary text-white text-sm py-2 px-4 text-center tracking-wide font-bold uppercase animate-fade-in font-display">
          {settings.announcementText}
        </div>
      )}

      {/* Top Utility Bar */}
      <div className={`hidden lg:flex justify-between items-center px-8 py-2 text-sm font-medium transition-colors duration-300 border-b ${utilityBarClass}`}>
        <div className="flex gap-6">
          <span className="flex items-center gap-1.5"><Phone size={14} className={isHome && !scrolled ? "text-primary-light" : "text-primary"} /> {settings.contactPhone}</span>
          <span className="flex items-center gap-1.5"><Mail size={14} className={isHome && !scrolled ? "text-primary-light" : "text-primary"} /> {settings.contactEmail}</span>
        </div>
        <div className="flex items-center gap-6">
            <span className={isHome && !scrolled ? "text-white/80" : "text-black"}>Mon-Sat: 10:00 - 19:00</span>
            <div className="flex gap-3">
                <Facebook size={16} className="cursor-pointer hover:text-primary transition-colors" />
                <Twitter size={16} className="cursor-pointer hover:text-primary transition-colors" />
                <Instagram size={16} className="cursor-pointer hover:text-primary transition-colors" />
            </div>
        </div>
      </div>

      {/* Main Header */}
      <header className={`${headerBaseClass} ${headerStateClass}`}>
        <div className={`container mx-auto px-4 lg:px-8 flex justify-between items-center gap-8 transition-all duration-500 ${
            isHome && !scrolled ? 'h-40 pt-12' : 'h-20 lg:h-24'
        }`}>
          {/* Logo - Image & Text */}
          <Link to="/" className="flex-shrink-0 flex items-center gap-4 group">
             <img 
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRbDPqoO_nknWMjHJ2nAP5xFYivOdlhL9xYlQ&s" 
                alt="Local Kush Dealer" 
                className="h-10 md:h-14 w-auto transition-all duration-300 object-contain rounded-full bg-white"
             />
             <div className="flex flex-col">
                <span className={`font-display font-bold text-2xl md:text-3xl uppercase tracking-tighter leading-none transition-colors duration-300 ${
                    isHome && !scrolled ? 'text-white' : 'text-black'
                }`}>
                    Local Kush
                </span>
                <span className={`font-display font-bold text-base md:text-lg uppercase tracking-[0.3em] leading-none transition-colors duration-300 ${
                    isHome && !scrolled ? 'text-primary' : 'text-primary'
                }`}>
                    Dealer
                </span>
             </div>
          </Link>

          {/* Navigation (Desktop) - Merged into single row */}
          <nav className="hidden lg:flex items-center gap-8">
            {MAIN_MENU.map((item) => (
                <Link 
                key={item.label}
                to={item.path} 
                className={`text-base font-bold uppercase tracking-wide hover:text-primary transition-all py-2 border-b-2 border-transparent hover:border-primary font-display ${
                    isHome && !scrolled ? 'text-white/90 drop-shadow-sm' : 'text-black'
                }`}
                >
                {item.label}
                </Link>
            ))}
          </nav>

          {/* Actions */}
          <div className="flex items-center gap-4 flex-shrink-0">
            {/* Search Trigger */}
             <button className={`p-2 rounded-full hover:bg-black/5 transition-colors ${isHome && !scrolled ? 'text-white' : 'text-black'}`}>
                <Search className="w-6 h-6" />
             </button>

             {/* Cart - Now links to Checkout */}
            <Link to="/checkout" className="relative p-2 hover:bg-black/5 rounded-full transition-colors group">
                <ShoppingBag className={`w-6 h-6 group-hover:text-primary transition-colors ${isHome && !scrolled ? 'text-white' : 'text-black'}`} />
                {cartTotal > 0 && (
                  <span className="absolute -top-1 -right-1 w-5 h-5 bg-primary text-white text-xs font-bold flex items-center justify-center rounded-full border-2 border-white">
                    {cartTotal}
                  </span>
                )}
            </Link>

            {/* CTA Button */}
            <Link to="/shop" className={`hidden lg:block px-8 py-3 rounded font-bold text-base tracking-wide transition-all font-display flex items-center justify-center ${
                isHome && !scrolled 
                    ? 'bg-white text-black hover:bg-zinc-100 shadow-lg' 
                    : 'bg-primary text-white hover:bg-primary-dark'
            }`}>
                Order Now
            </Link>

            {/* Mobile Menu Toggle */}
            <button 
              className={`lg:hidden p-2 rounded-full ${isHome && !scrolled ? 'text-white hover:bg-white/10' : 'text-black hover:bg-zinc-100'}`}
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-[60] bg-white pt-20 overflow-y-auto lg:hidden animate-fade-in">
           <div className="absolute top-4 right-4">
              <button onClick={() => setIsMobileMenuOpen(false)} className="p-2 text-zinc-500 hover:text-black">
                <X size={28} />
              </button>
           </div>
           
           <div className="px-6 py-4 flex flex-col gap-6">
              {/* Mobile Search */}
              <div className="relative">
                 <input 
                  type="text" 
                  placeholder="Search products..." 
                  className="w-full bg-zinc-100 text-black border-none rounded-lg py-4 px-4 pl-12 text-base focus:ring-1 focus:ring-primary outline-none"
                 />
                 <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-black w-5 h-5" />
              </div>

              {/* Mobile Main Menu */}
              <div>
                <h3 className="text-sm font-bold text-black uppercase tracking-widest mb-4 font-display">Menu</h3>
                <div className="flex flex-col gap-2">
                   {MAIN_MENU.map((item) => (
                     <Link 
                      key={item.label} 
                      to={item.path} 
                      className="py-4 font-bold text-black hover:text-primary border-b border-zinc-100 font-display text-xl"
                      onClick={() => setIsMobileMenuOpen(false)}
                     >
                       {item.label}
                     </Link>
                   ))}
                </div>
              </div>
           </div>
        </div>
      )}

      <main className="flex-grow">
        {children}
      </main>

      {/* Footer */}
      <footer className="bg-zinc-900 text-white py-16 border-t-4 border-primary">
        <div className="container mx-auto px-4 lg:px-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          <div>
            <div className="flex items-center gap-3 mb-6">
               <img 
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRbDPqoO_nknWMjHJ2nAP5xFYivOdlhL9xYlQ&s" 
                alt="Local Kush Dealer" 
                className="h-10 w-auto opacity-80 rounded-full bg-white"
              />
              <div className="flex flex-col">
                <span className="font-display font-bold text-xl text-white uppercase tracking-tighter leading-none">
                    Local Kush
                </span>
                <span className="font-display font-bold text-sm text-primary uppercase tracking-[0.3em] leading-none">
                    Dealer
                </span>
             </div>
            </div>
            <p className="text-base leading-relaxed mb-6 text-white">
              Canada's premier destination for medical-grade cannabis. We prioritize quality, and safety, and discreet delivery for all our patients.
            </p>
            <div className="flex gap-4">
              <Instagram size={24} className="hover:text-primary cursor-pointer transition-colors" />
              <Twitter size={24} className="hover:text-primary cursor-pointer transition-colors" />
              <Facebook size={24} className="hover:text-primary cursor-pointer transition-colors" />
            </div>
          </div>

          <div>
            <h3 className="text-white font-display text-xl mb-6 tracking-wide">Shop Categories</h3>
            <ul className="space-y-4 text-base">
              <li><Link to="/shop?category=Concentrates" className="hover:text-primary transition-colors text-white">Concentrates</Link></li>
              <li><Link to="/shop?category=Edibles" className="hover:text-primary transition-colors text-white">Edibles</Link></li>
              <li><Link to="/shop?category=Vapes" className="hover:text-primary transition-colors text-white">Vape Pens</Link></li>
              <li><Link to="/shop?category=CBD" className="hover:text-primary transition-colors text-white">CBD Oils</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-display text-xl mb-6 tracking-wide">Support</h3>
            <ul className="space-y-4 text-base">
              <li><Link to="/how-to-pay" className="hover:text-primary transition-colors text-white">How to pay</Link></li>
              <li><Link to="/contact" className="hover:text-primary transition-colors text-white">Contact Us</Link></li>
              <li><Link to="/admin" className="hover:text-primary transition-colors text-white">Admin</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-display text-xl mb-6 tracking-wide">Newsletter</h3>
            <p className="text-base mb-4 text-white">Subscribe to receive exclusive offers and new strain drops.</p>
            <div className="flex">
              <input type="email" placeholder="Your email" className="bg-zinc-800 border-zinc-700 text-white px-4 py-3 w-full text-base focus:ring-1 focus:ring-primary outline-none rounded-l-md placeholder-zinc-300" />
              <button className="bg-primary hover:bg-primary-dark text-white px-6 py-3 rounded-r-md text-base font-bold transition-colors font-display tracking-wider">
                JOIN
              </button>
            </div>
          </div>
        </div>
        <div className="border-t border-zinc-800 mt-12 pt-8 text-center text-sm text-zinc-300">
          <p>&copy; 2024 Local Kush Dealer. All rights reserved. Must be 19+ to purchase.</p>
        </div>
      </footer>
    </div>
  );
};

export default Layout;
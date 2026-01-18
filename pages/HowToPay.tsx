import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import { IMAGES } from '../constants';

const HowToPay = () => {
  return (
    <div className="bg-zinc-900 min-h-screen text-white font-sans animate-fade-in relative overflow-hidden">
        {/* Background Texture */}
        <div className="absolute inset-0 opacity-10" style={{
            backgroundImage: `url(${IMAGES.TEXTURE_BG})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center'
        }}></div>
        
        <div className="container mx-auto px-4 py-16 relative z-10 max-w-5xl">
            {/* Header */}
            <div className="mb-16 text-center">
                 <h1 className="text-5xl md:text-7xl font-display font-bold mb-6 tracking-tighter uppercase">
                    How to Pay
                 </h1>
                 <div className="w-24 h-1 bg-primary mx-auto mb-8"></div>
                 
                 <div className="max-w-3xl mx-auto bg-zinc-800/50 p-8 rounded-2xl border border-zinc-700/50 backdrop-blur-sm">
                    <h2 className="text-2xl font-display font-bold text-primary mb-4 uppercase tracking-wider">
                        BITPAY PROTOCOL: ONLINE OR MOBILE INTERFACE
                    </h2>
                    <p className="text-white leading-relaxed text-lg font-light text-justify md:text-center">
                        Execute cryptocurrency acquisitions via credit card, debit card, or primary bank accounts. Supports Apple Pay, Google Pay, Venmo, PayPal, and Cash App through BitPay’s verified network. Rapid delivery to primary wallets with zero third-party custody.
                    </p>
                 </div>
            </div>

            {/* Steps Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
                {/* Connecting Lines (Desktop) */}
                <div className="hidden md:block absolute top-8 left-0 w-full h-0.5 bg-zinc-800 -z-10 translate-y-4"></div>

                {/* Step 01 */}
                <div className="flex flex-col items-center text-center group">
                    <div className="bg-zinc-900 border-2 border-zinc-800 group-hover:border-primary transition-colors w-16 h-16 flex items-center justify-center rounded-full mb-6 relative z-10">
                        <span className="font-display font-bold text-2xl text-white group-hover:text-white">01</span>
                    </div>
                    <h3 className="text-xl font-display font-bold mb-3 uppercase tracking-wider">Select Asset</h3>
                    <p className="text-white text-sm mb-6 max-w-[200px]">
                        Choose <span className="text-white font-bold">BITCOIN (BTC)</span> then Add the product amount you purchase
                    </p>
                    <div className="bg-zinc-800/50 p-6 rounded-xl border border-zinc-700/50 w-full hover:bg-zinc-800 transition-colors h-48 flex items-center justify-center">
                        <img src="https://framerusercontent.com/images/BxglwCrCpt9Tt3zZTzislu1AZOM.svg" alt="Select Asset" className="w-32 h-auto opacity-90 group-hover:opacity-100 transition-opacity" />
                    </div>
                </div>

                {/* Step 02 */}
                 <div className="flex flex-col items-center text-center group">
                    <div className="bg-zinc-900 border-2 border-zinc-800 group-hover:border-primary transition-colors w-16 h-16 flex items-center justify-center rounded-full mb-6 relative z-10">
                        <span className="font-display font-bold text-2xl text-white group-hover:text-white">02</span>
                    </div>
                    <h3 className="text-xl font-display font-bold mb-3 uppercase tracking-wider">Uplink Destination</h3>
                    <p className="text-white text-sm mb-6 max-w-[200px]">
                        Paste the <span className="text-white font-bold">Bitcoin wallet address</span> you copied from our website
                    </p>
                    <div className="bg-zinc-800/50 p-6 rounded-xl border border-zinc-700/50 w-full hover:bg-zinc-800 transition-colors h-48 flex items-center justify-center">
                        <img src="https://framerusercontent.com/images/BxglwCrCpt9Tt3zZTzislu1AZOM.svg" alt="Uplink Destination" className="w-32 h-auto opacity-90 group-hover:opacity-100 transition-opacity" />
                    </div>
                </div>

                {/* Step 03 */}
                 <div className="flex flex-col items-center text-center group">
                    <div className="bg-zinc-900 border-2 border-zinc-800 group-hover:border-primary transition-colors w-16 h-16 flex items-center justify-center rounded-full mb-6 relative z-10">
                        <span className="font-display font-bold text-2xl text-white group-hover:text-white">03</span>
                    </div>
                    <h3 className="text-xl font-display font-bold mb-3 uppercase tracking-wider">Execute & Send</h3>
                    <p className="text-white text-sm mb-6 max-w-[200px]">
                        Choose the lowest rate, and how you want to pay
                    </p>
                    <div className="bg-zinc-800/50 p-6 rounded-xl border border-zinc-700/50 w-full hover:bg-zinc-800 transition-colors h-48 flex items-center justify-center">
                        <img src="https://framerusercontent.com/images/TI7jPU1WYENfHo8u9WfGBilvjQ0.svg" alt="Execute" className="w-32 h-auto opacity-90 group-hover:opacity-100 transition-opacity" />
                    </div>
                </div>
            </div>

            <div className="mt-20 text-center">
                <Link to="/shop" className="inline-flex items-center gap-2 bg-primary hover:bg-primary-dark text-white px-8 py-4 rounded font-bold uppercase tracking-widest transition-all shadow-lg hover:shadow-primary/30">
                    <ArrowLeft size={20} /> Back to Shop
                </Link>
            </div>
        </div>
    </div>
  );
};

export default HowToPay;
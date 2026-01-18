import React from 'react';
import { useStore } from '../lib/StoreContext';
import { Link } from 'react-router-dom';
import { ShieldCheck, Lock, ExternalLink, HelpCircle, AlertCircle, Copy, Minus, Plus, Trash2 } from 'lucide-react';

const Checkout = () => {
  const { cart, updateQuantity, clearCart, removeFromCart } = useStore();
  const subtotal = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);
  const shipping = subtotal > 150 ? 0 : 15;
  const total = subtotal + shipping;

  const btcWalletAddress = "1KikxCrD2xstzCaZr9iBwHmiWzk5zQNYAW";

  const handleClearCart = () => {
      if (window.confirm("Are you sure you want to empty your cart?")) {
          clearCart();
      }
  };

  if (cart.length === 0) {
    return (
      <div className="min-h-[60vh] flex flex-col items-center justify-center bg-stone-50">
        <h2 className="text-4xl font-display font-bold mb-6 text-black">Your Cart is Empty</h2>
        <p className="text-black mb-8 text-lg">Looks like you haven't added any premium greens yet.</p>
        <Link to="/shop" className="bg-primary hover:bg-primary-dark text-white px-10 py-4 rounded-xl font-bold uppercase tracking-widest transition-colors font-display text-lg">
            Start Shopping
        </Link>
      </div>
    );
  }

  return (
    <div className="bg-stone-50 min-h-screen py-16 animate-fade-in text-black">
      <div className="container mx-auto px-4 md:px-8">
        <h1 className="text-5xl font-display font-bold text-black mb-10">Secure Checkout</h1>

        <div className="flex flex-col lg:flex-row gap-10 lg:gap-16">
            
            {/* Left Column: Form & Summary */}
            <div className="lg:w-2/3 space-y-10">
                
                {/* Order Summary */}
                <div className="bg-white p-8 rounded-2xl shadow-sm border border-zinc-200">
                    <div className="flex items-center justify-between mb-6 border-b border-zinc-100 pb-3">
                        <h2 className="text-2xl font-display font-bold">Order Summary</h2>
                        <button onClick={handleClearCart} className="text-red-600 text-sm font-bold flex items-center gap-1 hover:underline">
                            <Trash2 size={16} /> Clear Cart
                        </button>
                    </div>
                    <div className="space-y-6 max-h-96 overflow-y-auto mb-6 pr-2">
                        {cart.map((item, index) => (
                            <div key={`${item.id}-${index}-${item.selectedVariant?.weight}`} className="flex flex-col sm:flex-row sm:items-center gap-4 py-4 border-b border-zinc-50 last:border-0">
                                <div className="flex items-center gap-5 flex-grow">
                                    <div className="w-20 h-20 flex-shrink-0 bg-zinc-100 rounded-lg overflow-hidden border border-zinc-200">
                                        <img src={item.image} alt={item.name} className="w-full h-full object-cover" />
                                    </div>
                                    <div className="flex-grow">
                                        <h4 className="font-bold text-lg text-black">{item.name}</h4>
                                        <div className="text-sm text-black font-medium mb-2">
                                            {item.selectedVariant ? <span className="text-primary font-bold">{item.selectedVariant.weight}</span> : 'Standard Unit'}
                                        </div>
                                        <div className="font-mono text-black text-sm">
                                            ${item.price.toFixed(2)} / unit
                                        </div>
                                    </div>
                                </div>

                                <div className="flex items-center justify-between sm:gap-6 w-full sm:w-auto">
                                    {/* Quantity Controls */}
                                    <div className="flex items-center border border-zinc-200 rounded-lg bg-zinc-50">
                                        <button 
                                            onClick={() => item.quantity > 1 ? updateQuantity(item.id, item.selectedVariant?.weight, item.quantity - 1) : removeFromCart(item.id, item.selectedVariant?.weight)}
                                            className="p-2 hover:bg-zinc-200 text-black rounded-l-lg transition-colors"
                                        >
                                            <Minus size={14} />
                                        </button>
                                        <span className="w-10 text-center font-bold text-sm">{item.quantity}</span>
                                        <button 
                                            onClick={() => updateQuantity(item.id, item.selectedVariant?.weight, item.quantity + 1)}
                                            className="p-2 hover:bg-zinc-200 text-black rounded-r-lg transition-colors"
                                        >
                                            <Plus size={14} />
                                        </button>
                                    </div>

                                    <div className="text-right min-w-[80px]">
                                        <span className="font-bold text-lg text-black">${(item.price * item.quantity).toFixed(2)}</span>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                    <div className="border-t border-zinc-100 pt-6 space-y-3 text-base text-black">
                        <div className="flex justify-between">
                            <span>Subtotal</span>
                            <span>${subtotal.toFixed(2)}</span>
                        </div>
                        <div className="flex justify-between">
                            <span>Shipping</span>
                            <span>{shipping === 0 ? 'FREE' : `$${shipping.toFixed(2)}`}</span>
                        </div>
                        <div className="flex justify-between text-xl font-bold text-black pt-4 border-t border-zinc-100 mt-4">
                            <span>Total</span>
                            <span>${total.toFixed(2)}</span>
                        </div>
                    </div>
                </div>

                {/* Checkout Form */}
                <div className="bg-white p-8 rounded-2xl shadow-sm border border-zinc-200">
                    <div className="flex items-center justify-between mb-8">
                        <h2 className="text-2xl font-display font-bold">Shipping Details</h2>
                        <Lock size={20} className="text-green-700" />
                    </div>
                    
                    <form className="space-y-6">
                        <div className="grid grid-cols-2 gap-6">
                            <div>
                                <label className="block text-sm font-bold text-black mb-2 uppercase">First Name</label>
                                <input type="text" className="w-full bg-zinc-50 border border-zinc-300 rounded-lg p-4 text-base focus:border-primary outline-none text-black" placeholder="John" />
                            </div>
                            <div>
                                <label className="block text-sm font-bold text-black mb-2 uppercase">Last Name</label>
                                <input type="text" className="w-full bg-zinc-50 border border-zinc-300 rounded-lg p-4 text-base focus:border-primary outline-none text-black" placeholder="Doe" />
                            </div>
                        </div>

                        <div>
                            <label className="block text-sm font-bold text-black mb-2 uppercase">Email Address</label>
                            <input type="email" className="w-full bg-zinc-50 border border-zinc-300 rounded-lg p-4 text-base focus:border-primary outline-none text-black" placeholder="john@example.com" />
                        </div>

                        <div>
                            <label className="block text-sm font-bold text-black mb-2 uppercase">Shipping Address</label>
                            <input type="text" className="w-full bg-zinc-50 border border-zinc-300 rounded-lg p-4 text-base focus:border-primary outline-none mb-4 text-black" placeholder="Street Address" />
                            <div className="grid grid-cols-2 gap-6">
                                <input type="text" className="w-full bg-zinc-50 border border-zinc-300 rounded-lg p-4 text-base focus:border-primary outline-none text-black" placeholder="City" />
                                <input type="text" className="w-full bg-zinc-50 border border-zinc-300 rounded-lg p-4 text-base focus:border-primary outline-none text-black" placeholder="Postal Code" />
                            </div>
                        </div>
                    </form>
                </div>

                {/* Payment Section - BTC Only */}
                <div className="bg-white p-8 rounded-2xl shadow-sm border border-zinc-200">
                    <h2 className="text-2xl font-display font-bold mb-8 flex items-center gap-3">
                        Payment 
                        <span className="bg-orange-100 text-orange-700 text-xs px-3 py-1 rounded font-bold uppercase tracking-wider border border-orange-200">Bitcoin Only</span>
                    </h2>

                    <div className="bg-zinc-50 p-8 rounded-xl border border-zinc-200 text-center mb-8">
                        <p className="text-base text-black font-bold mb-4 uppercase tracking-wide">Copy this BTC Wallet Address</p>
                        
                        {/* RED BTC ADDRESS */}
                        <div className="bg-white p-5 rounded-lg border-2 border-dashed border-zinc-300 mb-6 break-all group relative cursor-pointer hover:border-primary transition-colors">
                             <span className="text-red-600 font-mono font-bold text-xl select-all">
                                {btcWalletAddress}
                             </span>
                             <div className="absolute inset-0 flex items-center justify-center bg-white/95 opacity-0 group-hover:opacity-100 transition-opacity">
                                <span className="text-sm font-bold text-black flex items-center gap-2">Click to Copy <Copy size={16}/></span>
                             </div>
                        </div>
                        
                        <p className="text-sm text-black mb-8 font-medium">
                            Send exactly <span className="font-bold text-black">${total.toFixed(2)}</span> worth of BTC to the address above. Your order will be processed immediately upon network confirmation.
                        </p>

                        <a 
                            href="https://www.bitpay.com/buy-crypto" 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="inline-flex items-center justify-center gap-3 w-full bg-black hover:bg-zinc-800 text-white font-bold uppercase tracking-widest py-5 rounded-xl shadow-lg transition-colors font-display text-lg"
                        >
                            Pay Now <ExternalLink size={20} />
                        </a>
                        <p className="text-xs text-black mt-3 font-medium">You will be redirected to BitPay to purchase crypto if you don't have a wallet.</p>
                    </div>
                </div>

            </div>

            {/* Right Column: Embedded Tutorial */}
            <aside className="lg:w-1/3">
                <div className="bg-white p-8 rounded-2xl shadow-sm border border-zinc-200 sticky top-28">
                     <div className="bg-primary/5 p-6 rounded-xl mb-8 border border-primary/10">
                        <h3 className="font-display font-bold text-xl mb-6 flex items-center gap-3 text-black">
                            <HelpCircle size={24} className="text-primary"/> How to Pay
                        </h3>
                        
                        {/* Step 1 */}
                        <div className="flex gap-4 mb-6 relative">
                            <div className="flex-shrink-0 w-8 h-8 rounded-full bg-black text-white flex items-center justify-center text-sm font-bold z-10">1</div>
                            {/* Connector Line */}
                            <div className="absolute left-4 top-8 bottom-[-24px] w-0.5 bg-zinc-200 -z-0"></div>
                            
                            <div>
                                <h4 className="text-base font-bold text-black">Select Asset</h4>
                                <p className="text-sm text-black mt-1 leading-relaxed">Open your wallet/exchange (Coinbase, Cash App, etc.) and select <span className="font-bold text-black">Bitcoin (BTC)</span>.</p>
                            </div>
                        </div>

                        {/* Step 2 */}
                        <div className="flex gap-4 mb-6 relative">
                             <div className="flex-shrink-0 w-8 h-8 rounded-full bg-black text-white flex items-center justify-center text-sm font-bold z-10">2</div>
                             {/* Connector Line */}
                             <div className="absolute left-4 top-8 bottom-[-24px] w-0.5 bg-zinc-200 -z-0"></div>

                            <div>
                                <h4 className="text-base font-bold text-black">Uplink Destination</h4>
                                <p className="text-sm text-black mt-1 leading-relaxed">Copy the <span className="font-bold text-black">Wallet Address</span> shown in the payment box and paste it as the recipient.</p>
                            </div>
                        </div>

                        {/* Step 3 */}
                        <div className="flex gap-4">
                             <div className="flex-shrink-0 w-8 h-8 rounded-full bg-black text-white flex items-center justify-center text-sm font-bold z-10">3</div>
                            
                            <div>
                                <h4 className="text-base font-bold text-black">Execute & Send</h4>
                                <p className="text-sm text-black mt-1 leading-relaxed">Enter the exact <span className="font-bold text-black">Total Amount</span> ($) and confirm the transaction.</p>
                            </div>
                        </div>
                     </div>
                     
                     <div className="mt-8 pt-8 border-t border-zinc-100">
                        <div className="flex items-start gap-4 mb-5">
                            <ShieldCheck className="text-green-700 flex-shrink-0" size={24} />
                            <div>
                                <h4 className="font-bold text-base text-black">Secure Transaction</h4>
                                <p className="text-sm text-black">256-bit SSL Encrypted connection.</p>
                            </div>
                        </div>
                        <div className="flex items-start gap-4">
                            <Lock className="text-green-700 flex-shrink-0" size={24} />
                            <div>
                                <h4 className="font-bold text-base text-black">Discreet Packaging</h4>
                                <p className="text-sm text-black">Vacuum sealed, plain box delivery.</p>
                            </div>
                        </div>
                     </div>
                     
                     <div className="mt-8 text-center">
                        <Link to="/how-to-pay" className="text-sm font-bold text-primary hover:text-primary-dark hover:underline flex items-center justify-center gap-2">
                            View Full Payment Guide <ExternalLink size={14}/>
                        </Link>
                     </div>
                </div>
            </aside>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
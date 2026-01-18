import React, { useEffect, useState } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { useStore } from '../lib/StoreContext';
import { Star, Check, Truck, ShieldCheck, Minus, Plus, ThumbsUp, Zap, ShoppingBag, Scale, Info } from 'lucide-react';
import ProductCard from '../components/ProductCard';

const ProductDetails = () => {
  const { id } = useParams<{ id: string }>();
  const { products, addToCart } = useStore();
  const navigate = useNavigate();
  const [quantity, setQuantity] = useState(1);
  const [activeTab, setActiveTab] = useState<'description' | 'reviews'>('description');
  
  const product = products.find((p) => p.id === id);
  
  // State for selected variant (weight)
  const [selectedVariant, setSelectedVariant] = useState(product?.variants?.[0]);

  // Scroll to top on id change
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  useEffect(() => {
    if (product?.variants) {
        // Default to the first variant (usually 1 Ounce based on our data structure)
        setSelectedVariant(product.variants[0]);
    }
  }, [product]);

  if (!product) {
    return (
      <div className="min-h-[60vh] flex flex-col items-center justify-center">
        <h2 className="text-4xl font-display font-bold mb-4">Product Not Found</h2>
        <Link to="/shop" className="text-primary underline font-bold text-xl">Return to Shop</Link>
      </div>
    );
  }

  // Related Products
  const relatedProducts = products
    .filter((p) => p.category === product.category && p.id !== product.id)
    .slice(0, 4);

  // Mock Reviews
  const mockReviews = [
      { user: 'DankMaster99', rating: 5, date: '2 days ago', text: 'This strain hits differently. The price for the pound is unbeatable.' },
      { user: 'GreenThumb', rating: 5, date: '1 week ago', text: 'Exactly as described. Fast shipping.' },
      { user: 'CannaQueen', rating: 4, date: '2 weeks ago', text: 'Good nose on this one. Little leafy but potent.' }
  ];

  // Dynamic Price Calculation
  const currentPrice = selectedVariant ? selectedVariant.price : product.price;
  const totalPrice = currentPrice * quantity;

  const handleAddToCart = () => {
    // Add logic to add multiple items if quantity > 1, or modify store to handle qty in add
    for (let i = 0; i < quantity; i++) {
        addToCart(product, selectedVariant);
    }
  };

  const handleBuyNow = () => {
    handleAddToCart();
    navigate('/checkout');
  };

  return (
    <div className="bg-white min-h-screen animate-fade-in pb-24 text-black">
      <div className="container mx-auto px-4 py-16">
        
        {/* Breadcrumb */}
        <div className="text-base text-black mb-10 font-medium">
            <Link to="/" className="hover:text-primary">Home</Link> / <Link to="/shop" className="hover:text-primary">Shop</Link> / <span className="text-black font-bold">{product.name}</span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-24">
            {/* Image Section */}
            <div className="bg-zinc-50 rounded-3xl overflow-hidden shadow-sm border border-zinc-200 aspect-square relative group">
                <img src={product.image} alt={product.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-4 py-2 rounded-lg border border-zinc-200 shadow-sm">
                    <span className="font-bold text-black flex items-center gap-2">
                        <Info size={16} className="text-primary" />
                        {product.category}
                    </span>
                </div>
            </div>

            {/* Info Section */}
            <div className="flex flex-col">
                <div className="mb-4 flex items-center gap-2">
                    <span className="bg-primary/10 text-primary border border-primary/20 px-4 py-1.5 rounded text-sm font-bold uppercase tracking-wider">{product.type}</span>
                    {product.inStock ? (
                        <span className="text-green-700 text-sm font-bold flex items-center gap-1"><Check size={14}/> In Stock</span>
                    ) : (
                        <span className="text-red-600 text-sm font-bold">Out of Stock</span>
                    )}
                </div>

                <h1 className="text-4xl md:text-5xl font-display font-bold text-black mb-4 leading-none">{product.name}</h1>
                <p className="text-zinc-700 mb-6 text-lg leading-relaxed">{product.description}</p>
                
                {/* Pricing Table (Bulk Buddy Style) */}
                {product.variants && product.variants.length > 0 && (
                    <div className="mb-8">
                        <div className="flex items-center gap-2 mb-4">
                            <Scale size={20} className="text-black"/>
                            <span className="text-base font-bold text-black uppercase tracking-wide">Select Quantity</span>
                        </div>
                        
                        <div className="bg-white border border-zinc-200 rounded-xl overflow-hidden shadow-sm">
                            <table className="w-full text-left border-collapse">
                                <thead>
                                    <tr className="bg-zinc-50 border-b border-zinc-200 text-xs uppercase text-black font-bold">
                                        <th className="p-4">Weight</th>
                                        <th className="p-4 text-right">Price</th>
                                        <th className="p-4 text-center">Select</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {product.variants.map((variant) => (
                                        <tr 
                                            key={variant.weight} 
                                            onClick={() => setSelectedVariant(variant)}
                                            className={`cursor-pointer transition-colors border-b border-zinc-100 last:border-0 hover:bg-zinc-50 ${selectedVariant?.weight === variant.weight ? 'bg-primary/5' : ''}`}
                                        >
                                            <td className="p-4 font-bold text-black">{variant.weight}</td>
                                            <td className="p-4 text-right font-mono font-bold text-black">${variant.price.toFixed(2)}</td>
                                            <td className="p-4 text-center">
                                                <div className={`w-5 h-5 rounded-full border-2 mx-auto flex items-center justify-center ${selectedVariant?.weight === variant.weight ? 'border-primary' : 'border-zinc-300'}`}>
                                                    {selectedVariant?.weight === variant.weight && <div className="w-2.5 h-2.5 rounded-full bg-primary"></div>}
                                                </div>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                )}

                {/* Total Price Display */}
                <div className="bg-zinc-50 p-6 rounded-2xl border border-zinc-200 mb-8 flex flex-col md:flex-row md:items-center justify-between gap-6">
                    <div>
                         <span className="block text-sm font-bold text-black uppercase tracking-wide mb-1">Total Price</span>
                         <div className="flex items-baseline gap-2">
                            <span className="text-4xl font-display font-bold text-black">${totalPrice.toFixed(2)}</span>
                            {quantity > 1 && <span className="text-sm text-black">(${currentPrice.toFixed(2)} ea)</span>}
                         </div>
                    </div>
                    
                    {/* Quantity Selector */}
                     <div className="flex items-center border border-zinc-300 rounded-xl bg-white shadow-sm h-14">
                        <button onClick={() => setQuantity(Math.max(1, quantity - 1))} className="px-5 h-full hover:bg-zinc-100 text-black flex items-center justify-center rounded-l-xl"><Minus size={18}/></button>
                        <span className="px-4 font-bold w-12 text-center text-lg">{quantity}</span>
                        <button onClick={() => setQuantity(quantity + 1)} className="px-5 h-full hover:bg-zinc-100 text-black flex items-center justify-center rounded-r-xl"><Plus size={18}/></button>
                     </div>
                </div>

                {/* Actions */}
                <div className="flex flex-col gap-4 mb-10">
                     <div className="flex gap-4">
                        <button 
                            onClick={handleBuyNow}
                            className="flex-1 bg-primary hover:bg-primary-dark text-white font-bold uppercase tracking-widest py-4 rounded-xl shadow-lg hover:shadow-primary/30 transition-all font-display text-xl flex items-center justify-center gap-3"
                        >
                            <Zap size={24} className="fill-current" /> Buy Now
                        </button>
                        <button 
                            onClick={handleAddToCart}
                            className="flex-1 bg-white border-2 border-black text-black hover:bg-zinc-50 font-bold uppercase tracking-widest py-4 rounded-xl transition-all font-display text-xl flex items-center justify-center gap-3"
                        >
                            <ShoppingBag size={24} /> Add to Cart
                        </button>
                     </div>
                </div>

                {/* Trust Badges */}
                <div className="grid grid-cols-2 gap-4 text-sm text-black font-bold">
                    <div className="flex items-center gap-2">
                        <Truck size={20} className="text-primary"/> <span>Free shipping on orders over $150</span>
                    </div>
                    <div className="flex items-center gap-2">
                        <ShieldCheck size={20} className="text-primary"/> <span>100% Secure Checkout</span>
                    </div>
                </div>
            </div>
        </div>

        {/* Tabs Section - Simplified */}
        <div className="mb-24">
            <div className="flex border-b border-zinc-200 mb-10">
                <button 
                    onClick={() => setActiveTab('description')}
                    className={`px-10 py-5 font-bold uppercase tracking-wider text-base border-b-4 transition-colors font-display ${activeTab === 'description' ? 'border-primary text-black' : 'border-transparent text-zinc-400 hover:text-black'}`}
                >
                    Product Info
                </button>
                <button 
                    onClick={() => setActiveTab('reviews')}
                    className={`px-10 py-5 font-bold uppercase tracking-wider text-base border-b-4 transition-colors font-display ${activeTab === 'reviews' ? 'border-primary text-black' : 'border-transparent text-zinc-400 hover:text-black'}`}
                >
                    Reviews
                </button>
            </div>

            {activeTab === 'description' ? (
                <div className="prose max-w-5xl text-black">
                     <p className="text-xl leading-relaxed text-black mb-8">
                        {product.description}
                     </p>
                     
                     {product.thcPercent && (
                        <div className="bg-zinc-50 p-6 rounded-xl border border-zinc-200 inline-block">
                             <h4 className="font-bold text-black uppercase mb-2">Potency Analysis</h4>
                             <p className="text-3xl font-display font-bold text-primary">{product.thcPercent}% THC</p>
                        </div>
                     )}
                </div>
            ) : (
                <div className="space-y-6 max-w-5xl">
                    {mockReviews.map((review, i) => (
                        <div key={i} className="bg-zinc-50 p-6 rounded-xl border border-zinc-100">
                             <div className="flex items-center justify-between mb-2">
                                 <span className="font-bold text-black">{review.user}</span>
                                 <div className="flex text-yellow-400">
                                    {[...Array(5)].map((_, s) => <Star key={s} size={14} className={s < review.rating ? "fill-current" : "text-zinc-300"} />)}
                                 </div>
                             </div>
                             <p className="text-black">{review.text}</p>
                        </div>
                    ))}
                </div>
            )}
        </div>

        {/* Related Products */}
        <div>
            <h2 className="text-4xl font-display font-bold text-black mb-10 border-t border-zinc-200 pt-16">You Might Also Like</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                {relatedProducts.map(p => (
                    <ProductCard key={p.id} product={p} />
                ))}
            </div>
        </div>

      </div>
    </div>
  );
};

export default ProductDetails;
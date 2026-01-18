import React from 'react';
import { Product, StrainType } from '../types';
import { Plus, Star } from 'lucide-react';
import { useStore } from '../lib/StoreContext';
import { useNavigate } from 'react-router-dom';

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const { addToCart } = useStore();
  const navigate = useNavigate();

  const getTypeColor = (type: string) => {
    switch (type) {
      case StrainType.SATIVA: return 'text-orange-900 bg-orange-100 border border-orange-200';
      case StrainType.INDICA: return 'text-purple-900 bg-purple-100 border border-purple-200';
      case StrainType.HYBRID: return 'text-blue-900 bg-blue-100 border border-blue-200';
      case StrainType.CBD: return 'text-green-900 bg-green-100 border border-green-200';
      case StrainType.ACCESSORY: return 'text-black bg-zinc-200 border border-zinc-300';
      default: return 'text-black bg-zinc-100 border border-zinc-200';
    }
  };

  const renderStars = (rating: number) => {
    return (
      <div className="flex items-center gap-1">
        <Star size={14} className="fill-yellow-400 text-yellow-400" />
        <span className="text-sm font-bold text-black">{rating.toFixed(1)}</span>
      </div>
    );
  };

  const handleCardClick = () => {
    navigate(`/product/${product.id}`);
  };

  const handleAddToCart = (e: React.MouseEvent) => {
    e.stopPropagation();
    addToCart(product);
  };

  return (
    <div 
      onClick={handleCardClick}
      className="group bg-white rounded-2xl shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 border border-zinc-200 overflow-hidden flex flex-col h-full cursor-pointer relative"
    >
      {/* Image Container */}
      <div className="relative aspect-square overflow-hidden bg-zinc-50">
        <img 
          src={product.image} 
          alt={product.name} 
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-in-out" 
        />
        
        {/* Type Badge */}
        <div className="absolute top-3 left-3">
            <span className={`text-[10px] font-bold uppercase tracking-wider px-2 py-1 rounded-md shadow-sm ${getTypeColor(product.type)}`}>
                {product.type}
            </span>
        </div>
      </div>

      {/* Content */}
      <div className="p-5 flex flex-grow flex-col justify-between">
        <div>
            {/* Title */}
            <h3 className="font-display font-bold text-lg text-black leading-tight mb-2 group-hover:text-primary transition-colors">
                {product.name}
            </h3>

            {/* Reviews & THC Row */}
            <div className="flex items-center gap-4 mb-2">
                 {product.rating && renderStars(product.rating)}
                 
                 {product.thcPercent && (
                    <div className="flex items-center gap-1">
                        <span className="text-xs font-black text-black">|</span>
                        <span className="text-xs font-bold text-black">THC {product.thcPercent}%</span>
                    </div>
                 )}
            </div>
        </div>

        {/* Footer: Price & Add Button */}
        <div className="flex items-center justify-between mt-4 pt-4 border-t border-zinc-100">
             <span className="text-xl font-bold text-black font-display">
                ${product.price.toFixed(2)}
             </span>
             
             <button 
                onClick={handleAddToCart}
                className="w-10 h-10 rounded-full bg-zinc-900 text-white flex items-center justify-center hover:bg-primary transition-colors shadow-md transform group-hover:scale-110 duration-200"
                title="Add to Cart"
             >
                <Plus size={20} strokeWidth={3} />
             </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
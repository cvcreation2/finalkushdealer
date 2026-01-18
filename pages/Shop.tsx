import React, { useState, useEffect } from 'react';
import { useStore } from '../lib/StoreContext';
import ProductCard from '../components/ProductCard';
import { StrainType } from '../types';
import { CATEGORIES, IMAGES } from '../constants';
import { Filter, ChevronDown, Search, ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react';
import { Link, useSearchParams } from 'react-router-dom';

const Shop = () => {
  const { products } = useStore();
  const [searchParams] = useSearchParams();
  const [selectedCategory, setSelectedCategory] = useState('All Products');
  const [selectedType, setSelectedType] = useState<StrainType | 'All' | string>('All');
  const [showFilters, setShowFilters] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  
  // Pagination State - Increased to 24 to show more products
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 24;

  // Handle URL Params for initial category load
  useEffect(() => {
    const categoryParam = searchParams.get('category');
    if (categoryParam) {
        setSelectedCategory(categoryParam);
    }
  }, [searchParams]);

  // Reset pagination when filters change
  useEffect(() => {
    setCurrentPage(1);
  }, [selectedCategory, selectedType, searchQuery]);

  // Filter logic
  const filteredProducts = products.filter(product => {
    const matchesCategory = selectedCategory === 'All Products' || product.category === selectedCategory;
    const matchesType = selectedType === 'All' || product.type === selectedType;
    const matchesSearch = product.name.toLowerCase().includes(searchQuery.toLowerCase());
    
    return matchesCategory && matchesType && matchesSearch;
  });

  // Pagination Logic
  const totalPages = Math.ceil(filteredProducts.length / itemsPerPage);
  const currentProducts = filteredProducts.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  const handlePageChange = (newPage: number) => {
    setCurrentPage(newPage);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleSubcategoryClick = (category: string, sub: string) => {
    setSelectedCategory(category);
    
    // Intelligent filtering based on subcategory name
    // Added 'Shake n Trim' and 'AAA Weed' to handle the user request to filter by these specific types
    if (['Indica', 'Sativa', 'Hybrid', 'CBD', 'Accessory', 'Shake n Trim', 'AAA Weed'].includes(sub)) {
        setSelectedType(sub as StrainType); // Cast as StrainType/string
        setSearchQuery('');
    } else {
        setSelectedType('All');
        setSearchQuery(sub); // Use search to find "AAAA", "Shatter", etc.
    }
    
    // Scroll to top
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Find Featured Vape Products for the special layout
  const keo6ml = products.find(p => p.id === 'v1');
  const keo2ml = products.find(p => p.id === 'v2');
  const keo3ml = products.find(p => p.id === 'v3');
  const showVapeFeature = (selectedCategory === 'All Products' || selectedCategory === 'Vapes') && keo6ml && keo2ml && keo3ml && currentPage === 1;

  return (
    <div className="bg-stone-50 min-h-screen animate-fade-in pb-20 text-black">
      {/* Header */}
      <div className="bg-zinc-900 text-white py-12 md:py-24 relative overflow-hidden">
        <div className="absolute inset-0 opacity-20" style={{
            backgroundImage: `url(${IMAGES.TEXTURE_BG})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center'
        }}></div>
        <div className="container mx-auto px-4 relative z-10">
            <h1 className="text-5xl md:text-7xl font-serif font-bold mb-6">Shop</h1>
            <p className="text-white text-lg max-w-xl">Explore our premium collection of medical-grade cannabis, curated for quality and potency.</p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-16">
        <div className="flex flex-col lg:flex-row gap-10">
            
            {/* Mobile Filter Toggle */}
            <button 
                className="lg:hidden flex items-center justify-between bg-white p-5 rounded-xl shadow-sm border border-zinc-200 font-bold text-black"
                onClick={() => setShowFilters(!showFilters)}
            >
                <span>Categories</span>
                <Filter size={24} />
            </button>

            {/* Sidebar */}
            <aside className={`lg:w-1/4 space-y-10 ${showFilters ? 'block' : 'hidden lg:block'}`}>
                {/* Search */}
                <div className="relative">
                    <input 
                        type="text" 
                        placeholder="Search strains..." 
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        className="w-full pl-12 pr-4 py-4 bg-white border border-zinc-200 rounded-xl focus:ring-1 focus:ring-primary focus:border-primary outline-none text-base text-black"
                    />
                    <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-black w-5 h-5" />
                </div>

                {/* Categories (Visual List) */}
                <div className="bg-white p-8 rounded-2xl border border-zinc-200 shadow-sm">
                    <h3 className="font-serif font-bold text-xl mb-6 text-black">Categories</h3>
                    <ul className="space-y-2">
                        <li 
                            className={`cursor-pointer px-4 py-3 rounded-lg text-base transition-colors ${selectedCategory === 'All Products' ? 'bg-primary/5 text-primary font-bold' : 'text-black hover:bg-zinc-100'}`}
                            onClick={() => {
                                setSelectedCategory('All Products'); 
                                setSelectedType('All'); 
                                setSearchQuery('');
                            }}
                        >
                            All Products ({products.length})
                        </li>
                        {CATEGORIES.map(cat => (
                            <li key={cat.name} className="flex flex-col">
                                <div 
                                    className={`cursor-pointer px-4 py-3 rounded-lg text-base transition-colors flex justify-between items-center ${selectedCategory === cat.name ? 'bg-primary/5 text-primary font-bold' : 'text-black hover:bg-zinc-100'}`}
                                    onClick={() => {
                                        setSelectedCategory(cat.name);
                                        // Reset specific filters when clicking parent category to show all items in that category
                                        if (selectedCategory !== cat.name) {
                                            setSelectedType('All');
                                            setSearchQuery('');
                                        }
                                    }}
                                >
                                    {cat.name}
                                    {cat.subcategories.length > 0 && (
                                        <ChevronDown size={16} className={`transform transition-transform ${selectedCategory === cat.name ? 'rotate-180' : ''}`} />
                                    )}
                                </div>
                                
                                {/* Subcategories */}
                                {selectedCategory === cat.name && cat.subcategories.length > 0 && (
                                    <ul className="mt-1 ml-4 space-y-1 border-l-2 border-zinc-100 pl-4">
                                        {cat.subcategories.map(sub => (
                                            <li 
                                                key={sub}
                                                onClick={(e) => {
                                                    e.stopPropagation();
                                                    handleSubcategoryClick(cat.name, sub);
                                                }}
                                                className={`text-sm py-2 cursor-pointer hover:text-primary transition-colors ${searchQuery === sub || selectedType === sub ? 'text-primary font-bold' : 'text-black'}`}
                                            >
                                                {sub}
                                            </li>
                                        ))}
                                    </ul>
                                )}
                            </li>
                        ))}
                    </ul>
                </div>
                
                {/* Total Products Badge REMOVED as requested */}
            </aside>

            {/* Product Grid */}
            <main className="lg:w-3/4">
                
                {/* FEATURED VAPE COLLECTION: Keo Extracts Grid (Only on Page 1) */}
                {showVapeFeature && keo6ml && keo2ml && keo3ml && (
                    <div className="mb-16">
                         <h2 className="text-3xl font-display font-bold text-black mb-8 flex items-center gap-3">
                            FEATURED DROP <span className="text-primary">//</span> KEO EXTRACTS
                        </h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 h-auto md:h-[600px]">
                            {/* Large Feature - 6ML */}
                            <Link to={`/product/${keo6ml.id}`} className="relative group overflow-hidden rounded-2xl bg-zinc-900 md:row-span-2 h-[400px] md:h-full border border-zinc-200">
                                <div className="absolute inset-0 z-0">
                                    <img src={keo6ml.image} alt={keo6ml.name} className="w-full h-full object-cover opacity-60 group-hover:opacity-40 group-hover:scale-105 transition-all duration-700" />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-90"></div>
                                </div>
                                <div className="absolute bottom-0 left-0 p-8 z-10 w-full">
                                    <span className="inline-block bg-primary text-white text-xs font-bold px-3 py-1.5 mb-4 rounded uppercase tracking-wider">New Arrival</span>
                                    <h3 className="text-4xl md:text-5xl font-display font-bold text-white uppercase tracking-tighter leading-none mb-3">
                                        6ML Dual Chamber
                                    </h3>
                                    <p className="text-zinc-300 text-base font-medium mb-6 line-clamp-2">{keo6ml.description}</p>
                                    <div className="flex items-center justify-between">
                                        <span className="text-3xl font-bold text-white">${keo6ml.price}</span>
                                        <div className="bg-white/10 p-3 rounded-full backdrop-blur-sm group-hover:bg-primary group-hover:text-white transition-colors">
                                            <ArrowRight size={24} className="text-white" />
                                        </div>
                                    </div>
                                </div>
                            </Link>

                            {/* Top Right - 2ML */}
                            <Link to={`/product/${keo2ml.id}`} className="relative group overflow-hidden rounded-2xl bg-zinc-800 h-[250px] md:h-full border border-zinc-200">
                                <div className="absolute inset-0 z-0">
                                    <img src={keo2ml.image} alt={keo2ml.name} className="w-full h-full object-cover opacity-60 group-hover:opacity-40 group-hover:scale-105 transition-all duration-700" />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-90"></div>
                                </div>
                                <div className="absolute bottom-0 left-0 p-8 z-10 w-full">
                                    <h3 className="text-2xl md:text-3xl font-display font-bold text-white uppercase tracking-tighter leading-none mb-2">
                                        2ML Disposable
                                    </h3>
                                    <span className="text-2xl font-bold text-primary">${keo2ml.price}</span>
                                </div>
                            </Link>

                             {/* Bottom Right - 3ML */}
                             <Link to={`/product/${keo3ml.id}`} className="relative group overflow-hidden rounded-2xl bg-zinc-800 h-[250px] md:h-full border border-zinc-200">
                                <div className="absolute inset-0 z-0">
                                    <img src={keo3ml.image} alt={keo3ml.name} className="w-full h-full object-cover opacity-60 group-hover:opacity-40 group-hover:scale-105 transition-all duration-700" />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-90"></div>
                                </div>
                                <div className="absolute bottom-0 left-0 p-8 z-10 w-full">
                                    <h3 className="text-2xl md:text-3xl font-display font-bold text-white uppercase tracking-tighter leading-none mb-2">
                                        3ML Disposable
                                    </h3>
                                    <span className="text-2xl font-bold text-primary">${keo3ml.price}</span>
                                </div>
                            </Link>
                        </div>
                    </div>
                )}

                <div className="flex justify-between items-center mb-8">
                    <h2 className="font-bold text-black text-lg">Showing {Math.min((currentPage - 1) * itemsPerPage + 1, filteredProducts.length)}-{Math.min(currentPage * itemsPerPage, filteredProducts.length)} of {filteredProducts.length} results</h2>
                    <div className="flex items-center gap-3 text-base text-black">
                        <span>Sort by:</span>
                        <select className="bg-transparent border-none font-bold text-black outline-none cursor-pointer">
                            <option>Featured</option>
                            <option>Price: Low to High</option>
                            <option>Price: High to Low</option>
                        </select>
                    </div>
                </div>

                {filteredProducts.length > 0 ? (
                    <>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
                            {currentProducts.map(product => (
                                <ProductCard key={product.id} product={product} />
                            ))}
                        </div>

                        {/* Pagination Controls */}
                        {totalPages > 1 && (
                            <div className="flex justify-center items-center gap-3">
                                <button 
                                    onClick={() => handlePageChange(currentPage - 1)}
                                    disabled={currentPage === 1}
                                    className="p-3 rounded-xl border border-zinc-200 text-black hover:bg-zinc-100 disabled:opacity-50 disabled:cursor-not-allowed"
                                >
                                    <ChevronLeft size={24} />
                                </button>
                                
                                <div className="flex gap-2">
                                    {[...Array(totalPages)].map((_, i) => {
                                        const pageNum = i + 1;
                                        if (totalPages > 8 && Math.abs(currentPage - pageNum) > 2 && pageNum !== 1 && pageNum !== totalPages) {
                                            if (Math.abs(currentPage - pageNum) === 3) return <span key={i} className="px-2 text-black font-bold self-center">...</span>;
                                            return null;
                                        }

                                        return (
                                            <button
                                                key={pageNum}
                                                onClick={() => handlePageChange(pageNum)}
                                                className={`w-12 h-12 rounded-xl font-bold text-base transition-colors ${
                                                    currentPage === pageNum 
                                                        ? 'bg-primary text-white shadow-md' 
                                                        : 'bg-white text-black border border-zinc-200 hover:bg-zinc-50'
                                                }`}
                                            >
                                                {pageNum}
                                            </button>
                                        );
                                    })}
                                </div>

                                <button 
                                    onClick={() => handlePageChange(currentPage + 1)}
                                    disabled={currentPage === totalPages}
                                    className="p-3 rounded-xl border border-zinc-200 text-black hover:bg-zinc-100 disabled:opacity-50 disabled:cursor-not-allowed"
                                >
                                    <ChevronRight size={24} />
                                </button>
                            </div>
                        )}
                    </>
                ) : (
                    <div className="text-center py-24 bg-white rounded-2xl border border-dashed border-zinc-300">
                        <p className="text-black text-lg">No products found matching your criteria.</p>
                        <button 
                            onClick={() => {
                                setSelectedType('All'); 
                                setSearchQuery(''); 
                                setSelectedCategory('All Products');
                            }}
                            className="mt-6 text-primary font-bold hover:underline text-lg"
                        >
                            Clear Filters
                        </button>
                    </div>
                )}
            </main>
        </div>
      </div>
    </div>
  );
};

export default Shop;
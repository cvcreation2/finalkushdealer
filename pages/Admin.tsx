import React, { useState } from 'react';
import { useStore } from '../lib/StoreContext';
import { StrainType, Product } from '../types';
import { Settings, Plus, Upload, Lock, Save, Package } from 'lucide-react';
import { IMAGES, CATEGORIES } from '../constants';

const Admin = () => {
  const { settings, updateSettings, products, addProduct } = useStore();
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [password, setPassword] = useState('');
  
  // Local state for new product form
  const [newProduct, setNewProduct] = useState<Partial<Product>>({
    name: '',
    price: 0,
    thcPercent: 0,
    type: StrainType.HYBRID,
    category: 'Cannabis',
    image: IMAGES.BUD_CLOSEUP_1,
    description: '',
    inStock: true
  });

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    // Simple mock auth
    if (password === 'admin123') {
      setIsAuthenticated(true);
    } else {
      alert('Incorrect password (hint: admin123)');
    }
  };

  const handleCreateProduct = (e: React.FormEvent) => {
    e.preventDefault();
    if (newProduct.name && newProduct.price) {
      addProduct({
        ...newProduct as Product,
        id: Math.random().toString(36).substr(2, 9)
      });
      alert('Product Added to Live Site!');
      setNewProduct({
         name: '',
         price: 0,
         thcPercent: 0,
         type: StrainType.HYBRID,
         category: 'Cannabis',
         image: IMAGES.BUD_CLOSEUP_1,
         description: '',
         inStock: true
      });
    }
  };

  if (!isAuthenticated) {
    return (
      <div className="min-h-[70vh] flex items-center justify-center bg-stone-50">
        <div className="bg-white p-8 rounded-xl shadow-lg w-full max-w-md border border-zinc-100">
          <div className="flex justify-center mb-6">
            <div className="bg-zinc-100 p-4 rounded-full">
              <Lock className="w-8 h-8 text-primary" />
            </div>
          </div>
          <h2 className="text-2xl font-serif font-bold text-center mb-2 text-black">Admin Access</h2>
          <p className="text-center text-black mb-6 text-sm">Enter password to manage dispensary</p>
          <form onSubmit={handleLogin} className="space-y-4">
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-4 py-3 rounded border border-zinc-300 focus:border-primary focus:ring-1 focus:ring-primary outline-none text-black"
              placeholder="Password"
            />
            <button type="submit" className="w-full bg-primary text-white py-3 rounded font-bold hover:bg-primary-dark transition-colors">
              Unlock Dashboard
            </button>
          </form>
          <p className="text-xs text-center text-black mt-4">Hint: admin123</p>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-stone-50 min-h-screen pb-20">
      <div className="bg-zinc-900 text-white py-12 px-4 mb-8">
        <div className="container mx-auto">
          <div className="flex items-center gap-4 mb-2">
            <Settings className="text-primary" />
            <h1 className="text-3xl font-serif font-bold text-white">Control Center</h1>
          </div>
          <p className="text-white">Manage site appearance, products, and inventory.</p>
        </div>
      </div>

      <div className="container mx-auto px-4 grid grid-cols-1 lg:grid-cols-2 gap-8">
        
        {/* Theme Controller */}
        <div className="bg-white rounded-xl shadow-sm border border-zinc-100 p-6">
          <div className="flex items-center justify-between mb-6 border-b border-zinc-100 pb-4">
             <h2 className="text-xl font-bold font-serif flex items-center gap-2 text-black">
               <span className="w-2 h-6 bg-primary rounded-full"></span>
               Theme Controller
             </h2>
             <span className="text-xs bg-green-100 text-green-800 px-2 py-1 rounded-full font-bold">LIVE</span>
          </div>

          <div className="space-y-6">
            <div>
              <label className="block text-sm font-bold text-black mb-2">Primary Brand Color</label>
              <div className="flex gap-4 items-center">
                <input
                  type="color"
                  value={settings.primaryColor}
                  onChange={(e) => updateSettings({ primaryColor: e.target.value })}
                  className="w-12 h-12 p-1 rounded cursor-pointer border border-zinc-200"
                />
                <span className="font-mono text-black bg-zinc-100 px-3 py-1 rounded">{settings.primaryColor}</span>
              </div>
              <p className="text-xs text-black mt-2">Changes apply globally immediately.</p>
            </div>

            <div>
              <label className="block text-sm font-bold text-black mb-2">Announcement Bar Text</label>
              <input
                type="text"
                value={settings.announcementText}
                onChange={(e) => updateSettings({ announcementText: e.target.value })}
                className="w-full p-3 border border-zinc-200 rounded focus:border-primary outline-none text-black"
              />
            </div>

            <div>
              <label className="block text-sm font-bold text-black mb-2">Hero Headline</label>
              <textarea
                value={settings.heroHeadline}
                onChange={(e) => updateSettings({ heroHeadline: e.target.value })}
                className="w-full p-3 border border-zinc-200 rounded focus:border-primary outline-none text-black"
                rows={2}
              />
            </div>
            
            <button className="flex items-center gap-2 bg-zinc-900 text-white px-6 py-2 rounded text-sm font-bold hover:bg-zinc-700 transition-colors">
                <Save size={16} /> Save Changes
            </button>
          </div>
        </div>

        {/* Product Manager */}
        <div className="bg-white rounded-xl shadow-sm border border-zinc-100 p-6">
          <div className="flex items-center justify-between mb-6 border-b border-zinc-100 pb-4">
             <h2 className="text-xl font-bold font-serif flex items-center gap-2 text-black">
               <span className="w-2 h-6 bg-blue-500 rounded-full"></span>
               Product Manager
             </h2>
             <div className="flex gap-2">
                <button className="text-xs flex items-center gap-1 bg-zinc-100 hover:bg-zinc-200 px-3 py-1 rounded text-black font-medium transition-colors">
                    <Upload size={12} /> CSV Import
                </button>
             </div>
          </div>

          <form onSubmit={handleCreateProduct} className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-bold text-black mb-1">Product Name</label>
                <input
                  required
                  type="text"
                  value={newProduct.name}
                  onChange={(e) => setNewProduct({...newProduct, name: e.target.value})}
                  className="w-full p-2 border border-zinc-200 rounded text-sm focus:border-primary outline-none text-black"
                />
              </div>
              <div>
                <label className="block text-xs font-bold text-black mb-1">Price ($)</label>
                <input
                  required
                  type="number"
                  value={newProduct.price}
                  onChange={(e) => setNewProduct({...newProduct, price: parseFloat(e.target.value)})}
                  className="w-full p-2 border border-zinc-200 rounded text-sm focus:border-primary outline-none text-black"
                />
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
               <div>
                <label className="block text-xs font-bold text-black mb-1">Type</label>
                <select
                  value={newProduct.type}
                  onChange={(e) => setNewProduct({...newProduct, type: e.target.value as StrainType})}
                  className="w-full p-2 border border-zinc-200 rounded text-sm focus:border-primary outline-none text-black"
                >
                  {Object.values(StrainType).map(t => <option key={t} value={t}>{t}</option>)}
                </select>
              </div>
              <div>
                 <label className="block text-xs font-bold text-black mb-1">Category</label>
                 <select
                    value={newProduct.category}
                    onChange={(e) => setNewProduct({...newProduct, category: e.target.value})}
                    className="w-full p-2 border border-zinc-200 rounded text-sm focus:border-primary outline-none text-black"
                 >
                    {CATEGORIES.map(c => <option key={c.name} value={c.name}>{c.name}</option>)}
                 </select>
              </div>
            </div>

            <div>
                 <label className="block text-xs font-bold text-black mb-1">THC %</label>
                 <input
                  type="number"
                  value={newProduct.thcPercent}
                  onChange={(e) => setNewProduct({...newProduct, thcPercent: parseFloat(e.target.value)})}
                  className="w-full p-2 border border-zinc-200 rounded text-sm focus:border-primary outline-none text-black"
                />
            </div>
            
            <div>
                 <label className="block text-xs font-bold text-black mb-1">Description</label>
                 <textarea
                    value={newProduct.description}
                    onChange={(e) => setNewProduct({...newProduct, description: e.target.value})}
                    className="w-full p-2 border border-zinc-200 rounded text-sm focus:border-primary outline-none text-black"
                    rows={2}
                 />
            </div>
            
            <div>
                <label className="block text-xs font-bold text-black mb-1">Image URL</label>
                <input
                  type="text"
                  value={newProduct.image}
                  onChange={(e) => setNewProduct({...newProduct, image: e.target.value})}
                  className="w-full p-2 border border-zinc-200 rounded text-sm focus:border-primary outline-none text-black"
                />
            </div>

            <button type="submit" className="w-full bg-primary hover:bg-primary-dark text-white py-2 rounded font-bold text-sm transition-colors flex items-center justify-center gap-2">
               <Plus size={16} /> Add Product to Store
            </button>
          </form>
          
          <div className="mt-8 border-t border-zinc-100 pt-4">
              <h3 className="text-sm font-bold text-black uppercase tracking-wider mb-4">Current Inventory ({products.length})</h3>
              <div className="space-y-2 max-h-48 overflow-y-auto">
                  {products.map(p => (
                      <div key={p.id} className="flex justify-between items-center bg-zinc-50 p-2 rounded border border-zinc-100">
                          <div className="flex items-center gap-3">
                              <img src={p.image} className="w-8 h-8 rounded object-cover" />
                              <div className="flex flex-col">
                                <span className="text-sm font-medium text-black">{p.name}</span>
                                <span className="text-[10px] text-black">{p.category} • {p.type}</span>
                              </div>
                          </div>
                          <span className="text-sm font-bold text-primary">${p.price}</span>
                      </div>
                  ))}
              </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Admin;
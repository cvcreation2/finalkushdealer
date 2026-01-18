import React, { useState } from 'react';
import { Send, CheckCircle } from 'lucide-react';
import { IMAGES } from '../constants';

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: ''
    });
    const [submitted, setSubmitted] = useState(false);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Mock submission
        setSubmitted(true);
        setTimeout(() => setSubmitted(false), 3000);
        setFormData({ name: '', email: '', subject: '', message: '' });
    };

    return (
        <div className="bg-stone-50 min-h-screen animate-fade-in text-black">
             {/* Header */}
            <div className="bg-zinc-900 text-white py-24 relative overflow-hidden">
                <div className="absolute inset-0 opacity-20" style={{
                    backgroundImage: `url(${IMAGES.TEXTURE_BG})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center'
                }}></div>
                <div className="container mx-auto px-4 relative z-10 text-center">
                    <h1 className="text-5xl md:text-7xl font-display font-bold mb-6">Contact Us</h1>
                    <p className="text-white max-w-2xl mx-auto text-xl">Have questions about your order or our products? Drop us a line.</p>
                </div>
            </div>

            <div className="container mx-auto px-4 py-20">
                 <div className="max-w-4xl mx-auto bg-white p-10 md:p-14 rounded-3xl shadow-sm border border-zinc-200">
                    {submitted ? (
                        <div className="flex flex-col items-center justify-center text-center py-20 animate-fade-in-up">
                            <div className="bg-green-100 p-6 rounded-full mb-8">
                                <CheckCircle size={64} className="text-green-600" />
                            </div>
                            <h2 className="text-3xl font-display font-bold text-black mb-4">Message Sent!</h2>
                            <p className="text-black text-lg">Thank you for contacting us. We will get back to you shortly.</p>
                        </div>
                    ) : (
                        <form onSubmit={handleSubmit} className="space-y-8">
                             <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                <div>
                                    <label className="block text-sm font-bold text-black mb-3 uppercase tracking-wide">Name</label>
                                    <input 
                                        type="text" 
                                        required
                                        className="w-full bg-zinc-50 border border-zinc-300 rounded-xl p-4 text-base focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-colors text-black"
                                        placeholder="John Doe"
                                        value={formData.name}
                                        onChange={(e) => setFormData({...formData, name: e.target.value})}
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-bold text-black mb-3 uppercase tracking-wide">Email</label>
                                    <input 
                                        type="email" 
                                        required
                                        className="w-full bg-zinc-50 border border-zinc-300 rounded-xl p-4 text-base focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-colors text-black"
                                        placeholder="john@example.com"
                                        value={formData.email}
                                        onChange={(e) => setFormData({...formData, email: e.target.value})}
                                    />
                                </div>
                             </div>

                             <div>
                                <label className="block text-sm font-bold text-black mb-3 uppercase tracking-wide">Subject</label>
                                <select 
                                    className="w-full bg-zinc-50 border border-zinc-300 rounded-xl p-4 text-base focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-colors text-black"
                                    value={formData.subject}
                                    onChange={(e) => setFormData({...formData, subject: e.target.value})}
                                >
                                    <option value="" disabled>Select a topic</option>
                                    <option value="Order Inquiry">Order Inquiry</option>
                                    <option value="Product Question">Product Question</option>
                                    <option value="Shipping Support">Shipping Support</option>
                                    <option value="Other">Other</option>
                                </select>
                             </div>

                             <div>
                                <label className="block text-sm font-bold text-black mb-3 uppercase tracking-wide">Message</label>
                                <textarea 
                                    required
                                    rows={6}
                                    className="w-full bg-zinc-50 border border-zinc-300 rounded-xl p-4 text-base focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-colors text-black"
                                    placeholder="How can we help you today?"
                                    value={formData.message}
                                    onChange={(e) => setFormData({...formData, message: e.target.value})}
                                />
                             </div>

                             <button 
                                type="submit" 
                                className="w-full bg-primary hover:bg-primary-dark text-white font-bold uppercase tracking-widest py-5 rounded-xl shadow-lg hover:shadow-primary/30 transition-all font-display flex items-center justify-center gap-3 text-lg"
                             >
                                Send Message <Send size={20} />
                             </button>
                        </form>
                    )}
                 </div>
            </div>
        </div>
    );
};
export default Contact;
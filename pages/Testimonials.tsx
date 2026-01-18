import React from 'react';
import { IMAGES } from '../constants';
import { Star, Quote, CheckCircle } from 'lucide-react';

const Testimonials = () => {
    const reviews = [
        {
            name: "Michael Reynolds",
            role: "Verified Buyer",
            image: "https://images.unsplash.com/photo-1599566150163-29194dcaad36?fit=crop&w=200&h=200",
            text: "I've tried many dispensaries, but the quality here is unmatched. The delivery was super fast and discreet. The flower was fresh and exactly as described.",
            rating: 5,
            date: "2 days ago"
        },
        {
            name: "Jessica King",
            role: "Loyal Customer",
            image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?fit=crop&w=200&h=200",
            text: "Absolutely love the edible selection! The packaging is professional and safe. Customer service answered all my questions about dosing. Highly recommend!",
            rating: 5,
            date: "1 week ago"
        },
        {
            name: "Tyler Durden",
            role: "Verified Buyer",
            image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?fit=crop&w=200&h=200",
            text: "The concentrates are fire. Pure, potent, and clean. It's hard to find this level of quality for such good prices. My go-to spot now.",
            rating: 5,
            date: "3 weeks ago"
        },
        {
            name: "Laura Smith",
            role: "Verified Buyer",
            image: "https://images.unsplash.com/photo-1554151228-14d9def656ec?fit=crop&w=200&h=200",
            text: "Great experience from start to finish. The website is easy to use, and paying with crypto was smooth. The driver was polite and on time.",
            rating: 5,
            date: "1 month ago"
        }
    ];

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
                    <h1 className="text-5xl md:text-7xl font-display font-bold mb-6">Client Testimonials</h1>
                    <p className="text-white max-w-2xl mx-auto text-xl">Don't just take our word for it. See what the community is saying about our premium products and service.</p>
                </div>
            </div>

            <div className="container mx-auto px-4 py-20">
                 <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-6xl mx-auto">
                    {reviews.map((review, index) => (
                        <div key={index} className="bg-white p-10 rounded-3xl shadow-sm border border-zinc-200 hover:shadow-xl transition-shadow duration-300 flex flex-col gap-8">
                            <div className="flex items-start justify-between">
                                <div className="flex items-center gap-5">
                                    <img src={review.image} alt={review.name} className="w-20 h-20 rounded-full object-cover border-2 border-primary/20" />
                                    <div>
                                        <h3 className="font-display font-bold text-xl text-black">{review.name}</h3>
                                        <div className="flex items-center gap-2 text-sm text-primary font-bold uppercase tracking-wider mt-1">
                                            <CheckCircle size={14} /> {review.role}
                                        </div>
                                    </div>
                                </div>
                                <div className="flex text-yellow-400">
                                    {[...Array(5)].map((_, i) => (
                                        <Star key={i} size={20} className={i < review.rating ? "fill-current" : "text-zinc-200"} />
                                    ))}
                                </div>
                            </div>
                            
                            <div className="relative">
                                <Quote className="absolute -top-3 -left-3 text-zinc-100 w-10 h-10 transform -scale-x-100" />
                                <p className="text-black leading-relaxed italic relative z-10 pl-5 text-lg">
                                    "{review.text}"
                                </p>
                            </div>
                            
                            <div className="mt-auto pt-6 border-t border-zinc-100 text-sm text-black font-bold text-right">
                                Posted {review.date}
                            </div>
                        </div>
                    ))}
                 </div>
            </div>
        </div>
    );
};
export default Testimonials;
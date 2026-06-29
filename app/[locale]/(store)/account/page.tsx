'use client';

import { useState, useEffect } from 'react';
import { useLocale } from 'next-intl';
import { LogIn, User, Mail, ShieldCheck, ShoppingBag, ArrowRight, LogOut } from 'lucide-react';
import { useRouter } from 'next/navigation';

export default function AccountPage() {
  const locale = useLocale();
  const router = useRouter();
  const [user, setUser] = useState<{ name: string; email: string; avatar: string } | null>(null);
  const [loading, setLoading] = useState(false);
  const [orders, setOrders] = useState<any[]>([]);

  useEffect(() => {
    // Check if user is logged in via localStorage
    const savedUser = localStorage.getItem('sicily_user');
    if (savedUser) {
      try {
        setUser(JSON.parse(savedUser));
      } catch (e) {
        console.error(e);
      }
    }

    // Load user orders
    const savedOrders = localStorage.getItem('sicily_orders_list');
    if (savedOrders) {
      try {
        setOrders(JSON.parse(savedOrders).slice(0, 3)); // show last 3 orders
      } catch (e) {
        console.error(e);
      }
    }
  }, []);

  const handleGoogleLogin = () => {
    setLoading(true);
    setTimeout(() => {
      const mockUser = {
        name: 'Robiul Islam',
        email: 'robiul.official96@gmail.com',
        avatar: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&q=80&w=150'
      };
      localStorage.setItem('sicily_user', JSON.stringify(mockUser));
      setUser(mockUser);
      setLoading(false);
    }, 1200);
  };

  const handleLogout = () => {
    localStorage.removeItem('sicily_user');
    setUser(null);
  };

  return (
    <div className="max-w-md mx-auto py-10 px-4 font-sans min-h-[60vh] flex flex-col justify-center">
      {user ? (
        /* ── LOGGED IN PROFILE CARD ── */
        <div className="bg-white border border-gray-100 rounded-3xl p-6 shadow-xl space-y-6 animate-fade-up">
          {/* User Meta */}
          <div className="flex items-center gap-4 border-b border-gray-50 pb-5">
            <img src={user.avatar} alt={user.name} className="h-14 w-14 rounded-full object-cover border-2 border-[#057476]" />
            <div>
              <h2 className="text-lg font-black text-[#111]">{user.name}</h2>
              <p className="text-xs text-gray-400 font-semibold">{user.email}</p>
            </div>
            <span className="ml-auto px-2.5 py-1 bg-emerald-50 text-emerald-700 text-[9px] font-black rounded-full uppercase tracking-wider">
              {locale === 'bn' ? 'ভেরিফাইড' : 'Verified'}
            </span>
          </div>

          {/* Orders History Preview */}
          <div className="space-y-3">
            <h3 className="text-xs font-black uppercase tracking-wider text-gray-400 flex items-center gap-1.5">
              <ShoppingBag className="h-3.5 w-3.5 text-[#057476]" />
              <span>{locale === 'bn' ? 'সাম্প্রতিক অর্ডার' : 'Recent Orders'}</span>
            </h3>

            {orders.length > 0 ? (
              <div className="space-y-2">
                {orders.map((ord) => (
                  <div key={ord.id} className="p-3 bg-[#f8f9fa] border border-gray-50 rounded-2xl flex justify-between items-center text-xs">
                    <div>
                      <span className="font-extrabold text-[#111] block">{ord.id}</span>
                      <span className="text-[10px] text-gray-400 block mt-0.5">{ord.date}</span>
                    </div>
                    <div className="text-right">
                      <span className="font-bold text-[#057476] block">৳{ord.amount}</span>
                      <span className="px-2 py-0.5 bg-amber-50 text-amber-700 text-[9px] font-black rounded-full uppercase tracking-wider mt-0.5 inline-block">
                        {ord.status}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <p className="text-xs text-gray-400 italic py-2 text-center">
                {locale === 'bn' ? 'কোনো অর্ডার পাওয়া যায়নি।' : 'No orders found yet.'}
              </p>
            )}
          </div>

          {/* CTA & Actions */}
          <div className="pt-2 flex flex-col gap-2">
            <button
              onClick={() => router.push(`/${locale}/shop`)}
              className="w-full py-3 rounded-2xl bg-[#057476] text-white font-black text-xs hover:bg-[#008B8B] shadow-lg shadow-[#057476]/20 transition-all flex items-center justify-center gap-2"
            >
              <span>{locale === 'bn' ? 'কেনাকাটা শুরু করুন' : 'Continue Shopping'}</span>
              <ArrowRight className="h-4 w-4" />
            </button>
            
            <button
              onClick={handleLogout}
              className="w-full py-3 rounded-2xl border border-gray-150 text-gray-500 hover:text-red-600 hover:border-red-100 hover:bg-red-50/30 text-xs font-bold transition-all flex items-center justify-center gap-1.5"
            >
              <LogOut className="h-4 w-4" />
              <span>{locale === 'bn' ? 'লগআউট করুন' : 'Sign Out'}</span>
            </button>
          </div>
        </div>
      ) : (
        /* ── MOCK GOOGLE LOGIN CARD ── */
        <div className="bg-white border border-gray-100 rounded-3xl p-6 shadow-xl space-y-6 text-center animate-fade-up">
          <div className="space-y-2">
            <div className="h-12 w-12 rounded-2xl bg-[#057476]/8 flex items-center justify-center text-[#057476] mx-auto">
              <User className="h-6 w-6" />
            </div>
            <h2 className="text-xl font-black text-[#111]">
              {locale === 'bn' ? 'অ্যাকাউন্টে সাইন ইন করুন' : 'Sign in to Account'}
            </h2>
            <p className="text-xs text-gray-400 font-semibold max-w-[280px] mx-auto leading-relaxed">
              {locale === 'bn'
                ? 'আপনার অর্ডার ট্র্যাকিং এবং প্রোফাইল ভিউ অ্যাক্সেস করতে জিমেইল দিয়ে সাইন ইন করুন।'
                : 'Sign in with your Google account to track orders and manage your profile.'}
            </p>
          </div>

          {/* Google Sign In Button */}
          <button
            onClick={handleGoogleLogin}
            disabled={loading}
            className="w-full py-3.5 px-6 rounded-2xl border border-gray-200 bg-white hover:bg-gray-50 text-gray-700 font-black text-xs transition-all flex items-center justify-center gap-3 shadow-sm hover:shadow-md disabled:opacity-60"
          >
            {loading ? (
              <div className="h-5 w-5 rounded-full border-2 border-[#057476] border-t-transparent animate-spin" />
            ) : (
              <svg className="h-5 w-5 flex-shrink-0" viewBox="0 0 24 24">
                <path fill="#EA4335" d="M12.24 10.285V14.4h6.887c-.648 2.41-2.519 4.13-5.136 4.13A5.873 5.873 0 0 1 8 12.657a5.873 5.873 0 0 1 5.99-5.875c1.616 0 3.084.62 4.19 1.63l3.076-3.077A10.12 10.12 0 0 0 14 1.13c-5.99 0-10.87 4.88-10.87 10.87s4.88 10.87 10.87 10.87c6.264 0 10.422-4.401 10.422-10.603 0-.649-.078-1.258-.173-1.785H12.24Z"/>
              </svg>
            )}
            <span>
              {loading
                ? (locale === 'bn' ? 'সাইন ইন হচ্ছে...' : 'Signing in...')
                : (locale === 'bn' ? 'গুগল দিয়ে সাইন ইন করুন' : 'Sign in with Google')}
            </span>
          </button>

          {/* Trust badges strip */}
          <div className="border-t border-gray-50 pt-4 flex items-center justify-around text-[10px] text-gray-400 font-semibold">
            <span className="flex items-center gap-1"><ShieldCheck className="h-3.5 w-3.5 text-emerald-500" /> {locale === 'bn' ? 'নিরাপদ লগইন' : 'Secure Login'}</span>
            <span className="flex items-center gap-1"><Mail className="h-3.5 w-3.5 text-blue-500" /> {locale === 'bn' ? 'জিমেইল ভেরিফাইড' : 'Gmail Verified'}</span>
          </div>
        </div>
      )}
    </div>
  );
}

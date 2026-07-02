'use client';

import { useLocale } from 'next-intl';
import { RefreshCw, CheckCircle2, XCircle, Wallet } from 'lucide-react';
import InfoPageHeader from '@/components/store/InfoPageHeader';

export default function ReturnRefundPage() {
  const locale = useLocale();
  const isBn = locale === 'bn';

  const eligible = isBn
    ? [
        'পণ্য ক্ষতিগ্রস্ত বা ত্রুটিপূর্ণ অবস্থায় পৌঁছালে',
        'ভুল পণ্য পাঠানো হলে',
        'ডেলিভারির ৭ দিনের মধ্যে অব্যবহৃত ও মূল প্যাকেজিং সহ ফেরত দিলে'
      ]
    : [
        'Product arrived damaged or defective',
        'Wrong product was delivered',
        'Returned unused, in original packaging, within 7 days of delivery'
      ];

  const notEligible = isBn
    ? [
        'ব্যবহৃত বা ইনস্টল করা পণ্য',
        'গ্রাহকের অসাবধানতায় ক্ষতিগ্রস্ত পণ্য',
        'কাস্টম অর্ডার বা বিশেষভাবে তৈরি পণ্য'
      ]
    : [
        'Products that have been used or installed',
        'Products damaged due to customer mishandling',
        'Custom or made-to-order items'
      ];

  return (
    <div className="font-sans">
      <InfoPageHeader
        icon={RefreshCw}
        title={isBn ? 'রিটার্ন ও রিফান্ড' : 'Return & Refund'}
        subtitle={isBn
          ? 'কোনো সমস্যা হলে চিন্তার কিছু নেই — আমাদের রিটার্ন পলিসি সহজ ও স্বচ্ছ।'
          : "If something's wrong, no worries — our return policy is simple and transparent."}
      />

      <div className="max-w-3xl mx-auto px-6 py-10 sm:py-14 space-y-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          <div className="bg-white border border-brand-border rounded-2xl p-5 shadow-sm space-y-3">
            <div className="flex items-center gap-2">
              <CheckCircle2 className="h-4.5 w-4.5 text-emerald-600" />
              <h3 className="font-bold text-brand-text text-sm">
                {isBn ? 'রিটার্নযোগ্য যেসব ক্ষেত্রে' : 'Eligible for Return'}
              </h3>
            </div>
            <ul className="space-y-2">
              {eligible.map((t, i) => (
                <li key={i} className="text-xs text-brand-muted leading-relaxed flex gap-2">
                  <span className="text-emerald-500 flex-shrink-0">•</span>
                  <span>{t}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-white border border-brand-border rounded-2xl p-5 shadow-sm space-y-3">
            <div className="flex items-center gap-2">
              <XCircle className="h-4.5 w-4.5 text-rose-600" />
              <h3 className="font-bold text-brand-text text-sm">
                {isBn ? 'রিটার্নযোগ্য নয় যেসব ক্ষেত্রে' : 'Not Eligible for Return'}
              </h3>
            </div>
            <ul className="space-y-2">
              {notEligible.map((t, i) => (
                <li key={i} className="text-xs text-brand-muted leading-relaxed flex gap-2">
                  <span className="text-rose-500 flex-shrink-0">•</span>
                  <span>{t}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="bg-white border border-brand-border rounded-2xl p-5 flex gap-4 shadow-sm items-start">
          <div className="h-10 w-10 rounded-xl bg-brand-secondary/10 text-brand-secondary flex items-center justify-center flex-shrink-0">
            <Wallet className="h-5 w-5" strokeWidth={1.75} />
          </div>
          <div>
            <h3 className="font-bold text-brand-text text-sm">
              {isBn ? 'রিফান্ড প্রক্রিয়া' : 'Refund Process'}
            </h3>
            <p className="text-xs text-brand-muted mt-1 leading-relaxed">
              {isBn
                ? 'রিটার্ন পণ্য যাচাই করার পর ৩-৫ কার্যদিবসের মধ্যে রিফান্ড প্রসেস করা হয়। COD অর্ডারের ক্ষেত্রে বিকাশ/নগদ বা ব্যাংক ট্রান্সফারের মাধ্যমে রিফান্ড দেওয়া হয়। অনলাইন পেমেন্টের ক্ষেত্রে একই পেমেন্ট মাধ্যমে টাকা ফেরত দেওয়া হবে।'
                : 'Refunds are processed within 3-5 business days after the returned item is verified. For COD orders, refunds are sent via bKash/Nagad or bank transfer. Online payments are refunded to the original payment method.'}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

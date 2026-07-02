'use client';

import { useLocale } from 'next-intl';
import { Truck, Clock, MapPin, PackageCheck } from 'lucide-react';
import InfoPageHeader from '@/components/store/InfoPageHeader';

export default function DeliveryPolicyPage() {
  const locale = useLocale();
  const isBn = locale === 'bn';

  const rows = [
    {
      icon: MapPin,
      title: isBn ? 'ঢাকার ভেতরে' : 'Inside Dhaka',
      desc: isBn ? '১-২ কার্যদিবসের মধ্যে ডেলিভারি, ডেলিভারি চার্জ ৳৮০' : 'Delivered within 1-2 business days, charge ৳80'
    },
    {
      icon: Truck,
      title: isBn ? 'ঢাকার বাইরে' : 'Outside Dhaka',
      desc: isBn ? '৩-৫ কার্যদিবসের মধ্যে ডেলিভারি, ডেলিভারি চার্জ ৳১৫০' : 'Delivered within 3-5 business days, charge ৳150'
    },
    {
      icon: PackageCheck,
      title: isBn ? 'ফ্রি ডেলিভারি' : 'Free Delivery',
      desc: isBn ? '৳৫০০ বা তার বেশি অর্ডারে ঢাকার ভেতরে ফ্রি ডেলিভারি প্রযোজ্য' : 'Free delivery inside Dhaka on orders ৳500 and above'
    },
    {
      icon: Clock,
      title: isBn ? 'অর্ডার প্রসেসিং' : 'Order Processing',
      desc: isBn ? 'অর্ডার কনফার্ম হওয়ার ২৪ ঘণ্টার মধ্যে পণ্য প্যাকেজিং ও কুরিয়ারে হস্তান্তর করা হয়' : 'Orders are packed and handed to courier within 24 hours of confirmation'
    }
  ];

  return (
    <div className="font-sans">
      <InfoPageHeader
        icon={Truck}
        title={isBn ? 'ডেলিভারি পলিসি' : 'Delivery Policy'}
        subtitle={isBn
          ? 'আপনার অর্ডার কীভাবে এবং কতদিনে পৌঁছাবে, তার সম্পূর্ণ বিস্তারিত জেনে নিন।'
          : 'Everything you need to know about how and when your order will arrive.'}
      />

      <div className="max-w-3xl mx-auto px-6 py-10 sm:py-14 space-y-4">
        {rows.map((r, i) => {
          const Icon = r.icon;
          return (
            <div key={i} className="bg-white border border-brand-border rounded-2xl p-5 flex gap-4 shadow-sm items-start">
              <div className="h-10 w-10 rounded-xl bg-brand-primary/10 text-brand-primary flex items-center justify-center flex-shrink-0">
                <Icon className="h-5 w-5" strokeWidth={1.75} />
              </div>
              <div>
                <h3 className="font-bold text-brand-text text-sm">{r.title}</h3>
                <p className="text-xs text-brand-muted mt-1 leading-relaxed">{r.desc}</p>
              </div>
            </div>
          );
        })}

        <div className="bg-brand-surface border border-brand-border rounded-2xl p-5 text-xs text-brand-muted leading-relaxed">
          {isBn
            ? '* প্রাকৃতিক দুর্যোগ, কুরিয়ার বিভ্রাট বা অনিবার্য পরিস্থিতিতে ডেলিভারি সময় কিছুটা বেশি লাগতে পারে। এমন ক্ষেত্রে আমরা ফোন বা এসএমএসের মাধ্যমে আপনাকে অবহিত করবো।'
            : '* Delivery times may occasionally be extended due to natural disasters, courier disruptions, or unavoidable circumstances. We will notify you by phone or SMS in such cases.'}
        </div>
      </div>
    </div>
  );
}

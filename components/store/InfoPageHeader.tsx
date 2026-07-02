import { LucideIcon } from 'lucide-react';

export default function InfoPageHeader({
  icon: Icon,
  title,
  subtitle,
}: {
  icon: LucideIcon;
  title: string;
  subtitle: string;
}) {
  return (
    <div className="relative overflow-hidden bg-[#14201D] px-6 py-12 sm:py-16 text-center">
      <div className="absolute top-1/2 left-10 -translate-y-1/2 w-48 h-48 rounded-full bg-[#057476]/10 blur-3xl -z-0" />
      <div className="absolute top-10 right-10 w-64 h-64 rounded-full bg-[#D80064]/10 blur-3xl -z-0" />
      <div className="relative space-y-3 max-w-2xl mx-auto">
        <div className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-white/5 border border-white/10 text-[#C6A15B]">
          <Icon className="h-6 w-6" strokeWidth={1.75} />
        </div>
        <h1 className="text-2xl sm:text-3xl font-black text-white">{title}</h1>
        <p className="text-xs sm:text-sm text-[#F2EDE3]/60 leading-relaxed">{subtitle}</p>
      </div>
    </div>
  );
}

export default function PricingLayout({
  children, // will be a page or nested layout
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="relative z-10 px-6 pt-4 sm:pt-1 sm:-translate-y-20 md:-translate-y-20 lg:-translate-y-20 md:pt-3 lg:pt-6">
      <div className="mx-auto py-44 sm:py-48 lg:pt-56 text-white">
        {children}
      </div>
    </div>
  );
}

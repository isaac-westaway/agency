import Link from "next/link";

const PricingPage = () => {
    return (
        <div className="text-center min-h-screen">
            <span className="text-5xl font-bold text-white sm:text-6xl tracking-wider">
                Pricing Page
            </span>
            <div className="p-4">
                <Link href="/pricing/personal" className="p-3">Personal</Link>
                <Link href="/pricing/business" className="p-3">Business</Link>
            </div>
        </div>
    );
}
 
export default PricingPage;
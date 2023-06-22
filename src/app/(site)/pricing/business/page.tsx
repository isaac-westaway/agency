import Link from "next/link";

const PricingPage = () => {
    return (
        <div className="text-center min-h-screen">
            <span className="text-5xl font-bold text-white sm:text-6xl tracking-wider">
                Business Pricing
            </span>
            <div>
                <Link href="/pricing">Back</Link>
            </div>
        </div>
    );
}
 
export default PricingPage;
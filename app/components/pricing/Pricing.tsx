import FramerReveal from '../utils/Reveal';
import PricingCards from './PricingCards'


const PricingPlans = () => {
    return (
        <>
        <div className="mx-auto max-w-7xl px-4 pt-24 sm:px-6 lg:px-8 text-white">
            <FramerReveal>
                <span className="text-3xl sm:text-xl font-extrabold sm:leading-tight sm:tracking-tight">
                    Pricing Plans for teams of all sizes
                </span>
                <p className="mt-4 max-w-3xl text-lg text-slate-500">
                    Choose an affordable plan that is packed with the best features for 
                    enganging your audience, creating customer loyalty and driving sales.
                </p>           
            </FramerReveal>
        </div>
        <PricingCards />
        </>
    );
}
 
export default PricingPlans;
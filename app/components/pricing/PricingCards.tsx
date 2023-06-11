import FramerReveal from "../utils/Reveal";
import { pricingPlans } from "./index";

const PricingCards = () => {
    return (
        <div>
                <div className="grid lg:grid-cols-1 grid-cols-3 gap-12 lg:gap-8 py-9 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    {pricingPlans.map(plan => (
                        <div key={plan.title} className="relative border border-white shadow-lg p-8 bg-[#F9F9F9] rounded-2xl flex flex-col">
                            <h3 className="text-lg font-semibold leading-5">{plan.title}</h3>
                            {plan.mostPopular && (
                                <p className="absolute top-0 -translate-y-1/2 bg-black border-[2px] text-white px-3 py-0.5 text-sm font-semibold tracking-wide rounded-full shadow-md">Most Popular</p>
                            )}
                            {plan.mostPopular ? (
                            <>
                                <p className="mt-4 text-slate-700 text-sm leading-6">{plan.description}</p><div className="mt-4 bg-black rounded-2xl text-white -mx-6 p-6">
                                    <p className="flex items-center text-sm font-semibold">
                                        <span>{plan.currency}</span>
                                        <span className="ml-1.5 text-3xl">${plan.price}</span>
                                        <span className="ml-1.5">{plan.frequency}</span>
                                    </p>
                                </div>
                            </>
                            ) : 
                            <>
                                <p className="mt-4 text-slate-700 text-sm leading-6">{plan.description}</p><div className="mt-4 bg-[#20262E] rounded-2xl text-white -mx-6 p-6">
                                    <p className="flex items-center text-sm font-semibold">
                                        <span>{plan.currency}</span>
                                        <span className="ml-1.5 text-3xl">${plan.price}</span>
                                        <span className="ml-1.5">{plan.frequency}</span>
                                    </p>
                                </div>
                            </>
                            }
                            <ul className="mt-6 space-y-4 flex-1">
                                {plan.features.map(feature=> (
                                    <li key={feature} className="flex text-sm leading-6">
                                        <svg className="h-5 w-5 shrink-0" viewBox="0 0 20 20">
                                                    <path d="M10.219,1.688c-4.471,0-8.094,3.623-8.094,8.094s3.623,8.094,8.094,8.094s8.094-3.623,8.094-8.094S14.689,1.688,10.219,1.688 M10.219,17.022c-3.994,0-7.242-3.247-7.242-7.241c0-3.994,3.248-7.242,7.242-7.242c3.994,0,7.241,3.248,7.241,7.242C17.46,13.775,14.213,17.022,10.219,17.022 M15.099,7.03c-0.167-0.167-0.438-0.167-0.604,0.002L9.062,12.48l-2.269-2.277c-0.166-0.167-0.437-0.167-0.603,0c-0.166,0.166-0.168,0.437-0.002,0.603l2.573,2.578c0.079,0.08,0.188,0.125,0.3,0.125s0.222-0.045,0.303-0.125l5.736-5.751C15.268,7.466,15.265,7.196,15.099,7.03"></path>
                                                </svg>
                                        <span className="ml-3">
                                            {feature}
                                        </span>
                                    </li>
                                ))}
                            </ul>
                            <span className="my-5 text-slate-700 block px-5 py-3 text-center leading-4 text-md underline cursor-pointer hover:text-black hover:bg-slate-500 hover:rounded-2xl hover:transition hover:ease-in-out hover:duration-200">Compare plans</span>
                            <a href="#" className={`text-white block px-6 py-4 text-sm font-semibold leading-4 text-center rounded-2xl shadow-md ${plan.mostPopular? 'bg-black shadow-md' : 'bg-[#20262E]'}`}>{plan.cta}</a>
                        </div>
                    ))}
                </div>
        </div>
    );
}
 
export default PricingCards;
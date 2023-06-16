import Testimonials from '../testimonials/Testimonials';
import FramerReveal from '../utils/Reveal';

const Hero = () => {
  return (
    <div className="">
      <div className="relative z-10 px-6 pt-4 sm:pt-1 sm:-translate-y-20 md:-translate-y-20 lg:-translate-y-20 md:pt-3 lg:pt-6">
        <div className="mx-auto py-28 sm:py-48 lg:pt-56">
          {/*<svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" className="sm:hidden md:hidden lg:hidden xl:hidden hidden absolute top-0 -left-36 w-full h-full -z-10">
            <path fill="#FF0066" d="M27,-43C33.7,-32.2,37,-22.7,36.7,-14.1C36.4,-5.6,32.5,1.8,34.2,15.6C35.9,29.3,43.1,49.3,38.3,58.8C33.5,68.3,16.8,67.3,-0.6,68.1C-17.9,68.9,-35.8,71.4,-41.1,62.1C-46.4,52.7,-39.1,31.5,-45.2,14.3C-51.4,-3,-71.1,-16.2,-75.2,-30.8C-79.2,-45.3,-67.6,-61.2,-52.4,-69.2C-37.3,-77.2,-18.6,-77.5,-4.3,-71.6C10.1,-65.7,20.3,-53.8,27,-43Z" transform="translate(100 100)" />
          </svg>*/}
          <div className="text-center">
            <span className="text-5xl font-bold text-white sm:text-6xl tracking-wider">
              Design. Develop. Deploy.
            </span>
            <div className="mt-6 text-lg leading-8 text-gray-400 font-medium">
              DigiSpark is Australia&#8217;s top-ranking web services provider.
              <br />
              <span className="font-light">
                We specialize in the full production lifecycle, from designing your site to the deployment of it.
              </span>
            </div>
            <div className="mt-8 flex items-center justify-center gap-x-6">
              <a
                href="#"
                className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Get started
              </a>
              <a
                href="#"
                className="text-sm font-semibold leading-6 text-white"
              >
                Learn more <span aria-hidden="true">→</span>
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="relative z-10 mx-auto max-w-7xl px-4 pt-24 sm:px-6 lg:px-8 text-white translate-y-[8.5rem] lg:-translate-y-2 xl:translate-y-14 sm:-translate-y-[17.5rem]">
        <span className="text-3xl font-extrabold sm:text-xl sm:leading-tight sm:tracking-tight">
          See what Australian small businesses are saying about us
        </span>
        <div className="flex justify-center mt-4 text-lg text-gray-500 w-full">
          <Testimonials />
        </div>
      </div>
    </div>
  );
}

export default Hero;

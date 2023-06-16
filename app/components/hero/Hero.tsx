import Testimonials from '../testimonials/Testimonials';
import FramerReveal from '../utils/Reveal'

const Hero =() => {
  return (
    <div className="bg-black">
      <div className="px-6 pt-4 sm:pt-1 sm:-translate-y-20 md:pt-3 lg:pt-6">
        <div className="mx-auto py-28 sm:py-48 lg:pt-56">
          <div className="text-center">
            <span className="text-5xl font-bold text-[#F7F7F7] sm:text-6xl tracking-wider">
              Design. Develop. Deploy.
            </span>
            <div className="mt-6 text-lg leading-8 text-gray-400 font-medium">
              DigiSpark is Australia&#8217;s top-ranking web services
              provider.
              <br />
              <span className="font-light">
                We specialise in the full production lifecycle, from designing
                your site to the deployment of it.
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
      <div className="mx-auto max-w-7xl px-4 pt-24 sm:px-6 lg:px-8 text-white -translate-y-28 sm:-translate-y-72 ">
        <span className="text-3xl font-extrabold sm:text-xl sm:leading-tight sm:tracking-tight">
          See what Australian small businesses are saying about us
        </span>
        <div className="flex justify-center mt-4 text-lg text-slate-500 w-full">
            <Testimonials />
        </div>    
      </div>
    </div>
  );
}

export default Hero;
import FramerReveal from '../utils/Reveal'

export default function Example() {
  return (
    <div className="bg-black">
      <div className="relative isolate px-6 pt-4 sm:pt-1 sm:-translate-y-16 md:pt-3 lg:pt-6">
        <div
          className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
          aria-hidden="true"
        >
        </div>
        <FramerReveal>
            <div className="mx-auto max-w-2xl py-32 sm:py-48 lg:py-56">
              <div className="text-center">
                <h1 className="text-5xl font-bold text-[#F7F7F7] sm:text-6xl tracking-wider">
                  Design. Develop. Deploy.
                </h1>
                <p className="mt-6 text-lg leading-8 text-gray-400 font-medium">
                  DigiSpark is Australia&#8217;s top-ranking web services provider.
                  <br />
                  <span className="font-light">We specialise in the full production lifecycle, from designing your site to the deployment of it.</span>
                </p>
                <div className="mt-10 flex items-center justify-center gap-x-6">
                  <a
                    href="#"
                    className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                  >
                    Get started
                  </a>
                  <a href="#" className="text-sm font-semibold leading-6 text-white">
                    Learn more <span aria-hidden="true">→</span>
                  </a>
                </div>
              </div>
            </div>
        </FramerReveal>
        <FramerReveal>
          <div className="relative mx-auto max-w-7xl px-4 -translate-y-16">
            <span className="text-3xl font-extrabold sm:text-xl sm:leading-tight sm:tracking-tight">See what Australian small businesses are saying about us</span>
            <div className="">
            </div>
          </div>
        </FramerReveal>
      </div>
    </div>
  )
}

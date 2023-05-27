export default function Home() {
  return (
    <div>
      <div className="relative w-full h-[1920px] z-40">
          <div className="absolute inset-x-0 top-[37.95px] h-[calc((100vh/6)+130px)] w-auto red-outline border-4 border-red-500 border-dotted z-40 ">
              <div className="z-40">
                <div className="absolute flex flex-col justify-start items-center h-full w-full lg:justify-start md:justify-center sm:justify-center">
                  <div className="lg:text-[64px] sm:text-[20px]  text-white font-inter leading-tight">
                    <h1 className="text-center">Brisbane&apos;s home</h1>
                    <h1 className="text-center">of <u>responsive</u></h1>
                    <h1 className="text-center "><span className="italic">web design.</span></h1>
                  </div>
                </div>
              </div>
          </div>
      </div>
    </div>
  )
}

import Hero from "./components/hero/Hero"
import Navbar from "./components/navbar/Navbar"



export default function Home() {
  return (
    <div>
      <Navbar/>
      <div className='absolute top-0 left-0 right-0 bottom-0 bg-black/70 z-[2]'>
        <div className='p-5 text-[#FFFFF7] z-[2] mt-[-10rem]'>
          <h2 className='text-5xl font-bold'>test</h2>
          <p className='py-5 text-xl'>test</p>
        </div>
      </div>
    </div>
  )
}

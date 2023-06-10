import Hero from "./components/hero/Hero"
import Navbar from "./components/navbar/Navbar"



export default function Home() {
  return (
    <div>
      <Navbar/>
      <Hero heading="Brisbane's go-to in the digital world" 
            message="We design, develop & deploy websites for small businesses throughout Australia" 
            action="Let's talk!"
      />
    </div>
  )
}

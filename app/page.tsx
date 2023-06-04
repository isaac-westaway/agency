import Hero from "./components/Hero"

export default function Home() {
  return (
    <div>
      <Hero heading="Brisbane's go-to in the digital world" 
            message="We design, develop & deploy websites for small businesses throughout Australia" 
            action="Let's talk!"
      />
      <div className="justify-center items-center text-[#FFFFF7] w-full h-[calc((100vh)/1.1)]">
        <p>
          Bob
        </p>
      </div>
    </div>
  )
}

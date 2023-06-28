import ReusableHero from "../../components/ReusableHero";

export default function AboutUs() {
  return (
    <div className="min-h-screen">
      <ReusableHero
        heroText="You Shouldn't be here!"
        subText="You probably meant to visit Our Team or Our Agency"
        secondarySubText="Click to visit those pages:"
        PageLink="About Us"
      />
    </div>
  )
}
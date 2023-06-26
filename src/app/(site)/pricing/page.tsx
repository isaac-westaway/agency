import Link from "next/link";
import ReusableHero from "../../components/ReusableHero";

export default function Pricing() {
  return (
    <div className="min-h-screen">
      <ReusableHero
        heroText="Our Pricing Plans"
        subText="Here you will find our flagship projects"
        secondarySubText=" If you would like your project here shoot us an Email!"
        PageLink="Pricing"
      />
    </div>
  );
};


import ReusableHero from "../../components/ReusableHero";

export default function Gallery() {
  return (
    <div className="min-h-screen">
      <ReusableHero
        heroText="Our gallery of work"
        subText="Here you will find our flagship projects"
        secondarySubText=" If you would like your project here shoot us an Email!"
        PageLink="Gallery"
      />
    </div>
  );
}

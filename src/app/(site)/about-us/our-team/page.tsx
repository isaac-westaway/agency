import ReusableHeroNested from "@/src/app/components/ReusableHeroNested";

export default function AboutOurTeam() {
    return (
        <div className="min-h-screen">
            <ReusableHeroNested
                heroText="About Our Talented Team"
                secondarySubText="Our team of designers & developers"
                PageLink="About Us"
                secondaryPageLink="Our Team"
            />
        </div>
    )
}
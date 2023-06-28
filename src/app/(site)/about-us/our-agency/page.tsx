import ReusableHeroNested from "@/src/app/components/ReusableHeroNested";

export default function AboutOurTeam() {
    return (
        <div className="min-h-screen">
            <ReusableHeroNested
                heroText="About Our Agency"
                secondarySubText="What We do"
                PageLink="About Us"
                secondaryPageLink="Our Agency"
            />
        </div>
    )
}
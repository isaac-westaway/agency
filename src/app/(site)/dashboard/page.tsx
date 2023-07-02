import ReusableHero from "../../components/ReusableHero";

export default function Dashboard() {
    return (
        <div className="min-h-screen">
            <ReusableHero
                heroText="Dashboard"
                subText="WynDigital Dashboard"
                PageLink="Dashboard"
            />
        </div>
    )
}
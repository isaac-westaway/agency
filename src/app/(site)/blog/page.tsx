import ReusableHero from "../../components/ReusableHero";

export const metadata = {
    title: "Blog Wynnum Web Services",
  };
  

export default function Blog() {
    return (
        <div className="min-h-screen">
            <ReusableHero heroText="Our blog" subText="Placehoder" secondarySubText="other placeholder" PageLink="Blog"/>
        </div>
    )
}
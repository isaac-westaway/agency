import ReusableHeroNested from "@/src/app/components/ReusableHeroNested";
import PricingCards from "@/src/app/components/pricing/PricingCards";

const pricingPlans = [
    {
        title: 'Website Design',
        price: '135',
        currency: 'AUD',
        description: 'The skin of a website',
        features: [
          '5 Designs',
          'Responsive Designs',
          'Themed Designs (Darkmode and Lightmode)',
          'Research Based Designs',
          'Wireframes',
          'Prototypes'
        ],
        cta: 'Begin Designing',
        mostPopular: true,
      },
      {
        title: 'Mobile App Design',
        price: '180',
        currency: 'AUD',
        description: 'Designs in Figma, Microsoft Apps & Google Workspace',
        features: [
          '5 Designs',
          'Responsive Designs',
          'Themed Designs (Darkmode and Lightmode)',
          'Research Based Designs',
          'Wireframes',
          'Prototypes'
        ],
        cta: 'Begin Designing',
        mostPopular: false,
      },
      {
        title: 'Branding and Identity',
        price: '140',
        currency: 'AUD',
        description: 'The skin of a website',
        features: [
          '5 Designs',
          'Responsive Designs',
          'Themed Designs (Darkmode and Lightmode)',
          'Research Based Designs',
          'Wireframes',
          'Prototypes'
        ],
        cta: 'Begin Designing',
        mostPopular: false,
      },
]

export default function UIUXPricing() {
  return (
    <div className="min-h-screen">
      <ReusableHeroNested
        heroText="UI&nbsp;/&nbsp;UX Pricing"
        subText="Comes free with Website Development"
        PageLink="Pricing"
        secondaryPageLink="UI&nbsp;/&nbsp;UX Pricing"
      />
      <section className="ml-11 mr-11">
        <PricingCards pricingPlans={pricingPlans} />
      </section>
    </div>
  );
}

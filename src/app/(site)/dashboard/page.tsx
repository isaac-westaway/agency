import ReusableHero from "@/src/app/components/ReusableHero";

import { useSession, signIn, signOut } from "next-auth/react";

import ContactForm from "@/src/app/components/contact/Form";

export default function Dashboard() {

  return (
    <div className="min-h-screen">
      <ReusableHero
        heroText="Dashboard"
        subText="WynDigital Dashboard"
        PageLink="Dashboard"
      />
      <section className="mt-4 lg:-mt-14 md:-mt-16 sm:-mt-14 mr-11 ml-11 border-t-[1px] border-dark-50 text-white z-50 min-h-screen">
        <div className="mt-8 px-4">
          <div>
            <ContactForm />
          </div>
        </div>
      </section>
    </div>
  );
}

import Image from "next/image";
import Head from "next/head";

import Design from "@/public/design.svg";
import Develop from "@/public/develop.svg";

import Timeline from "@/public/timeline.svg";

import Hero from "@/src/app/components/hero/Hero";
import RevealOnce from "@/src/app/components/utils/RevealOnce";
import FlyIn from "@/src/app/components/utils/FlyIn";
import RevealAlways from "@/src/app/components/utils/RevealAlways";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <div className="scroll-smooth	snap-x overscroll-x-none  min-h-screen">
      <Head>
        <title>Digispark Home</title>
        <meta
          name="google-site-verification"
          content="dZjgHKcLiYVkCgM61GF57iRGjhh9j1wzVlfQmaGmLL0"
        />
      </Head>
      <section id="top" className="snap-start">
        <Hero />
      </section>
    </div>
  );
}

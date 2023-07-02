"use client";
import { useEffect, useState } from "react";
import ReusableHero from "../../components/ReusableHero";
import Head from "next/head";

export const metadata = {
  title: "Error 404 – Wynnum Web Services"
}

const NotFound = () => {
  const [randomQuote, setRandomQuote] = useState("");

  useEffect(() => {
    fetchRandomQuote();
  }, []);

  const fetchRandomQuote = async () => {
    try {
      const response = await fetch("https://api.quotable.io/random");
      const { content } = await response.json();
      setRandomQuote(content);
    } catch (error) {
      console.error("Failed to fetch random quote:", error);
    }
  };

  return (
    <div className="min-h-screen">
      <Head>
        <title>404 Page Not Found!</title>
      </Head>
      <ReusableHero
        heroText="Error 404"
        subText="You aren't meant to be here!"
        PageLink="Unknown Page"
      />
      <section className="text-white ml-11 mr-11 mt-2 mb-0 sm:-mt-20 md:-mt-16 lg:-mt-16 sm:flex sm:justify-center md:flex md:justify-center lg:flex lg:justify-center border-dark-50 border-t-[1px]">
        <div className="text-center mt-4">
          <h2 className="text-4xl font-bold mb-4">Random Quote Generator</h2>
          {randomQuote ? (
            <p className="text-lg">{`"${randomQuote}"`}</p>
          ) : (
            <p className="text-lg">Fetching a random quote...</p>
          )}
          <button
            className="mt-4 rounded-lg px-3.5 py-2.5 cursor-pointer text-white bg-[#4A6CF7] hover:bg-white hover:text-black transition ease-in-out duration-200 border border-transparent"
            onClick={fetchRandomQuote}
          >
            Get New Quote
          </button>
        </div>
      </section>
    </div>
  );
};

export default NotFound;

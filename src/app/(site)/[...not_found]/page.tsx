"use client"

import { useEffect, useState } from "react";
import ReusableHero from "@/src/app/components/ReusableHero";

interface NotFoundProps {
    initialQuote: string;
}

const NotFound: React.FC<NotFoundProps> = ({ initialQuote }) => {
  const [randomQuote, setRandomQuote] = useState(initialQuote);

  useEffect(() => {
    if (!randomQuote) {
      fetchRandomQuote();
    }
  }, [randomQuote]);

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
      <ReusableHero
        heroText="Error 404"
        subText="You aren't meant to be here!"
        PageLink="Unknown Page"
      />
      <section className="text-white ml-11 mr-11 mt-2 mb-0 sm:-mt-20 md:-mt-16 lg:-mt-16 sm:flex sm:justify-center md:flex md:justify-center lg:flex lg:justify-center border-t-[1px] border-dark-50">
        <div className="text-center mt-4">
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

export async function getStaticProps() {
  try {
    const response = await fetch("https://api.quotable.io/random");
    const { content } = await response.json();

    return {
      props: {
        initialQuote: content,
      },
    };
  } catch (error) {
    console.error("Failed to fetch random quote:", error);

    return {
      props: {
        initialQuote: null,
      },
    };
  }
}

export default NotFound;

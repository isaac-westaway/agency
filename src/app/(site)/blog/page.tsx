import ReusableHero from "@/src/app/components/ReusableHero";
import getPostMetadata from "@/src/app/components/posts/getPostMetadata";
import PostPreview from "@/src/app/components/posts/PostPreview";

import Link from "next/link";

export const metadata = {
  title: "Blog Wynnum Web Services",
};

export default function Blog() {
  const postMetadata = getPostMetadata();
  const postPreviews = postMetadata.map((post) => (
    <PostPreview key={post.slug} {...post} />
  ));

  return (
    <div className="min-h-screen">
      <ReusableHero
        heroText="Blog"
        subText="A collection of our thoughts, ramblings and news"
        secondarySubText="Latest Post:"
        PageLink="The Blog"
      />
      <section className="mt-4 lg:-mt-14 md:-mt-16 sm:-mt-14 mr-11 ml-11 border-t-[1px] border-dark-50 text-white z-50">
        {postPreviews}
      </section>
    </div>
  );
}

import ReusableHero from "@/src/app/components/ReusableHero";
import getPostMetadata from "@/src/app/components/blog/getPostMetadata";
import PostPreview from "@/src/app/components/blog/PostPreview";
import ContactSection from "@/src/app/components/contact/ContactSection";

export const metadata = {
  title: "Blog – Wynnum Web Services",
};

export default function Blog() {
  const postMetadata = getPostMetadata();
  const sortedPostMetadata = [...postMetadata].reverse(); // Sort from newest to oldest
  const latestPost = sortedPostMetadata[0];
  const postPreviews = sortedPostMetadata.map((post) => (
    <PostPreview key={post.slug} {...post} />
  ));

  return (
    <div className="min-h-screen">
      <ReusableHero
        heroText="Blog"
        subText="A collection of our thoughts, ramblings and news"
        secondarySubText={`Latest Post: ${latestPost.title}`}
        PageLink="Blog"
      />
      <section className="mt-4 lg:-mt-14 md:-mt-16 sm:-mt-14 mr-11 ml-11 border-t-[1px] border-dark-50 text-white z-50 min-h-screen">
        <div className="grid grid-cols-2 sm:grid-cols-1 md:grid-cols-1">
          {postPreviews}
        </div>
      </section>
      <section
        className="relative text-white border-t-[1px] border-dark-50 ml-11 mr-11"
        style={{ scrollMarginTop: "100px" }}
        id="contact"
      >
        <ContactSection
          cta="Get in touch with us!"
          subcta="We will endeavour to respond as fast as possible. Usually this means 6 - 18 Hours."
          message="Hey Wynnum Web Services!"
        />
      </section>
    </div>
  );
}

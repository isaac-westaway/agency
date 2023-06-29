import ReusableHeroNested from "@/src/app/components/ReusableHeroNested";
import getPostMetadata from "@/src/app/components/posts/getPostMetadata";

import fs from "fs";
import matter from "gray-matter";
import Markdown from "markdown-to-jsx";
import { NextPage } from "next";

const getPostContent = (slug: string) => {
  const folder = "posts/";
  const file = `${folder}${slug}.md`;
  const content = fs.readFileSync(file, "utf8");
  const matterResult = matter(content);
  return matterResult;
};
const truncateTitle = (title: string, maxLength: number) => {
  if (title.length > maxLength) {
    return `${title.substring(0, maxLength)}...`;
  }
  return title;
};

export const generateStaticParams = async () => {
  const posts = getPostMetadata();
  return posts.map((post) => ({
    slug: post.slug,
  }));
};

export const PostPage: React.FC = (props: any) => {
  const slug = props.params.slug;
  const post = getPostContent(slug);
  const truncatedTitle = truncateTitle(post.data.title, 15);

  return (
    <div className="min-h-screen">
      <ReusableHeroNested
        heroText={`${post.data.title}`}
        subText="Bruh"
        PageLink="Blog"
        secondaryPageLink={truncatedTitle}
      />
      <section className="mt-4 lg:-mt-14 md:-mt-16 sm:-mt-14 mr-11 ml-11 border-t-[1px] border-dark-50 text-white z-50">
        <Markdown>{post.content}</Markdown>
      </section>
    </div>
  );
};

export default PostPage;

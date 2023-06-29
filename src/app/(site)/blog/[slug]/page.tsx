import Button from "@/src/app/components/Button";
import ReusableHeroNested from "@/src/app/components/ReusableHeroNested";
import SmoothButton from "@/src/app/components/SmoothButton";
import getPostMetadata from "@/src/app/components/posts/getPostMetadata";
import RevealOnce from "@/src/app/components/utils/RevealOnce";

import { formatDate } from "@/src/app/components/utils/formateDate";
import { truncateTitle } from "@/src/app/components/utils/truncateTitle";

import fs from "fs";
import matter from "gray-matter";
import Markdown from "markdown-to-jsx";
import { useEffect } from "react";

const getPostContent = (slug: string) => {
  const folder = "posts/";
  const file = `${folder}${slug}.md`;
  const content = fs.readFileSync(file, "utf8");
  const matterResult = matter(content);
  return matterResult;
};

export const generateStaticParams = async () => {
  const posts = getPostMetadata();
  return posts.map((post) => ({
    slug: post.slug,
  }));
};

export const metadata = {
  title: "",
};

const agencyName = "Wynnum Web Services";

export default function PostPage(props: any) {
  const slug = props.params.slug;
  const post = getPostContent(slug);
  const truncatedTitle = truncateTitle(post.data.title, 15);
  const formattedDate = formatDate(post.data.date);

  metadata.title = `${post.data.title} ● ${agencyName}`;

  return (
      <div className="min-h-screen">
        <ReusableHeroNested
          heroText={`${post.data.title}`}
          subText={formattedDate}
          secondarySubText={`${post.data.subtitle}`}
          PageLink="Blog"
          secondaryPageLink={truncatedTitle}
        />
        <section className="flex justify-center mt-4 lg:-mt-16 md:-mt-16 sm:-mt-20 mr-11 ml-11 border-t-[1px] border-dark-50 text-white z-50">
          <article className="prose my-4 text-gray-400 prose-headings:text-[#F7F7F7] prose-headings:font-medium max-w-[42rem] w-full prose-a:text-[#4A6CF7] prose-strong:text-[#F7F7F7] prose-blockquote:text-[#4A6CF7] prose-code:text-[#F7F7F7] flex flex-col justify-center">
            <Markdown>{post.content}</Markdown>
            <div className="flex flex-col justify-content items-center w-full mb-4 mt-4">
              <SmoothButton
                cta="Ready to supercharge your business?"
                href="/#contact"
              />
              <RevealOnce>
                <div className="mt-2 mb-0">Let&#39;s talk</div>
              </RevealOnce>
            </div>
          </article>
        </section>
      </div>
  );
}

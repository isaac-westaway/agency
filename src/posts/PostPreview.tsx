import Link from "next/link";
import { PostMetadata } from "./PostMetadata";
import RevealOnce from "../app/components/utils/RevealOnce";

import { formatDate } from "@/src/app/components/utils/formateDate"

const PostPreview = (props: PostMetadata) => {
  const formattedDate = formatDate(props.date);
  return (
    <RevealOnce>
      <div className="p-4">
        <Link href={`/blog/${props.slug}`}>
          <span className="font-semibold hover:underline">{props.title}</span>
        </Link>
        <p className="font-medium text-gray-400 text-sm">{formattedDate}</p>
        <p className="font-light text-gray-400">{props.subtitle}</p>
      </div>
    </RevealOnce>
  );
};

export default PostPreview;

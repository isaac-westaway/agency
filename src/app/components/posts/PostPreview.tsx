import Link from "next/link";
import { PostMetadata } from "./PostMetadata";

const PostPreview = (props: PostMetadata) => {

    return (
        <div key={""} className="my-2">
        <Link href={`/blog/${props.slug}`}>
          <h2>{props.title}</h2>
        </Link>
        <p>{props.subtitle}</p>
        <p>{props.date}</p>
      </div>
    )
};

export default PostPreview;
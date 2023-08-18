import Image from "next/image";
import Link from "next/link";

const PostItemCard = ({ postFields: post }) => {
  return (
    <li>
      <Link
        href={`/posts/${post.slug}`}
        className={
          "block bg-white rounded-md shadow-md transition-all hover:scale-125"
        }
      >
        <Image
          src={post.image.url}
          width={400}
          height={400}
          alt={post.image.label}
          className={"rounded-t-md object-cover object-[50%_50%] max-h-[170px]"}
        />
        <span className={"px-5 my-3 block text-xs text-gray-500"}>
          {new Date(post.date).toDateString()}
        </span>
        <span className={"px-5 pb-6 mt-5 block font-medium capitalize"}>
          {post.title}
        </span>
      </Link>
    </li>
  );
};

export default PostItemCard;

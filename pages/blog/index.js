import Head from 'next/head';
import { poppins } from '@/utils';
import Link from 'next/link';
import Image from 'next/image';

export const getServerSideProps = async () => {
  const res = await fetch('http://localhost:3000/api/posts');
  const posts = await res.json();

  return {
    props: {
      posts,
    },
  };
};

export default function Blog({ posts }) {
  return (
    <div className={`${poppins.className}`}>
      <Head>
        <title>Travel Blog - XenTravels</title>
      </Head>
      <main className={`pb-14 mt-28 max-w-[800px] mx-auto`}>
        <ul className={'grid grid-cols-3 gap-x-4 gap-y-8 items-center'}>
          {posts.map((post) => (
            <li key={post.id}>
              <Link
                href={`/blog/${post.slug}`}
                className={
                  'block bg-white rounded-md shadow-md transition-all hover:scale-125'
                }
              >
                <Image
                  src={post.img}
                  width={400}
                  height={400}
                  alt={`${post.title} img`}
                  className={
                    'rounded-t-md object-cover object-[50%_50%] max-h-[170px]'
                  }
                />
                <span className={'px-5 pb-6 mt-5 block font-medium capitalize'}>
                  {post.title}
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </main>
    </div>
  );
}

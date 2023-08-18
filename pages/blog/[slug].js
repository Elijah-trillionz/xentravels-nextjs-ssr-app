import { poppins } from '@/utils';
import Header from '@/components/Header';
import Head from 'next/head';
import Image from 'next/image';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import postsData from 'posts.json';

export const getServerSideProps = async (ctx) => {
  const { slug } = ctx.query;
  const res = await fetch(`http://localhost:3000/api/posts/${slug}`);
  const post = await res.json();

  return {
    props: {
      post: post,
    },
  };
};

const PostItem = ({ post }) => {
  return (
    <div className={`${poppins.className}`}>
      <Head>
        <title>{'post.title'} - XenTravels Posts</title>
      </Head>
      <main className={'pb-14 mt-28 max-w-[800px] mx-auto'}>
        <Image
          src={post.img}
          alt={`${post.title} img`}
          width={300}
          height={300}
          className={
            'w-full max-h-[500px] object-cover object-center rounded-md shadow-md'
          }
        />
        <div
          className={
            'mt-10 border-b-2 pb-3 border-[#ccc] flex justify-between items-center'
          }
        >
          <h1 className={'font-bold text-3xl capitalize leading-relaxed'}>
            {post.title}
          </h1>
        </div>
        <div
          className={'blog-body mt-10'}
          dangerouslySetInnerHTML={{ __html: post.body }}
        />
      </main>
    </div>
  );
};

export default PostItem;

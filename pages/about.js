import Header from '@/components/Header';
import { poppins } from '@/utils';
import Head from 'next/head';

const About = () => {
  return (
    <div className={`${poppins.className}`}>
      <Head>
        <title>About XenTravels</title>
      </Head>
      <Header />
      <main className={`pb-14 mt-28 max-w-[800px] mx-auto`}>
        <h1 className='font-bold text-3xl mb-4'>Welcome to my about page</h1>
        <p>Learn more about my blog here</p>
      </main>
    </div>
  );
};

export default About;

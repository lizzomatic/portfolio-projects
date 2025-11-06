import Image from 'next/image';
import Link, { LinkProps } from 'next/link';
import React from 'react';
import { Header } from '@/components/header/header.jsx';
import { Footer } from '@/components/footer/footer.jsx';

export default () => {
  return (
    <div className='bg-white'>
      <Header />
      <div className="indent-8 p-8">
        <h1 className="text-lg font-medium ">
          Hello! My name is <b>Elizabeth Goltz</b>.
        </h1>
        <p>I am a data nerd and art-lifer living in Portland, Oregon with an MS in Applied Data Science from Portland State University '25.</p> 
        <p>I strive to ask better questions and I'm always on the lookout for an interesting problem to solve.</p>
        
        <Link className="indent-8 text-emerald-950 font-medium text-shadow-lg" href={`/projects`} >
          <p>Check out some of my latest projects</p>
        </Link>
        <Link className="indent-8" href={`https://www.linkedin.com/in/egoltz/`} >
          <p className="text-blue-950 font-medium text-shadow-lg text-b">Connect with me on LinkedIn</p>
        </Link>
        <Image src="/images/me.png" alt="photo of me on a sunny brisk fall day, wearing tinted sunglasses and a handknit hat" className="p-8 flex-none" width={400} height={400} />
        </div>
      <Footer />
    </div>
  )
}

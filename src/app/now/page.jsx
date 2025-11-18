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
        Now
        </h1>
        <p>
            This is page is about what I'm doing now. 
        </p>
        </div>
      <Footer />
    </div>
  )
}
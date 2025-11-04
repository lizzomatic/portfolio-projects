import React from 'react';
import { Header } from '@/components/header/header.jsx';
import { Footer } from '@/components/footer/footer.jsx';

export default () => {
  return (
    <div className='bg-white'>
      <Header />
      <p className='px-4'>
        <b>Elizabeth Goltz</b> is here to ask big questions and make pictures out of numbers to enable data-informed creative decisions. 
        She has a Master of Science in Applied Data Science '25 from Portland State University. When she's not making meaning out of piles of messy data, she likes to paint, sew her own clothes and run in the woods. She's a NW native and currently lives in Portland, Oregon.   
      </p>
      <Footer />
    </div>
  )
}

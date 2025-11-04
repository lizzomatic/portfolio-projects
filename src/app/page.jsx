import Image from 'next/image';
import Link, { LinkProps } from 'next/link';
import React from 'react';
import { Header } from '@/components/header/header.jsx';
import { Footer } from '@/components/footer/footer.jsx';

// const projects = [
//   {
//     title: "Lockout/Tagout Industrial Safety App",
//     desc: "",
//     img: "/images/loto_1.jpg",
//     href: "",
//     tags: []
//   },
//   {
//     title: "Moon Viewing Chart",
//     desc: "",
//     img: "/images/moonViewingChart.jpg",
//     href: "",
//     tags: []
//   },
//   {
//     title: "Drawing Hands",
//     desc: "branding/visual identity work for a startup exploring AI-human collaboration. I used digitally hand-painted depthmap images of MC Escher's'drawing hands' passed into a stable diffusion ai model as depth information",
//     img: "/images/hands_depthMap.png",
//     href: "https://docs.google.com/presentation/d/e/2PACX-1vRltiDEraUNGqveIuMLLGXEL4heZMHh3-7fAANRVmqH_ppOb5pdNDDb-BxGE9eSskFR9DF81T_P18sX/pub?start=false&loop=false&delayms=3000",
//     tags: []
//   },
//   {
//     title: "Maximalizing Minimalism",
//     desc: "uses stable diffusion controlnet to explore big complex meaning in minimalist art",
//     img: "/images/rileyAI.png",
//     href: "",
//     tags: []
//   },
//   {
//     title: "Image Archive",
//     desc: "",
//     img: "/images/arrowsFingers.jpg",
//     href: "",
//     tags: []
//   },
// ]

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
      {/* <h2 className='px-4 text-2xl text-gray-700 font-bold'>Projects</h2>
      <ul className="">
        {
          projects.map((items, key) => (
            <li className="p-1" key={key}>
              <Link className="flex sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-3" href={`${items.href}`} >
                <Image src={items.img} loading="lazy" alt={items.title} className="p-2 flex-none" width={400} height={400} />
                <div className="justify-items-start p3">
                  <h3 className="text-lg text-gray-800 duration-150 group-hover:text-gray-800 font-semibold">
                    {items.title}
                  </h3>
                  <p className="text-gray-600 text-sm duration-150 group-hover:text-gray-800">{items.desc}</p>
                </div>
              </Link>
            </li>
          ))
        }
      </ul> */}
      <Footer />
    </div>
  )
}

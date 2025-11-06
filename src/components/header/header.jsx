"use client";
import Link, { LinkProps } from 'next/link';
import Image from 'next/image';
import { useState } from 'react';

export const Header = () => {

  const [state, setState] = useState(false)

  const navigation = [
    { title: "Portfolio Projects", path: "/projects" },
    { title: "About", path: "/about" },
  ]

  return (
    <nav className="bg-white w-full py-10 border-b md:border-.1 md:static">
      <div className="items-center px-4 max-w-screen-xl mx-auto md:flex md:px-8">

        <Link href='/projects' className="text-3xl text-gray-700 font-bold text-shadow-lg">Elizabeth Goltz</Link>
        <div className={`flex-1 justify-self-center pb-3 mt-8 md:block md:pb-0 md:mt-0 ${state ? 'block' : 'hidden'}`}>
          <ul className="justify-center items-center space-y-8 md:flex md:space-x-6 md:space-y-0">
            {
              navigation.map((item, idx) => {
                return (
                  <li key={idx} className="text-gray-7S00 text-xl text-shadow-lg hover:text-black">
                    <a href={item.path}>
                      {item.title}
                    </a>
                  </li>
                )
              })
            }
          </ul>
        </div>

      </div>
    </nav>
  )
}

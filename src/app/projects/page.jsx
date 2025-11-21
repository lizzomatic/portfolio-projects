"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { notionPosts } from "@/lib/notionPostMap";
import { Header } from "@/components/header/header.jsx";
import { Footer } from "@/components/footer/footer.jsx";

export default function BlogIndex() {
  const [filter, setFilter] = useState("all");

  const filters = [
    { label: "All Projects", value: "all" },
    { label: "Data Viz", value: "data-vis" },
    { label: "Product", value: "product" },
  ];

  const filteredPosts =
    filter === "all"
      ? notionPosts
      : notionPosts.filter((post) => post.tags.includes(filter));

  return (
    <>
      <main className="prose mx-auto">
        <Header />
        <div className="p-8">
          <h1 className="text-2xl text-gray-800 duration-150 group-hover:text-gray-800 font-semibold">
            Check out some of my recent Projects:
          </h1>

          {/* FILTER BUTTONS */}
          <div className="mt-4 mb-6 flex flex-wrap gap-3">
            {filters.map((f) => (
              <button
                key={f.value}
                onClick={() => setFilter(f.value)}
                className={`px-4 py-1.5 rounded-full border text-sm transition ${
                  filter === f.value
                    ? "bg-gray-900 text-white border-gray-900"
                    : "bg-white text-gray-700 border-gray-300 hover:bg-gray-100"
                }`}
              >
                {f.label}
              </button>
            ))}
          </div>

          {/* PROJECT LIST */}
          <ul className="">
            {filteredPosts.map((post) => (
              <li key={post.slug} className="mb-4">
                <Link
                  className="flex gap-4 items-start"
                  href={`/projects/${post.slug}`}
                >
                  <Image
                    src={post.img}
                    loading="lazy"
                    alt={post.title}
                    className="p-2 flex-none"
                    width={400}
                    height={400}
                  />
                  <div className="justify-items-start p-3">
                    <h3 className="text-xl text-gray-800 duration-150 group-hover:text-gray-800 font-semibold">
                      {post.title}
                    </h3>
                    <p className="text-gray-600 text-sm duration-150 group-hover:text-gray-800">
                      {post.desc}
                    </p>
                  </div>
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <Footer />
      </main>
    </>
  );
}


// import Link from "next/link";
// import Image from 'next/image';
// import { notionPosts } from "@/lib/notionPostMap";
// import { Header } from '@/components/header/header.jsx';
// import { Footer } from '@/components/footer/footer.jsx';

// export default function BlogIndex() {
//   return (
//     <><main className="prose mx-auto">
//       <Header />
//       <div className="p-8">
//         <h1 className="text-2xl text-gray-800 duration-150 group-hover:text-gray-800 font-semibold ">Check out some of my recent Projects:</h1>
//         <br></br>
//         <ul className="">
//           {notionPosts.map((post) => (
//             <li key={post.slug}>
//               <Link className="flex sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-3" href={`/projects/${post.slug}`}>
//                 <Image src={post.img} loading="lazy" alt={post.title} className="p-2 flex-none" width={400} height={400} />
//                 <div className="justify-items-start p3">
//                   <h3 className="text-xl text-gray-800 duration-150 group-hover:text-gray-800 font-semibold">
//                     {post.title}
//                   </h3>
//                   <p className="text-gray-600 text-sm duration-150 group-hover:text-gray-800">{post.desc}</p>
//                 </div>
//               </Link>
//             </li>
//           ))}
//         </ul>
//       </div>
//       <Footer />
//     </main>
//     </>
//   );
// }


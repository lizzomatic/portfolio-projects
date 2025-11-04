import Link from "next/link";
import Image from 'next/image';
import { notionPosts } from "@/lib/notionPostMap";
import { Header } from '@/components/header/header.jsx';
import { Footer } from '@/components/footer/footer.jsx';

export default function BlogIndex() {
  return (
    <><main className="prose mx-auto">
      <Header />
      <div className="p-8">
        <h1 className="text-2xl text-gray-800 duration-150 group-hover:text-gray-800 font-semibold ">Check out some of my recent Projects:</h1>
        <br></br>
        <ul className="">
          {notionPosts.map((post) => (
            <li key={post.slug}>
              <Link className="flex sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-3" href={`/projects/${post.slug}`}>
                <Image src={post.img} loading="lazy" alt={post.title} className="p-2 flex-none" width={400} height={400} />
                <div className="justify-items-start p3">
                  <h3 className="text-xl text-gray-800 duration-150 group-hover:text-gray-800 font-semibold">
                    {post.title}
                  </h3>
                  <p className="text-gray-600 text-sm duration-150 group-hover:text-gray-800">{post.desc}</p>
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
// copied from projects page, rework in style of this...
{/* <li className="p-1" key={key}>
<Link className="flex sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-3" href={`${items.href}`} >
  <Image src={items.img} loading="lazy" alt={items.title} className="p-2 flex-none" width={400} height={400} />
  <div className="justify-items-start p3">
    <h3 className="text-lg text-gray-800 duration-150 group-hover:text-gray-800 font-semibold">
      {items.title}
    </h3>
    <p className="text-gray-600 text-sm duration-150 group-hover:text-gray-800">{items.desc}</p>
  </div>
</Link>
</li> */}

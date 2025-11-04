import { NotionAPI } from "notion-client";
import { notionPosts } from "@/lib/notionPostMap";
import NotionContent from "@/components/NotionContent";
import { Header } from '@/components/header/header.jsx';
import { Footer } from '@/components/footer/footer.jsx';

export async function generateStaticParams() {
  return notionPosts.map((post) => ({
    slug: post.slug,
  }));
}

export default async function BlogPost({ params }) {
  const { slug } = await params;
  const post = notionPosts.find((p) => p.slug === slug);

  if (!post) {
    return (
      <main className="prose mx-auto p-8">
        <Header />
        <h1>Post not found</h1>
        <Footer />
      </main>
    );
  }

  const notion = new NotionAPI();
  const recordMap = await notion.getPage(post.pageId);

  return (
    <main className="prose mx-auto p-8">
      <Header />
      <h1 className="p-8 indent-8 text-2xl">{post.title}</h1>
      <NotionContent recordMap={recordMap} />
      <Footer />
    </main>
  );
}

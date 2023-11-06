import BlogCard from "@/components/cards/BlogCard";
import { notFound } from "next/navigation";

async function getData(id) {
  const api = process.env.NEXT_PUBLIC_VERCEL_URL;
  const res = await fetch(`https://${api}/api/posts/${id}`, {
    cache: "no-store",
  });

  if (!res.ok) {
    notFound();
  }
  return res.json();
}

export async function generateMetadata({ params }) {
  const post = await getData(params.id);
  return {
    title: post.title,
    description: post.desc,
  };
}

const BlogPost = async ({ params }) => {
  const data = await getData(params.id);
  return (
    <div>
      <BlogCard
        key={data._id}
        id={data._id}
        title={data.title}
        img={data.img}
        content={data.content}
      ></BlogCard>
    </div>
  );
};

export default BlogPost;

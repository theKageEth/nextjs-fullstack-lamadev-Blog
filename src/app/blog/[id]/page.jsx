import BlogCard from "@/components/cards/BlogCard";
import { BASE_URL } from "@/utils/constants/constants";
import { notFound } from "next/navigation";

const getData = async (id) => {
  const res = await fetch(`${BASE_URL}/api/posts`, {
    next: { revalidate: 0 },
  });

  if (!res.ok) {
    notFound();
  }
  return res.json();
};

export async function generateMetadata({ params }) {
  const post = await getData(params.id);
  return {
    title: post.title,
    description: post.desc,
  };
}

const BlogPost = async ({ params }) => {
  if (!BASE_URL) {
    return null;
  }
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

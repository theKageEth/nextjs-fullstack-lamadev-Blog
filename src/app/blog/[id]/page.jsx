import BlogCard from "@/components/cards/BlogCard";
import { BASE_URL } from "@/utils/constants/constants";
import { notFound } from "next/navigation";

// export const dynamicParams = true;

// export async function generateStaticParams() {
//   return [];
// }

export const dynamic = "force-dynamic";
export const fetchCache = "force-no-store";
const getData = async (id) => {
  const res = await fetch(`${BASE_URL}/api/posts/${id}`);
  const posts = res.json();

  if (!res.ok) {
    notFound();
  }
  return posts;
};

export async function generateMetadata({ params }) {
  const post = await getData(params.id);

  return {
    title: post.title,
    description: post.desc,
  };
}

const BlogPost = async ({ params }) => {
  const data = await getData(params.id);
  if (!BASE_URL && !data) return notFound();
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

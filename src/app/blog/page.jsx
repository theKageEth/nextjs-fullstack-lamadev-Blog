import BlogCard from "@/components/cards/BlogCard";
import { BASE_URL } from "@/utils/constants/constants";
import { notFound } from "next/navigation";

export const dynamic = "force-dynamic";
export const fetchCache = "force-no-store";
const getData = async () => {
  const res = await fetch(`${BASE_URL}/api/posts`);
  const posts = await res.json();

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }
  return posts;
};

const Blog = async () => {
  const data = await getData();
  if (!BASE_URL && !data) return notFound();

  return data.map((item) => (
    <BlogCard
      key={item._id}
      id={item._id}
      title={item.title}
      img={item.img}
      content={item.content}
    ></BlogCard>
  ));
};

export default Blog;

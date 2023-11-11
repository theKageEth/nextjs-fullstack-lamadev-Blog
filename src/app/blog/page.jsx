import BlogCard from "@/components/cards/BlogCard";
import { BASE_URL } from "@/utils/constants/constants";

const getData = async () => {
  const res = await fetch(`${BASE_URL}/api/posts`, {
    next: { revalidate: 0 },
  });

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }
  return res.json();
};

const Blog = async () => {
  if (!BASE_URL) {
    return null;
  }

  const data = await getData();
  return (
    <div>
      {data.map((item) => (
        <BlogCard
          key={item._id}
          id={item._id}
          title={item.title}
          img={item.img}
          content={item.content}
        ></BlogCard>
      ))}
    </div>
  );
};

export default Blog;

import BlogCard from "@/components/cards/BlogCard";

async function getData() {
  const api = process.env.NEXT_PUBLIC_VERCEL_URL;
  const res = await fetch(`https://${api}/api/posts`, {
    cache: "no-store",
  });

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }
  return res.json();
}

const Blog = async () => {
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

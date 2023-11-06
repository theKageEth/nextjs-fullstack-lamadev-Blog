import dbConnect from "@/utils/mongo/db";
import Posts from "@/utils/mongo/models/schemas/Posts";

export const GET = async (req) => {
  const url = new URL(req.url);
  const username = url.searchParams.get("username");
  try {
    await dbConnect();

    const posts = await Posts.find(username && { username });

    return new Response(JSON.stringify(posts), { status: 200 });
  } catch (error) {
    return new Response("error in route dbConnect", { status: 500 });
  }
};

export const POST = async (req) => {
  const body = await req.json();
  const newPost = new Posts(body);
  try {
    await dbConnect();

    await newPost.save();

    return new Response("post has been created", { status: 201 });
  } catch (error) {
    return new Response("error in route dbConnect", { status: 500 });
  }
};

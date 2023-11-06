import dbConnect from "@/utils/mongo/db";
import Posts from "@/utils/mongo/models/schemas/Posts";

export const GET = async (req, { params }) => {
  const { id } = params;
  try {
    await dbConnect();

    const post = await Posts.findById(id);

    return new Response(JSON.stringify(post), { status: 200 });
  } catch (error) {
    return new Response("error in route dbConnect", { status: 500 });
  }
};

export const DELETE = async (req, { params }) => {
  const { id } = params;
  try {
    await dbConnect();

    const post = await Posts.findByIdAndDelete(id);

    return new Response("post deleted", { status: 200 });
  } catch (error) {
    return new Response("error in route dbConnect", { status: 500 });
  }
};

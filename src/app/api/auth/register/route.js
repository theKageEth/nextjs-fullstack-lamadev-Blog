import dbConnect from "@/utils/mongo/db";
import Users from "@/utils/mongo/models/schemas/Users";
import bcrypt from "bcryptjs";

export const POST = async (request) => {
  const { name, email, password } = await request.json();
  await dbConnect();

  const hash = await bcrypt.hash(password, 5);
  const newUser = new Users({
    name,
    email,
    password: hash,
  });

  try {
    await newUser.save();
    return new Response("user has been created", { status: 201 });
  } catch (error) {
    return new Response(error.message, { status: 500 });
  }
};

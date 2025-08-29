import { connectDB } from "@/app/lib/db";
import { User } from "@/app/models/user";

export async function POST(req) {
  await connectDB();

  const { name, email, number, div } = await req.json();

  const user = new User({ name, email, number, div });
  await user.save();

  return new Response(JSON.stringify(user), { status: 201 });
}

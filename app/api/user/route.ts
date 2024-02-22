// import {getUser} from "@/database/repository/user";
import { type NextRequest } from 'next/server'
import {createNewUser, getUserByEmail} from "@/database/repository/user";

export async function GET(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams
  const email = searchParams.get('email')

  if (!email) {
    return Response.json(undefined)
  }
  const user = await getUserByEmail(email);
  return Response.json(user);
}

export async function POST(request: NextRequest) {
  console.log("Successfully called fetch POST");
  console.log(request.body);
  const searchParams = request.nextUrl.searchParams
  const name = searchParams.get("name");
  const email = searchParams.get("email");
  const password = searchParams.get("password");
  const uco = searchParams.get("uco");
  const phone_number = searchParams.get("phone_number");
  console.log(name, email, password, uco, phone_number);
  console.log("name", name);
  console.log("email", email);


  if (!email || !name || !password || !uco || !phone_number) {
    console.log("something is off")
    return Response.json(false);
  }

  try {
    await createNewUser(name, email, password, Number(uco), phone_number);
  }
  catch (error) {
    console.log(error);
  }

  return Response.json(true);
}
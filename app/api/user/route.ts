// import {getUser} from "@/database/repository/user";
import { type NextRequest } from 'next/server'
import {getUserByEmail} from "../../../database/repository/user";

export async function GET(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams
  const email = searchParams.get('email')

  if (!email) {
    return Response.json(undefined)
  }
  const user = await getUserByEmail(email);
  return Response.json(user);
}
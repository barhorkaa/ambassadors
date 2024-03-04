import NextAuth from "next-auth"
import {authConfig} from "../../../../auth.config";

// TODO skusit vymatzat a co sa stane

const handler = NextAuth(authConfig);
export { handler as GET, handler as POST }
import LoginForm from "@/app/ui/login-form";
import React from "react";
import NavBar from "@/app/ui/nav-bar";
import {useFormState} from "react-dom";
import {authenticate} from "@/app/lib/actions";

export default function Login() {
  return (
    <main className="flex min-h-screen flex-col items-center">
      <NavBar></NavBar>
      <LoginForm/>
    </main>
  )
}

// export async function getServerSideProps(context) {
//   // Server-side code that interacts with mysql2 or performs other server-side operations
//   // ...
//   authenticate(context, undefined);
//
//   return {
//     props: {
//       // Data to be passed to the page component
//       // For example: user, initialData, etc.
//     },
//   };

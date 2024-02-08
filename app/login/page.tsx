// import LoginForm from "../ui/login-form";
// import React from "react";
// import NavBar from "../ui/nav-bar";
// import {useFormState} from "react-dom";
// import {authenticate} from "../lib/actions";

// export default function Login() {
//   return (
//     <main className="flex min-h-screen flex-col items-center">
//       <NavBar></NavBar>
//       <LoginForm/>
//     </main>
//   )
// }

// import { authenticate } from '/app/lib/actions'

import {authenticate} from "../lib/actions";

export default function Login() {
  return (
    <form action={authenticate}>
      <input type="email" name="email" placeholder="Email" required />
      <input type="password" name="password" placeholder="Password" required />
      <button type="submit">Login</button>
    </form>
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

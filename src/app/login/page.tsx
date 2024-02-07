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

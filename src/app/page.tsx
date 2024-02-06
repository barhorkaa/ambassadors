import NavBar from "@/app/ui/nav-bar";
import React from "react";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <NavBar></NavBar>
      <div className="flex min-h-screen flex-col items-center justify-between p-24">
        <p>
          This is a temporary text to fill the void and so I know how it's going to look like.
        </p>
      </div>
    </main>
  )
}

import {auth} from "@/auth";

export async function Footer() {
  const session = await auth();

  return(
    <footer className="footer footer-center p-4 bg-fi-100 text-base-content">
      <aside>
        <pre>{JSON.stringify(session, null, 2)}</pre>
        <p>Copyright © 2024 - All right reserved by OVVSP FI MU</p>
      </aside>
    </footer>
  )
}
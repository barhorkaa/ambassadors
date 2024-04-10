import LoginForm from '@/app/ui/auth/login-form';

export default function Login() {
  return (
    <div className="page hero">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="text-center lg:text-left p-4">
          <h1 className="hero-title">Přihlašte se a naplánujte svou akci!</h1>
          <p className="py-6 sm:py-2">
            Po přihlášení budete míť přístup ke všem akcím a možnost se na přihlásit. Pojďte s námi představit Fakultu
            informatiky Masarykovy Univerzity světu!
          </p>
        </div>
        <LoginForm />
      </div>
    </div>
  );
}

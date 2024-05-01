import RegisterForm from '@/app/ui/auth/register-form';

export default function Register() {
  return (
    <div className="hero">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="text-center lg:text-left p-4">
          <h1>Přidejte se k nám a dělejte FI dobré jméno!</h1>
          <p className="py-6">
            Po přihlášení budete míť přístup ke všem akcím a možnost se na přihlásit. Pojďte s námi představit Fakultu
            informatiky Masarykovy Univerzity světu!
          </p>
        </div>
        <RegisterForm />
      </div>
    </div>
  );
}

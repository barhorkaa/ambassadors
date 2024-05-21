export default function Loading() {
  return (
    <div className="hero h-full">
      <div className="hero-content text-center">
        <div className="max-w-md">
          <h1 className="hero-title">Načítám...</h1>
          <p className="pb-6">Prosím čekejte</p>
          <p className="pb-6">Trpělivost je ctnost, i servery potřebují čas.</p>
          <span className="loading loading-spinner loading-xl" />
        </div>
      </div>
    </div>
  );
}

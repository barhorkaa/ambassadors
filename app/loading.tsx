export default function Loading() {
  return (
    <div className="hero h-full">
      <div className="hero-content text-center">
        <div className="max-w-md">
          <h1 className="hero-title">Načítám...</h1>
          <p className="pb-6">Prosím čekejte</p>
          <span className="loading loading-spinner loading-xl"></span>
        </div>
      </div>
    </div>
  );
}

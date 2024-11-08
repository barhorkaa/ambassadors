export default function Banner() {
  return (
    <div className="banner">
      <div
        className="hero h-fit "
        style={{
          backgroundImage: 'url(https://fadmin.fi.muni.cz/noauth/gallery_data/fi_udalosti/01300298.103.cust.jpg)',
        }}
      >
        <div className="hero-overlay bg-opacity-50"></div>
        <div className="hero-content text-left text-white sm:px-2 py-20 md:py-44">
          <div>
            <h1 className="hero-title">Staň se ambasadorem FI ještě dnes!</h1>
            <p className="mb-5">
              Přidej se k ambasadorskému programu FI a pomoz nám inspirovat novou generaci studentů a představit FI
              světu.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

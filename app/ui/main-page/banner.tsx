export default function Banner() {
  return (
    <div className="custom-carousel">
      <div
        className="hero h-fit "
        style={{
          backgroundImage: 'url(https://fadmin.fi.muni.cz/noauth/gallery_data/fi_udalosti/01300298.103.cust.jpg)',
        }}
      >
        <div className="hero-overlay bg-opacity-50"></div>
        <div className="hero-content text-left text-white py-44 sm:px-2 sm:py-20">
          <div className="">
            <h1 className="hero-title">Staň se ambasadorem FI ještě dnes</h1>
            <p className="mb-5">
              Zapoj se do ambasadorského programu FI MU a pomoz nám představit FI široké veřejnosti
            </p>
            {/*<button className="btn btn-primary">Get Started</button>*/}
          </div>
        </div>
      </div>
    </div>
  );
}

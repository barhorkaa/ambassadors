import Link from 'next/link';
// import img from "next/img";

export default function Carousel() {
  return (
    <div className="custom-carousel">
      <div className="carousel w-full group">
        <div id="slide1" className="carousel-item relative w-full">
          <img src="gauseamus.jpg" className="w-full" alt="" />
          <div className="hidden group-hover:block">
            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
              <Link href="#slide4" className="btn btn-circle">
                ❮
              </Link>
              <Link href="#slide2" className="btn btn-circle">
                ❯
              </Link>
            </div>
          </div>
        </div>
        <div id="slide2" className="carousel-item relative w-full">
          <img src="AI4talents.jpg" className="w-full" alt="" />
          <div className="hidden group-hover:block">
            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
              <Link href="#slide1" className="btn btn-circle">
                ❮
              </Link>
              <Link href="#slide3" className="btn btn-circle">
                ❯
              </Link>
            </div>
          </div>
        </div>
        <div id="slide3" className="carousel-item relative w-full">
          <img src="dod_prezentacia.jpg" className="w-full" alt="" />
          <div className="hidden group-hover:block">
            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
              <Link href="#slide2" className="btn btn-circle">
                ❮
              </Link>
              <Link href="#slide4" className="btn btn-circle">
                ❯
              </Link>
            </div>
          </div>
        </div>
        <div id="slide4" className="carousel-item relative w-full">
          <img src="dod_lobby.jpg" className="w-full" alt="" />
          <div className="hidden group-hover:block">
            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
              <Link href="#slide3" className="btn btn-circle">
                ❮
              </Link>
              <Link href="#slide1" className="btn btn-circle">
                ❯
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

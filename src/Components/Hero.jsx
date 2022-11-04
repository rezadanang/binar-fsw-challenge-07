import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import AOS from 'aos';
import "aos/dist/aos.css";
import carImg from '../Assets/img_car.svg'

const Hero = () => {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);
  return (
    <>
    <div data-bs-spy="scroll" data-bs-target="#navbarBinar" data-bs-offset={0} className="scrollspy-example" tabIndex={0}>
        <div className="hero container-fluid">
          <div className="row">
            <div className="col-lg-6 col-12" data-aos="fade-up">
              <h1 className="text-kiri-top text-left pt-5 ml-5">Sewa &amp; Rental Mobil Terbaik di kawasan (Lokasimu)</h1>
              <p className="text-kiri ml-5">Selamat datang di Binar Car Rental. Kami menyediakan mobil kualitas terbaik dengan harga terjangkau. Selalu siap melayani kebutuhanmu untuk sewa mobil selama 24 jam.</p>
              <Link to="/cars"><button className="text-kiri mt-2 ml-5 btn btn-md btn-success zoom">Mulai Sewa Mobil</button></Link>
            </div>
            <div className="col-lg-6 col-12">
              <img className="img-hero" src={carImg} alt="car-image" />
            </div>
          </div>
        </div>
      </div>
      </>
  )
}

export default Hero
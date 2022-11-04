import React, { useEffect } from 'react'
import AOS from 'aos';
import "aos/dist/aos.css";
import imageService from '../Assets/img_service.svg'
import checkSvg from '../Assets/check.svg'

const OurService = () => {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);
  return (
    <>
    <div id="Ourservice" className="our-service container">
    <div className="row">
      <div className="col-lg-6 col-12" data-aos="fade-right">
        <img className="img-service" src={imageService} />
      </div>
      <div className="col-lg-6 col-12" data-aos="fade-left">
        <h2 className="header-text-service">Best Car Rental for any kind of trip in (Lokasimu)!</h2>
        <p>Sewa mobil di (Lokasimu) bersama Binar Car Rental jaminan harga lebih murah dibandingkan yang lain, kondisi mobil baru, serta kualitas pelayanan terbaik untuk perjalanan wisata, bisnis, wedding, meeting, dll.</p>
        <ol className="list-group">
          <li className="list-group-item border-0">
            <p><img src={checkSvg} />&nbsp; Sewa Mobil Dengan Supir di Bali 12 Jam</p>
          </li>
          <li className="list-group-item border-0">
            <p><img src={checkSvg} />&nbsp; Sewa Mobil Lepas Kunci di Bali 24 Jam</p>
          </li>
          <li className="list-group-item border-0">
            <p><img src={checkSvg} />&nbsp; Sewa Mobil Jangka Panjang Bulanan</p>
          </li>
          <li className="list-group-item border-0">
            <p><img src={checkSvg} />&nbsp; Gratis Antar - Jemput Mobil di Bandara</p>
          </li>
          <li className="list-group-item border-0">
            <p><img src={checkSvg} />&nbsp; Layanan Airport Transfer / Drop In Out</p>
          </li>
        </ol>
      </div>
    </div>
  </div>
  </>
  )
}

export default OurService
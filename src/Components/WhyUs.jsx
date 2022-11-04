import React, { useEffect } from 'react'
import '../App.css';
import AOS from 'aos';
import "aos/dist/aos.css";
import Thumb from '../Assets/thumb.svg'
import Tag from '../Assets/tag.svg'
import Clock from '../Assets/clock.svg'
import Profesional from '../Assets/profesional.svg'

const WhyUs = () => {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);
  return (
    <div id="Whyus" className="container" data-aos="fade-up">
        <div className="row px-5 text-why-us">
          <h1>Why Us?</h1>
          <p>Mengapa harus pilih Binar Car Rental?</p>
        </div>
        <div className="container-card row g-4 px-1">
          <div className="col-md-3 col-sm-6 col-xs-12">
            <div className="why-us-card mx-auto card">
              <div className="card-body">
                <img src={Thumb} />
                <p className="card-subtitle pt-3">Mobil Lengkap</p>
                <p className="text-card pt-3">Tersedia banyak pilihan mobil, kondisi masih baru, bersih dan terawat</p>
              </div>
            </div>
          </div>
          <div className="col-md-3 col-sm-6 col-xs-12">
            <div className="why-us-card mx-auto card">
              <div className="card-body">
                <img src={Tag} />
                <p className="card-subtitle pt-3">Harga Murah</p>
                <p className="text-card pt-3">Harga murah dan bersaing, bisa bandingkan harga kami dengan rental mobil lain</p>
              </div>
            </div>
          </div>
          <div className="col-md-3 col-sm-6 col-xs-12">
            <div className="why-us-card mx-auto card">
              <div className="card-body">
                <img src={Clock} />
                <p className="card-subtitle pt-3">Layanan 24 Jam</p>
                <p className="text-card pt-3">Siap melayani kebutuhan Anda selama 24 jam nonstop. Kami juga tersedia di akhir minggu</p>
              </div>
            </div>
          </div>
          <div className="col-md-3 col-sm-6 col-xs-12">
            <div className="why-us-card mx-auto card">
              <div className="card-body">
                <img src={Profesional} />
                <p className="card-subtitle pt-3">Sopir Profesional</p>
                <p className="text-card pt-3">Sopir yang profesional, berpengalaman, jujur, ramah dan selalu tepat waktu</p>
              </div>
            </div>
          </div>
        </div>
      </div>
  )
}

export default WhyUs
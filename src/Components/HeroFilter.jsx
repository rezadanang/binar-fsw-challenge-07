import React from 'react'
import carImg from '../Assets/img_car.svg'

const HeroFilter = () => {
    return ( 
        <div>
            <div className="hero container-fluid">
          <div className="row">
            <div className="col-lg-6 col-12">
              <h1 className="text-kiri-top text-left pt-5 ml-5">Sewa &amp; Rental Mobil Terbaik di kawasan (Lokasimu)</h1>
              <p className="text-kiri ml-5">Selamat datang di Binar Car Rental. Kami menyediakan mobil kualitas terbaik dengan harga terjangkau. Selalu siap melayani kebutuhanmu untuk sewa mobil selama 24 jam.</p>
              {/* <button class="text-kiri mt-2 ml-5 btn btn-md btn-success zoom">Mulai Sewa Mobil</button> */}
            </div>
            <div className="col-lg-6 col-12">
              <img className="img-hero" src={carImg} alt="car-image" />
            </div>
          </div>
        </div>
        
        </div>
     );
}
 
export default HeroFilter;
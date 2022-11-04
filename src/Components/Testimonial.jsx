import React from 'react'
import { useEffect } from 'react';
import AOS from 'aos';
import "aos/dist/aos.css";
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import testiPhoto from '../Assets/foto.jpeg';

const Testimonial = () => {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);
  return (
    <>
    <div id="Testimonial" className="container" data-aos="fade-up">
        <div className="row text-center pb-3 pt-5">
          <h1>Testimonial</h1>
        </div>
        <div className="row text-center pb-5">
          <p>Berbagai review positif dari para pelanggan kami</p>
        </div>
        <div className="container pb-5">
        <div class='container-fluid' >            
        <OwlCarousel items={1}  
          className="owl-theme"  
          loop  
          nav  
          margin={10} >  
            <div>
            <div className="card card-testimoni mt-4 mx-auto border-0">
                <div className="card-body">
                  <div className="row mt-3">
                    <div className="col-lg-3 col-12 mt-4">
                      <img className="testi-img" src={testiPhoto} />
                    </div>
                    <div className="col-lg-8 col-12 px-5">
                      <h6>⭐ ⭐ ⭐ ⭐ ⭐</h6>
                      <p className="card-text">“Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod”</p>
                      <h5>John Dee 30, Bromo</h5>
                    </div>
                  </div>
                </div>
              </div>

            </div>  
            <div>
            <div className="card card-testimoni mt-4 mx-auto border-0">
                <div className="card-body">
                  <div className="row mt-3">
                    <div className="col-lg-3 col-12 mt-4">
                      <img className="testi-img" src={testiPhoto} />
                    </div>
                    <div className="col-lg-8 col-12 px-5">
                      <h6>⭐ ⭐ ⭐ ⭐ ⭐</h6>
                      <p className="card-text">“Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod”</p>
                      <h5>John Dee 30, Bromo</h5>
                    </div>
                  </div>
                </div>
              </div>

            </div>  
            <div>
            <div className="card card-testimoni mt-4 mx-auto border-0">
                <div className="card-body">
                  <div className="row mt-3">
                    <div className="col-lg-3 col-12 mt-4">
                      <img className="testi-img" src={testiPhoto} />
                    </div>
                    <div className="col-lg-8 col-12 px-5">
                      <h6>⭐ ⭐ ⭐ ⭐ ⭐</h6>
                      <p className="card-text">“Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod”</p>
                      <h5>John Dee 30, Bromo</h5>
                    </div>
                  </div>
                </div>
              </div>

            </div>  
            <div>
            <div className="card card-testimoni mt-4 mx-auto border-0">
                <div className="card-body">
                  <div className="row mt-3">
                    <div className="col-lg-3 col-12 mt-4">
                      <img className="testi-img" src={testiPhoto} />
                    </div>
                    <div className="col-lg-8 col-12 px-5">
                      <h6>⭐ ⭐ ⭐ ⭐ ⭐</h6>
                      <p className="card-text">“Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod”</p>
                      <h5>John Dee 30, Bromo</h5>
                    </div>
                  </div>
                </div>
              </div>

            </div>  
            <div>
            <div className="card card-testimoni mt-4 mx-auto border-0">
                <div className="card-body">
                  <div className="row mt-3">
                    <div className="col-lg-3 col-12 mt-4">
                      <img className="testi-img" src={testiPhoto} />
                    </div>
                    <div className="col-lg-8 col-12 px-5">
                      <h6>⭐ ⭐ ⭐ ⭐ ⭐</h6>
                      <p className="card-text">“Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod”</p>
                      <h5>John Dee 30, Bromo</h5>
                    </div>
                  </div>
                </div>
              </div>

            </div>  
            <div>
            <div className="card card-testimoni mt-4 mx-auto border-0">
                <div className="card-body">
                  <div className="row mt-3">
                    <div className="col-lg-3 col-12 mt-4">
                      <img className="testi-img" src={testiPhoto} />
                    </div>
                    <div className="col-lg-8 col-12 px-5">
                      <h6>⭐ ⭐ ⭐ ⭐ ⭐</h6>
                      <p className="card-text">“Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod”</p>
                      <h5>John Dee 30, Bromo</h5>
                    </div>
                  </div>
                </div>
              </div>

            </div>  
      </OwlCarousel>  
      </div>  
          <div className="row sewa-mobil" data-aos="fade-up">
            <div className="card big-card mx-auto border-0">
              <div className="card-body text-center">
                <h1 className="header-card">Sewa Mobil di (Lokasimu) Sekarang!</h1>
                <p className="text-big-card px-5">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque sed auctor ante, at mattis ligula. Cras feugiat luctus purus in ullamcorper. Donec porta lacus at risus scelerisque eleifend.</p>
                <div className="mt-5">
                  <button type="button" className="btn btn-success">Mulai Sewa Mobil</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Testimonial
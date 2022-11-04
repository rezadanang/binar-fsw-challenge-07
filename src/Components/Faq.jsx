import React, { useEffect } from 'react'
import AOS from 'aos';
import "aos/dist/aos.css";

const Faq = () => {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);
  return (
    <div id="Faq" className="container">
    <div className="row container-accordion px-5 pt-5">
      <div className="col-lg-6 col-12" data-aos="fade-right">
        <div className="text-faq">
          <h1 className="pb-3">Frequently Asked Question</h1>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
        </div>
      </div>
      <div className="col-lg-6 col-12" data-aos="fade-left">
        <div className="container right-accordion">
          <div className="accordion" id="myAccordion">
            <div className="accordion-item accord-faq">
              <h2 className="accordion-header" id="headingOne">
                <button type="button" className="accordion-button collapsed" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-controls="collapseOne">Apa saja syarat yang dibutuhkan?</button>									
              </h2>
              <div id="collapseOne" className="accordion-collapse collapse multi-collapse" data-bs-parent="#myAccordion">
                <div className="card-body">
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis consequat risus nunc, nec euismod orci finibus a. Donec at felis vel urna aliquet sodales eu et sem. Aliquam auctor eros ac augue mollis, non luctus ante varius. Vivamus vitae vehicula nunc. Ut facilisis dapibus sodales. Proin quis lorem id ligula pretium placerat.</p>
                </div>
              </div>
            </div>
            <div className="accordion-item accord-faq mt-4 border-top">
              <h2 className="accordion-header" id="headingTwo">
                <button type="button" className="accordion-button collapsed" data-bs-toggle="collapse" data-bs-target="#collapseTwo">Berapa hari minimal sewa mobil lepas kunci?</button>
              </h2>
              <div id="collapseTwo" className="accordion-collapse collapse multi-collapse" data-bs-parent="#myAccordion">
                <div className="card-body">
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis consequat risus nunc, nec euismod orci finibus a. Donec at felis vel urna aliquet sodales eu et sem. Aliquam auctor eros ac augue mollis, non luctus ante varius. Vivamus vitae vehicula nunc. Ut facilisis dapibus sodales. Proin quis lorem id ligula pretium placerat.</p>
                </div>
              </div>
            </div>
            <div className="accordion-item accord-faq mt-4 border-top">
              <h2 className="accordion-header" id="headingThree">
                <button type="button" className="accordion-button collapsed" data-bs-toggle="collapse" data-bs-target="#collapseThree">Berapa hari sebelumnya sabaiknya booking sewa mobil?</button>                     
              </h2>
              <div id="collapseThree" className="accordion-collapse collapse multi-collapse" data-bs-parent="#myAccordion">
                <div className="card-body">
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis consequat risus nunc, nec euismod orci finibus a. Donec at felis vel urna aliquet sodales eu et sem. Aliquam auctor eros ac augue mollis, non luctus ante varius. Vivamus vitae vehicula nunc. Ut facilisis dapibus sodales. Proin quis lorem id ligula pretium placerat.</p>
                </div>
              </div>
            </div>
            <div className="accordion-item accord-faq mt-4 border-top">
              <h2 className="accordion-header" id="headingFour">
                <button type="button" className="accordion-button collapsed" data-bs-toggle="collapse" data-bs-target="#collapseFour">Apakah Ada biaya antar-jemput?</button>                     
              </h2>
              <div id="collapseFour" className="accordion-collapse collapse multi-collapse" data-bs-parent="#myAccordion">
                <div className="card-body">
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis consequat risus nunc, nec euismod orci finibus a. Donec at felis vel urna aliquet sodales eu et sem. Aliquam auctor eros ac augue mollis, non luctus ante varius. Vivamus vitae vehicula nunc. Ut facilisis dapibus sodales. Proin quis lorem id ligula pretium placerat.</p>
                </div>
              </div>
            </div>
            <div className="accordion-item accord-faq mt-4 border-top">
              <h2 className="accordion-header" id="headingFive">
                <button type="button" className="accordion-button collapsed" data-bs-toggle="collapse" data-bs-target="#collapseFive">Bagaimana jika terjadi kecelakaan</button>                     
              </h2>
              <div id="collapseFive" className="accordion-collapse collapse" data-bs-parent="#myAccordion">
                <div className="card-body">
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis consequat risus nunc, nec euismod orci finibus a. Donec at felis vel urna aliquet sodales eu et sem. Aliquam auctor eros ac augue mollis, non luctus ante varius. Vivamus vitae vehicula nunc. Ut facilisis dapibus sodales. Proin quis lorem id ligula pretium placerat.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  )
}

export default Faq
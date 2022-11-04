import React from 'react'
import iconFacebook from '../Assets/icon_facebook.svg'
import iconInstagram from '../Assets/icon_instagram.svg'
import iconTwitter from '../Assets/icon_twitter.svg'
import iconMail from '../Assets/icon_mail.svg'
import iconTwitch from '../Assets/icon_twitch.svg'

// const Footers = styled.section`
//   padding: 4em;
//   background: papayawhip;
// `;

const Footer = () => {
  return (

    <footer className="footer">
        <div className="container container-footer pt-5 p-5">
          <div className="row mx-auto">
            <div className="col-md-3 col-sm-6 col-xs-12 ">
              <ul className="list-group p-0">
                <li className="list-group-item border-0"><p>Jalan Suroyo No. 161 Mayangan Kota Probolinggo 672000</p></li>
                <li className="list-group-item border-0"><p>binarcarrental@gmail.com</p></li>
                <li className="list-group-item border-0"><p>081-233-334-808</p></li>
              </ul>
            </div>
            <div className="col-md-3 col-sm-6 col-xs-12">
              <ul className="list-group p-0">
                <li className="list-group-item border-0"><a href="#Ourservice">Our services</a></li>
                <li className="list-group-item border-0"><a href="#Whyus">Why Us</a></li>
                <li className="list-group-item border-0"><a href="#Testimonial">Testimonial</a></li>
                <li className="list-group-item border-0"><a href="#Faq">FAQ</a></li>
              </ul>             
            </div>
            <div className="col-md-3 col-sm-6 col-xs-12">
              <ul className="list-group p-0">
                <li className="list-group-item border-0"><p>Connect with us</p></li>
                <li className="list-group-item border-0">
                  <div className="d-flex flex-row">
                    <div className="p-1"><a href="https://www.facebook.com/"><img src={iconFacebook} alt="facebook" /></a></div>
                    <div className="p-1"><a href="https://www.instagram.com/"><img src={iconInstagram} alt="instagram" /></a></div>
                    <div className="p-1"><a href="https://www.twitter.com/"><img src={iconTwitter} alt="twitter" /></a></div>
                    <div className="p-1"><a href="https://mail.google.com/"><img src={iconMail} alt="mail" /></a></div>
                    <div className="p-1"><a href="https://twitch.com/"><img src={iconTwitch} alt="twitch" /></a></div>
                  </div>
                </li>
              </ul>
            </div>
            <div className="col-md-3 col-sm-6 col-xs-12">
              <ul className="list-group p-0">
                <li className="list-group-item border-0"><p>Copyright Binar 2022</p></li>
                <li className="list-group-item border-0"><a className="square-2" href="#" /></li>
              </ul>    
            </div>
          </div>
        </div>
        <div className="text-bottom">
          <p className="text-center mt-5">Sliced by Reza Danang</p>
        </div>
      </footer>
  )
}

export default Footer
import React from 'react'
import "../Styles/footer.css"
import googlePlay from "../assets/googlePlay.png"
import Appstore from "../assets/AppStore.png"
import Social from "../assets/Social.png"
import Guarantee from "../assets/Guarantee.png"
import { Link } from "react-router-dom";

 function Footer(){

    return (
        <>
        <div className="Footerbody">
        <hr></hr>
            <div className="Footerclass">
            <div className="Footerclassdiv1">
            <ul>
            <h3>Sitemap</h3>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/products">All </Link></li>
            <li><Link to="/products">Men </Link></li>
            <li><Link to="/products">Women </Link></li>
            <li><Link to="/cart">Cart </Link></li>
          </ul>
          </div>
          
          <div className="Footerclassdiv1">
          <ul>
            <h3>About Us</h3>
            <li><a href="https://www.myntra.com/faqs">FAQ</a></li>
            <li><a href="https://www.myntra.com/tac">T&C</a></li>
            <li><a href="https://www.myntra.com/privacypolicy">Privacy Policy</a></li>
           
          </ul>
        </div>
               
                <div  className="Footerclassdiv2">
                    <h5>EXPERIENCE MYNTRA APP ON MOBILE</h5>
                    <div>

                    <a href="https://play.google.com/store/apps/details?id=com.myntra.android&hl=en&gl=US&pli=1"> <img className="footericon1" src={googlePlay} alt="" /></a>
                        
                    <a href="https://apps.apple.com/in/app/myntra-fashion-shopping-app/id907394059"> <img className="footericon2" src={Appstore} alt="" /></a>
                    </div>
                    <h5>KEEP IN TOUCH</h5>
                   <a href='https://www.instagram.com/myntra/'><img src={Social} alt="" /></a> 
                </div>
                <div>
                    <img className="footer4" src={Guarantee} alt="" />
                </div>
            </div>
            </div>
            <hr></hr>
            <div className="footer5">
            <p className="bottom">© 2023 Myntra Clone All rights reserve</p>
            </div>     
      
        </>
    )
}
export default Footer;


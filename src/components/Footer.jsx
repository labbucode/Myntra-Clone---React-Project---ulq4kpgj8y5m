import React from 'react'
import "../Styles/footer.css"
import googlePlay from "../assets/googlePlay.png"
import Appstore from "../assets/AppStore.png"
import Social from "../assets/Social.png"
import Guarantee from "../assets/Guarantee.png"

 function Footer(){
    const footer1=[
        {title:"ONLINESHOPPING",
        sub:["Men","Women","Kids","Home & Living","Beauty","Gift Cards","Myntra Insider"]},
        {title:"USEFUL LINKS",
        sub:["Contact Us","FAQ","T&C","Terms of Use","Track Order","Shipping","Cancellation","Returns","Whitehat","Blog","Careers","Privacy policy","Site Map","Corporation Information"]},
    ]

    return (
        <div className="Footerbody">
        <hr></hr>
            <div className="Footerclass">
                {footer1.map((item,j)=><div key={j} className="Footerclassdiv1">
                   <h5 className="colorblack">{item.title}</h5>
                        {item.sub.map((el,z)=><p key={z}>{el}</p>)}
                    </div>)}
                <div  className="Footerclassdiv2">
                    <h5>EXPERIENCE MYNTRA APP ON MOBILE</h5>
                    <div>
                        <img className="footericon1" src={googlePlay} alt="" />
                        <img className="footericon2" src={Appstore} alt="" />
                    </div>
                    <h5>KEEP IN TOUCH</h5>
                    <img src={Social} alt="" />
                </div>
                <div>
                    <img className="footer4" src={Guarantee} alt="" />
                </div>
            </div>
            <hr></hr>
            <div className="footer5">
            <p className="bottom">© 2023 Myntra Clone All rights reserve</p>
            </div>     
        </div>
    )
}
export default Footer;


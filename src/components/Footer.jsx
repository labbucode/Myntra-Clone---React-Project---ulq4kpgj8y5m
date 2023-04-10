// import React from 'react'
// import styles from "../Styles/footer.css"
// import googlePlay from "../assets/googlePlay"
// import Appstore from "../assets/AppStore.png"
// import Social from "./assets/Social.png"
// import Guarantee from "./assets/Guarantee.png"
import "../App.css"

function Footer(){
    const footer1=[
        {title:"ONLINESHOPPING",
        sub:["Men","Women","Kids","Home & Living","Beauty","Gift Cards","Myntra Insider"]},
        {title:"USEFUL LINKS",
        sub:["Contact Us","FAQ","T&C","Terms of Use","Blog","Careers","Privacy policy"]},
        {title:"YOUR ORDER",
        sub:["Track Order","Shipping","Cancellation","Returns"]},
        {title:"SOCIAL MEDIA PLATFROM",
        sub:["Facebook","Instagram","Twitter","YouTube"]},
    ]

    return (
        <div className="Footerbody">
        <hr></hr>
            <div className="Footerclass">
                {footer1.map((item,j)=><div key={j} className="Footerclassdiv1">
                   <h5 className="colorblack">{item.title}</h5>
                        {item.sub.map((el,z)=><p key={z}>{el}</p>)}
                    </div>)}     
            </div>
            <div className="footer5">
            <p className="bottom">© 2023 myntra Clone. All rights reserve</p>
            </div>    
        </div>
    )
}
 export default Footer;

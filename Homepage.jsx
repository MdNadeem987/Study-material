import React from "react"
import './HomePage.class'
import {Button} from 'react-bootstrap'
const HomePage =()=>{
    return (
        <div>
            
    <div className="main">
        <div className="navbar">
            <div className="icon">
                <h1 className="logo">Pickup<span>Biz</span>...</h1>
            </div>
            <div className="menu">
                <ul>
                    <li><a href="/select.html">PickupBiz_Goal</a></li>
                    <li><a href="https://pickupbiz.com/aboutus">About</a></li>
                    <li><a href="https://pickupbiz.com/services">OurService</a></li>
                    <li><a href="https://pickupbiz.com/technologies">Technologies</a></li>
                    <li><a href="https://pickupbiz.com/contacts">Contact</a></li>
                </ul>
            </div>
            <div className="search">
                {/* <input class="srch" type="search" name="" placeholder="Type To Text"> 
                <a href="#"><button class="btn">search</button></a>  */}
            </div>
        </div>
        <div className="content">
            <h1>LEARNING <br><span> & </span></br>DEVELOPMENT</h1>
            <p className="par">Do you want to a become a software developer but <br>
                dont have a relevant degree? here's your opportunity to boost your <br>
                career to software industory with us. Our philosopy is a asure the highest <br>
                training with alumini of Microsoft, Amazone and C-DAC with <br>
                more the 15 years of experience in software <br>
                developement and architecture </p>
            <button className="cn"><a href="/thanku.html">JOIN US</a></button>
            <div className="form">
                <h2>Login Here</h2>
                
                <input type="Email" name="Email" placeholder="Enter Email Here" />
                <input type="Password" Name="" placeholder="Enter Your Password" />
                <button className="btnn"><a href="#">Login</a></button>
                <p className="link">Visit Me<br>
                    <a href="https://www.pickupbiz.com/">info@pickupbiz.com </a> here</a>
                </p>
                <p className="liw">Follow us</p>
                <div className="icon">
                    <a
                        href="https://www.facebook.com/login/?privacy_mutation_token=eyJ0eXBlIjowLCJjcmVhdGlvbl90aW1lIjoxNjM3NDQ2MTY4LCJjYWxsc2l0ZV9pZCI6MzgxMjI5MDc5NTc1OTQ2fQ%3D%3D">
                        <ion-icon name="logo-facebook"></ion-icon>
                    </a>
                    <a href="https://www.instagram.com/accounts/login/?hl=en">
                        <ion-icon name="logo-instagram"></ion-icon>
                    </a>
                    <a href="https://twitter.com/i/flow/login">
                        <ion-icon name="logo-twitter"></ion-icon>
                    </a>
                    <a href="https://www.google.com/">
                        <ion-icon name="logo-google"></ion-icon>
                    </a>
                    <a href="https://www.skype.com/en/">
                        <ion-icon name="logo-skype"></ion-icon>
                    </a>
                    <a href="https://web.whatsapp.com/">
                        <ion-icon name="logo-whatsapp"></ion-icon>
                    </a>

                </div>
            </div>
        </div>
    </div>
    
    </div>

);
}
    {/* <script src="https://unpkg.com/ionicons@5.4.0/dist/ionicons.js"></script>

    <footer>Peer Nagar, Bhagya Nagar, Nanded cell-No. 7498154702,9970611107</footer> */}

import React from "react";
import { NavLink } from "react-router-dom";

let Footer=()=>{
    return(<>

    <div className="mainfoot">
         <div className="lfooter">
            <h1>RMOTORS</h1> <br />
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
                 Tempore dignissimos fugit temporibus quam vel quae in optio corrupti,
                  sed voluptate! Ducimus, iste? Harum, mollitia expedita. Deleniti optio voluptatum quisquam quia!
                  </p>
                  <br />

                  <div className="footicon">
                  <a href="https://wa.me/qr/VC5LEVH3ICUZG1" target="_blank" rel="noopener noreferrer"><i className="fa-brands fa-whatsapp text-white ms-3"></i></a>
            <a href="https://www.instagram.com/_rushikesh_2406/" target="_blank" rel="noopener noreferrer"><i className="fa-brands fa-instagram text-white ms-3"></i></a>
            <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer"><i className="fa-brands fa-square-facebook text-white ms-3"></i></a>
                  </div>
                  
                  <div className="mainiconfoot">
                  <div className="iconfooter">
                  <i class="fa-solid fa-location-dot"></i>
                  <p>Herwade Colony Behind Shahu Garden Jaysingpur,Kolhapur,Maharashtra-416101</p>
                  </div>
                  <div className="iconfooter">
                  <i class="fa-solid fa-square-phone"></i>
                  <p>8055967453</p>
                  </div>
                  <div className="iconfooter">
                  <i class="fa-solid fa-envelope "></i>
                  <p>rmotorsgarageservices2001@gmail.com</p>
                  </div>
                  </div>

                   
                  
         </div>

         <div className="serviceslink">
                   <h3>Services</h3>
                   <ul>
                    <li><a href="">Paint</a></li>
                    <li><a href="">oil change</a></li>
                    <li><a href="">Break</a></li>
                    <li><a href="">Suspension</a></li>
                   </ul>

                   </div>


         <div className="footsLink">
           <h3>Links</h3>
               <div className="footerLinks">
                    <br/>
                     <NavLink to="/" className="nav-link text-white"> Home</NavLink><br/>
                     <NavLink to="/about" className="nav-link text-white">About</NavLink><br/>
                     <NavLink to="/services" className="nav-link text-white">Services</NavLink><br/>
                     <NavLink to="/contact" className="nav-link text-white">Contact</NavLink>
                </div>

          </div>

          

         </div>
         <div className="footend">
         <h6>This Website is maintain by &copy;rushikesh</h6>
         </div>
    </>);
}
export default Footer;
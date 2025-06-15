import React from "react";
import Footer from "./Footer";

let Contact = () => {
    return (
        <>
            <div className="contactsshow">
                <div className="lfooter">
                    <h1>RMOTORS</h1> <br />
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Tempore dignissimos fugit temporibus quam vel quae in optio corrupti,
                        sed voluptate! Ducimus, iste? Harum, mollitia expedita. Deleniti optio voluptatum quisquam quia!
                    </p>
                    <br />

                    <div className="footicon">
                        <i className="fa-brands fa-instagram fa-2xl"></i>
                        <i className="fa-brands fa-whatsapp fa-2xl"></i>
                        <i className="fa-brands fa-facebook fa-2xl"></i>
                    </div>

                    <div className="mainiconfoot">
                        <div className="iconfooter">
                            <i className="fa-solid fa-location-dot"></i>
                            <p>Herwade Colony Behind Shahu Garden Jaysingpur, Kolhapur, Maharashtra-416101</p>
                        </div>
                        <div className="iconfooter">
                            <i className="fa-solid fa-square-phone"></i>
                            <p>8055967453</p>
                        </div>
                        <div className="iconfooter">
                            <i className="fa-solid fa-envelope"></i>
                            <p>rmotorsgarageservices2001@gmail.com</p>
                        </div>
                    </div>
                </div>

                <div className="rfooter">
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3820.059541023458!2d74.54620106246927!3d16.773713075341185!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc11f20ea452181%3A0x179bcdf6d49a0db0!2sHerwade%20Colony%2C%20Shivashakti%20Colony%2C%20Jayshingpur%20Rural%2C%20Jaysingpur%2C%20Maharashtra%20416101!5e0!3m2!1sen!2sin!4v1745380641444!5m2!1sen!2sin"
                        width="640"
                        height="450"
                        style={{ border: 0 }}
                        allowFullScreen=""
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                    ></iframe>
                </div>
            </div>
            <br/><br/><br/><br/><br/>
            <Footer />
        </>
    );
}

export default Contact;

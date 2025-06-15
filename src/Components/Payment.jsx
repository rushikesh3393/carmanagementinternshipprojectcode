import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import googlePayImg from '../assets/GooglePay.png';

const Payment = () => {
  return (
    <>
      <div className="hs">
        <h1>Payment Options</h1>
      </div>

      <div className="accordion" id="accordionExample">
        {/* Net Banking Section */}
        <div className="accordion-item">
          <h2 className="accordion-header" id="headingNetBanking">
            <button
              className="accordion-button"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseNetBanking"
              aria-expanded="true"
              aria-controls="collapseNetBanking"
            >
              Credit or DebitCard
            </button>
          </h2>
          <div
            id="collapseNetBanking"
            className="accordion-collapse collapse show"
            aria-labelledby="headingNetBanking"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body">
              <div className="netbank">
                <br/>
                <input type="text" name="nt1" value="" placeholder="Enter Card Number" />
                <br/><br/>
                <input type="text" name="nt2" value="" placeholder="MM/YY" />
                <br/><br/>
                <input type="text" name="nt3" value="" placeholder="CVV" />
                 <br/><br/><br/>
                 <input type="button" id="upiid" name="nt4" value="Pay"/>
              </div>
            </div>
          </div>
        </div>

             

        {/* UPI */}
        <div className="accordion-item">
          <h2 className="accordion-header" id="headingUPI">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseUPI"
              aria-expanded="false"
              aria-controls="collapseUPI"
            >
              UPI
            </button>
          </h2>
          <div
            id="collapseUPI"
            className="accordion-collapse collapse"
            aria-labelledby="headingUPI"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body">
              <div className="upiclas">
                <input type="text" name="upi" placeholder="Enter your UPI Id" />
                <br /><br />
                <input type="submit" id="upiid" value="Submit" />
              </div>
            </div>
          </div>
        </div>

        {/* COD */}
        <div className="accordion-item">
          <h2 className="accordion-header" id="headingCOD">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseCOD"
              aria-expanded="false"
              aria-controls="collapseCOD"
            >
              Cash on Delivery
            </button>
          </h2>
          <div
            id="collapseCOD"
            className="accordion-collapse collapse"
            aria-labelledby="headingCOD"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body">
              <input type="button" name="ssss" value="In Cash" />
            </div>
          </div>
        </div>

        {/* PhonePe */}
        <div className="accordion-item">
          <h2 className="accordion-header" id="headingPhonePe">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapsePhonePe"
              aria-expanded="false"
              aria-controls="collapsePhonePe"
            >
              PhonePe
            </button>
          </h2>
          <div
            id="collapsePhonePe"
            className="accordion-collapse collapse"
            aria-labelledby="headingPhonePe"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body">
              <div className="phonepay"></div>
            </div>
          </div>
        </div>

        {/* Google Pay */}
        <div className="accordion-item">
          <h2 className="accordion-header" id="headingGPay">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseGPay"
              aria-expanded="false"
              aria-controls="collapseGPay"
            >
              Google Pay
            </button>
          </h2>
          <div
            id="collapseGPay"
            className="accordion-collapse collapse"
            aria-labelledby="headingGPay"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body">
              <div className="gpay"></div>
            </div>
          </div>
        </div>

        {/* Paytm */}
        <div className="accordion-item">
          <h2 className="accordion-header" id="headingPaytm">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapsePaytm"
              aria-expanded="false"
              aria-controls="collapsePaytm"
            >
              Paytm
            </button>
          </h2>
          <div
            id="collapsePaytm"
            className="accordion-collapse collapse"
            aria-labelledby="headingPaytm"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body">
              <div className="paytm"></div>
            </div>
          </div>
        </div>

      </div>
    </>
  );
};

export default Payment;

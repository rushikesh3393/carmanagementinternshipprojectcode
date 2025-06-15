import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Routes, Route, NavLink,Link } from "react-router-dom";
import Home from "./Home";
import About from "./About";
import Services from "./Services";
import Contact from "./Contact";
import Registration from "./Registration";
import LoginForm from "./LoginForm";
import Adminpanel from "./Adminpanel";
import BookingApp from "./BookingApp";
import ViewAppointment from "./ViewAppointment";
import CancelAppointment from "./CancelAppointment";
import UpdateAppointment from "./UpdateAppointment";
import AddTechnician from "./AddTechnician";
import ViewTechnician from "./ViewTechnician";
import ViewUser from "./ViewUser";
import AddGarageService from "./AddGarageService";
import ViewGarageService from "./ViewGarageService";
import DeleteTechnician from "./DeleteTechnician";
import DeleteGarageService from "./DeleteGarageService";
import DeleteUser from "./DeleteUser";
import UpdateTechnician from "./UpdateTechnician";
import UpdateGarageService from "./UpdateGarageService";
import UpdateUser from "./UpdateUser";
import AddSparePart from "./AddSparePart";
import ViewSparePart from "./ViewSparePart";
import DeleteSparePart from "./DeleteSparePart";
import UpdateSparePart from "./UpdateSparePart";
import GenerateReceipt from "./GenerateReceipt";
import ViewReceipt from "./ViewReceipt";
import DeleteReceipt from "./DeleteReceipt";
import UpdateReceipt from "./UpdateReceipt";
import Payment from "./Payment";
import CustomerPanel from "./CustomerPanel";
import CustomerViewAppointment from "./CustomerViewAppointment";
import ViewCustomerReceipt from "./ViewCustomerReceipt";
import UpdateCustomerAppointment from "./UpdateCustomerAppointment";
import CancelCustomerAppointment from "./CancelCustomerAppointment";
import History from "./History";
import UserHistory from "./UserHistory";



let NavBar = () => {
  return (
    <>
      <BrowserRouter>
        <nav className="navbar navbar-expand-lg bg-dark">
          <div className="container-fluid">
            <NavLink className="navbar-brand text-white" to="/">
              RMOTORS
            </NavLink>
            <button className="navbar-toggler" type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNavAltMarkup"
              aria-controls="navbarNavAltMarkup"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
              
            </button>
            <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
              <div className="navbar-nav">
                <NavLink to="/" className="nav-link text-white"> Home</NavLink>
                <NavLink to="/about" className="nav-link text-white">About</NavLink>
                <NavLink to="/services" className="nav-link text-white">Services</NavLink>
                <NavLink to="/contact" className="nav-link text-white">Contact</NavLink>
                <NavLink to="/register" className="nav-link text-white">Sign</NavLink>
                <NavLink to="/login" className="nav-link text-white">Login </NavLink>
                <NavLink to="/verified" className="nav-link text-white"></NavLink>
                
                
              </div>
            </div>
            <a href="https://wa.me/qr/VC5LEVH3ICUZG1" target="_blank" rel="noopener noreferrer"><i className="fa-brands fa-whatsapp text-white ms-3"></i></a>
            <a href="https://www.instagram.com/_rushikesh_2406/" target="_blank" rel="noopener noreferrer"><i className="fa-brands fa-instagram text-white ms-3"></i></a>
            <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer"><i className="fa-brands fa-square-facebook text-white ms-3"></i></a>
           
            
          </div>
        </nav>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/register" element={<Registration />} />
          <Route path="/login/" element={<LoginForm />} />
          <Route path="/verified"element={<Adminpanel />}/>
          <Route path="/customerPanel"element={<CustomerPanel />}/>
          
          <Route path="/viewUsers" element={<ViewUser/>} />
          <Route path="/deleteUsers/:uid" element={<DeleteUser/>} />
          <Route path="/updateUsers/:uid" element={<UpdateUser/>} />


          <Route path="/bookAppointment" element={<BookingApp />} />
          <Route path="/viewAppointment" element={<ViewAppointment />} />
          <Route path="/viewCustomerAppointment" element={<CustomerViewAppointment />} />
          
          <Route path="/cancelAppointment/:apid" element={<CancelAppointment />} />
          <Route path="/cancelAppointment/:apid" element={<CancelAppointment />} />
          <Route path="/cancelCustomerAppointment/:apid" element={<CancelCustomerAppointment />} />
          <Route path="/updateAppointment/:apid" element={< UpdateAppointment />} />
          <Route path="/updateCustomerAppointment/:apid" element={< UpdateCustomerAppointment />} />
          

          <Route path="/addTechnician" element={<AddTechnician/>} />
          <Route path="/viewTechnician" element={<ViewTechnician />} />
          <Route path="/deleteTechnician/:tid" element={<DeleteTechnician />} />
          <Route path="/updateTechnician/:tid" element={<UpdateTechnician />} />


          <Route path="/addServices" element={<AddGarageService/>} />
          <Route path="/viewServices" element={<ViewGarageService />} />
          <Route path="/deleteServices/:svid" element={<DeleteGarageService />} />
          <Route path="/updateServices/:svid" element={<UpdateGarageService />} />


          <Route path="/addSpareparts" element={<AddSparePart/>} />
          <Route path="/viewSpareparts" element={<ViewSparePart/>} />
          <Route path="/deleteSpareparts/:spid" element={<DeleteSparePart/>} />
          <Route path="/updateSpareparts/:spid" element={<UpdateSparePart/>} />


          <Route path="/generatereceipt" element={<GenerateReceipt/>} />
          <Route path="/viewreceipt" element={<ViewReceipt/>} />
          <Route path="/viewCustomerReceipt" element={<ViewCustomerReceipt/>} />
          <Route path="/deletereceipt/:apid" element={<DeleteReceipt/>} />
          <Route path="/updatereceipt/:apid" element={<UpdateReceipt/>} />
          
          <Route path="/payment" element={<Payment/>} />
          <Route path="/history" element={<History/>} />
          <Route path="/userHistory" element={<UserHistory/>} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default NavBar;


// import React from "react";
// import "bootstrap/dist/css/bootstrap.min.css";
// import { BrowserRouter, Routes, Route, NavLink } from "react-router-dom";
// import { AuthProvider } from "./context/AuthContext";
// import { ProtectedRoute } from "./components/ProtectedRoute";

// import React from "react";
// import "bootstrap/dist/css/bootstrap.min.css";
// import { BrowserRouter, Routes, Route, NavLink,Link } from "react-router-dom";
// import { AuthProvider } from "./AuthContext ";
// import { ProtectedRoute } from "./ProtectedRoute ";
// import Home from "./Home";
// import About from "./About";
// import Services from "./Services";
// import Contact from "./Contact";
// import Registration from "./Registration";
// import LoginForm from "./LoginForm";
// import Adminpanel from "./Adminpanel";
// import BookingApp from "./BookingApp";
// import ViewAppointment from "./ViewAppointment";
// import CancelAppointment from "./CancelAppointment";
// import UpdateAppointment from "./UpdateAppointment";
// import AddTechnician from "./AddTechnician";
// import ViewTechnician from "./ViewTechnician";
// import ViewUser from "./ViewUser";
// import AddGarageService from "./AddGarageService";
// import ViewGarageService from "./ViewGarageService";
// import DeleteTechnician from "./DeleteTechnician";
// import DeleteGarageService from "./DeleteGarageService";
// import DeleteUser from "./DeleteUser";
// import UpdateTechnician from "./UpdateTechnician";
// import UpdateGarageService from "./UpdateGarageService";
// import UpdateUser from "./UpdateUser";
// import AddSparePart from "./AddSparePart";
// import ViewSparePart from "./ViewSparePart";
// import DeleteSparePart from "./DeleteSparePart";
// import UpdateSparePart from "./UpdateSparePart";
// import GenerateReceipt from "./GenerateReceipt";
// import ViewReceipt from "./ViewReceipt";
// import DeleteReceipt from "./DeleteReceipt";
// import UpdateReceipt from "./UpdateReceipt";
// import Payment from "./Payment";
// import CustomerPanel from "./CustomerPanel";
// import CustomerViewAppointment from "./CustomerViewAppointment";
// import ViewCustomerReceipt from "./ViewCustomerReceipt";
// import UpdateCustomerAppointment from "./UpdateCustomerAppointment";
// import CancelCustomerAppointment from "./CancelCustomerAppointment";
// import History from "./History";
// import UserHistory from "./UserHistory";


// let NavBar = () => {
//   return (
//     <AuthProvider>
//       <BrowserRouter>
//         <nav className="navbar navbar-expand-lg bg-dark">
//           <div className="container-fluid">
//             <NavLink className="navbar-brand text-white" to="/">RMOTORS</NavLink>
//             <button className="navbar-toggler" type="button"
//               data-bs-toggle="collapse"
//               data-bs-target="#navbarNavAltMarkup"
//               aria-controls="navbarNavAltMarkup"
//               aria-expanded="false"
//               aria-label="Toggle navigation"
//             >
//               <span className="navbar-toggler-icon"></span>
//             </button>
//             <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
//               <div className="navbar-nav">
//                 <NavLink to="/" className="nav-link text-white"> Home</NavLink>
//                 <NavLink to="/about" className="nav-link text-white">About</NavLink>
//                 <NavLink to="/services" className="nav-link text-white">Services</NavLink>
//                 <NavLink to="/contact" className="nav-link text-white">Contact</NavLink>
//                 <NavLink to="/register" className="nav-link text-white">Sign</NavLink>
//                 <NavLink to="/login" className="nav-link text-white">Login </NavLink>
//                 <NavLink to="/verified" className="nav-link text-white"></NavLink>
//               </div>
//             </div>
//             <a href="https://wa.me/qr/VC5LEVH3ICUZG1" target="_blank" rel="noopener noreferrer"><i className="fa-brands fa-whatsapp text-white ms-3"></i></a>
//             <a href="https://www.instagram.com/_rushikesh_2406/" target="_blank" rel="noopener noreferrer"><i className="fa-brands fa-instagram text-white ms-3"></i></a>
//             <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer"><i className="fa-brands fa-square-facebook text-white ms-3"></i></a>
//           </div>
//         </nav>

//         <Routes>
//           <Route path="/" element={<Home />} />
//           <Route path="/about" element={<About />} />
//           <Route path="/services" element={<Services />} />
//           <Route path="/contact" element={<Contact />} />
//           <Route path="/register" element={<Registration />} />
//           <Route path="/login/" element={<LoginForm />} />

//           <Route path="/verified" element={<ProtectedRoute requiredRole="ADMIN"><Adminpanel /></ProtectedRoute>} />
//           <Route path="/customerPanel" element={<ProtectedRoute requiredRole="CUSTOMER"><CustomerPanel /></ProtectedRoute>} />

//           <Route path="/viewUsers" element={<ProtectedRoute requiredRole="ADMIN"><ViewUser /></ProtectedRoute>} />
//           <Route path="/deleteUsers/:uid" element={<ProtectedRoute requiredRole="ADMIN"><DeleteUser /></ProtectedRoute>} />
//           <Route path="/updateUsers/:uid" element={<ProtectedRoute requiredRole="ADMIN"><UpdateUser /></ProtectedRoute>} />

//           <Route path="/bookAppointment" element={<BookingApp />} />
//           <Route path="/viewAppointment" element={<ViewAppointment />} />
//           <Route path="/viewCustomerAppointment" element={<ProtectedRoute requiredRole="CUSTOMER"><CustomerViewAppointment /></ProtectedRoute>} />

//           <Route path="/cancelAppointment/:apid" element={<CancelAppointment />} />
//           <Route path="/cancelCustomerAppointment/:apid" element={<ProtectedRoute requiredRole="CUSTOMER"><CancelCustomerAppointment /></ProtectedRoute>} />
//           <Route path="/updateAppointment/:apid" element={<UpdateAppointment />} />
//           <Route path="/updateCustomerAppointment/:apid" element={<ProtectedRoute requiredRole="CUSTOMER"><UpdateCustomerAppointment /></ProtectedRoute>} />

//           <Route path="/addTechnician" element={<ProtectedRoute requiredRole="ADMIN"><AddTechnician /></ProtectedRoute>} />
//           <Route path="/viewTechnician" element={<ProtectedRoute requiredRole="ADMIN"><ViewTechnician /></ProtectedRoute>} />
//           <Route path="/deleteTechnician/:tid" element={<ProtectedRoute requiredRole="ADMIN"><DeleteTechnician /></ProtectedRoute>} />
//           <Route path="/updateTechnician/:tid" element={<ProtectedRoute requiredRole="ADMIN"><UpdateTechnician /></ProtectedRoute>} />

//           <Route path="/addServices" element={<ProtectedRoute requiredRole="ADMIN"><AddGarageService /></ProtectedRoute>} />
//           <Route path="/viewServices" element={<ProtectedRoute requiredRole="ADMIN"><ViewGarageService /></ProtectedRoute>} />
//           <Route path="/deleteServices/:svid" element={<ProtectedRoute requiredRole="ADMIN"><DeleteGarageService /></ProtectedRoute>} />
//           <Route path="/updateServices/:svid" element={<ProtectedRoute requiredRole="ADMIN"><UpdateGarageService /></ProtectedRoute>} />

//           <Route path="/addSpareparts" element={<ProtectedRoute requiredRole="ADMIN"><AddSparePart /></ProtectedRoute>} />
//           <Route path="/viewSpareparts" element={<ProtectedRoute requiredRole="ADMIN"><ViewSparePart /></ProtectedRoute>} />
//           <Route path="/deleteSpareparts/:spid" element={<ProtectedRoute requiredRole="ADMIN"><DeleteSparePart /></ProtectedRoute>} />
//           <Route path="/updateSpareparts/:spid" element={<ProtectedRoute requiredRole="ADMIN"><UpdateSparePart /></ProtectedRoute>} />

//           <Route path="/generatereceipt" element={<ProtectedRoute requiredRole="ADMIN"><GenerateReceipt /></ProtectedRoute>} />
//           <Route path="/viewreceipt" element={<ProtectedRoute requiredRole="ADMIN"><ViewReceipt /></ProtectedRoute>} />
//           <Route path="/viewCustomerReceipt" element={<ProtectedRoute requiredRole="CUSTOMER"><ViewCustomerReceipt /></ProtectedRoute>} />
//           <Route path="/deletereceipt/:apid" element={<ProtectedRoute requiredRole="ADMIN"><DeleteReceipt /></ProtectedRoute>} />
//           <Route path="/updatereceipt/:apid" element={<ProtectedRoute requiredRole="ADMIN"><UpdateReceipt /></ProtectedRoute>} />

//           <Route path="/payment" element={<ProtectedRoute><Payment /></ProtectedRoute>} />
//           <Route path="/history" element={<ProtectedRoute requiredRole="ADMIN"><History /></ProtectedRoute>} />
//           <Route path="/userHistory" element={<ProtectedRoute requiredRole="CUSTOMER"><UserHistory /></ProtectedRoute>} />
//         </Routes>
//       </BrowserRouter>
//     </AuthProvider>
//   );
// };

// export default NavBar;




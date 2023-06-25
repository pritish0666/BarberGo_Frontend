import "./App.css";
import { Routes, Route } from "react-router-dom";

import { Home } from "./pages/Home";
import { Navbar } from "./pages/Navbar";
import { SalonLogin } from "./pages/Salonlogin";
import { Addslot } from "./pages/addslots";
import { Customerlogin } from "./pages/Customerlogin";
import { SaloonNames } from "./pages/Choosesalons";
import { Packages } from "./pages/Packages";
import { Bookslot } from "./pages/Bookslot";
import { Payment } from "./pages/Payment";
import { paymentHandler } from "./pages/Payment";

function App() {
  return (
    <div>
      <Navbar></Navbar>

      <Routes>
        <Route path="/" Component={Home} />
        <Route path="/salonlogin" Component={SalonLogin} />
        <Route path="/addslots" Component={Addslot} />
        <Route path="/customerlogin" Component={Customerlogin} />
        <Route path="/salons" Component={SaloonNames} />
        <Route path="/packages" Component={Packages} />
        <Route path="/bookslot" Component={Bookslot} />
        <Route path="/payment" Component={Payment} />
      </Routes>
    </div>
  );
}

export default App;

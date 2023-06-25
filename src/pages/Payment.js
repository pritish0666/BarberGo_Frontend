import React, { useState, useEffect } from "react";
import axios from "axios";
// import { useHistory } from "react-router-dom";

export const Payment = () => {
  //   const history = useHistory();

  //   useEffect(() => {
  //     // Assuming you receive a success response from Razorpay API
  //     // You can add this code after receiving the successful payment response

  //     // Redirect to the confirmation page
  //     history.push("/confirmation");
  //   }, [history]);

  //   return (
  //     <div>
  //       <h1>Payment Confirmation Page</h1>
  //       <h1>Thank You for Booking with BarberGo</h1>
  //       <p>Hope Your hair grows real fast 😜</p>
  //     </div>
  //   );
  const [orderId, setOrderId] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("http://localhost:5001/order");
        const { data } = response;
        setOrderId(data.id);
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, []);

  const handlePaymentCapture = async (paymentId) => {
    try {
      const response = await axios.post(
        `http://localhost:5001/capture/${paymentId}`,
        {}
      );
      console.log(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  //   const handlePaymentSuccess = () => {
  //     // Perform any necessary actions after successful payment

  //     // Navigate to the confirmation page
  //     history.push('/confirmation');
  //   };

  const handlePayment = () => {
    if (orderId) {
      const options = {
        key: "rzp_test_JHCkqkqrpXeNUO",
        name: "Your App Name",
        description: "Some Description",
        order_id: orderId,
        handler: async (response) => {
          const paymentId = response.razorpay_payment_id;
          handlePaymentCapture(paymentId);
        },
        theme: {
          color: "#686CFD",
        },
      };

      const rzp1 = new window.Razorpay(options);
      rzp1.open();
    }
  };

  return (
    <div className="App123">
      <header className="App-header">
        <h1>Pay ₹200</h1>
        <br />
        <button id="paynow" onClick={handlePayment}>
          Pay now
        </button>
      </header>
    </div>
  );
};

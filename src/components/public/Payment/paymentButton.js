import axios from "axios";
import { getBaseUrl } from "../../../config/utility";

const PaymentButton = ({emailsCounts,send,validation}) => {
  const handlePayment = async () => {
    const res = validation();
    if(!res){
      return;
    }
    
    let amount = emailsCounts * 100; // Example: ₹100 per email
    
    try {
      // 1. Create order on backend
      const { data } = await axios.post(getBaseUrl() + "payment/create-order", {
        amount: amount,
        currency: "INR",
      });

      // 2. Open Razorpay Checkout
      const options = {
        key: "rzp_test_RMFGIp2dEg9PZg", // from Razorpay Dashboard
        amount: data.amount,
        currency: data.currency,
        name: "Cuvette Pvt Ltd",
        description: "Test Transaction",
        order_id: data.id, // from backend
        handler: async function (response) {
          // 3. Verify payment

          const res = await axios.post(
            getBaseUrl() + "payment/verify-payment",
            response
          );

          if (res.data.status) {
            send();
            alert("Payment Successful!");
          } else {
            alert("Payment Verification Failed");
          }
        },
        prefill: {
          name: "Your Name",
          email: "youremail@example.com",
          contact: "9999999999",
        },
        theme: { color: "#3399cc" },
        method: {
          upi: true, // ✅ Enable UPI
          card: true,
          netbanking: true,
          wallet: true,
        },
      };

      const rzp = new window.Razorpay(options);
      rzp.open();
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <button className="button" onClick={handlePayment}>
      Proceed To Pay
    </button>
  );
};

export default PaymentButton;

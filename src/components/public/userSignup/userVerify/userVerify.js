import InputBox from "../../../common/Input/input";
import { BiSolidPhone } from "react-icons/bi";
import { AiOutlineMail } from "react-icons/ai";
import "./userVerify.css";
import { useState } from "react";
import { userVerify } from "../../../../actions/UserAction";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { getBaseUrl } from "../../../../config/utility";
import Store from "../../../../store/Store";
import Loader from "../../../common/Loader/Loader";

function UserVerification() {
  const [isSubmit, setIsSubmit] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [mobileOTP, setMobileOTP] = useState("");
  const [emailOTP, setEmailOTP] = useState("");

  const dispatch = useDispatch();
  const nevigate = useNavigate();

  const userResponse = useSelector((Store) => Store.user);

  const handleVerification = () => {
    setIsSubmit(true);
    if (mobileOTP.length === 6 || emailOTP.length === 6) {
      let verificationObj = {
        mobileOTP: mobileOTP,
        emailOTP: emailOTP,
        otpId: userResponse.otpResponse.data.otpId,
      };
      console.log(verificationObj);
      setIsLoading(true);
      dispatch(
        userVerify(getBaseUrl() + "user/verifyOTP", verificationObj)
      ).then(() => {
        setIsLoading(false);
        nevigate("/login");
      });
    }
  };

  return (
    <>
      {isLoading && <Loader />}
      <div className="wraper">
        <div className="lorem-con">
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ex
            accusantium magni eveniet laboriosam omnis, numquam ipsam reiciendis
            illo dolor perspiciatis quas tempora libero, consequuntur at maxime
            delectus blanditiis eius in?
          </p>
        </div>
        <div className="verification-con">
          <h3>Sign Up</h3>
          <p style={{ margin: "20px" }}>Lorem ipsum is simply dummy text</p>
          <InputBox
            icon={<AiOutlineMail />}
            placeholder="Email OTP"
            type="number"
            value={emailOTP}
            onChange={setEmailOTP}
            isSubmit={isSubmit}
            required={true}
          />
          {/* <div className="btn-con">
            <button className="btn" onClick={handleVerification}>Verify</button>
          </div> */}
          <InputBox
            icon={<BiSolidPhone />}
            placeholder="Mobile OTP"
            type="number"
            value={mobileOTP}
            onChange={setMobileOTP}
            isSubmit={isSubmit}
            required={true}
          />
          <div className="btn-con">
            <button className="btn" onClick={handleVerification}>
              Verify
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default UserVerification;

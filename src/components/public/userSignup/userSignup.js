import { BiUser } from "react-icons/bi";
import { BiSolidPhone } from "react-icons/bi";
import { AiOutlineMail } from "react-icons/ai";
import { AiOutlineTeam } from "react-icons/ai";
import { AiTwotoneLock } from "react-icons/ai";
import InputBox from "../../common/Input/input";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import {
  validateEmail,
  validatePassword,
  validatePhoneNo,
} from "../../common/Verification/verification";
import "./userSignup.css";
import { useState, useEffect } from "react";
import { createUser,setVerification } from "../../../actions/UserAction";
import { getBaseUrl } from "../../../config/utility";
import Error from "../../common/error/Error";
import Toast from "../../common/toast/Toast";
import Loader from "../../common/Loader/Loader";

function SignUp() {
  const [isSubmit, setIsSubmit] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [showError, setShowError] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");
  const [name, setName] = useState("");
  const [phoneNo, setPhoneNo] = useState("");
  const [companyName, setComapanyName] = useState("");
  const [employeeSize, setEmployeeSize] = useState("");
  const [companyEmail, setCompanyEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const [isVisible, setIsVisible] = useState(true);
  const [toastVisible, setToastVisible] = useState(true);

  const dispatch = useDispatch();
  const nevigate = useNavigate();

  useEffect(() => {
    if (errorMsg) {
      setToastVisible(true);
    }
  }, [errorMsg]);

  const handleSigup = () => {
    let newUserObj = {
      name: name,
      phoneNumber: phoneNo,
      companyName: companyName,
      employeeSize: employeeSize,
      companyEmail: companyEmail,
      password: password,
      confirmPassword: confirmPassword,
    };

    if (
      name &&
      phoneNo &&
      companyName &&
      employeeSize &&
      companyEmail &&
      password &&
      confirmPassword
    ) {
      if (validateEmail(companyEmail)) {
        if (validatePhoneNo(phoneNo)) {
          if (password === confirmPassword) {
            if (validatePassword(password)) {
              setIsLoading(true);
              dispatch(
                createUser(getBaseUrl() + "user/createUser", newUserObj)
              ).then(() => {
                setIsLoading(false);
                dispatch(setVerification(true));
                nevigate("/verification");
              });
            } else {
              setShowError(true);
              setErrorMsg(
                "Password must be 8 characters including one capital alphabate and one sepecial character."
              );
            }
          } else {
            setShowError(true);
            setErrorMsg("Password & Confirm Password Mismatch");
          }
        } else {
          setShowError(true);
          setErrorMsg("Invalid Phone No");
        }
      } else {
        setErrorMsg("Invalid Company Email");
      }
    } else {
      setIsSubmit(true);
    }
  };

  const closeToast = () => {
    setToastVisible(false); // Hide the toast after the duration
    setErrorMsg("");
  };
  console.log("ShowError", showError);
  console.log("IsVisible", isVisible);

  return (
    <>
      {isLoading && <Loader />}
      {showError && (
        <Toast
          type="error"
          message={errorMsg}
          visible={toastVisible}
          onClose={closeToast}
          duration={2000}
        />
      )}
      <div className="wraper">
        <div className="lorem-con">
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ex
            accusantium magni eveniet laboriosam omnis, numquam ipsam reiciendis
            illo dolor perspiciatis quas tempora libero, consequuntur at maxime
            delectus blanditiis eius in?
          </p>
        </div>

        <div className="signup">
          <h3>Sign Up</h3>
          <p className="lorem-txt">Lorem ipsum is simply dummy text</p>
          <InputBox
            icon={<BiUser />}
            placeholder="Name"
            type="text"
            value={name}
            onChange={setName}
            required={true}
            isSubmit={isSubmit}
          />
          <InputBox
            icon={<BiSolidPhone />}
            placeholder="Phone no."
            type="number"
            value={phoneNo}
            onChange={setPhoneNo}
            required={true}
            isSubmit={isSubmit}
          />
          <InputBox
            icon={<BiUser />}
            placeholder="Company Name"
            type="text"
            value={companyName}
            onChange={setComapanyName}
            required={true}
            isSubmit={isSubmit}
          />
          <InputBox
            icon={<AiOutlineTeam />}
            placeholder="Employee Size"
            type="number"
            value={employeeSize}
            onChange={setEmployeeSize}
            required={true}
            isSubmit={isSubmit}
          />
          <InputBox
            icon={<AiOutlineMail />}
            placeholder="Company Email"
            type="email"
            value={companyEmail}
            onChange={setCompanyEmail}
            required={true}
            isSubmit={isSubmit}
          />
          <InputBox
            icon={<AiTwotoneLock />}
            placeholder="Password"
            type="password"
            value={password}
            onChange={setPassword}
            required={true}
            isSubmit={isSubmit}
          />
          <InputBox
            icon={<AiTwotoneLock />}
            placeholder="Confirm Password"
            type="password"
            value={confirmPassword}
            onChange={setConfirmPassword}
            required={true}
            isSubmit={isSubmit}
          />
          <p style={{textAlign:"center", marginTop:"10px"}}>By clicking on proceed you will accepting our</p>
          <a href="#" style={{ textDecoration: "none",textAlign:"center",marginBottom:"20px" }}>
            term<span style={{ color: "black",textAlign:"center" }}> & </span>condition
          </a>

          <div className="btn-con">
            <button className="btn" onClick={handleSigup}>
              Proceed
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default SignUp;

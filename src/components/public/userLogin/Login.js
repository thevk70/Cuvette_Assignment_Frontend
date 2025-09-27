import { AiOutlineMail } from "react-icons/ai";
import { AiTwotoneLock } from "react-icons/ai";
import InputBox from "../../common/Input/input";
import "./Login.css";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { loginUser, setLoggedIn } from "../../../actions/UserAction";
import { getBaseUrl } from "../../../config/utility";
import Loader from "../../common/Loader/Loader";
import LoginImage from "../../../../src/assets/login.png";

function Login() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [isSubmit, setIsubmit] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [companyEmail, setComapanyEmail] = useState("");
  const [password, setPassword] = useState("");

   const response = useSelector((store) => store.user);

  const handleLogin = (response) => {
    if (companyEmail && password) {
      let loginObj = {
        companyEmail: companyEmail,
        password: password,
      };
      setIsLoading(true);
      dispatch(loginUser(getBaseUrl() + "user/loginUser", loginObj)).then(
        (response) => {
          if (response?.token) {
            sessionStorage.setItem("token", response.token);
            dispatch(setLoggedIn(true));
            navigate("/jobForm");
          }
          setIsLoading(false);  
        }
      );
    } else {
      setIsubmit(true);
    }
  };

  return (
    <>
      {isLoading && <Loader />}
      <div className="login-wraper">
        <div className="lorem-con">
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ex
            accusantium magni eveniet laboriosam omnis, numquam ipsam reiciendis
            illo dolor perspiciatis quas tempora libero, consequuntur at maxime
            delectus blanditiis eius in?
          </p>
          {/* <img src={LoginImage} alt="login" className="login-image" /> */}
        </div>
        <div className="loginin">
          <h3>Log In</h3>
          <p className="lorem-txt">Lorem ipsum is simply dummy text</p>
          <InputBox
            icon={<AiOutlineMail />}
            placeholder="Company Email"
            type="email"
            value={companyEmail}
            onChange={setComapanyEmail}
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
          <div className="btn-con">
            <button className="btn" onClick={() => handleLogin(response)}>
              LogIn
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Login;

import { AiOutlineMail } from "react-icons/ai";
import { AiTwotoneLock } from "react-icons/ai";
import InputBox from "../../common/Input/input";
import "./Login.css";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { loginUser } from "../../../actions/UserAction";
import { getBaseUrl } from "../../../config/utility";
import Loader from "../../common/Loader/Loader";

function Login() {
  const dispatch = useDispatch();
  const nevigate = useNavigate();
  const [isSubmit, setIsubmit] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [companyEmail, setComapanyEmail] = useState("");
  const [password, setPassword] = useState("");

  const response = useSelector(Store => Store.user);

  useEffect(() => {
    const token = sessionStorage.getItem("token");
    if (token) {
      nevigate("/jobForm");
    }
  },)

  const handleLogin = () => {
    if (companyEmail && password) {
      let loginObj = {
        companyEmail: companyEmail,
        password: password,
      };
      setIsLoading(true);
      dispatch(loginUser(getBaseUrl() + "user/loginUser", loginObj)).then(
        () => {
          sessionStorage.setItem("token",response.token);
          setIsLoading(false);
          nevigate("/jobForm");
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
            <button className="btn" onClick={handleLogin}>
              LogIn
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Login;

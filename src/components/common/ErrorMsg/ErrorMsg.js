import { AiFillWarning } from "react-icons/ai";
function ErrorMsg(props) {
    return (
      <>
        {!props.valid && (
          <span style={{ color: "#d8000c", fontSize: "1rem", marginRight:"auto", paddingLeft:"30px"}}>
            {props.msg}
            <AiFillWarning />
          </span>
        )}
      </>
    );
  }
  
  export default ErrorMsg;
import "./Loader.css";

function Loader() {
  return (
    <>
    {/* <div classNameName="wraper-loader">
      <div className="loader">
        <svg className="circular" viewbox="25 25 50 50">
          <circle
            className="path"
            cx="50"
            cy="50"
            r="20"
            fill="none"
            stroke-width="2"
            stroke-miterlimit="10"
          ></circle>
        </svg>
      </div>
      </div> */}

<div className="loader-overlay">
  <div className="loader">
    <svg className="circular" viewBox="25 25 50 50">
      <circle
        className="path"
        cx="50"
        cy="50"
        r="20"
        fill="none"
        strokeWidth="2"
        strokeMiterlimit="10"
      ></circle>
    </svg>
  </div>
</div>

    </>
  );
}

export default Loader;

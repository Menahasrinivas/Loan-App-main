import React from "react";
// Import custom styles if needed
const Spinner = () => {
  return (
    <>
      <div className="d-flex justify-content-center align-items-center full-height">
        <div className="spinner-border" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
      </div>
    </>
  );
};

export default Spinner;

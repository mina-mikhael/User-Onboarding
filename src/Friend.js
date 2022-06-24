import React from "react";

function Friend({ details }) {
  if (!details) {
    return <h3>Loading</h3>;
  }

  return (
    <div className="friend container">
      <div className="image-container">
        {" "}
        <img src={details.avatar} alt="friend" />
      </div>
      <h3>
        {details.last_name}, {details.first_name}
      </h3>
      <p>Email: {details.email}</p>
    </div>
  );
}

export default Friend;

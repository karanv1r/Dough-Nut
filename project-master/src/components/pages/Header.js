import React from "react";
function Header(props) {
  return (
    <nav className="navbar navbar-dark bg-primary">
      <div className="row col-12 col-lg-4 mx-auto d-flex justify-content-center text-white">
        <span className="h3">{props.name}</span>
      </div>
    </nav>
  );
}
export default Header;

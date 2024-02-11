import { LOGO_URL } from "../utils/constants";
import { useState } from "react";


const Header = () => {
  const [btnNameReact, setBtnNameReact] = useState("Login");
  console.log("Header render");
    return (
      <div className="header">
        <div className="logo-container">
          <img className="logo" src="https://pngfre.com/wp-content/uploads/Burger-45.png" />
        </div>
        <div className="nav-items">
            <ul>
              <li>Home</li>
              <li>About Us</li>
              <li>Contact Us</li>
              <li>Cart</li>
              <button 
              className="login" 
              onClick={() => {
                btnNameReact === "Login"
                ? setBtnNameReact("Logout")
                : setBtnNameReact("Logout");
              }}
              >
                {btnNameReact}
              </button>
            </ul>
        </div>
      </div>
    );
  };

  export default Header;
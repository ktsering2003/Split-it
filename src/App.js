import React from "react";
import "./App.css";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Link,
  useNavigate,
} from "react-router-dom";
import Home from "./components/Home";
import SignIn from "./components/SignIn";
import Cart from "./components/Cart";
import CreateAccount from "./components/CreateAccount";
import SplitIt from "./components/SplitIt";

function App() {
  const navigate = useNavigate();

  function handleLogo(event) {
    navigate("/");
  }
  return (
    <>
      <div className="App">
        {/* <Home /> */}
        <Routes>
          <Route path="*" element={<Home />} />
          <Route path="signin" element={<SignIn />} />
          <Route path="/createaccount" element={<CreateAccount />} />
          <Route path="/splitit" element={<SplitIt />} />
          <Route path="cart" element={<Cart />} />
        </Routes>
      </div>
    </>
  );
}

export default App;

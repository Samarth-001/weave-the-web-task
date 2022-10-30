import logo from "./logo.svg";
import "./App.css";

import Navbar from "./components/navbar";
import Eventpage from "./components/Eventpage.js";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <div style={{margin:"0px 50px"}}>
        <Navbar />
        <div style={{margin:"0px 50px"}}>
          <Eventpage />
        </div>
      </div>
      <Footer />
    </>
  );
}

export default App;

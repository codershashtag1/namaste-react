import  React from "react";
import ReactDOM from 'react-dom/client'



/**
 * Header
 * - Logo
 * - Search
 * - Contact 
 * - Cart
 * Body
 * - Title
 * - Description
 * - Restaurant Container
 * --- Restaurant Cart
 * 
 */


const Header = () => {
  return (
    <div className="header">
      <div className="logo-container">
        <img className="logo" src="https://i.pinimg.com/originals/b3/8a/a1/b38aa1b21050b0e769a97eb751d12829.png"></img>
      </div>
      <div className="nav-items">
        <ul>
          <li>Search</li>
          <li>Home</li>
          <li>Help</li>
          <li>Cart</li>
        </ul>
      </div>
    </div>
  )
}


const RestroContainer = () => {
  const biryaniImg = require("/images/Biryani.png");
  return (
    <div className="restro-container">
      <div className="restro-cart">
        <img className="img" src={biryaniImg} alt="Example"></img>
      </div>
      <h3>Charcoal Eats - Biryani & Beyond</h3>
      <h4>4.1</h4>
      <h4>Biryani, Kebabs, Hyderabadi, North Kalyan</h4>
    </div>
  );
};

const MainBody = () => {
  
  return (
    <div className="main-container">
      <div className="title">
        <h1>Biryani</h1>
        <h3>
          Taste these delectable classics, delectable biryanis to make your day.
        </h3>
      </div>
      <RestroContainer />
    </div>
  );
}


const AppLayout = () => {
  return (
    <div className="app-layout">
      <Header />
      <MainBody />
    </div>
  );
}

let root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout/>);
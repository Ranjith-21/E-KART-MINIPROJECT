import "./App.scss";
import Corosal from './Corosal'
import NavBar from './NavBar'
import Cards from "./Cards";
import OrderDashBoard from "./../Components/OrderDashBoard"

function TextLinkExample({ emailData, getOrderCount, orderCount }) {
  return (
    <div>
      <NavBar emailData={emailData} />
      <Corosal />
      <Cards getOrderCount={getOrderCount} />
      <OrderDashBoard orderCount={orderCount} />
      <div style={{display: 'flex', justifyContent: 'center'}}>
      <img src="https://images-na.ssl-images-amazon.com/images/I/41CpVqIJ4rL._SR600%2C315_PIWhiteStrip%2CBottomLeft%2C0%2C35_SCLZZZZZZZ_FMpng_BG255%2C255%2C255.jpg" alt='' />
      </div>
    </div>
  );
}

export default TextLinkExample;


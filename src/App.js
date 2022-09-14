import './App.css';
import Login from './Components/Login';
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Routes,Route} from "react-router-dom";
import Home from './Components/Home';
import { useState } from 'react';

function App() {
  const [emailData, setemailData] = useState('')
  const [orderCount, setorderCount] = useState(0)
  let getEmailData = (data) =>
  {
    setemailData(data)
  }
  let getOrderCount=(data)=>
  {
    setorderCount(data)
  }
  console.log('emailDatafromApp',emailData);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login getEmailData={getEmailData} />} />
        <Route
          path="/home"
          element={
            <Home
              emailData={emailData}
              getOrderCount={getOrderCount}
              orderCount={orderCount}
            />
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

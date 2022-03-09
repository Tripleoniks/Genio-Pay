
import {BrowserRouter as Router,Routes,Route,Link,BrowserRouter} from "react-router-dom";
import './App.scss';
import Dashboard from "./Pages/dashboard/dashboard";
import Wallet from "./Pages/wallet/wallet";



function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <div className="row">
          <div className="left">
          </div>
          <div className="right">
            <div className="navbar">

            </div>
              <Routes>
              <Route path="/dashboard" element={<Dashboard/>}/>
              <Route path="/wallet" element={<Wallet/>}/>
              </Routes>
          </div>
        </div>
      </div>
     
        </BrowserRouter>
  
  );
}

export default App;

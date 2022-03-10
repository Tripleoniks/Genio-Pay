
import {BrowserRouter,Switch,Route} from "react-router-dom";
import './App.scss';
import Dashboard from "./Pages/dashboard/dashboard";
import Wallet from "./Pages/wallet/wallet";
import Sidebar from "./componet/sidebar/sidebar";



function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <div className="row">
          <div className="left">
          <Sidebar/>
          </div>
          <div className="right">
            <div className="navbar">
            </div>
              <Switch>
              <Route path="/dashboard" component={Dashboard}/>
              <Route path="/wallet" component={Wallet}/>
              </Switch>
          </div>
        </div>
      </div>
      </BrowserRouter>
  
  );
}

export default App;

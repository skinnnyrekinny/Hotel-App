import './App.css';
import { Router, Switch, Route } from "react-router-dom";
import Cart from "./Cart";
import Payment from "./Payment";
import { HotelProvider } from "./HotelContext";

function App() {
  return (
    <div className="App">
      <HotelProvider>
      <Switch>
          <Route exact path="/" component={Cart}/>
          <Route exact path="/payment" component={Payment}/>
        </Switch>
      </HotelProvider>
    </div>
  );
}

export default App;

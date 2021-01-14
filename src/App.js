import './App.css';

import {WeatherDataProvider} from "./contexts/WeatherContext";
import WeatherSide from "./components/WeatherSide/WeatherSide";
import InfoSide from "./components/InfoSide/InfoSide";


function App() {

  return (
    <WeatherDataProvider>
      <div className="App">
        <div className="titleDiv">
          <span className="headTitle">Weather Boy</span>
        </div>
        <div className="container">
          <WeatherSide />
          <InfoSide />
        </div>
        <span className="footerBy">
          Created by <a href={"https://github.com/kt-sec"}>Kemal Tarhan</a> - 2021
        </span>
      </div>
    </WeatherDataProvider>
  )
};

export default App;

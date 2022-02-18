import "./App.css";
import "bulma/css/bulma.min.css";
import WeatherInfo from "./WeatherInfo";
import Header from "./components/Header";

function App() {
  return (
    <div className="App">
      <Header />
      <WeatherInfo />
    </div>
  );
}

export default App;

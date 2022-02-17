import "./App.css";
import "bulma/css/bulma.min.css";
import WeatherInfo from "./WeatherInfo";
import ErrorBoundary from "./components/ErrorBoundary";
import Header from "./components/Header";

function App() {
  return (
    <div className="App">
      <Header />
      <ErrorBoundary>
        <WeatherInfo />
      </ErrorBoundary>
    </div>
  );
}

export default App;

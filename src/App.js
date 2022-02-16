import "./App.css";
import "bulma/css/bulma.min.css";
import WeatherInfo from "./WeatherInfo";
import ErrorBoundary from "./components/ErrorBoundary";

function App() {
  return (
    <div className="App">
      <ErrorBoundary>
        <WeatherInfo />
      </ErrorBoundary>
    </div>
  );
}

export default App;

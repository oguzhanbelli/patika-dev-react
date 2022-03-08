
import Container from "./components/Container";
import { WeatherProvider } from "./context/WeatherContext";
import { ThemeProvider } from "./context/ThemeContext";
function App() {
  //Apı key  https://api.weatherapi.com/v2/forecast.json?key=783ea8abdc2f4e9ca78110103220703&q=${city}&days=8&aqi=no&alerts=no&lang=tr

  return (
    <ThemeProvider>
      <WeatherProvider>
        <Container></Container>
      </WeatherProvider>
    </ThemeProvider>
  );
}

export default App;

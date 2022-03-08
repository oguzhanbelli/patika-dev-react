import { ThemeProvider } from "./context/ThemeContext";
import { UserProvider } from "./context/UserContext";
import "./App.css";
import Container from "./components/Container";

function App() {
  return (
    <ThemeProvider>
      <UserProvider>
        <Container></Container>
      </UserProvider>
    </ThemeProvider>
  );
}

export default App;
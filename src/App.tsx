import "./App.css";
import { Navbar } from "./components";
import { Home } from "./pages";
import { LayoutContainer } from "./styled-components/layout.styled.component";

function App() {
  return (
    <LayoutContainer>
      <Navbar />
      <Home />
    </LayoutContainer>
  );
}

export default App;

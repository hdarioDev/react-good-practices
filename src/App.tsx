import { Provider } from "react-redux";
import "./App.css";
import { Navbar } from "./components";
import { Home } from "./pages";
import store from "./redux/store";
import { LayoutContainer } from "./styled-components/layout.styled.component";

function App() {
  return (
    <Provider store={store}>
      <LayoutContainer>
        <Navbar />
        <Home />
      </LayoutContainer>
    </Provider>
  );
}

export default App;

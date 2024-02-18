import { BrowserRouter } from "react-router-dom";
import Pages from "./pages/Pages";
import Search from "./components/Search";
import Category from "./components/Category";
import styled from "styled-components";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Search />
      <Category />
      <Pages />
      </BrowserRouter>
    </div>
  );
}

const Logo = styled(Link)`

`

export default App;

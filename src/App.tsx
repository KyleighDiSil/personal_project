import Header from "./components/header";
import styled from "styled-components";
import { BrowserRouter, Outlet, Route, Routes } from "react-router-dom";
import Home from "./pages/home";
import About from "./pages/about";
import Resources from "./pages/resources";
import Wordle from "./pages/wordle";

const Container = styled.div`
  display: flex;
  .App {
    margin-top: 70px;
  }
`;

function App() {
  return (
    <Container>
      <Header />
      <div className="App">
        {/* https://www.youtube.com/watch?v=uEEj2c3_ydg */}
        <Outlet />
      </div>
    </Container>
  );
}

export default App;

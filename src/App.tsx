import "./App.css";
import Header from "./components/header";
import styled from "styled-components";
import { BrowserRouter, Route, Routes } from "react-router-dom";
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
        <BrowserRouter>
          <Routes>
            <Route index element={<Home />} />
            <Route path="about" element={<About />} />
            <Route path="resources" element={<Resources />} />
            <Route path="wordle" element={<Wordle />} />
          </Routes>
        </BrowserRouter>
      </div>
    </Container>
  );
}

export default App;

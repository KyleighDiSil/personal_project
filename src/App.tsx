import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Header from "./components/header";
import styled from "styled-components";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/home";
import Contact from "./pages/contact";
import About from "./pages/about";
import Resources from "./pages/resources";

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
            <Route path="contact" element={<Contact />} />
            <Route path="about" element={<About />} />
            <Route path="resources" element={<Resources />} />
          </Routes>
        </BrowserRouter>
      </div>
    </Container>
  );
}

export default App;

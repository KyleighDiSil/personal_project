import Header from "./components/header";
import styled from "styled-components";
import { BrowserRouter, Outlet, Route, Routes } from "react-router-dom";
import Home from "./pages/home";
import About from "./pages/about";
import Resources from "./pages/resources";
import ReactTable from "./pages/react-table";

const Container = styled.div`
  display: flex;
  .App {
    margin-top: 70px;
    width: 100%;
    height: 100%;
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

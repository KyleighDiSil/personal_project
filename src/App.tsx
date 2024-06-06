import Header from "./components/header";
import styled from "styled-components";
import { Outlet } from "react-router-dom";

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
        <Outlet />
      </div>
    </Container>
  );
}

export default App;

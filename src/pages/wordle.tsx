import React from "react";
import styled from "styled-components";
import BaseTable from "../components/base-table";

const Container = styled.div`
  width: 100vw;
  height: fit-content;
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
  div {
    margin: 10px;
  }
`;

const Wordle = () => {
  return (
    <Container>
      <Container>Playing With React</Container>
      <BaseTable />
    </Container>
  );
};

export default Wordle;

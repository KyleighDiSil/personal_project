import React from "react";
import styled from "styled-components";

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
  return <Container>Wordle project goes here</Container>;
};

export default Wordle;

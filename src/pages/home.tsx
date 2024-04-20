import React from "react";
import styled from "styled-components";
import BaseTable from "../components/base-table";

const Container = styled.h1`
  width: 100vw;
  height: fit-content;
  text-align: center;
`;

const Home = () => {
  return (
    <>
      <Container>Playing With React</Container>
      <BaseTable />
    </>
  );
};

export default Home;

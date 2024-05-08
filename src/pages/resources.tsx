import React from "react";
import Form from "../components/form";
import styled from "styled-components";
import Card from "../components/card";

const Container = styled.div`
  width: 100vw;
  height: fit-content;
  display: flex;
  justify-content: center;
`;

const Resources = () => {
  return <Container>

    <Card ProjectTitle="NBI Systems" project={<div>Here is the stuff</div>}/>
  </Container>;
};

export default Resources;

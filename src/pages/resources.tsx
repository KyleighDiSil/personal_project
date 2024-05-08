import React from "react";
import Form from "../components/form";
import styled from "styled-components";
import Card from "../components/card";

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

const Resources = () => {
  return (
    <Container>
      <Card ProjectTitle="NBI Systems" project={<div>Here is the stuff</div>} />
      <Card ProjectTitle="NBI Systems" project={<div>Here is the stuff</div>} />
      <Card ProjectTitle="NBI Systems" project={<div>Here is the stuff</div>} />
      <Card ProjectTitle="NBI Systems" project={<div>Here is the stuff</div>} />
    </Container>
  );
};

export default Resources;

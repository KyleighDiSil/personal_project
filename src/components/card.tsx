import React from "react";
import Form from "../components/form";
import styled from "styled-components";

const Container = styled.div`
width: 100px;
height: 400px;
padding: 10px;
border: 1px solid grey;
border-radius: 10px;
box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
transition: 0.3s;
width: 25%;
`;

const Card = (args: {
    ProjectTitle: string
    project: React.ReactNode
}) => {
  return <Container>
    <div>{args.project}</div>
    <h1>{args.ProjectTitle}</h1>
  </Container>;
};

export default Card;

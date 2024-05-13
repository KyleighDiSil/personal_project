import React from "react";
import Form from "../components/form";
import styled from "styled-components";

const Container = styled.div`
  width: 100px;
  height: 400px;
  padding: 10px;
  border: 1px solid #892cdc;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  overflow: hidden;
  &:hover {
    box-shadow: 0 4px 8px 0 #892cdc;
    cursor: pointer;
  }
  transition: 0.3s;
  width: 33%;
  @media (max-width: 768px) {
    width: 75%;
  }
`;

const Card = (args: { ProjectTitle: string; project: React.ReactNode }) => {
  return (
    <Container>
      <h1>{args.ProjectTitle}</h1>
      {args.project}
    </Container>
  );
};

export default Card;

import React from "react";
import Form from "../components/form";
import styled from "styled-components";

const Container = styled.div`
  width: 100px;
  height: 400px;
  padding: 10px;
  background-color: whitesmoke;
  border: 1px solid lightgray;
  border-radius: 12px;
  display: flex;
  flex-direction: column;
  overflow: hidden;
  &:hover {
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
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

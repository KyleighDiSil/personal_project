import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Container = styled.div`
  width: 100vw;
  display: flex;
  flex-direction: column;
  height: fit-content;
  text-align: center;
  align-items: center;

  a {
    text-decoration: none;
    color: blue;
  }

  div {
    border-radius: 8px;
    background-color: whitesmoke;
    padding: 10px;
    margin: 10px;
    width: fit-content;
  }
`;

const Resources = () => {
  return (
    <Container>
      <h1>Suggested Courses for Beginners</h1>
      <div>
        <h2>The Joy of React</h2>
        <p>by Josh Comeau</p>
      </div>
      <div>
        <h2>Typescript Wizard</h2>
        <p>by Matt Pocock</p>
      </div>
      <div>
        <h2>React Query</h2>
        <Link to="https://ui.dev/c/react-query">by ui.dev</Link>
      </div>
      <div>
        <h2>Epic React</h2>
        <p>Kent C. Dodds</p>
      </div>
    </Container>
  );
};

export default Resources;

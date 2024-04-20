import React from "react";
import Form from "../components/form";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  width: 100vw;
  height: fit-content;
  align-items: center;
  flex-direction: column;
  div {
    width: 50%;
    p {
      text-indent: 20px;
    }
  }
  img {
    width: 50%;
    height: 50%;
  }
`;

const About = () => {
  return (
    <Container>
      <h1>Kyleigh DiSilvestro</h1>
      <img
        src="http://www.publicdomainpictures.net/pictures/170000/velka/dog-1463218026uIC.jpg"
        alt="Picture of Kyleigh"
      />
      <div>
        <p>
          Hey Everyone! Welcome to my portfolio or what I think of as my React
          playground. My goals with this is to learn more about React in my free
          time and if someone can learn something by checking out my code then
          that's a bonus.
        </p>
        <p>
          As I explore I will be linking all the courses I pay for with a
          summary of what I learned from it and my overall thoughts. Feel free
          to take my opinion or don't &#129335;
        </p>
      </div>
    </Container>
  );
};

export default About;

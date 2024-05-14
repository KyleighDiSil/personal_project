import React from "react";
import Form from "../components/form";
import styled from "styled-components";
import Card from "../components/card";

const Container = styled.div`
  display: flex;
  width: 100vw;
  height: 100vh;
  align-items: center;
  flex-direction: column;

  div {
    display: flex;

    div {
      p {
        text-indent: 20px;
        padding: 10px;
        font-size: 20px;
      }
      flex-direction: column;
    }
  }

  @media (max-width: 1007px) {
    div {
      display: flex;
      align-items: center;
      flex-direction: column;
    }
  }
`;

const ImageContainer = styled.div`
  width: 300px;
  height: 400px;
  min-width: 300px;
  min-height: 400px;
  margin-inline: 10px;
  img {
    height: 100%;
    width: 100%;
  }
`;
const About = () => {
  return (
    <Container>
      <h1>Kyleigh DiSilvestro</h1>
      {/* <div><a src="linkedin.com/in/kyleigh-disilvestro-8aa044191">LinkedIn</a></div> */}
      <div>
        <ImageContainer>
          <img src="src/assets/kyleigh.jpg" alt="Picture of Kyleigh" />
        </ImageContainer>
        <div>
          <p>
            Hey Everyone! Welcome to my portfolio. My goals with this project is
            to learn more about React in my free time. I'll be dabbling in a lot
            of things such as react-table, useQuery, typescript, basically all
            things react. Also looking to eventually incorporate APIs but for
            now I will be using randomly generated JSON data from mockaroo.com
          </p>
          <p>
            As I explore I will be linking all the courses I pay for with a
            summary of what I learned from it and my overall thoughts. Feel free
            to take my opinion or don't &#129335;
          </p>
        </div>
      </div>
    </Container>
  );
};

export default About;

import React from "react";
import Form from "../components/form";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  width: 100%;
  height: fit-content;
  align-items: center;
  flex-direction: column;

  div {
    display: flex;
    height: fit-content;
    div {
      p {
        text-indent: 20px;
        padding: 10px;
        font-size: 20px;
      }
      flex-direction: column;
    }
  }
  img {
    width: 100%;
    height: 100%;
    min-width: 200px;
  }

  @media (max-width: 1007px) {
    div {
      display: flex;
      align-items: center;
      flex-direction: column;
    }
    image {
      //this isn't getting applied consider image container
      width: 50%;
      height: 50%;
      margin: unset;
    }
  }
`;

const About = () => {
  return (
    <Container>
      <h1>Kyleigh DiSilvestro</h1>
      <div>
        <img
          src="http://www.publicdomainpictures.net/pictures/170000/velka/dog-1463218026uIC.jpg"
          alt="Picture of Kyleigh"
        />

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

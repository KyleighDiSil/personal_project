import React from "react";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  align-items: center;
  flex-direction: column;
  font-family: "Lucida Sans", "Lucida Sans Regular", "Lucida Grande",
    "Lucida Sans Unicode", Geneva, Verdana, sans-serif;

  div {
    display: flex;

    div:last-of-type {
      padding-block: 5px;
      margin: 20px;
      /* background-color: #faeddd; */
      background-image: url(https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.cbnfaithwomen.com%2Fwp-content%2Fuploads%2F2019%2F01%2Fbackground.jpg&f=1&nofb=1&ipt=756258f2758431cf10e147d8c509a7fa8bf16b8364f6a098320d577d2c985d2d&ipo=images);
      background-size: cover;
      p {
        text-indent: 20px;
        padding: 5px;
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
  margin-top: 20px;
  img {
    height: 100%;
    width: 100%;
  }
`;
const About = () => {
  return (
    <Container>
      <h1>About Me</h1>
      {/* <div><a src="linkedin.com/in/kyleigh-disilvestro-8aa044191">LinkedIn</a></div> */}
      <div>
        <ImageContainer>
          <img src="assets/kyleigh.jpg" alt="Picture of Kyleigh" />
        </ImageContainer>
        <div>
          <p>
            Hey Everyone! Welcome to my portfolio. My goals with this project is
            to learn more about React in my free time. I'll be dabbling in a lot
            of things such as react-table, useQuery, typescript, basically all
            things react. Also working on adding some Api integrations to my
            projects!
          </p>
          <p>
            At the core of my skill set lies proficiency in React, my goal is to
            build robust, interactive user interfaces that breathe life into web
            applications. Coupled with TypeScript, I ensure code integrity and
            scalability.
          </p>
          <p>
            I have plenty of experience with the foundational languages of
            JavaScript, CSS, and HTML. In my career I have also grown familiar
            with GraphQL APIs to streamline data fetching and manipulation.
          </p>
          <p>
            Speaking of data fetching I have been learning a lot about TanStack
            Query. This enables me to harness the power of this innovative tool
            to simplify data fetching and state management, thereby enhancing
            productivity and code maintainability.
          </p>
          <p>
            Quality assurance is paramount in my workflow, and I am well-versed
            in React Testing, employing rigorous testing methodologies to ensure
            the reliability and performance.
          </p>
          <p>
            As I explore the world of React I hope to share some of the
            resources I use to get better. There is always more to learn as a
            web developer. Eventually I'll be adding a resources tab but in the
            meantime feel free to look over some of my projects and hopefully
            you can learn something.
          </p>
          <p>
            I also hope to brush up some of the UI for this portfolio but
            currently I am focusing on building up some projects first.
          </p>
        </div>
      </div>
    </Container>
  );
};

export default About;

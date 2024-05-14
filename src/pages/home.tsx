import styled from "styled-components";
import Card from "../components/card";

const Container = styled.div`
  width: 100vw;
  height: fit-content;
  display: flex;
  flex-flow: row wrap;
  justify-content: center;

  > div {
    margin: 10px;
    align-items: center;
    .thumbnail iframe {
      width: 1440px;
      height: 900px;
    }

    .thumbnail {
      width: 350px;
      zoom: 1;
      transform: scale(0.25);
      transform-origin: 0 0;
      pointer-events: none;
    }
  }
`;

const Home = () => {
  return (
    <Container>
      <Card
        ProjectTitle="NBI Systems"
        project={
          <div className="thumbnail">
            <iframe
              src="https://kyleighdisil.github.io/NBI-Website/"
              title="NBI Systems Preview"
            />
          </div>
        }
      />
      <Card
        ProjectTitle="Wordle"
        project={
          <img
            src="/src/assets/wordle-demo.gif"
            alt="Wordle Gif"
            width="100%"
          />
        }
      />
      {/* <Card ProjectTitle="NBI Systems" project={<div>Here is the stuff</div>} />
      <Card ProjectTitle="NBI Systems" project={<div>Here is the stuff</div>} /> */}
    </Container>
  );
};

export default Home;

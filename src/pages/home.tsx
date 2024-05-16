import styled from "styled-components";
import Card from "../components/card";

const ProjectContainer = styled.div`
  width: 100vw;
  height: fit-content;
  display: flex;
  flex-flow: row wrap;
  justify-content: center;

  .card__face--front {
    margin: 10px;
    align-items: center;
    .thumbnail iframe {
      width: 1440px;
      height: 900px;
    }

    .thumbnail {
      width: 350px;
      height: 200px;
      zoom: 0.9;
      transform: scale(0.25);
      transform-origin: 0 0;
      pointer-events: none;
    }
  }
`;

const Container = styled.div`
  display: flexbox;
  text-align: center;
`;
const Home = () => {
  return (
    <Container>
      <h1>My Projects</h1>
      <ProjectContainer>
        <Card
          ProjectTitle="NBI Systems"
          description="A startup from Clarkson University reached out for some help building their website my senior year of college."
          gitLink="https://github.com/KyleighDiSil/NBI-Website"
          siteLink="https://kyleighdisil.github.io/NBI-Website/"
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
          gitLink="https://github.com/KyleighDiSil/project-wordle"
          description="A different version of Wordle that is more user friendly to those with screen readers. Acknolegement to Joy of React Course."
          project={
            <img src="assets/wordle-demo.gif" alt="Wordle Gif" width="95%" />
          }
        />
      </ProjectContainer>
    </Container>
  );
};

export default Home;

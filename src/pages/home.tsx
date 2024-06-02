import styled from "styled-components";
import Card from "../components/card";

const ProjectContainer = styled.div`
  width: 100%;
  height: fit-content;
  display: flex;
  flex-flow: row wrap;
  justify-content: center;

  .card__face--front {
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
  width: 100%;
  margin: 0 auto;
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
        <Card
          ProjectTitle="Tanstack React Table"
          // Maybe create route names
          siteLink="https://kyleighdisil.github.io/personal_project/react_table"
          gitLink="https://github.com/KyleighDiSil/personal_project/blob/main/src/components/base-table.tsx"
          description="Basic table with Mockaroo Data"
          project={
            <img
              src="assets/react_table.png"
              alt="React Table Img"
              width="95%"
            />
          }
        />
        <Card
          ProjectTitle="Working With NFL API"
          // Maybe create route names
          siteLink="https://kyleighdisil.github.io/personal_project/nfl"
          gitLink="https://github.com/KyleighDiSil/personal_project/blob/main/src/pages/api-page.tsx"
          description={`This is a live api found at Rapid API. There are only 1000 request allowed per month on the free subscription to this api.`}
          project={
            <img
              src="assets/NFL_ScoreCards.png"
              alt="NHL Page Image"
              width="95%"
            />
          }
        />
      </ProjectContainer>
    </Container>
  );
};

export default Home;

import React from "react";
import styled from "styled-components";
import BaseTable from "../components/base-table";
import NFL_JSON from "../nfl.json";

const Container = styled.div`
  width: 100%;
  height: 100%;
  background-image: url(https://t4.ftcdn.net/jpg/01/00/00/31/360_F_100003169_uMg5nB171ogYAB4eYfks8GxNsvZfEYqy.jpg);
  background-size: cover;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  overflow-y: auto;

  .s_bode {
    width: 700px;
    padding: 50px;
    display: flex;
    position: relative;
    z-index: 1000;
    border-radius: 20px;
    background-image: url(https://media.istockphoto.com/id/1355088658/photo/american-football-stadium-two-teams-face-off-players-ready-to-start-run-attack-score.jpg?s=612x612&w=0&k=20&c=t2Z6Cojqn5JahwOmLUtuuehu-b5JWdEkyT4u6b2m0BI=);
    background-size: cover;
    overflow: hidden;
  }

  .s_bode:after {
    content: "";
    height: 100%;
    width: 100%;
    position: absolute;
    top: 0;
    left: 0;
    background-color: rgba(0, 0, 0, 0.8);
    z-index: -2;
    border-radius: 20px;
  }

  .s_bode:before {
    content: "";
    height: 100%;
    width: 100%;
    position: absolute;
    top: 0;
    left: -47%;
    background-color: rgba(255, 255, 255, 0.2);
    z-index: -1;
    transform: skewX(-10deg);
  }

  .left_section {
    flex-grow: 2;
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .mid_section {
    flex-grow: 1;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    color: #fff;
  }

  .right_section {
    flex-grow: 2;
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  @media screen and (max-width: 850px) {
    .s_bode {
      width: 500px;
    }

    .s_bode img {
      width: 80px;
      height: 80px;
    }

    .s_bode h2 {
      font-size: 18px;
    }
  }

  @media screen and (max-width: 640px) {
    .s_bode {
      width: 400px;
      padding: 10px;
    }

    .s_bode img {
      width: 50px;
      height: 50px;
    }

    .s_bode h2 {
      font-size: 14px;
    }
    .s_bode h1 {
      font-size: 18px;
    }

    .s_bode p {
      font-size: 10px;
    }
  }

  @media screen and (max-width: 450px) {
    .s_bode {
      width: 320px;
      padding: 10px;
    }

    .s_bode img {
      width: 50px;
      height: 50px;
    }

    .s_bode h2 {
      font-size: 14px;
    }
    .s_bode h1 {
      font-size: 18px;
    }
  }
`;

const ScoreCard = styled.div`
  width: 300px;
  height: 200px;
  margin: 20px;
  h2 {
    color: #fff;
  }
`;
// https://api-web.nhle.com/v1/player-spotlight
// const getData = async () => {
//   const apiUrl = "https://api.imgflip.com/get_memes";

//   try {
//     let response = await fetch(apiUrl);
//     if (response.ok) {
//       let jsonresponse = await response.json();

//       return jsonresponse;
//     }
//   } catch (error) {
//     console.log(error);
//   }
//   return;
// };
// const url =
//   "https://tank01-nfl-live-in-game-real-time-statistics-nfl.p.rapidapi.com/getNFLScoresOnly?gameDate=20240107&topPerformers=true";
// const options = {
//   method: "GET",
//   headers: {
//     "X-RapidAPI-Key": "79a3103e96mshc13572448f404b4p1cfe3bjsn2ded067b07f0",
//     "X-RapidAPI-Host":
//       "tank01-nfl-live-in-game-real-time-statistics-nfl.p.rapidapi.com",
//   },
// };

// try {
//   const response = await fetch(url, options);
//   const result = await response.text();
//   console.log(result);
// } catch (error) {
//   console.error(error);
// }

const ApiPage = () => {
  const data: { [key: string]: any } = NFL_JSON.body;

  return (
    <Container>
      {Object.keys(data).map((i) => {
        return (
          <ScoreCard className="s_bode" key={i}>
            <div className="left_section">
              <h2>Home Team: {data[i].home}</h2>
            </div>
            <div className="mid_section">
              <h1>
                {data[i].homePts} - {data[i].awayPts}
              </h1>
              <p>{data[i].lineScore.period}</p>
            </div>
            <div className="right_section">
              <h2>Away Team: {data[i].away}</h2>
            </div>
          </ScoreCard>
        );
      })}
    </Container>
  );
};

export default ApiPage;

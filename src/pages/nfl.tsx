import React from "react";
import styled from "styled-components";
import { useQuery } from "@tanstack/react-query";

const Container = styled.div`
  width: 100%;
  height: 100%;
  // height of page minus header height
  min-height: calc(100vh - 70px);
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

const url =
  "https://tank01-nfl-live-in-game-real-time-statistics-nfl.p.rapidapi.com/getNFLScoresOnly?gameDate=20240107&topPerformers=true";
const options = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "79a3103e96mshc13572448f404b4p1cfe3bjsn2ded067b07f0",
    "X-RapidAPI-Host":
      "tank01-nfl-live-in-game-real-time-statistics-nfl.p.rapidapi.com",
  },
};

const ApiPage = () => {
  const { isError, isLoading, data } = useQuery({
    queryKey: ["getNFLGameStats"],
    queryFn: async () => {
      const results = await fetch(url, options);
      return results.json();
    },
    staleTime: Infinity,
    gcTime: Infinity,
  });

  if (isLoading) {
    return <div>Loading...</div>;
  }

  const nflData: { [key: string]: any } = data?.body ?? {};
  return (
    <Container>
      {nflData &&
        !isError &&
        Object.keys(nflData).map((i) => {
          return (
            <ScoreCard className="s_bode" key={i}>
              <div className="left_section">
                <h2>Home Team: {nflData[i].home}</h2>
              </div>
              <div className="mid_section">
                <h1>
                  {nflData[i].homePts} - {nflData[i].awayPts}
                </h1>
                <p>{nflData[i].lineScore.period}</p>
              </div>
              <div className="right_section">
                <h2>Away Team: {nflData[i].away}</h2>
              </div>
            </ScoreCard>
          );
        })}
      {isError && (
        <ScoreCard className="s_bode">
          <div className="mid_section">
            <h1>NFL API Error</h1>
            <p>
              Please check back another time. If this is still not working note
              this API is free only for 1000 queries a month.
            </p>
          </div>
        </ScoreCard>
      )}
    </Container>
  );
};

export default ApiPage;

import React from "react";
import styled, { css } from "styled-components";
import { Link } from "react-router-dom";

const Container = styled.div<{ isFlipped: boolean }>`
  --primary: #2c3e50;
  --secondary: #58b8c7;
  --dark: #212121;
  --light: #f3f3f3;

  margin: 50px auto 0;
  width: 400px;
  height: 600px;
  perspective: 1000px;
  border: none;
  background-color: white;

  h1 {
    color: var(--light);
  }
  .card__inner {
    width: 100%;
    height: 100%;
    transition: transform 1s;
    transform-style: preserve-3d;
    cursor: pointer;
    position: relative;
  }

  .card__inner {
    ${(props) =>
      props.isFlipped &&
      css`
        transform: rotateY(180deg);
      `}
  }

  .card__face {
    position: absolute;
    width: 100%;
    height: 100%;
    -webkit-backface-visibility: hidden;
    backface-visibility: hidden;
    overflow: hidden;
    border-radius: 16px;
  }

  .card__face--front {
    background-image: linear-gradient(
      to bottom right,
      var(--primary),
      var(--secondary)
    );
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }

  .card__face--front h2 {
    color: #fff;
    font-size: 32px;
  }

  .card__face--back {
    background-color: var(--light);
    transform: rotateY(180deg);
  }

  .card__content {
    width: 100%;
    height: 100%;
  }

  .card__header {
    position: relative;
    padding: 30px 30px 40px;
  }

  .card__header:after {
    content: "";
    display: block;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-image: linear-gradient(
      to bottom left,
      var(--primary) 10%,
      var(--secondary) 115%
    );
    z-index: -1;
    border-radius: 0px 0px 50% 0px;
  }

  .pp {
    display: block;
    width: 128px;
    height: 128px;
    margin: 0 auto 30px;
    border-radius: 50%;
    background-color: #fff;
    border: 5px solid #fff;
    object-fit: cover;
  }

  .card__header h2 {
    color: #fff;
    font-size: 32px;
    font-weight: 900;
    text-align: center;
  }

  .card__body {
    padding: 10px;
  }

  .card__body h3 {
    color: var(--dark);
    font-size: 24px;
    font-weight: 600;
    margin-bottom: 15px;
  }

  .card__body p {
    color: var(--dark);
    font-size: 18px;
    line-height: 1.4;
  }
`;

const LinkContainer = styled.div`
  display: flex;
  justify-content: space-around;
  a {
    text-decoration: none;
    color: blue;
  }
`;

const Card = (args: {
  ProjectTitle: string;
  project: React.ReactNode;
  description: string;
  codeLink: string;
  siteLink?: string;
}) => {
  const [isFlipped, setIsFlipped] = React.useState(false);
  return (
    <Container
      className="card"
      isFlipped={isFlipped}
      onClick={() => setIsFlipped(!isFlipped)}
    >
      <div className="card__inner">
        <div className="card__face card__face--front">
          <h1>{args.ProjectTitle}</h1>
          {args.project}
        </div>
        <div className="card__face card__face--back">
          <div className="card__content">
            <div className="card__header">
              <img src="assets/kyleigh.jpg" alt="Kyleigh" className="pp" />
              <h2>Kyleigh DiSilvestro</h2>
            </div>
            <div className="card__body">
              <h3>{args.ProjectTitle}</h3>
              <p>{args.description}</p>
              <LinkContainer>
                <Link to={args.codeLink} target="_blank">
                  Code
                </Link>
                {args.siteLink && (
                  <Link to={args.siteLink} target="_blank">
                    Visit Site
                  </Link>
                )}
              </LinkContainer>
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default Card;

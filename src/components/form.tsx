import React from "react";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100vw;
  align-items: center;
  margin-top: 10px;
  font-family: "Open Sans", arial, sans-serif;

  iframe {
    border: 5px dashed #bea57d;
  }
`;

const Title = styled.h1``;

const Form = () => {
  return (
    <Container>
      <Title>Please Fill Out the Form to Request Service</Title>
      <iframe
        src="https://docs.google.com/forms/d/e/1FAIpQLSfALaFSyXufOAnJ_At17ozcqdasIA2EwzvHLc9oUpyxE-7kbQ/viewform?embedded=true"
        width="640"
        height="500"
        frameBorder="0"
        marginHeight={0}
        marginWidth={0}
      >
        Loading…
      </iframe>
    </Container>
  );
};

export default Form;

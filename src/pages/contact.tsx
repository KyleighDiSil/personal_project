import React from "react";
import Form from "../components/form";
import styled from "styled-components";

const Container = styled.div`
  width: 100vw;
  height: fit-content;
`;

const Contact = () => {
  return (
    <Container>
      <Form />
    </Container>
  );
};

export default Contact;

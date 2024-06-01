import React from "react";
import styled from "styled-components";
import BaseTable from "../components/base-table";

const Container = styled.div`
  width: 100%;
  height: fit-content;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  ::-webkit-scrollbar {
    width: 4px;
    height: 4px;
    border-radius: 10px;
  }

  ::-webkit-scrollbar-track {
    border-radius: 10px;
  }

  ::-webkit-scrollbar-thumb {
    border-radius: 10px;
    background: rgb(108, 108, 116);
  }

  ::-webkit-scrollbar-thumb:horizontal {
    border-radius: 10px;
  }

  div {
    margin: 10px;
  }
`;

const ReactTable = () => {
  return (
    <Container>
      <h1>React Table</h1>
      <BaseTable />
    </Container>
  );
};

export default ReactTable;

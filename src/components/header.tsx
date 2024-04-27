import React from "react";
import styled from "styled-components";

const Container = styled.div`
  position: absolute;
  width: 100vw;
  height: fit-content;
  overflow: hidden;
  background-color: #a4bab7;
  padding: 10px 5px;
  display: flex;
  justify-content: center;

  ul {
    display: flex;
    list-style: none;
    width: fit-content;
    padding-inline-start: 0;
    margin: 0px;
  }

  li {
    display: table-cell;
  }

  a {
    color: #080f0f;
    text-align: center;
    font-size: 18px;
    border-radius: 4px;
    font: bold 14px/1.4 "Open Sans", arial, sans-serif;
    text-transform: uppercase;
    text-decoration: none;
    letter-spacing: 0.15em;

    display: inline-block;
    padding: 15px 20px;
    position: relative;
  }

  .header a.active {
    background-color: dodgerblue;
    color: #080f0f;
  }

  a:after {
    background: none repeat scroll 0 0 transparent;
    bottom: 0;
    content: "";
    display: block;
    height: 2px;
    left: 50%;
    position: absolute;
    background: #080f0f;
    transition: width 0.3s ease 0s, left 0.3s ease 0s;
    width: 0;
  }

  a:hover:after {
    width: 100%;
    left: 0;
  }

  a:hover {
    background-color: #ddd;
    color: #080f0f;
  }
`;

const Header = () => {
  return (
    <Container>
      <ul>
        <li>
          <a href="/">Home</a>
        </li>
        <li>
          <a href="resources">Resources</a>
        </li>
        <li>
          <a href="about">About</a>
        </li>
      </ul>
    </Container>
  );
};
export default Header;

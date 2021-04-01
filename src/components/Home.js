import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import Image from "../assets/img/home-bg.png";
const Home = () => {
  return (
    <HomeSec>
      <Img src={Image} />
      <HomeContent>
        <Title>Analog: The Simplest Productivity System</Title>
        <Btn to="/home">Learn more</Btn>
      </HomeContent>
    </HomeSec>
  );
};

export default Home;
const HomeSec = styled.div`
  min-height: 100vh;
  position: relative;
`;
const HomeContent = styled.div`
  position: absolute;
  bottom: 10%;
  left: 2%;
  z-index: 3;
  color: #fff;
  font-size: 18px;
  line-height: 28px;
  text-decoration-line: underline;
  color: #ffffff;
  white-space: nowrap;
`;
const Title = styled.div``;
const Btn = styled(Link)`
  text-decoration: none;
  color: #fff;
`;
const Img = styled.img`
  position: absolute;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  /* @media screen and (max-width: 600px) {
    width: 100%;
    height: 300px;
  } */
`;

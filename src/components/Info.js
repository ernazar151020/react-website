import React from "react";
import styled from "styled-components";
import Image from "../assets/img/info-bg.png";
const Info = () => {
  return (
    <InfoSection>
      <Img src={Image} />
      <InfoContent>
        <Text>
          A design studio in Downingtown, PA, creating and
          <div>curating products that combine form & function</div>
        </Text>
        <BtnLink>Read Our Story →</BtnLink>
      </InfoContent>
    </InfoSection>
  );
};

export default Info;
const InfoSection = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;
const InfoContent = styled.div`
  z-index: 20;
  color: #fff;
  text-align: center;
  font-size: clamp(1.5rem, 6vw, 2.5rem);
  word-wrap: wrap;
  line-height: 54px;
  text-align: center;
  color: #ffffff;
`;
const Text = styled.div``;
const BtnLink = styled.div`
  font-size: 15px;
  line-height: 22px;
  text-align: center;
  color: #ffffff;
`;
const Img = styled.img`
  position: absolute;
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

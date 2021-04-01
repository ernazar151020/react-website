import React from "react";
import styled from "styled-components";
import Image from "../assets/img/sale-bg.png";
const Sale = () => {
  return (
    <SaleSec>
      <SaleContent>
        <SaleInfo>
          <TitleText>Final Stock - Up to 50% Off</TitleText>
          <BtnLink>Shop the sale →</BtnLink>
        </SaleInfo>
        <SaleBg>
          <Img src={Image} />
        </SaleBg>
      </SaleContent>
    </SaleSec>
  );
};

export default Sale;
const SaleSec = styled.section`
  display: flex;
  align-items: center;
  background: #ced3ca;
  min-height: 100vh;
`;
const SaleContent = styled.div`
  display: flex;
  justify-content: space-between;
  max-width: 1000px;
  margin: 0 auto;
  padding: 0 15px;
  background: #fff;
  @media screen and (max-width: 900px) {
    display: block;
    text-align: center;
  } ;
`;
const SaleInfo = styled.div`
  flex: 1;
  margin-right: 100px;

  @media screen and (max-width: 900px) {
    text-align: center;
    flex: 2;
    margin: 0 auto;
  } ;
`;
const SaleBg = styled.div`
  margin-right: -90px;
  @media screen and (max-width: 900px) {
    margin-right: 0px;
  } ;
`;
const Img = styled.img`
  max-width: 90%;
  height: 100%;
  flex: 2;
  @media screen and (max-width: 900px) {
    height: auto;
  } ;
`;
const BtnLink = styled.div`
  font-size: 14px;
  line-height: 21px;
  color: #1a1a1a;
  cursor: pointer;
  margin-bottom: 35px;
`;
const TitleText = styled.div`
  font-size: 38px;
  line-height: 46px;
  word-wrap: break-word;
  width: 208px;
  color: #1a1a1a;
  padding-top: 90px;
  margin-bottom: 35px;
  @media screen and (max-width: 900px) {
    text-align: center;
    flex: 2;
    margin: 0 auto;
    margin-bottom: 35px;
  } ;
`;

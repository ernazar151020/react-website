import React from "react";
import styled from "styled-components";
import Logo from "../assets/img/logo.png";
import Instagram from "../assets/img/instagram.png";
import Twitter from "../assets/img/twitter.png";
import Facebook from "../assets/img/facebook.png";
const Footer = () => {
  return (
    <FooterSec>
      <Container>
        <FooterContent>
          <FooterInfo>
            <Item>
              <List>Customer Service</List>
              <List>Help / FAQ</List>
              <List>Returns & Exchanges</List>
              <List>Sizing</List>
              <List>Gift Cards</List>
              <List>Contact Us</List>
            </Item>
            <Item>
              <List>Customer Service</List>
              <List>Help / FAQ</List>
              <List>Returns & Exchanges</List>
              <List>Sizing</List>
              <List>Gift Cards</List>
              <List>Contact Us</List>
            </Item>
          </FooterInfo>
          <FooterSocial>
            <Content>
              <div>
                <Copy>© Ugmonk 2021</Copy>
                <Text>
                  All images and content may not be <br /> used without
                  permission
                </Text>
              </div>
              <LogoDiv>
                <Img src={Logo} />
              </LogoDiv>
            </Content>
            <IconsContent>
              <Icon>
                <Img src={Instagram} />
              </Icon>
              <Icon>
                <Img src={Twitter} />
              </Icon>
              <Icon>
                <Img src={Facebook} />
              </Icon>
            </IconsContent>
          </FooterSocial>
        </FooterContent>
      </Container>
    </FooterSec>
  );
};

export default Footer;
const FooterSec = styled.footer`
  padding: 84px 0 104px;
`;
const Container = styled.div`
  max-width: 1100px;
  margin: 0 auto;
  padding: 0 15px;
`;
const FooterContent = styled.div`
  display: flex;
  justify-content: space-between;
  @media screen and (max-width: 862px) {
    display: block;
  }
`;
const Item = styled.div`
  width: 300px;
  @media screen and (max-width: 862px) {
    width: 100%;
    text-align: center;
    margin-bottom: 2rem;
  }
`;
const FooterSocial = styled.div`
  @media screen and (max-width: 862px) {
    display: flex;
    justify-content: space-around;
  }
  @media screen and (max-width: 575px) {
    display: block;
    margin: 0 auto;
    text-align: center;
  }
`;
const List = styled.a`
  display: block;
  font-size: 15px;
  line-height: 18px;
  padding: 14px 0 16px;
`;
const FooterInfo = styled.div`
  display: flex;
  @media screen and (max-width: 575px) {
    display: block;
  }
`;
const Content = styled.div`
  display: flex;
  @media screen and (max-width: 575px) {
    margin: 0 auto;
    text-align: center;
  }
  @media screen and (max-width: 575px) {
    display: block;
    text-align: center;
  }
`;
const Copy = styled.div`
  font-size: 15px;
  line-height: 21px;
  text-align: right;
  color: #1a1a1a;
  margin-bottom: 10px;
  @media screen and (max-width: 575px) {
    text-align: center;
  }
`;
const Text = styled.div`
  font-size: 15px;
  line-height: 21px;
  text-align: right;
  color: #1a1a1a;
  @media screen and (max-width: 862px) {
    white-space: nowrap;
  }
  @media screen and (max-width: 575px) {
    text-align: center;
    margin-bottom: 20px;
  }
`;
const LogoDiv = styled.div`
  margin-left: 24px;
  @media screen and (max-width: 575px) {
    margin: 0 auto;
    text-align: center;
  }
`;
const Img = styled.img``;
const IconsContent = styled.div`
  display: flex;
  margin-top: 40px;
  @media screen and (max-width: 575px) {
    text-align: center;
    margin: 40px auto;
    margin-left: 20%;
  }
`;

const Icon = styled.div`
  padding: 0 30px;
  color: #000;
  font-size: 12px;

  width: 15px;
  height: 15px;
  cursor: pointer;
`;

import React from "react";
import { Link as LinkS } from "react-router-dom";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { MdShoppingCart } from "react-icons/md";
import { FaHamburger } from "react-icons/fa";
const Navbar = ({ toggle }) => {
  return (
    <Nav>
      <Container>
        <NavContent>
          <Logo>ugmonk</Logo>
          <Burger onClick={toggle} />
          <MenuList>
            <List>Men</List>
            <List>Women</List>
            <List>Objects</List>
            <List>Analog</List>
          </MenuList>
          <BtnContainer>
            <span>
              <Btn>Journal</Btn> <span>|</span>
              <Input placeholder="Search" />
            </span>
            <span>
              <Btn>Login</Btn> <span>|</span>
              <IconLink>
                {/* to="/basket" */}
                <Icon />
              </IconLink>
            </span>
          </BtnContainer>
        </NavContent>
      </Container>
    </Nav>
  );
};

export default Navbar;
const Nav = styled.nav`
  background: #ffffff;
  border-radius: 0px;
`;
const Container = styled.div`
  max-width: 1100px;
  margin: 0 auto;
  padding: 0 15px;
`;
const NavContent = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 110px;
`;
const Logo = styled(Link)`
  font-size: clamp(2rem, 6vw, 3rem);
  text-transform: uppercase;
  color: #000;
`;
const MenuList = styled.div`
  @media screen and (max-width: 900px) {
    display: none;
  }
`;
const List = styled(LinkS)`
  padding: 0 1rem;
  font-size: 16px;
  line-height: 20px;
  color: #292929;
`;
const BtnContainer = styled.div`
  @media screen and (max-width: 900px) {
    display: none;
  }
`;
const Btn = styled.button`
  background: transparent;
  outline: none;
  border: none;
  font-size: 17px;
  line-height: 20px;
  color: #292929;
  padding: 0 0.8rem;
  cursor: pointer;
`;
const Icon = styled(MdShoppingCart)`
  cursor: pointer;
  margin-left: 10px;
`;
const IconLink = styled(Link)`
  color: #000;
  font-size: 20px;
`;
const Input = styled.input`
  border: none;
  outline: none;
  padding-left: 10px;
  width: 60px;
`;
const Burger = styled(FaHamburger)`
  display: none;
  font-size: 2rem;
  cursor: pointer;
  margin-right: 1rem;
  @media screen and (max-width: 900px) {
    display: block;
  }
`;

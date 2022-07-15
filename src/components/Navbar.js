import React from "react";
import styled from "styled-components";
import { NavLink as Link } from "react-router-dom";
import { FaBars } from "react-icons/fa";

const Navbar = ({ toggle }) => {
  return (
    <Nav>
      <NavLogo to="/">
        <h1>LOGO</h1>
      </NavLogo>
      <Bars onClick={toggle} />
      <NavMenu>
        <li>
          <NavLink to="/home">Home</NavLink>
        </li>
        <li>
          <NavLink to="/about">About</NavLink>
        </li>
        <li>
          <NavLink to="/teams">Teams</NavLink>
        </li>
        <li>
          <NavLink to="/blog">Blog</NavLink>
        </li>
        <li>
          <NavLink to="/contact">Contact Us</NavLink>
        </li>
      </NavMenu>
      <NavBtn>
        <NavBtnLink to="/signin-up">Sign In/Up</NavBtnLink>
      </NavBtn>
    </Nav>
  );
};

const Nav = styled.nav`
  background-color: #fffffd;
  max-width: 80%;
  margin: 0 auto;
  height: 80px;
  display: flex;
  justify-content: space-between;
  padding: 0.5rem calc((100vw-1000px) / 2);
  z-index: 10;
  @media screen and (max-width: 768px) {
    transition: 0.8s all ease;
  }
`;

const NavLink = styled(Link)`
  color: #696e71;
  display: flex;
  align-items: center;
  text-decoration: none;
  font-size: 18px;
  font-weight: 500;
  padding: 0 1rem;
  border-radius: 1rem;
  margin-right: 10px;
  height: 100%;
  cursor: pointer;
  transition: 0.2s ease-in-out;
  &.active {
    font-size: 20px;
    color: black;
    border-color: #696e71;
    border-style: solid;
    border-width: 2px;
  }
  &:hover {
    font-size: 20px;
    border: 2px solid #ff6c02;
    transition: 0.2s ease-in-out;
  }
`;
export const NavLogo = styled(Link)`
  color: #1f276a;
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 0 1rem;
  height: 100%;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  &:hover {
    color: #ff6c02;
  }
`;

const Bars = styled(FaBars)`
  display: none;
  color: #283137;
  @media screen and (max-width: 1050px) {
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-100%, 75%);
    font-size: 1.8rem;
    cursor: pointer;
  }
`;
const NavMenu = styled.ul`
  display: flex;
  align-items: center;
  margin-right: -24px;
  li {
    list-style: none;
  }
  @media screen and (max-width: 1050px) {
    display: none;
  }
`;
const NavBtn = styled.nav`
  display: flex;
  align-items: center;
  margin-right: 24px;
  @media screen and (max-width: 768px) {
    display: none;
  }
`;
const NavBtnLink = styled(Link)`
  border-radius: 8px;
  background: #ff6c02;
  padding: 10px 22px;
  color: #fff;
  border: none;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  text-decoration: none;
  &:hover {
    transition: all 0.2s ease-in-out;
    background: #fff;
    color: #ff6c02;
    border: 2px solid #ff6c02;
  }
  @media screen and (max-width: 1050px) {
    display: none;
  }
`;

export default Navbar;

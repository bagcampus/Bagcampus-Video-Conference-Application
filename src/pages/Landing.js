import React from "react";
import styled from "styled-components";
import heroImg from "../images/heroImg.png";
import { Link } from "react-router-dom";

const Landing = () => {
  return (
    <>
      <Hero>
        <HeroText>
          <HeroMain>Connect anywhere, anytime</HeroMain>
          <HeroSec>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod
            tempora nam deserunt eos, eveniet temporibus. Hic labore officia
            consectetur quo aliquam culpa voluptatibus dolorem ut perferendis
            doloremque ratione, eveniet reprehenderit?
          </HeroSec>
          <BtnLink to="/signin-up">Try Now</BtnLink>
        </HeroText>
        <HeroImg src={heroImg} />
      </Hero>
      <Body1>
        <BHeading>What can you do with our LOGO</BHeading>
        <BContents></BContents>
      </Body1>
      <Body2></Body2>
      <Footer></Footer>
    </>
  );
};

const Hero = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  padding: 50px 0;
`;
const HeroText = styled.div`
  max-width: 40vw;
  margin-left: 80px;
`;
const HeroMain = styled.h1`
  font-size: 50px;
  padding: 30px 0;
`;
const HeroSec = styled.p`
  font-weight: 500;
  padding-bottom: 50px;
`;

const BtnLink = styled(Link)`
  padding: 20px 80px;
  border-radius: 50px;
  letter-spacing: 3px;
  color: #fff;
  border: none;
  font-size: medium;
  font-weight: 800;
  background-color: #000;
  text-decoration: none;
  transition: 0.2s ease-in-out;
  &:hover {
    color: orange;
    background-color: beige;
    transition: 0.2s ease-in-out;
  }
`;

const HeroImg = styled.img`
  min-height: 10rem;
  min-width: 10rem;
  height: 50%;
  width: 50%;
`;

const Body1 = styled.body`
  height: 500px;
  background-color: beige;
`;
const BHeading = styled.h1``;
const BContents = styled.h5``;
const Body2 = styled.body`
  height: 400px;
`;
const Footer = styled.footer`
  height: 500px;
  background-color: #000;
`;

export default Landing;

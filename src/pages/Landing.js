import React from "react";
import styled from "styled-components";
import heroImg from "../images/heroImg1.png";
import bg from "../images/bg.jpg";
import { Link } from "react-router-dom";
import componentVid from "../videos/componentVid.mp4";
import { NavLogo } from "../components/Navbar";
import { RiCopyrightLine } from "react-icons/ri";

const Landing = () => {
  return (
    <>
      <Background>
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
          <BContents1>
            <Uses>
              Lorem ipsum dolor sit amet consectetur adipisicing
              elit.Molestiasnatus culpa eligendi inventore
            </Uses>
            <Uses>
              dolorem quas ratione, magni, dolores quod doloremque consequuntur.
              Amet saepe quis sequi quae, blanditiis voluptas cupiditate
            </Uses>
            <Uses>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias
              natus culpa eligendi inventore
            </Uses>
          </BContents1>
        </Body1>
        <Body2>
          <BContents2>
            <Addvert>
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Soluta
                dignissimos quasi, inventore impedit repellat porro aperiam
                veritatis voluptas animi at, dicta praesentium sint? Quo, sint
                totam. Suscipit obcaecati ipsam laborum?
              </p>
              <BtnLink2 to="/signin-up">Try LOGO Now</BtnLink2>
            </Addvert>
            <video src={componentVid} autoPlay loop muted />
          </BContents2>
        </Body2>
        <Footer>
          <NavLogo to="/">
            <h1>LOGO</h1>
          </NavLogo>
          <p>
            <span>
              <Copyright />
            </span>
            2022, LOGO, BagCampus.in, Inc. All rights reserved
          </p>
        </Footer>
      </Background>
    </>
  );
};

const Background = styled.div`
  position: relative;

  &::before {
    content: "";
    position: absolute;
    top: 0px;
    bottom: 0px;
    left: 0px;
    right: 0px;
    background: url(${bg});
    background-size: cover;
    background-position: top center;
    opacity: 0.8;
    z-index: -20;
  }
`;

const Hero = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  padding: 50px 0;
`;
const HeroText = styled.div`
  max-width: 40vw;
  margin-left: 4rem;
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
  box-shadow: aliceblue;
`;

const Body1 = styled.body`
  background-color: beige;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const BHeading = styled.h1`
  margin: 90px 0 50px 0;
  font-weight: 600;
`;
const BContents1 = styled.h5`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 7vw;
  margin-bottom: 90px;
  @media screen and (max-width: 768px) {
    flex-direction: column;
    gap: 2rem;
  }
`;
const Uses = styled.p`
  height: 140px;
  padding: 2rem;
  background-color: rgba(255, 255, 255, 0.5);
  border-radius: 1rem;
  max-width: 20rem;
  font-size: 1rem;
  font-weight: 300;
  display: flex;
  align-items: center;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 20px 25px -5px,
    rgba(0, 0, 0, 0.04) 0px 10px 10px -5px;
  cursor: pointer;
`;
const Body2 = styled.body`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 4rem;
`;

const BContents2 = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  padding: 50px 0;
  max-width: 1500px;
  video {
    border-radius: 2rem;
    box-shadow: rgba(0, 0, 0, 0.1) 0px 20px 25px -5px,
      rgba(0, 0, 0, 0.04) 0px 10px 10px -5px;
    max-width: 30vw;
    max-height: 16.875vw;
    @media screen and (max-width: 768px) {
      display: none;
    }
  }
  @media screen and (max-width: 768px) {
    flex-direction: column;
    gap: 2rem;
    align-items: center;
    text-align: center;
  }
`;
const Addvert = styled.div`
  font-size: 1.3rem;
  font-weight: 300;
  margin-right: 10rem;
  max-width: 800px;
  p {
    margin-bottom: 50px;
  }
  @media screen and (max-width: 768px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 20px auto;
  }
`;
const BtnLink2 = styled(Link)`
  padding: 20px 30px;
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

const Footer = styled.footer`
  background-color: #000;
  color: white;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const Copyright = styled(RiCopyrightLine)`
  color: #fff;
  transform: translate(-20%, 15%);
`;

export default Landing;

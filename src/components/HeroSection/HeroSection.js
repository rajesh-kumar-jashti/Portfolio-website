import React from 'react'
import styled from 'styled-components';
import {Bio} from "../../data/constants"
import Typewriter from 'typewriter-effect'
import HeroImg from "../images/heroimag1.png";

const HeroContainer = styled.div`
    background: #ffffff;
    display: flex;
    justify-content: center;
    position: relative;
    padding: 80px 30px;

    @media screen and (max-width: 960px) {
        padding: 5px 5px;
    }
    @media screen and (max-width: 640) {
        padding: 5px 5px;
    }
`;

const HeroInnerContainer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    max-width: 1100px;

    @media screen and (max-width: 960px) {
      flex-direction: column;
    }
`;

const HeroLeftContainer = styled.div`
    width: 100%;
    order: 1;
    @media screen and (max-width: 960px) {
      order: 2;
      margin-bottom: 32px;
      display: flex;
      flex-direction: column;
      align-items: center;
    }

    @media screen and (max-width: 640px) {
      order: 2;
      margin-bottom: 32px;
      display: flex;
      flex-direction: column;
      align-items: center;
    }
`;

const HeroRightContainer = styled.div`
    width: 100%;
    display: flex;
    order: 2;
    justify-content: end;
    gap: 12px;
    @media screen and (max-width: 960px) {
      order: 1;
      justify-content: center;
      align-items: center;
      margin-bottom: 80px;
    }

    @media screen and (max-width: 640px) {
      margin-bottom: 30px;
    }
`;

const Title = styled.div`
  font-weight: 700;
  font-size: 50px;
  color: #333333;
  line-height: 68px;

  @media screen and (max-width: 960px) {
    text-align: center;
  }

  @media screen and (max-width: 640px) {
    font-size: 40px;
    line-height: 48px;
    margin-bottom: 8px;
  }
`;

const TextLoop = styled.div`
  font-weight: 600;
  font-size: 32px;
  display: flex;
  gap: 12px;
  color: #333333;
  line-height: 68px;

  @media screen and (max-width: 960px) {
    text-align: center;
  }
  @media screen and (max-width: 640px) {
    font-size: 22px;
    line-height: 48px;
    margin-bottom: 16px;
  }
`;

const Span = styled.span`
  color: crimson;
  cursor: pointer;
`;

export const Image = styled.img`
  position: relative;
  width: 70%;
  border-radius: 30%;
  @media (max-width: 768px) {
    width: 350px;
    height: 500px;
    margin-left: 40px;
  }
  @media (max-width: 680px) {
    width: 280px;
    height: 400px;
    margin-left: 40px;
  }

  
`;

const SubTitle = styled.div`
  font-size: 20px;
  line-height: 32px;
  margin-bottom: 42px;
  color: #333333;
  text-align: justify;

  @media screen and (max-width: 960px) {
    text-align: center;
  }

  @media screen and (max-width: 640px) {
    font-size: 16px;
    padding: 0 15px;
    text-align: justify;
    line-height: 32px;
  }
`;

const ResumeButton = styled.a`
    text-decoration: none;
    width: 100%;
    max-width: 200px;
    text-align: center;
    padding: 10px 16px;
    color: #333333;
    border-radius: 20px;
    cursor: pointer;
    font-size: 20px;
    font-weight: 600;
    transition: all 0.2s ease-in-out !important;
    background: #ffffff;
    border: 2px solid #333333;  
    
    
    @media screen and (max-width: 640px) {
        padding: 12px 0;
        font-size: 18px;
    } 

`;


function HeroSection() {
  return (
    <div id='about'>
      <HeroContainer>
        <HeroInnerContainer>
            <HeroLeftContainer>
                <Title>
                    Hi, I am <br/>
                    {Bio.name}
                </Title>
                <TextLoop>
                    I am a <Span>
                        <Typewriter
                            options={{
                                strings: Bio.roles,
                                autoStart: true,
                                loop: true,
                            }}
                        />
                    </Span>
                </TextLoop>
                <SubTitle>{Bio.description}</SubTitle>
                <ResumeButton href={Bio.resume} target='display'>Check Resume</ResumeButton>
            </HeroLeftContainer>
            <HeroRightContainer>
                <Image src={HeroImg}/>
            </HeroRightContainer>
        </HeroInnerContainer>
      </HeroContainer>
    </div>
  )
}

export default HeroSection;
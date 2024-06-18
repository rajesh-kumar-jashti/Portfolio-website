import React from 'react'
import styled from 'styled-components';
import { Link as LinkR } from "react-router-dom";
import { DiCssdeck } from "react-icons/di";
import { FaBars } from "react-icons/fa";
import { Bio } from "../../data/constants"
import GithubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';


const Nav = styled.div`
    background-color: #ffffff;
    height:80px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 1rem;
    position: sticky;
    top: 0;
    z-index: 10;
    @media screen and (max-width: 960px){
        transition: 0.8s all ease;
    }
`;

const NavContainer = styled.div`
    display: flex;
    justify-content: space-between;
    height: 60px;
    z-index: 1;
    width: 100%;
    padding: 0 24px;
    max-width: 1200px;
`;

const NavLogo = styled(LinkR)`
    width: 80%;
    padding: 06px;
    display: flex;
    justify-self: flex-start;
    cursor: pointer;
    text-decoration: none;
    align-items: center;
    @media screen and (max-width: 640px){
        padding: 0 0px;
    }
`;

const MobileIcon = styled.div`
    display: none;
    @media screen and (max-width: 760px){
        display: block;
        position: absolute;
        top: 0;
        right: 0;
        transform: translate(-100%, 50%);
        font-size: 1.8rem;
        cursor: pointer;
        color: #333333;
    }
`;

const NavItems = styled.ul`
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 32px;
    list-style: none;

    @media screen and (max-width: 768px){
        display: none;
    }
`;

const NavLink = styled.a`
    color: #949494;
    font-size: 18px;
    font-weight: 400;
    cursor: pointer;
    text-decoration: none;
    transition: all 0.2s ease-in-out;
    &:hover{
        color: #333333;
    }
`;

const ButtonContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: end;
    width: 80%;
    height: 100%;
    padding: 0 6px;
    gap: 15px;
    @media screen and (max-width: 640px){
        display: none;
    }
`;

const GithubButton = styled.button`
    background-color: transparent;
    color: #333333;
    border: 1.8px solid #333333;
    border-radius: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0px 20px;
    font-size: 1rem;
    font-weight: 500;
    cursor: pointer;
    height: 70%;
    @media screen and (max-width: 640px){
        font-size: 0.8rem;
    }
`;

const MobileMenu = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 16px;
    position: absolute;
    top: 70px;
    right: 0;
    width: 100%;
    padding: 12px 40px 24px 40px;
    background: #ffffff;
    transition: all 0.3s ease-in-out;
    transform: ${({ open }) => open ? 'translate(0)' : 'translate(100%)'};
    border-radius: 0 0 20px 20px;
    box-shadow: 0 5px 10px rgba(0,0,0,0.3);
    opacity: ${({ open }) => (open ? "1" : "0")};
    z-index: ${({ open }) => (open ? "1" : "-1")};
`;

const MobileMenuLink = styled.a`
    color: #949494;
    font-weight: 500;
    cursor: pointer;
    text-decoration: none;
    transition: all 0.2s ease-in-out;
    &:hover{
        color: #333333;
    }
`;


const ResumeButton = styled.a`
    background-color: transparent;
    color: #333333;
    border: 1.8px solid #333333;
    border-radius: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0px 10px;
    font-size: 1rem;
    font-weight: 500;
    text-decoration: none;
    cursor: pointer;
    height: 70%;
    @media screen and (max-width: 640px){
        font-size: 0.8rem;
    }

`;

export const Span = styled.div`
    color: #333333;
    padding: 0 4px;
    font-weight: 600;
    font-size: 24px;
`;


function Navbar() {

    const [open, setOpen] = React.useState(false);
    return (
        <Nav>
            <NavContainer>
                <NavLogo to="/">
                    <a href='/' style={{
                        display: "flex",
                        alignItems: "center",
                        color: "#333333",
                        textDecoration: "none",
                        marginBottom: "20",
                        cursor: "pointer",
                    }}>
                        <DiCssdeck size="3rem" /> <Span>Portfolio</Span>
                    </a>
                </NavLogo>
                <MobileIcon>
                    <FaBars
                        onClick={() => {
                            setOpen(!open);
                        }}
                    />
                </MobileIcon>
                    <NavItems>
                        <NavLink href='#about'>About</NavLink>
                        <NavLink href='#skills'>Skills</NavLink>
                        <NavLink href='#experience'>Experience</NavLink>
                        <NavLink href='#projects'>Projects</NavLink>
                        <NavLink href='#education'>Education</NavLink>
                    </NavItems>

                <ButtonContainer>
                    <ResumeButton href={Bio.github} target='display'><GithubIcon style={{paddingRight: "5px"}}></GithubIcon>Github</ResumeButton>
                    <ResumeButton href={Bio.linkedin} target='display'><LinkedInIcon style={{paddingRight: "5px"}}></LinkedInIcon>LinkedIn</ResumeButton>
                </ButtonContainer>  
                
            </NavContainer>
            {open && (<MobileMenu open={open}>
                <MobileMenuLink
                    href="#about"
                    onClick={() => {
                        setOpen(!open);
                    }}
                >
                    About
                </MobileMenuLink>
                <MobileMenuLink
                    href="#skills"
                    onClick={() => {
                        setOpen(!open);
                    }}
                >
                    Skills
                </MobileMenuLink>
                <MobileMenuLink
                    href="#experience"
                    onClick={() => {
                        setOpen(!open);
                    }}
                >
                    Experience
                </MobileMenuLink>
                <MobileMenuLink
                    href="#projects"
                    onClick={() => {
                        setOpen(!open);
                    }}
                >
                    Projects
                </MobileMenuLink>
                <MobileMenuLink
                    href="#education"
                    onClick={() => {
                        setOpen(!open);
                    }}
                >
                    Education
                </MobileMenuLink>
                <GithubButton
                    style={{
                        padding: "10px 16px",
                        background: `#ffffff`,
                        color: "#333",
                        display: "flex",
                        gap: "10px",
                        width: "max-content",
                    }}
                    href="https://github.com/rajesh-kumar-jashti"
                    target="_blank"
                >
                    <GithubIcon></GithubIcon>
                    Github
                </GithubButton>
                <GithubButton
                    style={{
                        padding: "10px 16px",
                        background: `#ffffff`,
                        color: "#333",
                        display: "flex",
                        gap: "10px",
                        width: "max-content",
                    }}
                    href={Bio.linkedin}
                    target="_blank"
                ><LinkedInIcon></LinkedInIcon>
                    LinkedIn
                </GithubButton>
            </MobileMenu>)}
        </Nav>
    )
}

export default Navbar;

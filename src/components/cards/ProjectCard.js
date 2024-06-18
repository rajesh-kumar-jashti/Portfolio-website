import React from 'react'
import styled from 'styled-components'
import { FaGithub } from "react-icons/fa";


const Button = styled.button`
    display: none;
    width: 100%;
    padding: 10px;
    background-color: #ffffff;
    color: #333333;
    font-size: 14px;
    font-weight: 700;
    border: none;
    border-radius: 10px;
    cursor: pointer;
    transition: all 0.8s ease-in-out;
`
const Card = styled.div`
    width: 330px;
    height: 490px;
    background-color: #ffffff;
    cursor: pointer;
    border-radius: 10px;
    box-shadow: 0 0 12px 4px rgba(0,0,0,0.4);
    overflow: hidden;
    padding: 26px 20px;
    display: flex;
    flex-direction: column;
    gap: 14px;
    transition: all 0.5s ease-in-out;
    &:hover {
        transform: translateY(-10px);
        box-shadow: 0 0 50px 4px rgba(0,0,0,0.6);
    }
    &:hover ${Button} {
        display: block;
    }
`

const Image = styled.img`
    width: 100%;
    height: 180px;
    background-color: #333333;
    border-radius: 10px;
    box-shadow: 0 0 16px 2px rgba(0,0,0,0.3);
`

const Tags = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    gap: 8px;
    margin-top: 4px;
`

const Tag = styled.span`
    font-size: 12px;
    font-weight: 400;
    color: #000000;
    background-color: #D9D9D9;
    padding: 2px 8px;
    border-radius: 10px;
`

const Details = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 0px;
    padding: 0px 2px;
`
const Title = styled.div`
    font-size: 20px;
    font-weight: 600;
    color: #000000;
    overflow: hidden;
    display: -webkit-box;
    max-width: 100%;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    overflow: hidden;
    text-overflow: ellipsis;
`

const Iconn = styled.div`
    font-size: 30px;
    margin-left: 2px;
    font-weight: 400;
    color: #000000;
    @media only screen and (max-width: 768px){
        font-size: 30px;
    }
    @media only screen and (max-width: 640px){
        font-size: 30px;
    }
`

const Cardbb = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
`
const Description = styled.div`
    font-weight: 400;
    color: #000000;
    overflow: hidden;
    margin-top: 8px;
    display: -webkit-box;
    max-width: 100%;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;
    text-overflow: ellipsis;
`



const ProjectCards = ({project,setOpenModal}) => {
    return (
        <Card>
            <Image src={project.image}/>
            <Cardbb>
                <Tags>
                    {project.tags?.map((tag, index) => (
                    <Tag>{tag}</Tag>
                    ))}
                </Tags>
                <Iconn >
                    <a href={project.github} target='display' style={{
                        color: "#333333",
                        cursor: "pointer",
                    }}>
                        <FaGithub />
                    </a>
                </Iconn>
            </Cardbb>
            <Details>
                <Title>{project.title}</Title>
                <Description>{project.description}</Description>
            </Details>
        </Card>
    )
}

export default ProjectCards
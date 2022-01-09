import React from 'react'
import styled from 'styled-components'

function Detail() {
    return (
        <Container>
           <Background>
               <img src='/images/aurora.jpg'/> 
           </Background>
           <ImageTitle>
               <img src='/images/Company-bro.svg'/>
           </ImageTitle>
           <Controls>
                <PlayButton>
                    <img src='/images/play-icon-black.png'/>
                    <span>PLAY</span>
                </PlayButton>
                <TrailerButton>
                <img src='/images/play-icon-white.png'/>
                    <span>TRAILER</span>
                </TrailerButton>
                <AddButton>
                    <span>+</span>
                </AddButton>
                <GroupWatchButton>
                    <img src='/images/group-icon.png'/>
                </GroupWatchButton>
           </Controls>
           <SubTitle>
               Green Light by Aurora Boreolis North Pole 
           </SubTitle>
           <Description>
           The northern lights, one of several astronomical phenomena called polar lights (aurora polaris), are shafts or curtains of colored light visible on occasion in the night sky. ... Northern lights are also called by their scientific name, aurora borealis, and southern lights are called aurora australis.
           </Description>
        </Container>
    )
}

export default Detail

const Container = styled.div`
    min-height:calc(100vh-70px);
    padding: 0 calc(3.5vw + 5px);
    position:relative;
`
const Background = styled.div`
position:fixed;
top:0;
left:0;
right:0;
bottom:0;
z-index:-1;
opacity:0.8;

 img{
     height:100%;
     width:100%;
     object-fit:cover;
 }

`
const ImageTitle = styled.div`
height:30vh;
min-height:170px;
width:35vw;
mon-height:200px;


img{width:100%;
    height:100%;
    object-fit:contain;
}
`
const Controls = styled.div`
    display:flex;
    align-items:center;
`

const PlayButton = styled.button` 
    border-radius:4px;
    font-size:15px;
    padding:0px 24px;
    margin-right:22px;
    display:flex;
    align-items:center;
    height:56px;
    background:rgb(249,249,249);
    border:none;
    letter-spacing;1.8px;
    cursor:pointer;
    
    &:hover{
        background:rgb(198,198,198);
    }
`

const TrailerButton = styled(PlayButton)`
background:rgba(0,0,0,0.3)
border:1px solid black;
color:rgb(249,249,249);
text-transform:uppercase;
background-color:transparent;

`

const AddButton = styled.button`
    margin-right:16px;
    width:44px;
    height:44px;
    display:flex;
    align-items:center;
    justify-content:center;
    border-radius:50%;
    border:2px solid white;
    background-color:rgba(0,0,0,0.5);
    cursor:pointer;
    span{
        font-size:30px;
        color:white;
    }
`

const GroupWatchButton = styled(AddButton)`
    background:rgb(0,0,0);
`
const SubTitle = styled.div`
    color:rgb(249,249,249);
    font-size:15px;
    min-height:20px;
    margin-top:25px; 
`

const Description = styled.div`
    line-height:1.4;
    font-size:20px;
    margin-top:20px;
    color:rgb(249,249,249);

`
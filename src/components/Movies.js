import React from 'react'
import styled from 'styled-components'

function Movies() {
    return (
        <Container>
            <h4>Recommonded for You</h4>
            <Content>
                <Wrap>
                    <img src='/images/recommended.svg'/>
                </Wrap>
                <Wrap>
                    <img src='/images/recommended.svg'/>
                </Wrap>
                <Wrap>
                    <img src='/images/recommended.svg'/>
                </Wrap>
                <Wrap>
                    <img src='/images/recommended.svg'/>
                </Wrap>
                <Wrap>
                    <img src='/images/recommended.svg'/>
                </Wrap>
                <Wrap>
                    <img src='/images/recommended.svg'/>
                </Wrap>
                <Wrap>
                    <img src='/images/recommended.svg'/>
                </Wrap>
                <Wrap>
                    <img src='/images/recommended.svg'/>
                </Wrap>
               
            </Content>
        </Container>
    )
}

export default Movies

const Container = styled.div``

const Content = styled.div`
    display:grid;
    grid-gap:25px;
    grid-template-columns:repeat(4,minmax(0,1fr));
`

const Wrap = styled.div`
border-radius:10px;
cursor:pointer;
overflow:hidden;
border:3px solid rgba(249,249,249,0.1);
transition:all 250s cubic-bezier(0.25,0.45,,0.45,0.94) 0s ;

    img{
            width:95%;
            height:95%;
            object-fit:cover;
    }
    &:hover{
        transform:scale(1.05); 
        box-shadow:rgb(0 0 0 /80%) 0px 40px 58px -16px,rgb(0 0 0 /72%) 0px 30px 22px -10px;
        transition-duration:300ms;
        border-radius: rgba(249,249,249,0.8);
    }
 `
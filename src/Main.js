import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
const Main = () => {
    return (
        <Container>
        <span>만능 재주꾼 istp 김시원</span>
        <img src={process.env.PUBLIC_URL+'c1__cool__.png'} width="60%"/>
            <h1>헌정 홈페이지</h1>
            <Text>
                <span style={{'font-size':'x-large'}}>김시원 이대로 보낼 수 없다.</span>
                <span style={{ 'font-size': 'small' , 'textAlign': 'right'}}>일리노이주는 잘해줘라</span>
                <span style={{'font-size':'large'}}>우리두고 가지마라</span>
            </Text>
            <Link to="/post">
            <Btn>헌정 글 보기</Btn></Link>
        </Container>
    )
}
export default Main;
const Text = styled.div`
display:flex;
flex-direction: column;
justify-content: center;
gap:15px;
color:#00000080;
flex: 0.5;
`
const Btn = styled.button`
all: unset;
background-color: white;
border-radius: 50px;
padding: 20px 30px;
`

const Container = styled.div`
display:flex;
flex-direction: column;
align-items: center;
justify-content: center;
background-color: #99C4D7;
width: 100%;
height: 100vh;
font-weight: lighter;
gap:20px;
font-size: large;
background-image: url('./bg.png');
h1{
    font-weight: lighter;
}
`
import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
const Post = () => {
    return (
        <Container>
            <span>너의 출국을 생각하니 벌써 슬퍼</span>
            <img src="cry.png" width="30%"/>
            <span>기여운 우리를 두고 가는 너도 맘이 무겁지?</span>
            <img src="7.jpeg" width="80%"/>
            <img src="10.jpeg" width="80%"/>
            <img src="11.jpeg" width="80%"/>
            <span>그리고</span>
            <span>해커톤에 신난 시원이</span>
            <img src="1.jpeg" width="80%"/>
            <span>마라탕에 미친 시원이</span>
            <img src="2.jpeg" width="80%"/>
            <span>술을 사랑한 쾌녀 시원이</span>
            <Row>
            <img src="9.png" width="40%"/>
                <img src="8.jpeg" width="40%" />
            </Row>
            <span>드레스가 잘 어울리는 시원이</span>
            <img src="6.jpeg" width="80%"/>
            <span>우리는 모두 그리울거야 {'>,<'}</span>
            <Link to="/letter"><Btn>TO. 비니</Btn></Link>
        </Container>
    )
}
export default Post;

const Row = styled.div`
display:flex;
flex-direction: row;
justify-content: center;
`
const Btn = styled.button`
all: unset;
background-color: white;
border-radius: 50px;
padding: 20px 30px;
`

const Container = styled.div`
padding: 50px 0;
display:flex;
flex-direction: column;
align-items: center;
justify-content: center;
background-color: #99C4D7;
width: 100%;
height: 100%;
font-weight: lighter;
gap:20px;
font-size: large;
background-image: url('bg.png');
span{
    margin-top: 30px;
}
`
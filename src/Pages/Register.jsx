import styled from "styled-components";
import { mobile } from "../responsive.js";
// import background from "../images/model.png"

const Container = styled.div`
width: 100vw;
height: 100vh;

 background: linear-gradient(
      rgba(255, 255, 255, 0.5),
      rgba(255, 255, 255, 0.5)
    ),
    url("https://images.pexels.com/photos/6984661/pexels-photo-6984661.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940")
      center;
      background-repeat:no-repeat;
display: flex;
align-items: center;
justify-content: center;
`;

const Wrapper = styled.div`
width: 40%;
padding: 20px;
background-color: white;
${ mobile({ width: "75%" }) }

`;
const Form = styled.div`
display: flex;
flex-wrap:wrap ;
justify-content: space-between;
`;
const Title = styled.h1`
font-size: 24px;
font-weight: 300;
`;
const Input = styled.input`
flex: 1;
min-width: 40%;
margin: 20px 10px 0px 0px;
padding: 10px;
`;
const Agreement = styled.span`
font-size: 12px;
margin: 20px 0px;
`;
const Button = styled.button`
width: 40%;
border: none;
padding: 15px 20px;
background-color: teal;
color: white;
cursor: pointer;
`;

const Register = () => {
    return (
        <Container>
            <Wrapper>
                <Title>CREATE AN ACCOUNT</Title>
                <Form>
                    <Input placeholder="name" />
                    <Input placeholder="last name" />
                    <Input placeholder="username" />
                    <Input placeholder="email" />
                    <Input placeholder="password" />
                    <Input placeholder="confirm password" />
                    <Agreement>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus quae nemo recusandae sit veritatis, reiciendis qui modi amet ex, beatae asperiores harum, impedit eaque natus! Laboriosam veniam voluptas commodi? Accusamus!</Agreement>
                    <Button>CREATE</Button>
                </Form>
            </Wrapper>
        </Container>
    );
};

export default Register;
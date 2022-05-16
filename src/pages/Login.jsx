
import styled from "styled-components";

const Container = styled.div`
width: 100vw;
height: 100vh;
background: url("https://i.ibb.co/HLynWCZ/ezgif-com-gif-maker.jpg");
background-repeat: no-repeat;
background-size: cover;
display: flex;
align-items: center;
justify-content: center;
`

const Wrapper = styled.div`
width: 40%;
padding: 20px;
background-color: teal;
`
const Title = styled.h1`
font-size: 24px;
font-weight: 300;
`

const Form = styled.form`
display: flex;
flex-wrap: wrap;
margin-bottom: 30px;
`

const Input = styled.input`
flex: 1;
min-width: 40%;
margin: 20px 10px 0px 0px;
padding: 20px;
`



const Button = styled.button`
width: 40%;
border: none;
padding: 15px 20px;
cursor: pointer;
background-color: teal;
border: 3px solid black;
color: white;
&:hover{
    background-color: yellow;
    color: black;
    transform: scale(1);
`

const Button1 = styled.button`
width: 40%;
border: none;
padding: 15px 20px;
cursor: pointer;
background-color: teal;
border: 3px solid black;
color: white;

&:hover{
    background-color: red;
    transform: scale(1);
`
const Vimal = styled.span`
margin: 5px 0px;
font-size: 19px;
// background-color: oldlace;
cursor: pointer;
display: table;
`


const Login = () => {
  return (
    <Container>
    <Wrapper>
        <Title> SIGN IN </Title>
    <Form>
     <Input placeholder="username"/>
     <Input placeholder="password"/>

    </Form>

    <Button> LOGIN </Button>
     <Vimal>DO YOU REMEMBER THE PASSWORD? </Vimal>
     <Button1> CREATE NEW ACCOUNT </Button1> 

    </Wrapper>
    </Container>
  )
}

export default Login
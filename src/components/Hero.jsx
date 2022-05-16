import styled from "styled-components";
import { Link } from "react-router-dom";



const Container = styled.div`
  margin-top: 6rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-left: 8rem;
  padding-top: 6rem;
  height: 90px;
`;
//Left
const Left = styled.div`
  flex: 1;
  height: 100px;
`;

const LeftWrapper = styled.div`
  flex: 1;
  // background-color: blue;
`;

const Desc = styled.p`
  font-size: 16px;
  font-family: "DM Sans", sans-serif;
  font-weight: 500;
  margin-top: 30px;
`;

const Title = styled.h2`
  font-size: 48px;
  font-family: "Merriweather", serif;
  font-weight: 700;
`;

const Button = styled.button`
width: 30%;
border: none;
padding: 15px 20px;
margin-right: 10rem;
cursor: pointer;
background-color:  #F86338;
border: 3px solid white;
border-radius: 10px;
color: white;
&:hover{
    background-color: #F86338;
    color: black;
    transform: scale(1);

`;

const ButtonWrapper = styled.div`
  margin-top: 25px;
`;

//Right
const Right = styled.div`
  flex: 1;
  margin-right: 18rem;
`;

const RightContainer = styled.div`
  display: flex;
  text-align: center;
`;

const Image = styled.img`
  margin: 5px;
  margin-top: 20rem;
  width: 65%;
  height: 70vh;
  object-fit: cover;
  border-radius: 20px;
  cursor: pointer;
  // background-color: gray;
`;

const Hero = () => {
  return (
    <Container>
      <Left>
        <LeftWrapper>
          
          <Title>
            Sort out Your <br /> Spring Look
          </Title>
          <Desc>
            We will help to develop every smallest thing into a <br />
            big one for your company.
          </Desc>
          <ButtonWrapper>
          <Link to={`/categories`}> 
           <Button> Shop </Button>
          </Link>
          </ButtonWrapper>
        </LeftWrapper>
      </Left>

      <Right>
        <RightContainer>
          <Image src="https://i.ibb.co/gTYrRfZ/shop-image2.jpg" />
          <Image src="https://i.ibb.co/gTYrRfZ/shop-image2.jpg" />
        </RightContainer>
      </Right>
    </Container>
  );
};

export default Hero;

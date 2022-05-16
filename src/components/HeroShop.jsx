import styled from "styled-components";
import { Link } from "react-router-dom";

const Container = styled.div`
  margin-top: 24rem;
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

const Button = styled.button`

`;



const Title = styled.h5`
  margin-top: 8rem;
  justify-content: center;
  font-size: 24px;
  font-family: "Merriweather", serif;
  font-weight: 700;
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
  // background-color: gray;
`;

const HeroShop = () => {
  return (
    <Container>
      <Left>
        <LeftWrapper>
          
          <Title>
            Home || Shop 
          </Title> <br />
          <Link to={`/categories`}> 
           <Button> Shop </Button>
          </Link>
         
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

export default HeroShop;

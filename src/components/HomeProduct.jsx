import { FavoriteBorderOutlined } from "@material-ui/icons";
import styled from "styled-components"



const Info = styled.div`
opacity: 0;
width: 100%;
height: 100%;
position: absolute;
top:0;
left:0;
background-color:rgba(0,0,0,0.2);
z-index: 3;
transition: all 0.5s ease;
`;

const Container = styled.div`
flex:1;
margin: 30px;
height: 450px;
display: flex;
align-items: center;
justify-content: center;
position: relative;
cursor: pointer;
&:hover ${Info}{
  opacity: 1;
  transform: scale(1);
}
`;

const Circle = styled.div`
width: 200px;
height: 200px;
border-radius: 50%;
background-color: white;
position: absolute;
`;


const Image = styled.img`
height: 75%;
z-index: 2;

`;


const Icon = styled.div`
width: 40px;
height: 40px;
border-radius: 50%;
background-color: white;
display: flex;
align-items: center;
justify-content: center;
margin-left: 15rem;
transition: all 0.5s ease;
cursor: pointer;
&:hover{
  background-color: red;
}
`;

const Title = styled.h1`

`;


const HomeProduct = ({item}) => {
  return (
    <Container>
      <Circle />
      <Image src={item.img}/>
      <Info>
        <Icon>
          <FavoriteBorderOutlined />
        </Icon>
      </Info>


    </Container>
  )
}

export default HomeProduct
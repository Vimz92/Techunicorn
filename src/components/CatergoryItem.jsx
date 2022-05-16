import { FavoriteBorderOutlined } from '@material-ui/icons';
import { Link } from "react-router-dom";
import styled from "styled-components";

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
&:hover ${Info}{
  opacity: 1;
  
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
  transform: scale(1);
}
`;

const Name = styled.h1`
font-size:24px;
font-weight: bold;
font-family: 'Merriweather', serif;
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
    transform: scale(2);

`;

const Desc = styled.p`
font-size: 12px;
font-weight: 400;
font-family: 'DM Sans', sans-serif;
`


const Price = styled.div`

`

const CatergoryItem = ({item}) => {

  return (
        <> 
    <Container>
      <Circle />
 
                <Image src={item.image} />  
                 <Info> 
                 <Icon>
                  <FavoriteBorderOutlined/>
                  </Icon>
                  <Link to={`/shop`}> 
                 <Button> Shop </Button>
                 </Link>
                 <Name>{item.title}</Name>
                  <Desc>{item.desc}</Desc>
                  <Price>{item.price}</Price>
                
                  
                  </Info>

                
      

   
    </Container>
    </>
  
     
  )
}
    

export default CatergoryItem
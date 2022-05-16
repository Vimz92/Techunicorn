import { FavoriteBorderOutlined } from "@material-ui/icons";
import styled from "styled-components"
import { shopfiller } from "../data";



const TextContainer = styled.div`
display: flex;
align-items: center;
justify-content: space-around;
;`


const TextLeft = styled.h2`
font-size: 36px;
font-weight: bold;
font-family: 'Merriweather';
margin-right: 78rem;
;`

const Info = styled.div`
margin: 30px;
opacity: 1;
width: 100%;
height: 100%;
top:0;
left:0;
z-index: 3;
transition: all 0.5s ease;
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
`;


const Container = styled.div`
flex:1;
margin: 30px;
height: 600px;
display: flex;
flex-wrap: wrap;
align-items: center;
justify-content: center;
position: relative;
&:hover ${Info}{
  opacity: 1;
  transform: scale(1);
}
`;

const Circle = styled.div`


`
const Button = styled.button`
border: 3px solid white;
border-radius: 10px;
background-color:  #F86338;
padding: 15px 20px;
`
const Image = styled.img`
z-index: 2;
margin: 25px;
width: 100%;
height: 40vh;
`;

const Icon = styled.div`
margin-top: 24px;
width: 40px;
height: 40px;
border-radius: 50%;
background-color: white;
display: flex;
align-items: center;
justify-content: center;
transition: all 0.5s ease;
cursor: pointer;
&:hover{
  background-color: red;
}
`;



const Title1 = styled.h1`
font-size: 24px;
font-family: "Merriweather", serif;
font-weight: 700;
color: red;
`

const Price = styled.p`
font-size: 18px;
font-weight: 700;
`


const Sell = styled.div`

`

const BestSeller = () => {
    return (
   <>   
   
                <TextContainer>
                <TextLeft> Best Seller</TextLeft>      
                </TextContainer> 
                <Container>
                {shopfiller.map((item)=> (
                    <Sell bg={item.bg} key={item.id}>
                         <Info> 
                          <Icon>
                          <Circle />
                            <FavoriteBorderOutlined />
                            </Icon>
                           
                         
                         <Image src={item.image} />
                         <Title1>{item.name}</Title1>
                         <Price>{item.price}</Price>
                         <Button> Shop </Button>
                         </Info>
                        </Sell>
                      
                        
        ))}

            </Container>

            </>
     
  )
}

export default BestSeller
import { ArrowLeft, ArrowRight, FavoriteBorderOutlined } from "@material-ui/icons"
import { useState } from "react";
import styled from "styled-components"
import { newArrivals } from "../data";




const TextContainer = styled.div`
display: flex;
align-items: center;
justify-content: space-around;
;`


const TextLeft = styled.h2`
font-size: 36px;
font-weight: bold;
font-family: 'Merriweather';
text-decoration: none;
;`


const TextRight = styled.h5`
font-size: 24px;
font-family: 'Merriweather';
font-weight: bold;
cursor: pointer;
;`

const NewRight = styled.h5`

;`

const Info = styled.div`
opacity: 0;
width: 100%;
height: 150%;
top:0;
left:0;
z-index: 3;
`;

const Container = styled.div`
overflow: hidden;
margin-bottom: 35rem;
flex:1;
margin: 10px;
height: 600px;
display: flex;
align-items: center;
justify-content: center;
position: relative;
z-index: 3;
&:hover ${Info}{
    opacity: 1;
    transform: scale(2);
}
`;



const Arrow = styled.div`
background-color: #F86338;
display: flex;
align-items: center;
justify-content: center;
position: absolute;
top: 0;
bottom: 0;
left: ${props => props.direction === "left" && "10px"};
right: ${props => props.direction === "right" && "10px"};
margin: auto;
cursor: pointer;
opacity: 0.5;
z-index: 2;
`;

const Wrapper = styled.div`
margin-left: 20rem;
height: 100%;
display: flex;
transition: all 1.5s ease;
transform: translateX(${props=> props.slideIndex * -60}vw);
`;

const Slide = styled.div`
`;
  


const Image = styled.img`
height: 50%;
width: 40%;
z-index:4;
`
const Circle = styled.div`

`;


const Icon = styled.div`

width: 40px;
height: 40px;
border-radius: 50%;
background-color: white;
display: flex;
align-items: center;
justify-content: center;
margin-left: 50rem;
transition: all 0.5s ease;
cursor: pointer;
&:hover{
  background-color: red;
  transform: scale(1);
}
`;



const Title1 = styled.h1`
font-size: 24px;
color: red;
`


const Button = styled.button`
border: 3px solid white;
border-radius: 10px;
background-color:  #F86338;
padding: 15px 20px;
`


const Price = styled.div`
font-size: 18px;
color:  #F86338;
`


const Slider = () => {
    const[slideIndex, setSlideIndex] =useState(0)

    const handleClick = (direction) => {
    if(direction==="left"){
        setSlideIndex(slideIndex > 0 ? slideIndex -1: 5)
    }else{
        setSlideIndex(slideIndex < 2 ? slideIndex +1: 0)

    }
};

  return (
   
<>

     <TextContainer>
        <TextLeft> New Arrivals</TextLeft>    
        <NewRight> 
        <TextRight> See All</TextRight>  
        </NewRight>
    </TextContainer> 
    

        <Container>
        <Circle />
        <Arrow direction="left" onClick={()=> handleClick("left")}> 
        <ArrowLeft/>
        </Arrow>
        <Wrapper slideIndex={slideIndex}>

        {newArrivals.map((item)=> (

    <Slide bg={item.bg} key={item.id}> 
    <Icon>
          <FavoriteBorderOutlined />
        </Icon>
   
         <Image src={item.img} />
         <Title1>{item.title1}</Title1>
         <Price>{item.price}</Price>
         <Button> Shop </Button>
         
        <Info> 
        
         </Info>
        </Slide>
))}
   
        </Wrapper>

        <Arrow direction="right" onClick={()=> handleClick("right")}> 
            <ArrowRight/>
        </Arrow>

    </Container>
   
    </>
  )
}

export default Slider
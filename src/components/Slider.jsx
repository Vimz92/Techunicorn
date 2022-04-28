import { ArrowLeft, ArrowRight } from "@material-ui/icons"
import { useState } from "react";
import styled from "styled-components"
import { newArrivals } from "../data";
import { Link } from "react-router-dom";



const TextContainer = styled.div`

display: flex;
align-items: center;
justify-content: space-between;
margin-top: 25px;
;`


const TextLeft = styled.h2`
margin-top: 24rem;
font-size: 36px;
font-weight: bold;
font-family: 'Merriweather';
margin-right: 46rem;
;`


const TextRight = styled.h5`
font-size: 24px;
font-family: 'Merriweather';
font-weight: 400;
cursor: pointer;
;`



const Container = styled.div`

width: 100%;
height: 100%;
display: flex;
flex-wrap: wrap;
align-items: center;
justify-content: space-between;
position: relative;
overflow: hidden;

`;



const Arrow = styled.div`

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
`
const Wrapper = styled.div`;
height: 100%;
display: flex;
transition: all 1.5s ease;
transform: translateX(${props=> props.slideIndex * -100}vw);
`

const Slide = styled.div`
text-align: center;
width: 100vw;
height: 70vh;
display: flex;
align-items: center;
background-color: #${props=>props.bg};
`;


const ImgContainer = styled.div`

width: 30vw;
height: 100vh;
display: flex;
flex-wrap: wrap;

`

const Image = styled.img`
height: 50%;
width: 80%;
margin: 10px;
`

const Title1 = styled.h1`

`

const Title2 = styled.h2`

`

const Desc = styled.div`

`

const Info = styled.div`

`
const Price = styled.div`

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
    <Link to={`/categories`}> 
     <TextContainer>
        <TextLeft> New Arrival</TextLeft>    
        <TextRight> See All</TextRight>  
    </TextContainer> 
    </Link>

        <Container>

        <Arrow direction="left" onClick={()=> handleClick("left")}> 
        <ArrowLeft/>
        </Arrow>
        <Wrapper slideIndex={slideIndex}>

        {newArrivals.map((item)=> (

            <Slide bg={item.bg} key={item.id}> 

      <Link to={`/shop`}> 
        <ImgContainer>
        <Image src={item.img} />
        </ImgContainer>
        </Link>
        <Info> 
        <Title1>{item.title1}</Title1>
        <Title2>{item.title2}</Title2>
         <Desc>{item.desc}</Desc>
         <Price>{item.price}</Price>
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
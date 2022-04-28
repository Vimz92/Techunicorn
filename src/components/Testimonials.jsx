import styled from "styled-components";
import { testimonials } from "../data";
import {Avatar} from '@material-ui/core';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";



const MainContainer= styled.div`
margin-top: 6rem;

`


const MainText = styled.h2`
margin-top: 5rem;
height: 30vh;
font-size: 48px;
font-weight: 700;
font-family: 'Merriweather';
align-items: center;
justify-content: center;
text-align: center;

`


const TestimonialContainer = styled.div`
margin-bottom: 3rem;
height:20vh;
width: 50%;
background-color: #FFEFEB;
`


const Testimonial = styled.div`
background-color: #FFEFEB;
`

const Circle = styled.div`
background-color: #FFEFEB;
display: flex;
place-items: center;
flex-direction: column;
`



const TextContainer = styled.div`
text-align: center;
background-color: #FFEFEB;
`

const Message = styled.p`
background-color: #FFEFEB;
font-size: 16px;
font-weight: 400;
font-family: 'DM Sans', sans-serif;
`

const User = styled.h5`
background-color: #FFEFEB;
font-size: 24px;
font-weight: 700;
font-family: 'Merriweather';
`

const Profession = styled.div`
background-color: #FFEFEB;
font-size: 16px;
font-weight: 400;
font-family: 'DM Sans', sans-serif;
`






const Testimonials = () => {
  return (



<>
        <MainContainer> 
        <MainText> What Our Customer Says </MainText>
     <div  style={{display: "flex", justifyContent: "center"}}> 
     
      <TestimonialContainer>
      <Slider> 
        {testimonials.map(item=>(
            <Testimonial key={item.id} > 
            <Circle> 
                <Avatar 
                imgProps={{style:{borderRadius: "50%" }}}src={item.avatar} 
                style={{width:120, 
                        height:120,
                        border: "1px solid lightgray",
                        padding: 7,}}/>
            </Circle> 
            <TextContainer> 
            <Message> {item.message}</Message>
            <User> {item.user} </User>
            <Profession>  {item.profession}  </Profession>
            </TextContainer>
            </Testimonial>  
        ))}
         </Slider>

        </TestimonialContainer>
        </div>
        </MainContainer>
        </>
  )
}

export default Testimonials
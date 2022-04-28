import styled from "styled-components"
import { sliderItems } from "../data";


const TextContainer = styled.div`
display: flex;
align-items: center;
justify-content: space-around;
margin-top: 25px;
;`


const TextLeft = styled.h2`
font-size: 36px;
font-weight: bold;
font-family: 'Merriweather';
margin-right: 46rem;
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

const ImgContainer = styled.div`
align-items: center;
justify-content: center;

display: flex;

`;

const Image = styled.img`
height: 50%;
width: 50%;
`

const Title1 = styled.h1`
display: flex;
flex-direction: column;
`

const Title2 = styled.h2`

`

const Desc = styled.div`

`

const Info = styled.div`
display: flex;
align-items: center;
justify-content: center;

`
const Price = styled.div`

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

                {sliderItems.map((item)=> (
        
                    <Sell bg={item.bg} key={item.id}> 

                <ImgContainer>
                <Image src={item.img} />
                </ImgContainer>
                 
                 <Info> 
                 <Title1>{item.title1}</Title1>
                 <Title2>{item.title2}</Title2>
                  <Desc>{item.desc}</Desc>
                  <Price>{item.price}</Price>
                  </Info>

                  </Sell>
   
        ))}

            </Container>
            </>
     
  )
}

export default BestSeller
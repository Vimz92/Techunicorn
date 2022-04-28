import styled from "styled-components"
import {recommend} from "../data";


const Container = styled.div`
margin-top: 5rem;
display: flex;
align-items: center;
justify-content: center;
flex-wrap: wrap;
`;

const TextContainer = styled.div`


`;

const Text =  styled.h1`
font-weight: bold;
font-family: 'Merriweather', serif;
`;


const Recomm =  styled.div`
background-color: red;
// display: flex;
// text-align-center;
// flex-wrap: wrap;

`;

const ImgContainer = styled.div`

margin: 5px;

`;


const Image = styled.img`

width: 20vw;
height: 40vh;

object-fit: cover;
// background-color: gray;

`



const Name = styled.h1`
font-size:24px;
font-weight: bold;
font-family: 'Merriweather', serif;

`

const Desc = styled.p`
font-size: 12px;
font-weight: 400;
font-family: 'DM Sans', sans-serif;
`

const Info = styled.div`
display: flex;
align-items: center;
text-align: center;
flex-direction: column;

`
const Price = styled.div`
color: #F3692E;
font-weight: bold;
font-family: 'Merriweather', serif;

`


const Productsfilter = () => {

    return (

        <> 
                    <TextContainer> 
                        <Text> Recommended for you</Text> 
                    </TextContainer>


              <Container> 
        
                {recommend.map((item)=> (
                    <Recomm bg={item.bg} key={item.id}> 

                <ImgContainer>
                <Image src={item.image} />
                </ImgContainer>
                 
                 <Info> 
                 <Name>{item.name}</Name>
                  <Desc>{item.desc}</Desc>
                  <Price>{item.price}</Price>
                  </Info>

                  </Recomm>
   
        ))}
              </Container>
              </>
  )
}

export default Productsfilter
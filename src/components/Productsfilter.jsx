import styled from "styled-components"
import {Filter} from "../Filterdata";
import {techunicornimages} from "../data";
import { Link } from "react-router-dom";
import React, { useState } from "react";


const Container = styled.div`
margin-top: 25rem;
display: flex;
align-items: center;
justify-content: space-around;
flex-wrap: wrap;
`;

const ButtonContainer = styled.div`
display: flex;
align-items: center;
text-align: center;
justify-content: center;
background-color: red;
margin-left: 80px;
`;

const Button =  styled.button`
display: flex;
padding: 20px;
`;



const MenuContainer =  styled.div`
display: flex;
`;

const Buy =  styled.div`


`;

const ImgContainer = styled.div`
display: flex;
flex:1;

`;


const Image = styled.img`

width: 20vw;
height: 40vh;
margin: 10px;
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
  const [user, setUser] = useState(Filter);
   const filterResult=(catItem) =>{
    const result= Filter.filter((curData)=>{
      return curData.Filter===catItem
    });
    setUser(result)
   }
    return (
 <> 
              <Container> 
              <MenuContainer> 
          <ButtonContainer> 
            <Button onClick={()=>setUser(Filter)}> All</Button>
   <Button onClick={()=>filterResult("jewelery")}> Queen Summer </Button>
   <Button onClick={()=>filterResult("men's clothing")}> Shirts and Tops </Button>
   <Button onClick={()=>filterResult("electronics")}> Sweaters and Cardigans </Button>
   <Button onClick={()=>filterResult("jewelery")}> Outwears </Button>
   <Button onClick={()=>filterResult("women's clothing")}> Shoes </Button>
   <Button onClick={()=>filterResult("kids")}> Accessories </Button>
   <Button onClick={()=>filterResult("jewelery")}> More </Button>
            </ButtonContainer>
           </MenuContainer> 
                {techunicornimages.map((item)=> (
                    <Buy bg={item.bg} key={item.id}> 

                <ImgContainer>
                <Image src={item.image} />
                </ImgContainer>
                 
                 <Info> 
                 <Name>{item.name}</Name>
                  <Desc>{item.desc}</Desc>
                  <Price>{item.price}</Price>
                  <Link to={`/addtocart`}> 
                  <Button> Shop </Button>
                  </Link> 
                  </Info>

                  </Buy>
   
        ))}
              </Container>
              </>
  )
}

export default Productsfilter
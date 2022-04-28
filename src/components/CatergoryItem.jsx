import axios from 'axios';
import {useState, useEffect} from 'react';
import { Link } from "react-router-dom";
import styled from "styled-components";



const Container = styled.div`
flex:1;
position: relative;

`

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
const Buy =  styled.div`


`;


const Name = styled.h1`
font-size:24px;
font-weight: bold;
font-family: 'Merriweather', serif;
`
const Info = styled.div`
display: flex;
align-items: center;
text-align: center;
flex-direction: column;
`

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

const Rating = styled.div`

`

const Price = styled.div`

`

const CatergoryItem = ({item}) => {
const [Loading, setLoading] = useState(false)
const [data, setData] = useState([])

useEffect(() => {
  setLoading(true);
axios({
  method: "GET",
  url: "https://fakestoreapi.com/products"
}).then(res=>{
  console.log(res.data)
  setData(res.data)
}).catch(err => console.log(err))
.finally(() => setLoading(false));
}, [])




  return (
        
    <Container>
      {Loading && <div> <h1> Loading...</h1></div> }
      <Link to={`/shop`}> 
      {data.map((item)=> (
                    <Buy bg={item.id}> 

                <ImgContainer>
                <Image src={item.image} />
                </ImgContainer>
                 
                 <Info> 
                   <Link to={`/categories`}> 
                 <Button> Shop </Button>
                 <Name>{item.title}</Name>
                  <Desc>{item.desc}</Desc>
                  <Price>{item.price}</Price>
                  </Link>
                  
                  </Info>

                  </Buy>
      ))}

     
             </Link>
    
            
    </Container>
  
     
  )
}
    

export default CatergoryItem
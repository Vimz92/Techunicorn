import styled from "styled-components";
import axios from 'axios';
import {useState, useEffect} from 'react';
import CatergoryItem from "./CatergoryItem";


const Container = styled.div`
margin-top: 30rem;
padding: 20px;
display: flex;
flex-wrap: wrap;
justify-content: space-between;
`

const Catergory = ({item}) => {

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
      {data.map((item)=> (
         <CatergoryItem bg={item.id} /> 
    ))}

    </Container>

  )
}

export default Catergory
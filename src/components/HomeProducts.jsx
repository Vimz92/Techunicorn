import styled from "styled-components"
import {homeProducts} from '../data'
import Product from './Product'


const Container = styled.div`
margin-top: 28rem;
padding: 20px;
display: flex;
flex-wrap: wrap;
justify-content: space-between;
`;


const HomeProducts = () => {
  return (
<Container>
{homeProducts.map((item)=>(
    <Product item={item} key={item.id}/> 
))}

</Container>
  )
}

export default HomeProducts
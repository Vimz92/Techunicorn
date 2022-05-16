import styled from "styled-components"
import {newArrivals} from '../data'
import Product from './Product'


const Container = styled.div`
margin-top: 35rem;
padding: 20px;
display: flex;
flex-wrap: wrap;
justify-content: space-between;
`;

const Products = () => {
  return (
<Container>
{newArrivals.map((item)=>(
    <Product item={item} key={item.id}/>
))}

</Container>
  )
}

export default Products
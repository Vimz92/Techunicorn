import styled from "styled-components";
import {categories} from '../data';
import CatergoryItem from "./CatergoryItem";


const Container = styled.div`
 display: flex;
 padding: 20px;
 margin-top: 30rem;
 justify-content: space-between;
 flex-wrap: wrap;
`

const Catergories = () => {
  return (
    <Container>
    {categories.map(item=>(
        <CatergoryItem item={item} />
    ))}

    </Container>
  )
}

export default Catergories
import { useState } from "react";
import { useLocation } from "react-router-dom";
import styled from "styled-components"




const Container = styled.div`
margin-top: 30rem;
background-color: green;
`;

const Title = styled.h1`
margin: 20px;
`;

const FilterContainer = styled.div`
display: flex;
justify-content: space-between;
`;

const Filter = styled.div`
margin: 20px;`;

const Option = styled.option`
`;

const Select = styled.select`
padding: 10px;
margin-right: 20px;`;

const FilterText =  styled.span`
font-size: 20px;
font-weight: 600px;`;




// const Image = styled.img`

// width: 20vw;
// height: 40vh;
// margin: 10px;
// object-fit: cover;
// // background-color: gray;
// `




const Productsfilter = () => {
  const location = useLocation();
  const cat = location.pathname.split("/")[1]
  const[filter, setFilter] = useState({})
  const[sort, setSort] = useState("Newest")

  const handleFilters = (e) => {
    const value = e.target.value;
    setFilter({
      ...filter,
      [e.target.name]: value,
    });
  }

  
    return (
 <> 
        <Container> 
          <Title> Dresses </Title>
          <FilterContainer>
          <Filter> <FilterText>Filter Products: </FilterText> </Filter>
          <Select name="color" onChange={handleFilters}>
            <Option disabled selected>
              color
            </Option>
            <Option> White </Option>
            <Option> Black </Option>
            <Option> Red </Option>
            <Option> Blue </Option>
            <Option> Yellow </Option>
            <Option> Green </Option>
          </Select>

          <Select name="size" onChange={handleFilters}>
            <Option disabled selected>
              Size
            </Option>
            <Option> XS </Option>
            <Option> S </Option>
            <Option> M </Option>
            <Option> L </Option>
            <Option> XL </Option>
          </Select>
          <Filter> <FilterText>Sort by </FilterText>  </Filter>
          <Select onChange={(e) => setSort(e.target.value)}> 
            <Option value="newest">Newest  </Option>
              <Option value="asc">Price (asc) </Option>
              <Option value="desc">Price (desc)  </Option>
          
          </Select>
          </FilterContainer>


      
            
          </Container>
           </>
  )
}

export default Productsfilter
import { Add,Remove } from "@material-ui/icons";
import styled from "styled-components";
import Testimonials from '../components/Testimonials'
import Footer from "../components/Footer";
import Header from "../components/Header";
import { Link } from "react-router-dom";




const Container = styled.div`
// text-align: center;
// align-items: center;
// jusitfy-content: center;

`

const Wrapper = styled.div`
padding: 50px;
display: flex;
text-align: center;

`

const Imgcontainer = styled.div`
flex: 1;
`

const Image = styled.img`
margin-left: 10rem;
height: 50vh;
width: 80%;
object-width:cover;
`

const InfoContainer = styled.div`
flex: 1;
padding: 0px 50px;
margin-right: 5rem;


`

const Title = styled.h1`
font-weight: 200;
`

const Desc = styled.p`
margin: 20px 0px;
`

const Price = styled.span`
font-weight: 100;
font-size: 40px;
`

const FilterContainer = styled.div`
width: 50%;
margin: 30px 0px;
display: flex;
justify-content: space-between;



`

const Filter = styled.div`
display: flex;
align-items: center;
margin-left: 7rem;

`

const FilterTitle = styled.span`
font-size: 20px;
font-weight: 200;
`

const FilterColor = styled.div`
width: 20px;
height: 20px;
border-radius: 50%;
margin: 0px 5px;
background-color: ${props=>props.color};
`

const FilterSize = styled.select`
margin-left: 10px;
margin-right: 50px;
`

const FilterSizeOption = styled.option`

`

const Sku = styled.div`

`

const Cat = styled.div`

`

const Tag = styled.div`

`

const AddContainer = styled.div`
width: 50%;
display: flex;
align-items: center;
justify-content: space-between;

`

const AmountContainer = styled.div`
display: flex;
align-items: center;
font-weight: 700px;
margin-right: 5rem;

`
const Amount = styled.span`
width: 30px;
height: 30px;
border-radius: 10px;
border: 1px solid teal;
display: flex;
align-items: center;
justify-content: center;
margin: 0px 5px;
`
const Button = styled.button`
padding: 15px;
border: 1px sold teal;
cursor: pointer;
font-weight: 500;
background-color: #F86338;


&:hover{
    background-color: yellow;
}
`

const DetailContainer = styled.div`
margin-left: 10rem;
flex:1;`



const DescTitle1 = styled.h1``

const DescPara = styled.p`
font-size: 12px;
font-weight: 400;
font-family: 'DM Sans', sans-serif;
`
const DescTitle2 = styled.h5`
font-weight: bold;
font-family: 'Merriweather', serif;
`
const List = styled.div``
const DetailPara = styled.div`
margin-right: 10rem;
margin-bottom: 10rem;
flex:1;`

const TotalContainer = styled.div`
display: flex;
text-align: center;
align-items: center;
jusitfy-content: center;`









const Detail = () => {
  return (
    <Container>
      <Header />
      <Wrapper>
           <Imgcontainer> 
           <Image src="https://i.ibb.co/mhMxzFz/men-1.jpg" />
           </Imgcontainer>

           <InfoContainer>
               <Title> Classic Blouse IX   </Title>
               <Desc> Avaliability : 48 in stocks   </Desc>
               <Price> $1000  </Price>
               <Sku>Sku : AA0031 </Sku>
               <Cat> Category: Dresses  </Cat> 
               <Tag> Tags : Fashion, Classic, Blouses, Dresses  </Tag>

            <FilterContainer>
               <Filter> 
                    <FilterTitle> Color </FilterTitle>
                    <FilterColor color="black" />
                    <FilterColor color="darkblue" />
                    <FilterColor color="gray" />
                    <FilterColor color="red" />
                </Filter>

                <Filter> 
                    <FilterTitle> Size </FilterTitle>
                    <FilterSize> 
                    <FilterSizeOption> XS </FilterSizeOption>
                    <FilterSizeOption> S </FilterSizeOption>
                    <FilterSizeOption> M </FilterSizeOption>
                    <FilterSizeOption> L </FilterSizeOption>
                    <FilterSizeOption> XL </FilterSizeOption>
                
                    </FilterSize>
                </Filter>

            </FilterContainer>
                    <AddContainer>
                    <AmountContainer>
                    <Remove/>
                    <Amount> 1 </Amount>
                    <Add/>
                    </AmountContainer>
                    <Link to={`/cart`}> 
                    <Button> Add to Cart </Button>
                    </Link>
                    </AddContainer>
           </InfoContainer>
      </Wrapper>
      <TotalContainer>  
    <DetailContainer>
      <DescTitle1> Description </DescTitle1>
     
     <DescPara>
     Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.

    Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur
     </DescPara>
     </DetailContainer>

    <DetailPara> 
     <DescTitle2> Fabric Details </DescTitle2>

     <List> 100% Cotton</List>
     <List> Quick Dry</List>
     <List> Ties as Shoulder</List>
     <List> Accusantium doloremque </List>
     </DetailPara>
     </TotalContainer>

      <Testimonials />
      <Footer/>
    </Container>
  )
}

export default Detail
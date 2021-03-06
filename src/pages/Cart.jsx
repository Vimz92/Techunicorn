
import styled from "styled-components";
import Header from '../components/Header'
import Footer from "../components/Footer";
import HeroShop from "../components/HeroShop";

import { Add, Remove } from "@material-ui/icons";

const Container = styled.div`

`


const Wrapper = styled.div`
padding:20px;
margin-top: 25rem;
`

const Title = styled.h1`
font-weight: 300;
text-align: center;
`

const Top = styled.div`
display: flex;
align-items: center;
justify-content: space-between;
padding-top: 20px;

`

const TopButton = styled.button`
padding: 15px;
font-weight: 600;
cursor: pointer;
border: ${props=>props.type === "filled" && "none"};
background-color: ${props=>
    props.type === "filled" ? "black" : "transparent"};
color: ${props=>props.type === "filled" && "white"};
`


const TopTexts = styled.div`

`

const TopText = styled.span`
text-decoration: underline;
cursor: pointor;
margin: 0px 15px;
`

const Bottom = styled.div`
display: flex;
justify-content: space-between;

`

const Info = styled.div`
flex:3;
`

const Product = styled.div`
display: flex;
justify-content: space-between;
`

const ProductDetail = styled.div`
flex:2;
display: flex;
`

const Image = styled.img`
width: 300px;
`

const Details = styled.div`
padding: 20px;
display: flex;
flex-direction: column;
justify-content: space-around;
`

const ProductName = styled.span`

`

const ProductId = styled.span`

`

const ProductColor = styled.div`
width: 20px;
height: 20px;
border-radius: 50%;
background-color: ${props=>props.color};
`

const PriceDetail = styled.span`
flex:1;
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
`

const ProductSize = styled.div`

`
const ProductAmountContainer = styled.div`
display: flex;
align-items: center;
margin-bottom: 20px;
`
const ProductAmount = styled.div`
font-size: 24px;
margin: 5px;
`
const ProductPrice = styled.div`
font-size: 30px;
font-weight: 200;

`
const Hr = styled.hr`
background-color: black;
border: none;
height: 1px;
margin-bottom: 25px;
`
const Summary = styled.div`
flex:1;
border: 1px solid lightgray;
border-radius:10px;
padding: 25px;
height: 50vh;
margin-top: 20px;
`

const SummaryTitle = styled.h1`
font-weight: 200;
`

const SummaryItem = styled.div`
margin: 30px 0px;
display: flex;
justify-content: space-between;
font-weight: ${props=> props.type === "total" && "500"};
font-size: ${props=> props.type === "total" && "24px"};
`

const SummaryItemText = styled.span`

`

const SummaryItemPrice = styled.span`

`
const Button = styled.button`
width: 100%;
padding: 10px;
background-color: black;
color: white;
font-weight: 600;
`


const Cart = () => {
  return (
    <Container>
    <Header />
    <HeroShop />
    <Wrapper>
        <Title> YOUR BAG </Title>
        <Top> 
        <TopButton>CONTINUE SHOPPING</TopButton>
        <TopTexts> 
        <TopText> Shopping Bag(2)</TopText>
        <TopText> Your Wishlist(0)</TopText>
        </TopTexts> 
        <TopButton type="filled">CHECKOUT NOW </TopButton> 
        </Top>
        <Bottom>
          <Info> 
              <Product>
                  <ProductDetail>
                    <Image src="https://i.ibb.co/ZhjyGwr/reebok-removebg-preview.png" />
                      <Details>
                <ProductName> <b>Product: </b>  REEBOK THUNDER SHOES </ProductName>
                <ProductId> <b>ID:</b>  IMD56374830   </ProductId>
                <ProductColor color="black"/>
                <ProductSize> <b>Size:  </b> 37.5 </ProductSize>
                      </Details>
                  </ProductDetail>
                  <PriceDetail>
                     <ProductAmountContainer>
                         <Add />
                         <ProductAmount> 2 </ProductAmount>
                         <Remove />
                     </ProductAmountContainer>

                     <ProductPrice> $ 30 </ProductPrice>
                  </PriceDetail>
              </Product>

               <Hr />
               
              <Product>
                  <ProductDetail>
                    <Image src="https://i.ibb.co/fdy6xf9/hakura-removebg-preview.png" />
                      <Details>
                <ProductName> <b>Product: </b>  HAKURA TSHIRT </ProductName>
                <ProductId> <b>ID:</b>  IMD8544666   </ProductId>
                <ProductColor color="gray"/>
                <ProductSize> <b>Size:  </b> M </ProductSize>
                      </Details>
                  </ProductDetail>
                  <PriceDetail>
                     <ProductAmountContainer>
                         <Add />
                         <ProductAmount> 2 </ProductAmount>
                         <Remove />
                     </ProductAmountContainer>

                     <ProductPrice> $ 20 </ProductPrice>
                  </PriceDetail>
              </Product>


          </Info>    
          <Summary>
           <SummaryTitle>  ORDER SUMMARY    </SummaryTitle> 

           <SummaryItem>
           <SummaryItemText>Subtotal</SummaryItemText>
           <SummaryItemPrice> $ 80</SummaryItemPrice>
           </SummaryItem> 

           <SummaryItem>
           <SummaryItemText>Estimated Shipping</SummaryItemText>
           <SummaryItemPrice> $ 5.90</SummaryItemPrice>
           </SummaryItem> 
        

          <SummaryItem>
           <SummaryItemText>Shipping Discount</SummaryItemText>
           <SummaryItemPrice> $ -5.90</SummaryItemPrice>
           </SummaryItem> 

           <SummaryItem  type="total">
           <SummaryItemText>Total</SummaryItemText>
           <SummaryItemPrice> $ 80</SummaryItemPrice>
           </SummaryItem> 
            <Button>CHECKOUT NOW</Button>
          </Summary> 

        </Bottom>
    </Wrapper>
   cart
   <Footer />
    </Container>
  )
}

export default Cart
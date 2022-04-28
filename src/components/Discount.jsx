import styled from "styled-components";




const Container = styled.div`
height: 60vh;
background-color: #F86338;
display: flex;
place-items: center;
justify-content: center;
flex-wrap: wrap;
`

const Info = styled.div`
background-color: #F86338;
place-items: center;
justify-content: center;

`

const Text1 = styled.p`
background-color: #F86338;
display: flex;
place-items: center;
justify-content: center;
margin: 5px;

`

const Text2 = styled.h1`
background-color: #F86338;
margin: 5px;
font-size: 64px;
font-family: "Merriweather", serif;
font-weight: 700;

`
const ButtonInfo = styled.div`
background-color: #F86338;
display: flex;
place-items: center;
justify-content: center;
margin: 10px
`

const Button = styled.button`

border-radius: 5px;
padding: 10px 20px;



`

const Discount = () => {
  return (
    <Container>

    <Info>  
       <Text1> March Discount</Text1>

       <Text2>Up to 70% off</Text2>
    
   
    <ButtonInfo>
    <Button> Got it</Button>
    </ButtonInfo>

    </Info>
       

    </Container>
  )
}

export default Discount
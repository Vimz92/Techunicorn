import styled from "styled-components";
import { FavoriteBorderOutlined, ShoppingCartOutlined,PersonOutline } from "@material-ui/icons";
import {Badge} from '@material-ui/core';
import { Link } from "react-router-dom";

const Container = styled.div`
margin-left: 45px;
margin-top: 3rem;
height: 60px;
display: flex;
`;

//Left
const Left = styled.div`
flex: 1;
// background-color: green;
display: flex;
justify-content: center;
padding: 10px;
margin-right: 35rem;


`;

const Links = styled.div`
margin-left: 8rem;
margin-right: 40px;
font-size: 16px;
margin: 20px ;
`;

//Right
const Right = styled.div`
flex: 1;
display: flex;
align-items: center;
justify-content:space-around;

`;

const RightWrapper = styled.div`
padding: 10px;
display: flex;
font-size: 20px;
margin-left: 15px;
`; 

const MenuItem = styled.div`
margin-left: 30px;
`; 



const Navbar1 = () => {
  return (
    <Container>
        <Left> 
          <Link to={`/`}> 
        <Links> Home </Links></Link> 
        <Link to={`/shop`}> 
        <Links> Shop </Links> </Link> 
        <Link to={`/addtocart`}>
        <Links> Cart </Links></Link>
        <Link to={`/categories`}> 
        <Links> Products </Links></Link>
        </Left>

        <Right> 
           
         <RightWrapper>
             <MenuItem> 
        <FavoriteBorderOutlined />
            </MenuItem>
            
            <MenuItem> 
            <Link to={`/addtocart`}>
        <Badge badgeContent={3} color="primary">
        <ShoppingCartOutlined/>
        </Badge>
        </Link>
        </MenuItem>
        <MenuItem> 
        <Link to={`/login`}>
        <PersonOutline/></Link>
        </MenuItem>
        </RightWrapper>
          
       

        </Right>
   
    </Container>
  );
};

export default Navbar1;
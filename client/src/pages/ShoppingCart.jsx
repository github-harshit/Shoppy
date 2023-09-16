import React, { useEffect, useState } from 'react'; 
import styled from "styled-components"; 

import Navbar from "../components/Navbar"; 
import Announcement from "../components/Announcement"; 
import AddIcon from '@mui/icons-material/Add';
  import RemoveIcon from '@mui/icons-material/Remove';

  import Footer from '../components/Footer';
   import {useSelector} from "react-redux";
   import StripeCheckout from 'react-stripe-checkout'; 
    import { userRequest } from '../api';
     import { useNavigate } from 'react-router-dom';

  const Container = styled.div``;

const Wrapper = styled.div`
  padding: 20px;

`;

const Title = styled.h1`
  font-weight: 300;
  text-align: center;
`;

const Top = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px;
`;

const TopButton = styled.button`
  padding: 10px;
  font-weight: 600;
  cursor: pointer;
  border: ${(props) => props.type === "filled" && "none"};
  background-color: ${(props) =>
    props.type === "filled" ? "black" : "teal"};
  color: ${(props) => props.type === "filled" && "white"};
`;

const TopTexts = styled.div`
 
`;
const TopText = styled.span`
  text-decoration: underline;
  cursor: pointer;
  margin: 0px 10px;
`;

    const Bottom = styled.div`
     display:flex; 
     justify-content:space-between; `
     const Info = styled.div`
  flex: 3;
`;
     const Product = styled.div`
     display: flex;
     justify-content: space-between;
     
   `;
      const ProductDetail = styled.div`
      flex: 2;
      display: flex;
    `;
    
    const Image = styled.img`
      width: 200px;
    `;
    
    const Details = styled.div`
      padding: 20px;
      display: flex;
      flex-direction: column;
      justify-content: space-around;
    `;
    
    const ProductName = styled.span``;
    
    const ProductId = styled.span``;
    
    const ProductColor = styled.div`
      width: 20px;
      height: 20px;
      border-radius: 50%;
      background-color: ${(props) => props.color};
    `;
    
    const ProductSize = styled.span``;
    
    const PriceDetail = styled.div`
      flex: 1;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
    `;
    
    const ProductAmountContainer = styled.div`
      display: flex;
      align-items: center;
      margin-bottom: 20px;
    `;
    
    const ProductAmount = styled.div`
      font-size: 24px;
      margin: 5px;
    
    `;
    
    const ProductPrice = styled.div`
      font-size: 30px;
      font-weight: 200;
      `
    
    const Hr = styled.hr`
      background-color: #eee;
      border: none;
      height: 1px;
    `;
    
    const Summary = styled.div`
      flex: 1;
      border: 0.5px solid lightgray;
      border-radius: 10px;
      padding: 20px;
      height: 50vh;
    `;
    
    const SummaryTitle = styled.h1`
      font-weight: 200;
    `;
    
    const SummaryItem = styled.div`
      margin: 30px 0px;
      display: flex;
      justify-content: space-between;
      font-weight: ${(props) => props.type === "total" && "500"};
      font-size: ${(props) => props.type === "total" && "24px"};
    `;
    
    const SummaryItemText = styled.span``;
    
    const SummaryItemPrice = styled.span``;
    
    const Button = styled.button`
      width: 100%;
      padding: 10px;
      background-color: black;
      color: white;
      font-weight: 600;
    `;



function ShoppingCart() {
   const navigate = useNavigate(); 

   const key = 'pk_test_51NiYu1SII5NT03lNflTFzlrH8Tl07fO2cGNZEGbS4d36VbjMRrbPgqARqzxiiXvAOtlJVmIo2YMreU9ch7i1Fm8Q00De3KOTjH' 
  const [token, setToken] = useState(null); 

   const cartState = useSelector((state)=>{
   
     return   { products : state.cart.products, 
              quantity : state.cart.quantity, 
              total : state.cart.total, 
             }
   });

   const onToken = (token)=>{
        setToken(token); 
   }; 
   console.log(token); 
   useEffect(()=>{
     const makeRequest = async ()=>{
       try{
     const res = await userRequest.post("/checkout/payment", {
       tokenId : token.id, 
       amount : cartState.total, 

     });
     navigate("/success"); 
         
       }catch(err){
         console.log(err); 
       }
   }
    token && makeRequest(); 

     
   }, [token,cartState.total, navigate])
  return (
    <Container>
<Announcement/>
 <Navbar/>
 <Wrapper>
    <Title> Your Bag</Title>
     <Top>
         <TopButton>Continue Shopping</TopButton>
          
           <TopTexts>
            <TopText>ShoppingBag ({cartState.quantity}) </TopText>
             <TopText> Your Wishist</TopText>
           </TopTexts>
          
           <TopButton type="filled">Checkout Now </TopButton>
            
     </Top>
      <Bottom>
         <Info>
        {cartState.products  ? cartState.products.map((product)=>(
           <Product>
           <ProductDetail>
           <Image src= {product.img} />
               <Details>
                   <ProductName> <b>Product:</b>  {product.name } </ProductName>
                   <ProductId>     <b>ID:</b> {product._id} </ProductId>
                    <ProductColor/>
                     <ProductSize>  <b>Size:</b> {product.size} </ProductSize>

                     <PriceDetail>
               <ProductAmountContainer>
                 <AddIcon />
                 <ProductAmount>{product.quantity} </ProductAmount>
                 <RemoveIcon />
               </ProductAmountContainer>
               <ProductPrice> {product.price * product.quantity } </ProductPrice>
             </PriceDetail>
                </Details>
           </ProductDetail>
           </Product> 
        )) : <h1> Your Cart is Empty </h1>}

           </Info>
            {cartState.products.length===0 ? null : 
          <Summary>  <SummaryTitle>ORDER SUMMARY</SummaryTitle>
            <SummaryItem>
              <SummaryItemText>Subtotal</SummaryItemText>
              <SummaryItemPrice>$ {cartState.total}</SummaryItemPrice>
            </SummaryItem>
            <SummaryItem>
              <SummaryItemText>Estimated Shipping</SummaryItemText>
              <SummaryItemPrice>$ 5.90</SummaryItemPrice>
            </SummaryItem>
            <SummaryItem>
              <SummaryItemText>Shipping Discount</SummaryItemText>
              <SummaryItemPrice>$ -5.90</SummaryItemPrice>
            </SummaryItem>
            <SummaryItem type="total">
              <SummaryItemText>Total</SummaryItemText>
              <SummaryItemPrice>$ {cartState.total}</SummaryItemPrice>
            </SummaryItem>
            <StripeCheckout
    token = {onToken}
    stripeKey= {key}
    name="Shoppy"
    billingAddress
    shippingAddress
   
     amount = {cartState.total*100}>
      
    <button style={{
        border:"none", 
        width:120,
        borderRadius:5, 
        pdding:"20px", 
        backgroundColor:"black", 
        color:"white" 

    }}>  Pay Now 
        </button>   
    </StripeCheckout>
         </Summary>
}
      </Bottom>
 </Wrapper>
  <Footer/>
    </Container>
  )
}

export default ShoppingCart
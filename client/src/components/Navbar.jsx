import React from 'react'
import styled from "styled-components"
import SearchIcon from '@mui/icons-material/Search';
import Badge from '@mui/material/Badge';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import {useSelector, useDispatch} from "react-redux"; 
import {Link} from "react-router-dom"; 
 import {logout} from "../redux/userSlice"; 
import { CardTravelTwoTone, NoEncryption } from '@mui/icons-material';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
const Container = styled.div`
     height : 60px; 
    margin-bottom : 30px; 
    
`

const Wrapper = styled.div`
padding  : 10px 20px; 

 display: flex; 
 justify-content : space-between 

`
 const Left = styled.div`
 flex : 1; 
 display: flex; 
     
 `
 const Language = styled.div`
 display: flex; 
 align-items : center; 
 font-size: 14px;
 cursor : pointer
`
 const SearchContainer = styled.div`
  display: flex; 
  align-items: center; 
 
 padding : 4px; 
  margin-left : 25px; 

   
   `
  const Input = styled.input`
  

  `
 const Center  = styled.div`
 flex : 1; 
 display: flex; 
 justify-content: center; 
 align-items: center; 

 `
 const Logo  = styled.h1`
 `
 const  Right = styled.div`
 flex : 1; 
 display : flex; 
  align-items :  center; 
  justify-content : flex-end;
         
 `
  const MenuItem = styled.div`
   font-size : 18px;
   cursor: pointer; 
   margin-left: 25px; 
   font-weight:500; 
   text-decoration:none;  

   
   `

  
    
function Navbar() {
    const dispatch = useDispatch(); 
     const navigate = useNavigate(); 

    const [search, setSearch] = useState(null); 
     const handleChange = (event)=>{
       setSearch(event.target.value)
     }
      const handleSearch = ()=>{
         const item = search.toLowerCase(); 

          navigate(`/products/${item}`); 

      }


    const cart = useSelector((state)=>{
         
      const obj  =    { cart :   state.cart.quantity, 
           user: state.user.currentUser
         } 
          return obj; 
    }); 


 const handleLogOut = (event)=>{
    event.preventDefault(); 
    dispatch(logout()); 
   
    
 }
  return (
    <Container>
        <Wrapper>
           <Left>
             <Language>
                EN
             </Language>
              <SearchContainer>
                       
               <Input value={search} onChange={handleChange}>
      
               </Input> 
               <SearchIcon style={{color: 'gray', fontSize: 24, cursor:'pointer'}} onClick={handleSearch} />
              </SearchContainer>
           </Left>
            <Center>
                <Link style={{
                  textDecoration:"none", 

                  
                }} to="/">
                  <Logo > Shoppy </Logo>
                </Link>
             
            </Center>
             <Right>
                {cart.user?null :  <Link style={{
                  textDecoration:"none", 

                  
                }} to="/register"> 
                 <MenuItem>Register</MenuItem>
                </Link> }
               
                 {cart.user ? null : <Link style={{
                  textDecoration:"none", 

                  
                }} to="/login">
               <MenuItem>Login</MenuItem> </Link>}
               

              
               {cart.user  ? <Link style={{
                  textDecoration:"none", 

                  
                }} onClick={handleLogOut} to="/">
               <MenuItem>Logout</MenuItem>

               </Link> : null } 
               
              
                 <Link  to="/cart"> 
                 <MenuItem>
                <Badge  badgeContent={cart.cart} color="primary">
             <ShoppingCartIcon />

              

             </Badge>
                
                </MenuItem>
                 
                 </Link>
                
             
           
             </Right>
        </Wrapper>
   
    </Container>
  )
}

export default Navbar
import React from 'react'
import styled from "styled-components"; 
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import SearchIcon from '@mui/icons-material/Search';
import FavoriteIcon from '@mui/icons-material/Favorite';
 import {Link} from "react-router-dom"; 
  import { useDispatch } from 'react-redux';
   import { addProduct } from '../redux/cartSlice';
import { InsertEmoticonTwoTone } from '@mui/icons-material';
const Info = styled.div`
  display: flex; 
   opacity : 0; 

  justify-content: center; 
align-items: center; 
 width:100%; 
 height: 100%; 
 position: absolute; 
 top: 0; 
 left: 0; 
 background-color: rgba(0, 0, 0, 0.2);
 z-index: 3;
  transition: all 0.5s ease  `; 
const Container = styled.div`
flex: 1; 
margin: 5px;
min-width: 280px; 
height: 350px; 
display:flex; 
align-items: center; 
justify-content: center; 
background-color: #f5fdfd; 
position: relative; 


 &:hover ${Info} {
    opacity : 1; 
     
 }





`
 const Circle = styled.div`
  width: 200px; 
  height: 200px;
  border-radius: 50%;
  background-color: white; 
  position: absolute; 


  
 `; 
 
 const Icon = styled.div`
 width: 40px; 
 height: 40px; 
 border-radius: 50%; 
 background-color: white; 
 margin:10px; 
 display: flex; 
 justify-content: center; 
 align-items: center; 
 transition: all 0.5s ease; 

&:hover{
     background-color: #e9f5f5;
      transform : scale(1.1); 

}
 cursor: pointer; 

 `; 
 const Image = styled.img`
 height: 75%; 
 z-index:2; 
`; 
 

function ProductItem({item}) {
   const dispatch = useDispatch(); 
    
   const handleCart =()=>{
    const pro = {...item, quantity:1}; 
    dispatch(addProduct(pro)); 
   }
  
  return (  
    <Container>
        <Circle/>
        <Image src={item.img}/>
        <Info>
             <Icon onClick={handleCart}>

                <ShoppingCartIcon/>
             </Icon>
              <Icon>
                <Link to= {`/product/${item._id}`}>
                  <SearchIcon/>
                </Link>
                
              </Icon>
               <Icon>
                 <FavoriteIcon/>
               </Icon>

         </Info>    

    </Container>
  )
}

export default ProductItem
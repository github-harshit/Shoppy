import React from 'react'; 
import styled from "styled-components"; 
 import {Link} from "react-router-dom"
 const Container = styled.div`
 flex: 1; 
 margin: 3px; 
 height: 70vh; 
  position: relative; 
  
  `
   const Image  = styled.img`
    width: 100%; 
     height: 100%; 
     object-fit : cover; 
    `
     
   const Info = styled.div`
   width: 100%; 
   height: 100%; 
    position: absolute; 
     top: 0; 
     left: 0; 
     display: flex; 
     flex-direction: column; 
     align-items:center; 
      justify-content: center; 

    
  
     border: 1px solid black; 
   `
    const Title  = styled.h1`
     color: white; 
     margin-bottom: 20px; 

    `
     const Button  = styled.button`
      border: none; 
      padding: 10px; 
      color: gray; 
       background-color: white; 
        cursor: pointer; 
        font-weight: 60; 


     `
     

function CategoryItem({item}) {
  return ( <Container>
    
  <Link to={`/products/${item.cat}`}>
    
       
       <Image src= {item.img} />
       <Info>
        <Title>{item.title}</Title>
         <Button>Shop Now </Button>
       
       </Info>
        
        
       
      
    
      </Link>
       </Container>
  )
}

export default CategoryItem
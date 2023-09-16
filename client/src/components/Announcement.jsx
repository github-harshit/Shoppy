import React from 'react'
import styled from "styled-components"; 
 const Container = styled.div`
  height: 30px; 
  background-color: teal; 
  color: white; 
   display: flex; 
  align-items: center; 
  justify-content:center; 
  font-size: 14;

  `
function Announcement() {
  return (
     <Container>
         Super Deal! Free Shipping on order over 500 Rs 
     </Container>
  )
}

export default Announcement
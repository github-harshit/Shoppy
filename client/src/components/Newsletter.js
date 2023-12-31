import React from 'react'; 
import styled from "styled-components"; 
import SendIcon from '@mui/icons-material/Send';
const Container = styled.div`
 height: 60vh; 
 background-color: #fcf5f5;
 display: flex; 
  flex-direction: column; 
 justify-content: center; 
 align-items:  center;`
const Title = styled.h1`
 font-size: 70px;
  margin-bottom:20px `
const Desc = styled.div`
  font-size: 24px; 
  font-weight:300; 
  margin-bottom: 20px;  
`
const InputContainer = styled.div`
 width: 50%; 
 height: 40px; 
 background-color: white; 
  display: flex;
   justify-content: space-between; 
   align-itmes: center; 
    border: 1px solid lightgray;  `


const Input= styled.input`
 border: none; 
 flex: 8; 
  padding-left: 20px; 
 `; 
const Button = styled.button`
 flex: 1; 
  border: none; 
  background-color: teal
   color: white`


function Newsletter() {
  return (
   <Container>
    <Title>Newsletter</Title>
     <Desc>Get Timely Updates from your favourite Fashion Influencer </Desc>
      <InputContainer> 
       <Input placeholder='Your Email'/>
       <Button>
        <SendIcon/>
         </Button>
      </InputContainer>
   </Container>
  )
}

export default Newsletter
import React from 'react' 
import styled from "styled-components";
 import {ArrowLeftOutlined, ArrowRightOutlined} from "@mui/icons-material"
 import image1  from "../images/women2.jpg"; 
  import { useState } from 'react';
   import { sliderItems } from "../data.js";
    import {useEffect} from "react"
import { useNavigate } from 'react-router-dom';
 const Container  = styled.div`
  width: 100vw; 
  height: 100vh; 
  display: flex;

   position: relative; 
   overflow: hidden; 
   

 `; 
 const Arrow = styled.div`
  width: 50px; 
  height: 50px; 
  background-color: #fff7f7; 
  border-radius: 50%; 
  display: flex; 
  justify-content: center; 
  align-items: center; 
  position: absolute;
   border : 1px solid black;  
   top: 0;  
   bottom: 0; 

    margin: auto; 
    cursor: pointer;  
  



  

  left: ${props=>props.$direction==='left' && "10px"}; 
  right:  ${props=>props.$direction==='right' && "10px"}; 

 `
  const Wrapper= styled.div` 
  display: flex; 
   height: 100%; 
    transition: all 1.5s ease; 
  transform: translateX(${(props) => props.$slideindex * -100}vw);
    
   
  
   

  `
   const Slide = styled.div`
    height: 100vh; 
    width: 100vw; 
    
   
    display: flex;
    align-items: center; 
    background-color: ${props=>props.$bg}`; 
     
    const ImgContainer = styled.div`
    
      height: 100%;
       flex: 1;
    
    `
     const Image = styled.img`
      height:80%
     `
     const InfoContainer = styled.div`
     flex: 1; 
     padding: 50px; 

     
     `
      const Title = styled.h1`
       font-size: 70px' 
      `
      const Desc = styled.p`
      margin: 50px 0px; 
      font-size: 20px; 
      font-weight: 500;
      letter-spacing : 3px; 

      `
       const Button  = styled.button`
        padding: 10px; 
        font-size: 20px; 
        background-color: transparent; 
        cursor: pointer; 
       `
  

function Slider() {
   const navigate = useNavigate(); 
     const [slideIndex, setSlideIndex] = useState(0); 
     useEffect(()=>{
      console.log(slideIndex)
   }, )

    const handleClick = (direction)=>{
         if(direction==="left"){
            console.log("left arrow is clicked")
             setSlideIndex(slideIndex>0 ? slideIndex-1 : 2); 
             
         }else if(direction==="right") {
             console.log('right arrow is cliked ')
             setSlideIndex(slideIndex<2 ? slideIndex+1: 0); 
          
         }
     
    }
     const handleShopping = (event, cat)=>{
       event.preventDefault();
       navigate(`/products/${cat}`)
       
       
     }
  return (
    <Container>
        <Arrow $direction='left' onClick={()=>handleClick("left")}>
          <ArrowLeftOutlined/>
        </Arrow>
         <Wrapper $slideindex = {slideIndex}>
             
             {sliderItems.map((item)=>(
                <Slide $bg = {item.bg}>
                    <ImgContainer>
                        <Image src={item.img}></Image>
                    </ImgContainer>
                    <InfoContainer>
                        <Title> {item.title} </Title>
                         <Desc>
                             {item.desc}
                         </Desc>
                          <Button onClick={(event)=>handleShopping(event, item.cat)}> Shop Now </Button>
                    </InfoContainer>
                </Slide>
             ))}
           
         </Wrapper>
         <Arrow $direction='right' onClick={()=>handleClick("right")}>
            <ArrowRightOutlined/>
         </Arrow>

    </Container>
  )
}

export default Slider
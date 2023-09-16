import React from 'react'; 
import styled from "styled-components"; 
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import RoomIcon from '@mui/icons-material/Room';
import PhoneIcon from '@mui/icons-material/Phone';
import MailIcon from '@mui/icons-material/Mail';
const Container  = styled.div`
 display: flex; `; 
const Left  = styled.div`
 flex: 1; 
 display: flex; 
 flex-direction: column; 
  padding: 20px; 

 `; 
  const Logo = styled.h1``; 
  const Desc = styled.p`
   margin: 20px 40px`; 
  const SocialContainer = styled.div`
   display: flex;
   margin-left:25px;  `; 
  const SocialIcon = styled.div`
  width: 40px; 
  height: 40px;
  border-radius: 50%; 
   background-color: ${props=>props.color}; 
  
   color: white; 
    display: flex; 
    justify-content: center; 
    align-items: center; ' 
  `; 
const Center  = styled.div`
 flex: 1
  padding: 20px; `; 

  const Title = styled.h3`
  margin-bottom:30px; `
   const List = styled.ul`
   argin:0; 
   padding:0; 
   lis-style: none; 
   display:flex; 
   flex-wrap: wrap; `
    const ListItem = styled.li`
     width:50%; 
     margin-bottom:10px; 
    `
const Right  = styled.div`
 flex: 1
  padding:20px; `; 

  const ContactItem  = styled.div`
   margin-bottom:20px; 
   display:flex; 
   align-items: center; `

const Payment = styled.img`
width: 50%`

function Footer() {
  return (
   <Container>
    <Left>
        <Logo></Logo>
         <Desc> "Welcome to our online shopping paradise, where you'll find curated collections of the latest trends, 
          timeless classics, and everything in between. Enjoy a seamless and secure shopping experience with us,
           where your satisfaction is our top priority</Desc>
          <SocialContainer>
            <SocialIcon color="#3B5999">
                <FacebookIcon/>
            </SocialIcon>
            <SocialIcon color="#c13584">
                <InstagramIcon/>
            </SocialIcon>
            <SocialIcon color= "#55ACEE">
                <TwitterIcon/>
            </SocialIcon>
          </SocialContainer>
    </Left>
    <Center>
        <Title> Useful Links</Title>
         <List>
         <ListItem>Home</ListItem>
          <ListItem>Cart</ListItem>
          <ListItem>Man Fashion</ListItem>
          <ListItem>Woman Fashion</ListItem>
          <ListItem>Accessories</ListItem>
          <ListItem>My Account</ListItem>
          <ListItem>Order Tracking</ListItem>
          <ListItem>Wishlist</ListItem>
          <ListItem>Wishlist</ListItem>
          <ListItem>Terms</ListItem>

         </List>
    </Center>
     <Right>
<Title> Contact</Title>
<ContactItem>
          <RoomIcon style={{marginRight:"10px"}}/>  Haldwani,Nanital,Uttarakhand 
        </ContactItem>
        <ContactItem>
          <PhoneIcon style={{marginRight:"10px"}}/> +91 9887729867
        </ContactItem>
        <ContactItem>
          <MailIcon style={{marginRight:"10px"}} /> harshitjoshi250@gmail.com
        </ContactItem>
        <Payment src="https://i.ibb.co/Qfvn4z6/payment.png" />
      </Right>
     
   </Container>
  )
}

export default Footer
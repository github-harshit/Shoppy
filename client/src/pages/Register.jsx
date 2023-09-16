import React from 'react';
import styled from "styled-components"; 
 import {useState} from "react"; 
import axios from "axios"; 
import {useNavigate, Link} from "react-router-dom";




const Container = styled.div`
 width:100vw;
 height: 100vh;
 background: linear-gradient(
    rgba(255, 255, 255, 0.5),
    rgba(255, 255, 255, 0.5)
  ),
  url("https://images.pexels.com/photos/6984661/pexels-photo-6984661.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940")
    center;
     background-size: cover; 
     display:flex; 
     align-items:center; 
     justify-content:center; 
      `; 
const Wrapper  = styled.div`
   padding:20px; 
   width:40%;
   background-color:white; 


   `; 
const Title = styled.h1`
 font-size:24px; 
 font-weight:300;`; 
const Form = styled.form`
 display:flex; 
 flex-wrap:wrap;
 `; 
const Input = styled.input`
 flex:1; 
 min-width:40%; 
 margin:20px 10px 0px 0px;
  padding:10px;  
 `; 
const Agreement = styled.span`
font-size:12px; 
margin:20px 10px; `
 
const Button = styled.button`
 width:40%; 
 border:none; 
 padding:15px 20px;
 background-color:teal;
 color:white;
 cursor:pointer;  
 `;
 


function Register() {
   const navigate = useNavigate(); 


   const [state, setState]= useState({
    firstName :  "", 
    lastName : "", 
    username: "", 
    email: "", 
    password: "", 
    confirmPassword: "",


   }); 
   const handleChange = (event)=>{
     setState({...state, [event.target.name] : event.target.value } )
     
   }
    const handleSubmit = async (event)=>{
     
       event.preventDefault(); 
        
        try{
          const response = await fetch("http://localhost:8000/api/v1/auth/register", {
            method: 'POST', // Specify the HTTP method
            headers: {
              'Content-Type': 'application/json', // Set the content type to JSON
              // You can include additional headers if needed, e.g., authorization headers
            },
            body: JSON.stringify(state),
            mode: 'cors' // Convert the data to JSON format
          });
           if(response.status===200){
             navigate("/login"); 
           }


           
        }catch(err){
           console.log(err); 

        }
       
      
       

       
    }
  return (

   <Container>
    <Wrapper> 
         <Title>Create An Account </Title>
          <Form onSubmit={handleSubmit} >
            <Input placeholder= "First Name" name='firstName' onChange={handleChange} ></Input>
             <Input placeholder = 'Last Name'name= "lastName" onChange={handleChange} ></Input>
             <Input placeholder="Username" name= "username" onChange={handleChange} />
          <Input placeholder="Email" name= "email" onChange={handleChange} />
          <Input placeholder="Password" name= "password" onChange={handleChange} />
          <Input placeholder="Confirm Password" name="confirmPassword" onChange={handleChange} />
          <Agreement>
            By creating an account, I consent to the processing of my personal
            data in accordance with the <b>PRIVACY POLICY</b>
          </Agreement>
          <Button>CREATE</Button>
           <Link to="/login"> Already have an account </Link>
           
          </Form>
    </Wrapper>
   </Container>
  )
}

export default Register
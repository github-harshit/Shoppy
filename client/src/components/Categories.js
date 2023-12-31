import React from 'react'; 
import styled from "styled-components";
 import {categories} from "../data.js" 
 import CategoryItem from './CategoryItem';
const Container  = styled.div`
 display: flex; 
 justify-content: space-between; 

`

function Categories() {
     return (
   <Container>
    {categories.map((item)=>{
         return (<CategoryItem item = {item} />)
    })}
   </Container>
     )
}

export default Categories   
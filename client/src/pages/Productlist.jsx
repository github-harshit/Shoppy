import React from 'react'; 
import styled from "styled-components"; 
import Navbar from "../components/Navbar"; 
import Announcement from "../components/Announcement"; 
import Products from '../components/Products';
 import Newsletter from '../components/Newsletter';
  import Footer from '../components/Footer';
import { useLocation } from 'react-router-dom';
 import {useState} from "react"; 
const Container = styled.div``
 const Title = styled.h1`
 text-align: center; 
 `; 
 const FilterContainer = styled.div`
 display:flex; 
 justify-content:space-between;  `
  const Filter = styled.div`
  margin:20px; `
   const FilterText = styled.span`
   font-size: 20px;
    font-weight: 600; 
     margin-right: 20px;  
   `
    const Select = styled.select`
     padding: 10px; 
     margin-right: 20px;  `; 
    const Option = styled.option`
    `; 

function Productlist() {
   const [filter, setFilter] = useState({});
   const [sort, setSort] = useState("newest") 

   const location = useLocation(); 
   const cat  = location.pathname.split("/")[2]; 
    const handleFilters = (event)=>{
       const value  = event.target.value; 
       setFilter({
        ...filter,
        [event.target.name] : value, 
 
      }); 
    }
      

  

  return (
    <Container>
        <Announcement/>
        <Navbar/>
      
        <FilterContainer>
            <Filter><FilterText>FilterProducts</FilterText>
            <Select  name = "color" onChange={handleFilters}>
                <Option disabled  >
                    Color
                </Option>
                 <Option>white</Option>
                 <Option>black</Option>
                 <Option>red</Option>
                 <Option>blue</Option>
                 <Option>yellow</Option>
                 <Option>beige </Option>
            </Select>
            <Select name= "size" onChange = {handleFilters}  >
                <Option disabled   >
                    Size
                </Option>
                <Option>XS</Option>
                 <Option>S</Option>
                 <Option>M</Option>
                 <Option>L</Option>
                 <Option>XL</Option>
                 <Option>XXL</Option>
                 
            </Select>
            </Filter>
            <Filter><FilterText>Sort products </FilterText>
             <Select onChange={(e)=> setSort(e.target.value) }>
            <Option value="newest" > Newest</Option> 
            <Option value = "asc">Price(asc)</Option>   
            <Option value= 'desc'>Price(desc)</Option>
           
            </Select></Filter>
           
        </FilterContainer>
        <Products filter = {filter} cat= {cat} sort= {sort} />
        <Newsletter/>
        <Footer/>
    </Container>
  )
}

export default Productlist
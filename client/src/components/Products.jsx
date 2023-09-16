import React from 'react'; 
import styled from "styled-components"; 
 import {popularProducts} from "../data.js"; 
 import ProductItem from './ProductItem';
  import {useState, useEffect} from "react";
  import axios from "axios" 
 const Container = styled.div`
  display : flex; 
  flex-wrap: wrap; 
justify-content: space-between; 

 `


function Products({cat, filter, sort}) {
   const [products, setProducts] = useState([]);
   const [filterProducts, setFilterProducts] = useState([]);
 


    useEffect(()=>{
       const getProducts = async ()=>{
           try{
             const res = await axios.get(
              cat
               ? `http://localhost:8000/api/v1/products?category=${cat}` 
              : "http://localhost:8000/api/v1/products" ); 
               
             setProducts(res.data.products)
           } catch(err){
             console.log(err); 
           }
       }
        getProducts(); 
       
    }, [cat])

    useEffect(()=>{
      cat && 
      setFilterProducts(
        products.filter(item=>Object.entries(filter).every(([key, value])=>
        item[key].includes(value)))
      )
       
    }, [products, cat, filter]); 


    useEffect(()=>{
       if(sort==="newest" ){
         setFilterProducts((prev)=>
         [...prev].sort((a, b)=>a.createdAt-b.createdAt))
       }else if(sort==='asc'){
         setFilterProducts((prev)=>
         [...prev].sort((a,b)=>a.price-b.price))
       }else{
         setFilterProducts((prev)=>
         [...prev].sort((a,b)=>b.price-a.price))
       }
       
    }, [sort])
   
  return (
    <Container>
        {cat ? filterProducts.map((item)=>{
             return ( <ProductItem key={item.id} item= {item}/>)
        })
       : products.slice(0, 10).map((item)=> <ProductItem key= {item.id} item = {item}></ProductItem>) }
    </Container>
  )
}

export default Products;
 



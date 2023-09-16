import React from 'react'
import styled from "styled-components"; 
import {useState, useEffect} from "react"
import Navbar from "../components/Navbar"; 
import Announcement from "../components/Announcement"; 
import Newsletter from '../components/Newsletter';
  import Footer from '../components/Footer';
  import AddIcon from '@mui/icons-material/Add';
  import RemoveIcon from '@mui/icons-material/Remove';
   import { useLocation } from 'react-router-dom';
    import { publicRequest } from '../api';
import { Key } from '@mui/icons-material';
 import { useDispatch } from 'react-redux';
  import { addProduct } from '../redux/cartSlice';
  const Container = styled.div``;
  const Wrapper = styled.div`
  padding:50px; 
  display:flex;`;
  const ImgContainer = styled.div`
   flex: 1; `
  const Image = styled.img`
   width:100%;
   height:90vh; 
   object-fit: cover;  `;
  const InfoContainer = styled.div`
  flex:1; `;
  const Title = styled.h1`
  font-weight:200px;
  margin:0 10px; 
  `;
  const Desc = styled.p
  `
  margin: 20px 10px; `;
  const Price = styled.span`
   font-weight:100;
    font-size:40px;
    margin:0 10px; `

    const FilterContainer = styled.div`
     width:50%; 
     margin: 30px 10px; 
     display:flex;
     justify-content:space-between; `
    const Filter = styled.div`
    display: flex;
  align-items: center;
  margin-right: 10px;  `;
    const FilterTitle= styled.span`
    font-size: 20px;
    font-weight: 200;
    margin:0px 10px; `;
    const FilterColor = styled.div`
    width: 20px;
    height: 20px;
    border-radius: 50%;
    background-color: ${(props) => props.color};
    margin: 0px 5px;
    cursor: pointer;`;
    const FilterSize = styled.select`
     magin-left:10px;
      padding:5px; `;
     const FilterSizeOption = styled.option``; 

     const AddContainer = styled.div`
    width: 50%;
    display: flex;
    align-items: center;
    justify-content: space-between;
 
`;

const AmountContainer = styled.div`
  display: flex;
  align-items: center;
  font-weight: 700;
`;

const Amount = styled.span`
  width: 30px;
  height: 30px;
  border-radius: 10px;
  border: 1px solid teal;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0px 5px;
`;

const Button = styled.button`
  padding: 15px;
  border: 2px solid teal;
  background-color: white;
  cursor: pointer;
  font-weight: 500;

  &:hover{
      background-color: #f8f4f4;
  }
`
    
   

  

function ProductDesc() {
   const dispatch = useDispatch(); 
   const location = useLocation(); 
   const id = location.pathname.split("/")[2]; 
   const [product, setProduct] = useState({}); 
    const [quantity, setQuantity] = useState(1); 
     const [color, setColor] = useState(null); 
     const [size, setSize]= useState(null); 

     const handleQuantity= (type)=>{
        if(type==="dec"){
          if(quantity>=1){
              setQuantity(quantity-1); 
          }
          
        }else if(type==="inc"){
           setQuantity(quantity+1)
        }
     }
      const handleClick = ()=>{
         dispatch(addProduct({...product, quantity} ))
         
      }
    useEffect(()=>{
     const getProduct = async ()=>{
       try{
         const res =  await publicRequest.get("/products/" + id); 
        setProduct(res.data.product); 
       }catch(error){
         console.log(error); 

       }
     }
      getProduct(); 

   }, [id])
  return (
    <Container>
        <Announcement/>
        <Navbar/>
        <Wrapper>
            <ImgContainer>
              <Image src= {product.img} />
              
            </ImgContainer>
             <InfoContainer>
                <Title>{product.title}</Title>
                 <Desc>
                 {product.desc}
                 </Desc>
                  <Price>{product.price} </Price>
                   <FilterContainer>
                    <Filter>
                    <FilterTitle>Color</FilterTitle>
                    <Filter></Filter>
                        {product.color ? product.color.map((c)=>
                           <FilterColor color={c} key={c} onClick={()=>setColor(c)}> </FilterColor>
                         ) : null}

                    </Filter>
                    <Filter>
                        <FilterTitle>Size</FilterTitle>
                        <FilterSize onChange={(e)=>setSize(e.target.value)}>
                          {product.size ? product.size.map((s)=>
                             <FilterSizeOption key={s} > {s} </FilterSizeOption>
                          ) : null}

                        </FilterSize>
                        
                       
                    </Filter>

                   </FilterContainer>

                   <AddContainer>
            <AmountContainer>
              <RemoveIcon onClick={()=>handleQuantity("dec")} />
              <Amount>{quantity} </Amount>
              <AddIcon onClick={()=>handleQuantity("inc")} />
            </AmountContainer>
            <Button onClick={handleClick}>ADD TO CART</Button>
          </AddContainer>
             </InfoContainer>
        </Wrapper>
        <Newsletter/>
        <Footer/>
        
    </Container>
  )
}

export default ProductDesc; 
import React, {useState, useEffect} from 'react'; 
import StripeCheckout from "react-stripe-checkout"; 
import axios from "axios"; 

const Key  = "pk_test_51NiYu1SII5NT03lNflTFzlrH8Tl07fO2cGNZEGbS4d36VbjMRrbPgqARqzxiiXvAOtlJVmIo2YMreU9ch7i1Fm8Q00De3KOTjH"

function Pay() {
     const [stripeToken , setStripeToken] = useState(null); 

     const onToken  = (token)=>{
         setStripeToken(token); 

         
     }
      useEffect(()=>{
         const makeRequest = async ()=>{
             try{
                const res = await  axios.post("http://localhost:8000/api/v1/checkout/payment", {
                     tokenId : stripeToken.id, 
                     amount :2000
                })
                console.log(res.data); 
                 
             }catch(error){
                 console.log(error); 

             }
         }

         if(stripeToken) { 
            makeRequest(); 
         }
      }, [stripeToken])
  return (
    <div style= {{
         height:"100vh", 
         display:"flex", 
         alignItems:"center", 
          justifyContent : "center",       
    }}>
    <StripeCheckout
    token = {onToken}
    stripeKey= {Key}
    name="Shoppy"
    billingAddress
    shippingAddress
    description='Your total is 20$'
     amount = {2000}>
      
    <button style={{
        border:"none", 
        width:120,
        borderRadius:5, 
        pdding:"20px", 
        backgroundColor:"black", 
        color:"white" 

    }}>  Pay Now 
        </button>   
    </StripeCheckout>
     
    </div>
  )
}

export default Pay
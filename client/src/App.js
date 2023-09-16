
import Home from "./pages/Home.jsx"; 
import Productlist from "./pages/Productlist.jsx";
import ProductDesc from "./pages/ProductDesc.jsx";
 import Register from "./pages/Register.jsx";
  import Login from "./pages/Login.jsx"; 
  import ShoppingCart from "./pages/ShoppingCart.jsx";
  import {Routes, Route, Navigate } from "react-router-dom"; 
  import {useSelector} from "react-redux"; 
   import Success from "./components/Success.jsx"; 


function App() {
   const user =  useSelector((state)=>{
     return state.user.currentUser 
   }) ; 
    
   

    console.log("user: ", user); 
    

      
   let  flag = false; ; 
    if(user!=null && user.hasOwnProperty("user")){
       flag = true; 
       
    }


  return (
    <>

    <Routes>
      <Route  exact path="/" element={<Home/>} ></Route>
        <Route exact path="/products/:category" element = {<Productlist/>}></Route>
        <Route  exact path= "/product/:id" element = {<ProductDesc/>}></Route>
        <Route exact path= "/cart" element = {<ShoppingCart/>}></Route>
         
        <Route path="/register" element={flag===false  ? <Register /> : <Navigate to="/" />} />
         
        <Route path="/login" element={flag===false  ? <Login /> : <Navigate to="/" />} />
        
        <Route  exact path= "/success" element={<Success/>} > </Route>
        

    </Routes>
    </>
  );
}
  

export default App;

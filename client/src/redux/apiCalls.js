import { loginFailure, loginStart, loginSuccess } from "./userSlice";
import { publicRequest } from "../api";
 export const login = async(dispatch, user)=>{
     dispatch(loginStart()); 
      try{
        
         const res = await publicRequest.post("./auth/login", user);
        
         if(res.data.status===200){
             dispatch(loginSuccess(res.data)); 
         }else if (res.data.status===400){
            dispatch(loginFailure());
         }
         
        

         
      }catch(err){
         dispatch(loginFailure());
      }
 }
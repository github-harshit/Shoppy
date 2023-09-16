import axios from "axios"; 
import { useSelector } from "react-redux"; 






 


const base_url = "http://localhost:8000/api/v1/"; 
 const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY0ZTY0MWI0NTc0YWRhZmI3ZThlN2YxOSIsImlzQWRtaW4iOmZhbHNlLCJpYXQiOjE2OTMxNjI2ODIsImV4cCI6MTY5MzQyMTg4Mn0.hUmweUN2ZPJfCahi-qpPk9Q8yLJ6W2nl-7WEZ1xqwE8"
 
 export const publicRequest = axios.create({
     baseURL : base_url, 

}); 
export const userRequest = axios.create({
     baseURL : base_url, 
     header : {token:`Bearer${token}`}
     
}); 

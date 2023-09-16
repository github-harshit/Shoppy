const express= require("express"); 
const router = express.Router(); 
const User = require("../models/User.js"); 
const CryptoJS = require("crypto-js"); 
 const jwt = require("jsonwebtoken"); 

// register 

router.post("/register", async (req, res)=>{
    const password =  req.body.password; 
    const confirmPassword =  req.body.confirmPassword;
    
     
        try{
            if(password!==confirmPassword){
                 res.json({
                     status: 400, 
                     msg : "Password and ConfirmPasword do not match "
                 })
                  return; 
                  
                
            }
            const newUser = new User({
                username:req.body.username, 
                email: req.body.email, 
                 
            
                password:CryptoJS.AES.encrypt(req.body.password, process.env.SECRET_KEY).toString() 
             }); 


             const savedUser  = await newUser.save(); 
             res.json({
                 status:201, 
                 user:savedUser, 
                 msg:"Successfully registerd a user "
             })
        }catch(err){
             const errMsg = err.toString(); 
             res.json({
                 status:500,
                 msg : errMsg
             })
        }

        
})

// login 
router.post("/login", async (req, res)=>{
     try { 
        const user = await User.findOne({username:req.body.username}); 
        if(!user){
             res.json({
                 status:400, 
                 msg: 'Wrong Credentials'
             })
        }
         const hashedPassword = CryptoJS.AES.decrypt(user.password, process.env.SECRET_KEY);
          const passwordDecrypted = hashedPassword.toString(CryptoJS.enc.Utf8);
          const accessToken = jwt.sign({
              id: user._id, 
              isAdmin : user.isAdmin
          }, process.env.JWT_KEY, 
          {expiresIn : "3d"}
          )
          const {password, ...others} = user._doc; 
          
        if(req.body.password===passwordDecrypted){
             res.json({
                 status:200,
                 user:others, 
                 msg:"Suceesfully retrived user ", 
                 token:accessToken
             }); 
             
        }else{
            res.json({
                status:400, 
                msg: 'Wrong Credentials'
            })
             
        }
         
     }catch(err){
        res.json({
            status:500,
            errMsg : err
        })
   }
    
     
})
module.exports= router; 
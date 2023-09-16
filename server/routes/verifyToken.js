const jwt = require("jsonwebtoken"); 
const verifyToken = (req, res, next)=>{
     const authHeader = req.headers.token; 
     if(authHeader){
         const token = authHeader.split(" ")[1]; 
         jwt.verify(token, process.env.JWT_KEY, (err, user)=>{
             if(err){
                 res.json({
                     status: 403, 
                     msg:'You are not authenticated'
                 })
             }

             req.user = user; 
             next(); 
         })
         
     }else{
         return res.json({
             status:401, 
             msg: "Error is missing"
         })
     }
    }
      const verifyTokenAndAuthorization = (req, res, next)=>{
         verifyToken(req, res, ()=>{
             if(req.user.id===req.params.id || req.user.isAdmin){
                 next(); 
             }else{
                 res.json({
                     status:403, 
                     msg: 'You are not allowed to do that'
                 })
             }
         })
      }

      const verifyTokenAndAdmin  = (req, res, next)=>{
         verifyToken(req, res , ()=>{
             if(req.user.isAdmin){
                 next(); 
             }else{
                res.json({
                     status:403, 
                     msg: "Only admin club"
                })
             }
         })
      }
      module.exports = {
        verifyToken,
        verifyTokenAndAuthorization,
        verifyTokenAndAdmin,
      };


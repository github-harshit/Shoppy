const express = require("express"); 
 const User = require("../models/User.js");
  const {verifyToken, verifyTokenAndAdmin, verifyTokenAndAuthorization}  = require("./verifyToken.js");
 const router = express.Router(); 
  const CryptoJS= require("crypto-js"); 
// update 
 router.put("/:id", verifyTokenAndAuthorization, async(req, res)=>{
     if(req.body.password){
          req.body.password = CryptoJS.AES.encrypt(req.body.password, process.env.SECRET_KEY).toString(); 
     }
      try{
       
         const updatedUser = await User.findByIdAndUpdate(req.params.id, 
            {
            $set : req.body
            } , 
        {new:true}
         ); 
         res.json({
             status:200, 
             user: updatedUser, 
             msg: "Suceesfully updated the user"
         })
      }catch(err){
         res.json({
             status:404, 
             msg: err
         })
      }
 })

 // delete 

 router.delete("/:id", verifyTokenAndAuthorization, async (req, res)=>{
     try{ 
        await User.findByIdAndDelete(req.params.id);
        res.json({
             status: 201, 
             msg: "Suceesgully deleted the user"
        })

         
     }catch(err){
        res.json({
            status:404, 
            msg: err
        })
     }
 }); 

 //Get user and get all user
 // this will be allowed only for admin  

 router.get("/find/:id", verifyTokenAndAdmin, async(req, res)=>{
     try{
        const user = await User.findById(req.params.id); 
         
        const {password, ...others} = user._doc; 

        //When you use user._doc, you're accessing the plain JavaScript object that contains the actual data of the document without the additional properties and methods that Mongoose attaches to the document.
        res.json({
             status:200, 
              user : others, 
              msg: "Successfully get the user",
              check:user

        })

         
     }catch(err){
        res.json({
            status:404, 
            msg: err
        })
     }
 })
 // get all users 
 router.get("/", verifyTokenAndAdmin, async(req, res)=>{
     try{
        const users = await User.find(); 
         
       
        res.json({
             status:200, 
              user : users, 
              msg: "Successfully get all the  users",
            

        })

         
     }catch(err){
        res.json({
            status:404, 
            msg: err
        })
     }
 })
 
 // get user stats 
router.get("/stats", verifyTokenAndAdmin, async(req, res)=>{
     const date = new Date();
     const lastYear = new Date(date.setFullYear(date.getFullYear()-1));
     try{
        const data = await User.aggregate([
            { $match: { createdAt: { $gte: lastYear } } },
            {
              $project: {
                month: { $month: "$createdAt" },
              },
            },
            {
              $group: {
                _id: "$month",
                total: { $sum: 1 },
              },
            },
          ]);
          res.json({
             status:201, 
             data:data,
             msg:"Succesfully retrived user stats"
          })
         
     }catch(err){
        res.json({
            status:404, 
            msg: err
        })
     }
})

 module.exports = router; 

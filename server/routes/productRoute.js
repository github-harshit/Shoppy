const express = require("express"); 
const Product = require("../models/Product"); 
const {verifyToken, verifyTokenAndAuthorization, verifyTokenAndAdmin} = require("./verifyToken"); 
const { findByIdAndUpdate } = require("../models/Cart");
const { findByIdAndDelete } = require("../models/User");
const router = express.Router();

//  create a new product (only admin)
router.post("/", verifyTokenAndAdmin, async (req, res)=>{
     const newProduct = new Product(req.body); 
     try{
        const savedProduct = await newProduct.save(); 
        res.json({
             status:201, 
             product:savedProduct, 
             msg: "Successfully created a product "
        })
         
     }catch(err){
         res.json({
             status:500, 
             msg:err
         })
     }
})

// update a product ( only admin)

router.put("/:id", verifyTokenAndAdmin, async (req, res)=>{
    try{
        const updatedProduct = await Product.findByIdAndUpdate(req.params.id, {
             $set : req.body
        }, 
        {new:true}
        ); 
        res.json({
             status:201, 
             product:updatedProduct, 
             msg: "Successfully updated a product "
        })
         
     }catch(error){
        const errorMessage = error.toString();
         res.json({
             status:500, 
             error: error,
             msg:errorMessage
         })
     }
}); 

// delete the product {only admin}
router.delete("/:id", verifyTokenAndAdmin, async (req, res)=>{
    try{
         await Product.findByIdAndDelete(req.params.id); 
        res.json({
             status:201, 
            
             msg: "Successfully  deleted the  a product "
        })
         
     }catch(err){
         const errorMessage = err.toString(); 
         res.json({
             status:500, 
             msg:errorMessage
         })
     }
}); 
// get a product (only admin) 
router.get("/:id",  async (req, res)=>{
    try{
         const product = await Product.findById(req.params.id); 
        res.json({
             status:201, 
             product:product, 
             msg: "Successfully  get   a product "
        })
         
     }catch(err){
         res.json({
             status:500, 
             msg:err
         })
     }
}); 

// get all the products 
router.get("/",  async (req, res)=>{
     const qNew = req.query.new; 
     const qCategory = req.query.category; 

    try{
         let products;
         if(qNew){
             products= await Product.find().sort({createdAt : -1}).limit(1); 

         }else if(qCategory){
             products = await Product.find({
                 categories : {
                    $in : [qCategory]
                 }
             })
         }else{
             products =  await Product.find()
         }

    
        res.json({
             status:201, 
             products:products, 
             msg: "Successfully  get   a product "
        })
         
     }catch(err){
         res.json({
             status:500, 
             msg:err
         })
     }
});

module.exports = router;
 
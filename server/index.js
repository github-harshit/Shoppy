 const express = require('express');
 const app = express();
  const dotenv = require('dotenv'); 
  const mongoose = require("mongoose");
  const cors = require("cors"); 
   dotenv.config(); 
// importing all the routes 
 const userRoute = require("./routes/userRoute");
const authRoute = require("./routes/authRoute"); 
const productRoute = require("./routes/productRoute.js"); 
const cartRoute = require("./routes/cartRoute"); 
const orderRoute = require("./routes/orderRoute.js"); 
 const stripeRoute = require("./routes/stripeRoute.js"); 

 app.use((req, res, next) => {
   res.header('Access-Control-Allow-Origin', '*'); // Allow requests from any origin (you can restrict this to specific origins)
   res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS'); // Allowed HTTP methods
   res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Authorization'); // Allowed headers
   next();
 });
    app.use(cors()); 
    app.use(express.json());
   app.use("/api/v1/users", userRoute);
     app.use("/api/v1/auth", authRoute);
    app.use("/api/v1/products", productRoute); 
    app.use("/api/v1/cart", cartRoute); 
    app.use("/api/v1/orders", orderRoute); 
    app.use("/api/v1/checkout", stripeRoute); 

   mongoose.connect(process.env.MONGO_URL, {useNewUrlParser: true, useUnifiedTopology: true})
   .then(()=>{
    console.log("db is connected")
   })
   .catch((err)=>{
     console.log(err)
   })

  app.listen(process.env.PORT , ()=>{
     console.log('app is listening on port')
  }) 

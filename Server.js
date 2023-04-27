import express from "express";
import bodyParser from "body-parser";
import bcrypt from "bcrypt";
import cors from "cors"
import TranslateRoute from "./Routes/TranslateRoute.js"
const app=express()
app.use(bodyParser.json({limit:"30mb",extended:true}))
app.use(bodyParser.urlencoded({limit:"30mb",extended:true}))
 
app.use(cors())
app.use("/api/:id", async(req, res, next) => {
    const apikey = req.params.id;
    console.log(apikey);
    const password= "12345"
    const validity = await bcrypt.compare(password,`${apikey}`);

    if (validity) {
      next();
    } else {
      res.status(401).json("Api access denied");
    }
  });
app.use("/api/:id/translate" ,TranslateRoute)


app.listen(5002,()=>{
    console.log(`listening @ port 4000`);
})
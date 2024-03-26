import express from "express"
import mongoose from "mongoose"
import dotenv from "dotenv"
import cors from "cors"
dotenv.config()
const app = express()
app.use(cors());
const PORT = process.env.PORT 
const MONGO_URL = process.env.MONGO_URL
mongoose.connect(MONGO_URL)
    .then(() =>{
    console.log("Database is connected succesfully")
    app.listen(PORT, ()=>{
        console.log(`Server is running on port ${PORT}`);
    })
}).catch((error) =>console.log(error))
const ProductSchema = new mongoose.Schema({
    name:{type: String, required:true, unique:true},
    price:{type: Number, required:true},
    color:{type: String, required:true},
    memory:{type: Number, required:true},
    description:{type: String, required:true},
    category:{type: String, required:true},
    image:{type: String, required:true},
  },
  {timestamps: true},
);
const ProductModel = mongoose.model("products", ProductSchema)
app.get("/getProducts", async (req, res) => {
    const category = req.query.category;
    const productData = await ProductModel.find();
    res.json(productData)
})
app.get("/getProduct/:id", async (req, res) => {
    const id = req.params._id;
    const product = await ProductModel.findById(id);
    if (product) {
        res.json(product);
    } else {
        res.status(404).json({ message: "Product not found" });
    }
});
const express=require('express')
const cors=require('cors')
const bodyParser=require('body-parser')
const mongoose=require('mongoose')
const dotenv=require('dotenv')


const app=express()
app.use(cors())
app.use(bodyParser.json())
dotenv.config()

const PORT=process.env.PORT
const url=process.env.CONNECTION_URL.replace('<password>',process.env.PASSWORD)
mongoose.set('strictQuery', true);
mongoose.connect(url,(err)=>{
    if(!err){
        console.log('DB connect');
        app.listen(PORT,()=>{
            console.log("SERVER WORKING");
        })
    }
    
})

const {Schema}=mongoose
const Product=new Schema(
    {
        name:{type:String,required:true},
        price:{type:String,required:true},
        stock:{type:Number,required:true},
       

    }
)

const Products=mongoose.model("Products Cards",Product)

app.get('/',(req,res)=>{
    res.send('hello')
})

//add product

app.post("/products",(req,res)=>{
    const product=new Products({
        name:req.body.name,
        price:req.body.price,
        stock:req.body.stock
    })
    product.save()
    res.send({message:'Product Added'})

})

//get products

app.get('/products',(req,res)=>{
    Products.find({},(err,doc)=>{
        if(!err){
            res.send(doc)
        }
        else{
            res.status(404).json({message:err})
        }
    })
})

//get by id
app.get('/products/:id',(req,res)=>{
    const {id}=req.params
    Products.findById(id,(err,doc)=>{
        if(!err){
            if(doc){
                res.send(doc)
            }
            else{
                res.status(404).json({message:"NOT FOUND"})
            }
        }
        else{
            res.status(500).json({message:err})
        }
    })
})

//delete product

app.delete('/products/:id',(req,res)=>{
    const {id}=req.params
    Products.findByIdAndDelete(id,(err)=>{
        if(!err){
            res.send({message:'Product deleted'})
        }
        else{
            res.status(404).json({message:err})

        }
    })
})

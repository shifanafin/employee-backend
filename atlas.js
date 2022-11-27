const  MongoClient  = require('mongodb').MongoClient;
   const url = 'mongodb+srv://shifana:shifanamongoose@cluster0.cqxunwg.mongodb.net/?retryWrites=true&w=majority'
const createProduct = async(req,res,next)=>{
    const newProduct = {
        username:req.body.username,
        password:req.body.password,
        age:req.body.age }
    const Client = new MongoClient(url)
try{
      await Client.connect();  
      const db = Client.db();
      const result = await db.collection("products").insertOne(newProduct) }
    catch(error)
    {
        return res.json({message:'save data deleted'}) }
  Client.close()
  res.json(newProduct)
}
const getProduct=async(req,res,next)=>
{
  const Client = new MongoClient(url)
  let prod
  try{
    await Client.connect();  
    const db = Client.db();
     prod = await db.collection("products").find().toArray()
  }
  catch(error)
  {
      return res.json({message:'save data deleted'})
  }
Client.close()
res.json(prod) 
}
 exports.createProduct = createProduct;
exports.getProduct = getProduct;


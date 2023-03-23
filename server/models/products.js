import mongoose from 'mongoose';


const productSchema = mongoose.Schema({
    id:Number,
    title: String,
    thumbnail:String,   
})

var Products = mongoose.model('Product', productSchema);

export default Products;
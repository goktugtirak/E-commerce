import mongoose from 'mongoose';

const productSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true 
    },
    description: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    images: {
        type: [String],
        required: false,
        default: []
    }
},
{
    timestamps: true
});

const Product = mongoose.model('Product', productSchema);

export default Product;
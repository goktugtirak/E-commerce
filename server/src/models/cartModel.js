import mongoose, { Schema } from 'mongoose';

const cartSchema = new mongoose.Schema({
  userId: { 
    type: Schema.Types.ObjectId, // Bir kullanıcıya referans
    ref: 'User',
    required: true,
    unique: true 
  },
  products: [
    {
      productId: {
        type: Schema.Types.ObjectId,
        ref: 'Product',
        required: true,
      },
      quantity: {
        type: Number,
        required: true,
        default: 1,
        min: 1
      }
    }
  ]
}, { timestamps: true }); 

const Cart = mongoose.model('Cart', cartSchema);

export default Cart;
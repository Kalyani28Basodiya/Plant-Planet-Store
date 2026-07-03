import mongoose from 'mongoose'

const OrderSchema = new mongoose.Schema({
  userId: { type: String, required: true },
  userName: { type: String, required: true },
  userEmail: { type: String, required: true },
  items: [{
    id: String,
    name: String,
    price: Number,
    qty: Number,
    image: String,
  }],
  address: { type: String, required: true },
  phone: { type: String, required: true },
  subtotal: { type: Number, required: true },
  delivery: { type: Number, default: 49 },
  tax: { type: Number, required: true },
  total: { type: Number, required: true },
  paymentId: { type: String },
  status: {
    type: String,
    default: 'pending',
    enum: ['pending', 'paid', 'delivered'],
  },
}, { timestamps: true })

if (mongoose.models.Order) {
  delete mongoose.models.Order
}
export default mongoose.model('Order', OrderSchema)

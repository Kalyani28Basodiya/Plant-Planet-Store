import mongoose from 'mongoose'

const ProductSchema = new mongoose.Schema({
  name: { type: String, required: true },
  slug: { type: String, required: true, unique: true },
  price: { type: Number, required: true },
  category: { type: String, required: true },
  image: { type: String, required: true },
  description: { type: String, required: true },
  inStock: { type: Boolean, default: true },
  rating: { type: Number, default: 4.5 },
}, { timestamps: true })

export default mongoose.models.Product ||
  mongoose.model('Product', ProductSchema)

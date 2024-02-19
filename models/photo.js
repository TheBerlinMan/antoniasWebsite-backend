import mongoose from 'mongoose'

const Schema = mongoose.Schema

const photoSchema = new Schema(
  {
    title: String,
    description: String,
    materials: [String],
    size: [Number],
    dateCompleted: Date,
    photo: String,
    
    
  },
  { timestamps: true }
)

const Photo = mongoose.model('Photo', photoSchema)

export { Photo }
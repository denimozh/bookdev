import mongoose from "mongoose";

const ProductSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
      maxlength: 60,
    },
    author: {
        type: String,
        required: true,
        maxlength: 60,
      },
    desc: {
      type: String,
      required: true,
      maxlength: 800,
    },
    frag: {
        type: String,
        required: true,
        maxlength: 800,
      },
    img: {
      type: String,
      required: true,
    },
    prices: {
      type: [Number],
      required: true,
    },
    publisher: {
        type: String
    },
    PubDate: {
        type: Number
    },
    Language: {
        type: String
    },
    PrintLength: {
        type: Number
    },
    Age: {
        type: Number
    }
  },
  { timestamps: true }
);

export default mongoose.models.Product ||
  mongoose.model("Product", ProductSchema);
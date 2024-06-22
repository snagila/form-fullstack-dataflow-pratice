import mongoose from "mongoose";

// defining the collection precident and regulations
const AddFormSchema = new mongoose.Schema({
  name: { type: String, required: true },
  address: { type: String, required: true },
  phone: { type: Number, required: true },
  email: { type: String, required: true },
});
export default mongoose.model("form", AddFormSchema);

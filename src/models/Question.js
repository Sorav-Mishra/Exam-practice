import mongoose from "mongoose";

const questionSchema = new mongoose.Schema({
  question_number: Number,
  exam_name: String,
  question: String,
  options: {
    a: String,
    b: String,
    c: String,
    d: String,
  },
  correct_option: String,
  solution: String,
});

const Question = mongoose.model("Question", questionSchema);

export default Question;

import mongoose from "mongoose";
import dotenv from "dotenv";
import fs from "fs";
import connectDB from "../db/index.js";
import Question from "../models/Question.js";

dotenv.config();

const importData = async () => {
  try {
    await connectDB();
    // Read the JSON file
    const questions = JSON.parse(
      fs.readFileSync("./src/uploads/SPOT THE ERROR questions.json", "utf8")
    );

    // Insert data into MongoDB
    await Question.insertMany(questions);
    console.log("✅ Data Imported Successfully!");

    process.exit();
  } catch (error) {
    console.log("❌ Error Importing Data:", error);
    process.exit(1);
  }
};

// Run the function
importData();

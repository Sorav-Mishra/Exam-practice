import dotenv from "dotenv";
import { app } from "./app.js";
import connectDB from "./db/index.js";

dotenv.config();

connectDB()
  .then(
    app.listen(process.env.PORT, () => {
      console.log(`Sever is running on ${process.env.PORT}`);
    })
  )
  .catch((error) => {
    console.log("connaction falied ", error);
  });

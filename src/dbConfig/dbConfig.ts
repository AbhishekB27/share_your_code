import chalk from "chalk";
import mongoose from "mongoose";

export async function connectDB() {
  try {
    mongoose.connect(process.env.MONGO_DB_URI!);
    const connection = mongoose.connection;
    connection.on("connected", () => {
      console.log(chalk.green("MongoDB Connected!"));
    });
    connection.on("error", (err) => {
      console.log(chalk.red("MongoDB Connection Error"));
      console.log(chalk.red(err));
      process.exit();
    });
  } catch (error) {
    console.log(chalk.red("Something went wrong in connectDB"));
    console.log(error);
  }
}

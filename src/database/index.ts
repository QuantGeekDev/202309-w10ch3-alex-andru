import chalk from "chalk";
import mongoose from "mongoose";

const connectToDatabase = async (dbUrl: string) => {
  if (!dbUrl) {
    console.log(chalk.red("Error connecting to database, shutting down..."));
    process.exit();
  }

  try {
    await mongoose.connect(dbUrl);
    console.log(chalk.green("Succesfully connected to database!"));
  } catch (error) {
    console.log(chalk.red("Error connecting to database, shutting down..."));
    process.exit();
  }
};

export default connectToDatabase;

import mongoose from "mongoose"
import { makeEnvConfigGlobal } from "../../presentation";

export async function dbConnection() {
  const configService = makeEnvConfigGlobal();

  try {
    await mongoose.connect(configService.getDbHost());
    console.log('MongoDB connected');
  } catch (error) {
    console.error('MongoDB connection error:', error);
    process.exit(1);
  }
}

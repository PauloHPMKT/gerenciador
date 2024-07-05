import mongoose, { ConnectOptions } from "mongoose"

export async function dbConnection() {
  try {
    await mongoose.connect(
      'mongodb://172.23.126.233:27017/gerenciador-funcionario'
    );
    console.log('MongoDB connected');
  } catch (error) {
    console.error('MongoDB connection error:', error);
    process.exit(1);
  }
}

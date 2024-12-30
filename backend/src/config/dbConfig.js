import mongoose from 'mongoose';
import { MONGO_URL } from './serverConfig.js';

export default async function connectDB() {
  try {
    await mongoose.connect(MONGO_URL, {
        dbName: 'trelloboard',
    });
    console.log('MongoDB connected');
  } catch (error) {
    console.error('MongoDB connection failed');
    process.exit(1);
  }
} 
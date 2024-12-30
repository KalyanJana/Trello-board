import dotenv from 'dotenv';

dotenv.config(); //Load evnironment variables from .env file

export const PORT = process.env.PORT || 5000;

export const MONGO_URL = process.env.MONGO_URL
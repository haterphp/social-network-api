import mongoose from 'mongoose';
export default (async () => await mongoose.connect(process.env.DB_PATH));

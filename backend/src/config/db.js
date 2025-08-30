const mongoose = require('mongoose');
require('dotenv').config();


const connectDB = async () => {
const uri = process.env.MONGODB_URI;
if (!uri) throw new Error('MONGODB_URI is not set');
mongoose.set('strictQuery', true);
await mongoose.connect(uri, {
dbName: uri.split('/').pop(),
});
console.log('✅ MongoDB connected');
};


module.exports = { connectDB };
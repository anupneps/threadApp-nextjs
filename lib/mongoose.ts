import mongoose from 'mongoose';

let isConnected = false;

export const connectToDB = async () => {
    mongoose.set('strictQuery', true);

    if(!process.env.MONGODB_URI) {
        console.log('MONGODB_URI not found');
    }
    if(isConnected) {
        console.log('=> Already connected to database');
    }

    try {
        
    } catch (error) {
        
    }
}
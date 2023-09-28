import mongoose from 'mongoose';

let isConnected = false;

export const connectToDB = async () => {
    mongoose.set('strictQuery', true);

    if(!process.env.MONGODB_URI) {
        console.log('MONGODB_URI not found');
        return
    }
    if(isConnected) {
        console.log('=> Already connected to database');
        return
    }

    try {
        await mongoose.connect(process.env.MONGODB_URI)
        isConnected=true    
        console.log('connected to mongoDB')
        
    } catch (error) {
        console.log(error)
    }
}
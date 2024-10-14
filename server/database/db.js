import mongoose from 'mongoose'

export const Connection = async()=>{
    const URI = "mongodb+srv://upmeet2024:izmR37vjMAoC2U1f@cluster0.oz8gfkj.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";
    try {
        await mongoose.connect(URI);
        console.log("MongoDB Data base is connected");
    } catch (error) {
        console.log("Unable to Connect MongoDb data base ", error);
    }
}





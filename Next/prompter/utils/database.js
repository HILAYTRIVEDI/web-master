import mongoose from "mongoose";

let isConnected = false;

export const connectToDB = async () => {
    mongoose.set("strictQuery", true);

    if(isConnected){
        console.log("Already connected to the database");
        return;
    } else {
        try {
            await mongoose.connect(process.env.MONGODB_URI, {
                dbName: "share_promt",
            });

            isConnected = true;
            console.log("Connected to the database");

        } catch(error){
            console.log("Error connecting to the database");
            console.log(error);
            return;
        }
    }
}
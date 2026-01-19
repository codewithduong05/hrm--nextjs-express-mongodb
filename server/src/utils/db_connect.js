
import dotenv from 'dotenv';
dotenv.config();
const db_connect = {
     MONGO_DB : async () => {
    try {      
        console.log(process.env.MONGO_URI);
        
        await mongoose.connect(`${process.env.MONGO_URI}`);
        console.log("Successfully connected to mongoDB")
    } catch (error) {
        console.log(error.message)
        process.exit(1)
    }
}
}
export default db_connect

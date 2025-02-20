import mongoose from 'mongoose';

// const username ="yadav123";
// const password = "satyam123";

const Connection = async () => {
    const URL = `mongodb+srv://${process.env.DB_USERNAME}:${process.env.DB_PASSWORD}@cluster0.qzc5c.mongodb.net/shopify?retryWrites=true&w=majority&appName=Cluster0`;
    
    try {
        await mongoose.connect(URL, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        });
        console.log('Database Connected Successfully');
    } catch (error) {
        console.error('Database connection error:', error.message);
    }
};
export default Connection;

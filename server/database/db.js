import mongoose from 'mongoose';

// const username ="yadav123";
// const password = "satyam123";

const Connection = async () => {
    const URL = `mongodb://localhost:27017/e-com`;
    
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

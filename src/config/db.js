// Database connection configuration
const mongoose = require('mongoose');
const dotenv = require('dotenv');

dotenv.config();

const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGODB_URI, {
            //useNewUrlParser: true,
            //useUnifiedTopology: true,
        });
        console.log('MongoDB connected');
    } catch (error) {
        console.error('MongoDB connection failed:', error.message);
        process.exit(1);
    }
};

module.exports = connectDB;

/*
const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGODB_URI, {
            // Uncomment below if using mongoose < 6.0.0
            // useNewUrlParser: true,
            // useUnifiedTopology: true,
        }); 
        console.log('MongoDB connected');
        app.listen(PORT, () => {
            console.log(`Server is running on port ${PORT}`);
        });
    } catch (error) {
        console.error('MongoDB connection failed:', error.message);
        process.exit(1);
    }
};
*/


module.exports = connectDB;
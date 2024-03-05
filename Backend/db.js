const mongoose = require('mongoose');
const mongoURI = "mongodb+srv://asmita221196:asmita@cluster0.jficvl1.mongodb.net/?retryWrites=true&w=majority";

const connectToMongo = async () => {
    try {
        await mongoose.connect(mongoURI)
        console.log("connected to mongoose successfully")
    }
    catch (error) {
        console.error('error connecting mongodb',error);
    }
}


module.exports = connectToMongo;
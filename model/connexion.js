const mongoose = require('mongoose');
require('dotenv').config();

const password = process.env.MONGO_PASSWORD;
const dbname = process.env.MONGO_DBNAME;
const userName = process.env.MONGO_DB_USER

const uri = `mongodb+srv://${userName}:${password}@atlascluster.ehbag.mongodb.net/${dbname}`;


async function connect() {
    try {
        console.log("Connecting to the database...");
        await mongoose.connect(uri);
        console.log('Database connected');
    } catch (error) {
        console.log('Error connecting to the database');
        console.error(error);
    }
}



module.exports = { connect };
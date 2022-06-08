
// require monogoose
const mongoose = require('mongoose');

// connect to database
const connect_db = async () => {
    const conn = await mongoose.connect(process.env.MONGO_URI);

    console.log(`MongoDB Connected: ${conn.connection.host}`.cyan.underline.bold);
};

// export connect_db
module.exports = connect_db;

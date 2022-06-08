// require monogoose
const mongoose = require('mongoose');

// ClientSchema
const ClientSchema = new mongoose.Schema({
    name: {
        type: String
    },
    email: {
        type: String
    },
    phone: {
        type: String
    }
});

// export Client
module.exports = mongoose.model('Client', ClientSchema);
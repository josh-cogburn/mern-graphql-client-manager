// require monogoose
const mongoose = require('mongoose');

// ProjectSchema
const ProjectSchema = new mongoose.Schema({
    name: {
        type: String
    },
    description: {
        type: String
    },
    status: {
        type: String,
        enum: ['Not Started', 'In Progress', 'Completed']
    },
    clientId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Client'
    }

});

// export Project
module.exports = mongoose.model('Project', ProjectSchema);
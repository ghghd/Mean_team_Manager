const mongoose = require('mongoose');
   
const Schema = mongoose.Schema;
const PlayerSchema = new mongoose.Schema({
    name: {type: String, required: [true, "Name Length Should Be At Least 3 Characters"], minlength: 3},
    position:{type: String},
    game1: {status: String},
      game2: {status: String},
      game3: {status: String},
}, {timestamps:true});
mongoose.model('Player', PlayerSchema);
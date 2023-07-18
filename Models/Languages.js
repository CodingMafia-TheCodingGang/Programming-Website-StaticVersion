const mongoose = require('mongoose');
const { Schema } = mongoose;

const LanguageSchema = new Schema({
    title:{
        type: String,
        
    },
    about:{
        type: String,
       
    }
  });
  const Language = mongoose.model('Languages', LanguageSchema);
  module.exports = Language;
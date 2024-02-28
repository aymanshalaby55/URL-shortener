const mongoose = require('mongoose');
const shortid = require('shortid')

const UrlSchema = new mongoose.Schema({
    fullUrl: {
        type: String,
        required: true
    },
    shortUrl: {
        type: String, 
        required: true,
        default: shortid.generate()
    },
    clicks: {
        type:Number,
        required:true,
        default:0
    }
});

const UrlModel = mongoose.model('URLs', UrlSchema);
module.exports = UrlModel;
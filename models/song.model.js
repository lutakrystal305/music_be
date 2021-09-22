const mongoose = require ('mongoose');

const songSchema = new mongoose.Schema({
    song: String,
	singer: String,
    audio: String,
    img: String
})
const Song = mongoose.model('Song', songSchema, 'songs');
module.exports = Song;
const jwt = require("jsonwebtoken");

const Song = require('../models/song.model');


module.exports.get = async (req, res, next) => {
    try {
        const songs = await Song.find();
        //console.log(songs);
        let a = {};
        songs.forEach((x) => {
            if (a[x.singer]) {
                a[x.singer].push(x);
            } else {
                a[x.singer] = [x];
            }
        })
        console.log(a);
        res.json(a);
    } catch (error) {
        next(error)
    }
}
module.exports.getget = async (req, res, next) => {
    try {
        const songs = await Song.find();
        res.json(songs);
    } catch (error) {
        next(error)
    }
}

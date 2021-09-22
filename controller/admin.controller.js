const jwt = require("jsonwebtoken");
const Admin = require('../models/admin.model');
const Song = require('../models/song.model');


module.exports.login = async (req, res, next) => {
    try {
        const email = req.body.email;
        const pass = req.body.password;
        console.log(email, '///', pass);
        const admin = await Admin.findOne({email});
        if (!admin) {
            res.status(401);
            console.log('sai tai khoan')
            res.json({ msg: 'Email does not exist!' });
            return;
        }
        if (admin.password !== pass) {
            res.status(401);
            console.log('sai mk')
            res.json({ msg: "Password wrong" });
            return;

        } else {
            const token = jwt.sign({ _id: admin._id }, "shhh");
            res.header("auth-token", token);
            const client = {
            email: email,
            password: pass,
            token: token
            };
            console.log(client);
            res.json(client);
        }
    } catch (error) {
        next(error)
    }
}
module.exports.post = async (req, res, next) => {
    try {
        console.log(req.body);
        const song = await Song.findOne({song : req.body.song})
        if (song) res.json('Song is existed!');
        else {
            const newSong = new Song({song: req.body.song, singer: req.body.singer, audio: req.body.audioURL, img: req.body.imgURL});
            await newSong.save();
            console.log(newSong);
            res.json(true)
        }
    } catch (error) {
        next(error)
    }
}
const mongoose = require ('mongoose');

const adminSchema = new mongoose.Schema({
    name: String,
	email: String,
    password: String,
})
const Admin = mongoose.model('Admin', adminSchema, 'admin');
module.exports = Admin;
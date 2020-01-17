var mongoose = require('mongoose')
mongoose.connect("mongodb://localhost/MasterProject")
var schema = mongoose.Schema

var users = new schema({
    name: String, email: String,
    password: String,
    country: String,
    specilization: String
})

var user = mongoose.model("Users", users)

register = (userInfo, callback) => {
    user.insertMany([userInfo], (err, res) => {
        if (!err)
            callback(res)
    })


}

login = (e_mail, pass, callback) => {
    user.find({ email: e_mail, password: pass }, (err, res) => {
        if (!err)
            callback(res);
    })

}

module.exports = { register, login }
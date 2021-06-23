const jwt = require('jsonwebtoken')

function sign(data) {
    jwt.sign(data, 'secreto');
}

module.exports = {
    sign, 
};
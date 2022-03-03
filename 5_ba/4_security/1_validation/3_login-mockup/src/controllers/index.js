const login = require('./users/login.js');
const signup = require('./users/signup.js');

// wir exportieren die beiden controller geordnet innerhalb eines namespaces:
module.exports = {
    users:
    {
        login,
        signup
    }
}

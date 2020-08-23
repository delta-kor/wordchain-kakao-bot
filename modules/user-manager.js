const User = require('./user');

module.exports = (function() {

    /**
     * @type {Map<string, User>}
     */
    const users = new Map();

    function UserManager() { }

    return UserManager;

})();

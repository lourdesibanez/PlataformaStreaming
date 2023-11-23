let globalToken = '';

function setToken(token) {
    globalToken = token;
}

function getToken() {
    return globalToken;
}

module.exports = { setToken, getToken };
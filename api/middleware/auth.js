const jwt = require("jsonwebtoken");

// next es "pasa o no pasa"
const verifyToken = (req, res, next) => {
    const token = req.headers["x-access-token"];

    if(!token){
        // mensaje de error en caso de que no haya token
        return res.status(403).send("Falta el token.");
    }

    try {
        const deco = jwt.verify(token, 'llave');

        // aca habria que registrar actividad del usuario


    } catch (error) {
        // mensaje de error en caso de que el token no sea valido
        return res.status(401).send("Token invalido.");
    }

    return next();
};

module.exports = verifyToken;
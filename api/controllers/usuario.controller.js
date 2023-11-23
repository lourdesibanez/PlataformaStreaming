const bcrypt = require("bcryptjs");
const sql = require("../db/db.js");
const jwt = require("jsonwebtoken");
const tokenManager = require("../tokenManager.js");

exports.login = async (req, res) => {
    // captura de los datos. VER NOMBRES
    const username = req.body.username
    const password = req.body.password

    console.log("Logueando...");

    await sql.query(`SELECT * FROM usuario WHERE nombre_usuario = '${username}'`, async (err, resSql) => {
        if (err) throw (err)
            if (resSql.length == 0) {
                res.status(404).send("usuario no encontrado");
                console.log("Acceso incorrecto. Usuario no encontrado");
            }
            else {
                // por si hay mas de 1 usuario con el mismo mail/nombre (NO deberia pasar), elige el primero
                const usuario = resSql[0];

                if(await bcrypt.compare(password, usuario.password)){
                                        // json con lo que le interesa a la app       llave de encriptacion
                    const token = jwt.sign({user_id: usuario.id, user_mail: usuario.mail}, 'llave');
                    usuario.token = token;

                    // codigo que actualiza el usuario con el token
                    sql.query(
                        "UPDATE usuario SET token = ? WHERE id = ?",
                        [usuario.token, usuario.id],
                        (err, res) => {
                          if (err) {
                            console.log("error: ", err);
                          }
                          if (res.affectedRows == 0) {
                            result({ kind: "not_found" }, null);
                          }
                        }
                    );
                    
                    tokenManager.setToken(token);
                    console.log("Acceso correcto. Token: ",token);
                    res.status(200).json(usuario);
                }
            }//end of User exists i.e. results.length==0
    }) //end of connection.query()
};
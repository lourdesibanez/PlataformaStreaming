const sql = require("../db/db.js");

// constructor
const Documental = function (documental) {
    this.id_documental = documental.id_documental;
    this.titulo = documental.titulo;
    this.año = documental.año;
    this.duracion = documental.duracion;
    this.id_administrador = documental.id_administrador;
    this.url = documental.url;
    this.id_proveedor_audiovisual = documental.id_proveedor_audiovisual;
    this.mpaa_id_mpaa = documental.mpaa_id_mpaa;
    this.descripcion = documental.descripcion;
    this.img = documental.img;
};

Documental.create = (newDoc, result) => {
    sql.query("INSERT INTO documental SET ?", newDoc, (err, res) => {
        if (err) {
            console.log("Error: ", err);
            result(err, null);
            return;
        }

        console.log("Documental creado: ", { id_documental: res.insertId_documental, ...newDoc });
        result(null, { id_documental: res.insertId_documental, ...newDoc });
    });
};

Documental.findById = (id, result) => {
    sql.query(`SELECT * FROM documental WHERE id = ${id}`, (err, res) => {
        if (err) {
          console.log("Error: ", err);
          result(err, null);
          return;
        }
    
        if (res.length) {
          // Parsea la primera fila a JSON antes de llamar a la función result
          const jsonData = JSON.parse(JSON.stringify(res[0]));
    
          console.log("Documental encontrado: ", jsonData);
          result(null, jsonData);
          return;
        }
    
        // not found Tutorial with the id
        result({ kind: "not_found" }, null);
      });
};

Documental.getAll = (result) => {
    let query = "SELECT * FROM documental";

    sql.query(query, (err, res) => {
        if (err) {
            console.log("Error: ", err);
            result(null, err);
            return;
        }

        console.log("Documentales: ", res);
        result(null, res);
    });
};

Documental.updateById = (id, torta, result) => {
    sql.query(
        // Cambiar los nombres
        "UPDATE documental SET nombre = ?, descripcion = ?, precio = ? WHERE id = ?",
        [torta.nombre, torta.descripcion, torta.precio, id],
        (err, res) => {
            if (err) {
                console.log("error: ", err);
                result(null, err);
                return;
            }

            if (res.affectedRows == 0) {
                result({ kind: "not_found" }, null);
                return;
            }

            console.log("Documental actualizado: ", { id: id, ...torta });
            result(null, { id: id, ...torta });
        }
    );
};

Documental.remove = (id, result) => {
    sql.query("DELETE FROM documental WHERE id = ?", id, (err, res) => {
        if (err) {
            console.log("error: ", err);
            result(null, err);
            return;
        }

        if (res.affectedRows == 0) {

            result({ kind: "not_found" }, null);
            return;
        }

        console.log("Documental borrado id: ", id);
        result(null, res);
    });
};

Documental.removeAll = result => {
    sql.query("DELETE FROM documental", (err, res) => {
        if (err) {
            console.log("Error: ", err);
            result(null, err);
            return;
        }

        console.log(`Se borraron ${res.affectedRows} documentales`);
        result(null, res);
    });
};

Documental.findByIdCat = (id, result) => {
    let query = `SELECT * FROM documental inner join categoriaXdocumental ON documental.id = categoriaXdocumental.id_documental WHERE id_categoria = ${id}`
    sql.query(query, (err, res) => {
        if (err) {
            console.log("Error: ", err);
            result(null, err);
            return;
        }

        const filasJSON = res.map((fila) => {
            return JSON.parse(JSON.stringify(fila));
        });

        console.log("Documentales encontrados: ", filasJSON);
        result(null, filasJSON);
    });
};

Documental.findByIdRegion = (id, result) => {
    let query = `SELECT * FROM documental inner join documentalxregion ON documental.id = documentalxregion.id_documental WHERE id_region = ${id}`
        sql.query(query, (err, res) => {
            if (err) {
                console.log("Error: ", err);
                result(null, err);
                return;
            }
    
            const filasJSON = res.map((fila) => {
                return JSON.parse(JSON.stringify(fila));
            });
    
            console.log("Documentales encontrados: ", filasJSON);
            result(null, filasJSON);
        });
};

Documental.findByIdMpaa = (id, result) => {
    let query = 'SELECT * FROM documental WHERE id_mpaa = ' + id
    sql.query(query, (err, res) => {
        if (err) {
            console.log("Error: ", err);
            result(null, err);
            return;
        }

        const filasJSON = res.map((fila) => {
            return JSON.parse(JSON.stringify(fila));
        });

        console.log("Documentales encontrados: ", filasJSON);
        result(null, filasJSON);
    });
};

Documental.getFavoritos = (idUsuario, result) => {
    sql.query(`SELECT id_documental FROM favorito WHERE id_usuario = ${idUsuario}`, (err, res) => {
        if (err) {
            console.log("Error: ", err);
            result(err, null);
            return;
        }

        const filasJSON = res.map((fila) => {
            return JSON.parse(JSON.stringify(fila));
        });

        console.log("Documentales encontrados: ", filasJSON);
        result(null, filasJSON);
    });
}

Documental.getVistos = (idUsuario, result) => {
    sql.query(`SELECT id_documental FROM visto WHERE id_usuario = ${idUsuario}`, (err, res) => {
        if (err) {
            console.log("Error: ", err);
            result(err, null);
            return;
        }

        const filasJSON = res.map((fila) => {
            return JSON.parse(JSON.stringify(fila));
        });

        console.log("Documentales encontrados: ", filasJSON);
        result(null, filasJSON);
    });
}

Documental.getCategorias = (idDoc, result) => {
    sql.query(`SELECT id_categoria FROM categoriaxdocumental WHERE id_documental = ${idDoc}`, (err, res) => {
        if (err) {
            console.log("Error: ", err);
            result(err, null);
            return;
        }

        const filasJSON = res.map((fila) => {
            return JSON.parse(JSON.stringify(fila));
        });

        console.log("Documentales encontrados: ", filasJSON);
        result(null, filasJSON);
    });
}

Documental.getRegiones = (idDoc, result) => {
    sql.query(`SELECT id_region FROM documentalxregion WHERE id_documental = ${idDoc}`, (err, res) => {
        if (err) {
            console.log("Error: ", err);
            result(err, null);
            return;
        }

        const filasJSON = res.map((fila) => {
            return JSON.parse(JSON.stringify(fila));
        });

        console.log("Documentales encontrados: ", filasJSON);
        result(null, filasJSON);
    });
}

module.exports = Documental;
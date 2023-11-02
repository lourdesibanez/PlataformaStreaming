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
    sql.query(`SELECT * FROM documental WHERE id_documental = ${id}`, (err, res) => {
        if (err) {
            console.log("Error: ", err);
            result(err, null);
            return;
        }

        if (res.length) {
            console.log("Documental encontrado: ", res[0]);
            result(null, res[0]);
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
            // not found Tutorial with the id
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
    sql.query(`SELECT id, titulo, anio, duracion, descripcion, img FROM documental inner join categoriaXdocumental ON documental.id = categoriaXdocumental.id_documental WHERE id_categoria = ${id}`, (err, res) => {
        if (err) {
            console.log("Error: ", err);
            result(err, null);
            return;
        }

        if (res.length) {
            console.log("Documentales encontrados: ", res[0]);
            result(null, res[0]);
            return;
        }

        // not found Tutorial with the id
        result({ kind: "not_found" }, null);
    });
};

Documental.findByIdRegion = (id, result) => {
    sql.query(`SELECT id, titulo, anio, duracion, descripcion, img FROM documental inner join documentalxregion ON documental.id = documentalxregion.id_documental WHERE id_region = ${id}`, (err, res) => {
        if (err) {
            console.log("Error: ", err);
            result(err, null);
            return;
        }

        if (res.length) {
            console.log("Documentales encontrados: ", res[0]);
            result(null, res[0]);
            return;
        }

        // not found Tutorial with the id
        result({ kind: "not_found" }, null);
    });
};

module.exports = Documental;
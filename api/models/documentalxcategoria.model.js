const sql = require("../db/db.js");

const DocXCat = function (docxcat){
    this.id_categoria = this.id_categoria;
    this.id_documental = this.id_documental;
}

DocXCat.findByIdCat = (id, result) => {
    sql.query(`SELECT * FROM documental inner join categoriaXdocumental ON documental.id_categoria = categoriaXdocumental.id_categoria WHERE documental.id_categoria = ${id}`, (err, res) => {
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
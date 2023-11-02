const DocXCat = require("../models/documentalxcategoria.model.js");

exports.getIdCat = (req, res) => {
    DocXCat.findById(req.params.id, (err, data) => {
        if (err) {
          if (err.kind === "not_found") {
            res.status(404).send({
              message: `Documental no encontrado id ${req.params.id}.`
            });
          } else {
            res.status(500).send({
              message: "Error al buscar id " + req.params.id
            });
          }
        } else res.send(data);
      });
}
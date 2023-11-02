const Documental = require("../models/documental.model.js");

exports.create = (req, res) => {
  // Validate request
  if (!req.body) {
    res.status(400).send({
      message: "Datos vacios!"
    });
  }

  const documental = new Documental({
    //id: req.body.id || valor_si_es_nulo (ej 0),
    id: req.body.id,
    titulo: req.body.titulo,
    año: req.body.año,
    duracion: req.body.duracion,
    id_administrador: req.body.id_administrador,
    url: req.body.url,
    id_proveedor_audiovisual: req.body.id_proveedor_audiovisual,
    id_mpaa: req.body.id_mpaa,
    descripcion: req.body.descripcion,
    img: req.body.img,
  });

  Documental.create(documental, (err, data) => {
    if (err)
      res.status(500).send({
        message:
          err.message || "Error al crear el documental."
      });
    else res.send(data);
  });
};

exports.list = (req, res) => {
  Documental.getAll((err, data) => {
    if (err)
      res.status(500).send({
        message:
          err.message || "Error al buscar los documentales."
      });
    else res.send({"status": 200, "data":data});
  });
};

exports.getId = (req, res) => {
  Documental.findById(req.params.id, (err, data) => {
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
};

exports.update = (req, res) => {
  if (!req.body) {
    res.status(400).send({
      message: "Sin contenido!"
    });
  }

  console.log(req.body);

  Documental.updateById(
    req.params.id,
    new Torta(req.body),
    (err, data) => {
      if (err) {
        if (err.kind === "not_found") {
          res.status(404).send({
            message: `Documental no encontrado id ${req.params.id}.`
          });
        } else {
          res.status(500).send({
            message: "Error al actualizar el documental id " + req.params.id
          });
        }
      } else res.send(data);
    }
  );
};

exports.delete = (req, res) => {
  Documental.remove(req.params.id, (err, data) => {
    if (err) {
      if (err.kind === "not_found") {
        res.status(404).send({
          message: `Documental no encontrado id ${req.params.id}.`
        });
      } else {
        res.status(500).send({
          message: "No se puede borrar el documental id " + req.params.id
        });
      }
    } else res.send({ message: `Documental borrado!` });
  });
};

exports.getIdCat = (req, res) => {
  Documental.findByIdCat(req.params.id, (err, data) => {
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
};
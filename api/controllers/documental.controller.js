const { json } = require("express");
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
    else res.send({ "status": 200, "data": data });
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

exports.getIdReg = (req, res) => {
  Documental.findByIdRegion(req.params.id, (err, data) => {
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

exports.getIdMpaa = (req, res) => {
  Documental.findByIdMpaa(req.params.id, (err, data) => {
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

exports.getRecomendados = (req, res) => {
  var favyvistos = []
  var categorias = []
  var regiones = []
  var mpaa = []
  var recomendados = []

  console.log('Recomendados para usuario: '+req.params.idUsuario)

  function favoritos() {
    return new Promise(resolve => {
      Documental.getFavoritos(req.params.idUsuario, (err, data) => {
        if (err) {
          if (err.kind === "not_found") {
            res.status(404).send({
              message: `Usuario no encontrado id ${req.params.idUsuario}.`
            });
          } else {
            res.status(500).send({
              message: "Error al buscar id " + req.params.idUsuario
            });
          }
        } else {
          //data.json(data)
          data.forEach(element => {
            favyvistos.push(element.id_documental)
          });
        }
      });

      setTimeout(() => {
        resolve('Datos de la primera llamada');
      }, 1000);
    });

  }

  function vistos() {
    return new Promise(resolve => {
      Documental.getVistos(req.params.idUsuario, (err, data) => {
        if (err) {
          if (err.kind === "not_found") {
            res.status(404).send({
              message: `Usuario no encontrado id ${req.params.idUsuario}.`
            });
          } else {
            res.status(500).send({
              message: "Error al buscar id " + req.params.idUsuario
            });
          }
        } else {
          data.forEach(element => {
            favyvistos.push(element.id_documental)
          });
        }
      });

      setTimeout(() => {
        resolve('Datos de la segunda llamada');
      }, 1000);
    });
  }

  // Una vez obtenidos los favoritos y vistos del usuario, debo iterarlos para obtener categorías, regiones y mpaa

  Promise.all([favoritos(), vistos()])
    .then(resultados => {
      // Elimino los elementos repetidos (documentales en vistos y favoritos a la vez)
      favyvistos = [...new Set(favyvistos)];
      // Acá los itero. Element sería cada uno de los ID de los documentales
      favyvistos.forEach(element => {

        function getDatos() {
          return new Promise(resolve => {
            Documental.findById(element, (err, data) => {
              if (err) {
                if (err.kind === "not_found") {
                  res.status(404).send({
                    message: `Documental no encontrado id ${element}.`
                  });
                } else {
                  res.status(500).send({
                    message: "Error al buscar id " + element
                  });
                }
              } else {
                mpaa.push(data.id_mpaa)
              }
            });

            setTimeout(() => {
              resolve('Datos de la llamada');
            }, 1000);
          });
        }

        function getCategorias() {
          return new Promise(resolve => {
            Documental.getCategorias(element, (err, data) => {
              if (err) {
                if (err.kind === "not_found") {
                  res.status(404).send({
                    message: `Documental no encontrado id ${element}.`
                  });
                } else {
                  res.status(500).send({
                    message: "Error al buscar id " + element
                  });
                }
              } else {
                data.forEach(element => {
                  categorias.push(element.id_categoria)
                  console.log("Probando id categoria: ", element.id_categoria)
                });
              }
            });

            setTimeout(() => {
              resolve('Datos de la llamada');
            }, 1000);
          });
        }

        function getRegiones() {
          return new Promise(resolve => {
            Documental.getRegiones(element, (err, data) => {
              if (err) {
                if (err.kind === "not_found") {
                  res.status(404).send({
                    message: `Documental no encontrado id ${element}.`
                  });
                } else {
                  res.status(500).send({
                    message: "Error al buscar id " + element
                  });
                }
              } else {
                data.forEach(element => {
                  regiones.push(element.id_region)
                  console.log("Probando id region: ", element.id_region)
                });
              }
            });

            setTimeout(() => {
              resolve('Datos de la llamada');
            }, 1000);
          });
        }

        Promise.all([getDatos(), getCategorias(), getRegiones()])
          .then(resultados => {
            var mpaa_, categoria, region;

            console.log("Iteré documental id ", element)

            function elementoMasRepetido(arr) {
              var conteo = {};

              arr.forEach(function (elemento) {
                if (conteo[elemento] === undefined) {
                  conteo[elemento] = 1;
                } else {
                  conteo[elemento]++;
                }
              });

              var elementoMasRepetido;
              var maxRecuento = 0;

              for (var key in conteo) {
                if (conteo[key] > maxRecuento) {
                  maxRecuento = conteo[key];
                  elementoMasRepetido = key;
                }
              }

              return elementoMasRepetido;
            }

            mpaa_ = elementoMasRepetido(mpaa)
            categoria = elementoMasRepetido(categorias)
            region = elementoMasRepetido(regiones)

            console.log("MPAA: " + mpaa_ + " Categoría: " + categoria + " Region: " + region)

            function recXMPAA(id) {
              return new Promise(resolve => {
                Documental.findByIdMpaa(id, (err, data) => {
                  if (err) {
                    if (err.kind === "not_found") {
                      res.status(404).send({
                        message: `Documental no encontrado id ${id}.`
                      });
                    } else {
                      res.status(500).send({
                        message: "Error al buscar id " + id
                      });
                    }
                  } else data.forEach(element => {
                    if (!favyvistos.includes(element.id)) {
                      recomendados.push(element)
                    }
                  });;
                });

                setTimeout(() => {
                  resolve('Datos de la llamada');
                }, 1000);
              })
            }

            function recXCat(id) {
              return new Promise(resolve => {
                Documental.findByIdCat(id, (err, data) => {
                  if (err) {
                    if (err.kind === "not_found") {
                      res.status(404).send({
                        message: `Documental no encontrado id ${id}.`
                      });
                    } else {
                      res.status(500).send({
                        message: "Error al buscar id " + id
                      });
                    }
                  } else data.forEach(element => {
                    if (!favyvistos.includes(element.id)) {
                      recomendados.push(element)
                    }
                  });;
                });

                setTimeout(() => {
                  resolve('Datos de la llamada');
                }, 1000);
              })
            }

            function recXRegion(id) {
              return new Promise(resolve => {
                Documental.findByIdRegion(id, (err, data) => {
                  if (err) {
                    if (err.kind === "not_found") {
                      res.status(404).send({
                        message: `Documental no encontrado id ${id}.`
                      });
                    } else {
                      res.status(500).send({
                        message: "Error al buscar id " + id
                      });
                    }
                  } else data.forEach(element => {
                    if (!favyvistos.includes(element.id)) {
                      recomendados.push(element)
                    }
                  });;
                });

                setTimeout(() => {
                  resolve('Datos de la llamada');
                }, 1000);
              })
            }

            Promise.all([recXMPAA(mpaa_), recXCat(categoria), recXRegion(region)])
              .then(resultados => {
                console.log("Recomendados:" + JSON.stringify(recomendados))

                recomendados = [...new Set(recomendados)];

                res.send(recomendados)
              })
          })
      });
    })
};

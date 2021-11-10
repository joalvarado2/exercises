const estudiantes = [
  {
    nombre: "Jonathan",
    id: 1,
  },
  {
    nombre: "Diana",
    id: 2,
  },
  {
    nombre: "Angela",
    id: 3,
  },
  {
    nombre: "Julio",
    id: 4,
  },
];

const materias = [
  {
    idMateria: 1,
    materia: "Matematicas",
  },
  {
    idMateria: 2,
    materia: "Filosofia",
  },
  {
    idMateria: 3,
    materia: "Español",
  },
];

const getEstudiante = (id, callback) => {
  const estudiante = estudiantes.find((student) => student.id == id);
  if (estudiante) {
    callback(null, estudiante.nombre);
  } else {
    callback(`No existe el estudiante con id ${id}`);
  }
};

const getMateria = (id, callback) => {
  const materia = materias.find((matter) => matter.idMateria == id);
  if (materia) {
    callback(null, materia.materia);
  } else {
    callback(`Error la materia con el id: ${id} no existe`);
  }
};

const id = 4

getEstudiante(id, (err, estudiante) => {
  if (err) {
    console.log("ERROR");
    return console.log(err);
  }
  getMateria(id, (err, materia) => {
    if (err) {
      console.log("Error");
      return console.log(err);
    }
    console.log(`el estudiante ${estudiante} ve la materia ${materia}`)
  });
});

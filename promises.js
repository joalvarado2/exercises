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
  {
    idMateria: 4,
    materia: "Sociales",
  },
];

const cursoNotasPorId = [
  {
    nombreCurso: "Matematicas",
    idEstudiante: 1,
    nota1: 3,
    nota2: 4,
    nota3: 5,
  },
  {
    nombreCurso: "Filosofia",
    idEstudiante: 2,
    nota1: 3,
    nota2: 4,
    nota3: 5,
  },
  {
    nombreCurso: "Español",
    idEstudiante: 3,
    nota1: 3,
    nota2: 4,
    nota3: 5,
  },
  {
    nombreCurso: "Sociales",
    idEstudiante: 4,
    nota1: 3,
    nota2: 4,
    nota3: 5,
  },
];

const getEstudiante = (id) => {
  return (promise = new Promise((resolve, reject) => {
    const estudiante = estudiantes.find((student) => student.id == id)?.nombre;
    estudiante
      ? resolve(estudiante)
      : reject(`No existe el estudiante con id ${id}`);
  }));
};

const getMateria = (id) => {
  return (promise = new Promise((resolve, reject) => {
    const materia = materias.find((matter) => matter.idMateria == id)?.materia;
    materia
      ? resolve(materia)
      : reject(`la materia con el id: ${id} no existe`);
  }));
};


const id = 2;
let nombre;
getEstudiante(id)
  .then((estudiante) => {
    console.log(estudiante);
    return getMateria(id);
  })
  .then((materia) => {console.log(` materia ${materia}`);})
  .catch((err) => console.log(err));

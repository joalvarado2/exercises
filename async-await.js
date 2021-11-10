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
    nota1: 4,
    nota2: 4,
    nota3: 4,
  },
  {
    nombreCurso: "Español",
    idEstudiante: 3,
    nota1: 2,
    nota2: 3,
    nota3: 4,
  },
  {
    nombreCurso: "Sociales",
    idEstudiante: 4,
    nota1: 3,
    nota2: 3,
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

const getNota = (id) => {
  return (promise = new Promise((resolve, reject) => {
    const notas = cursoNotasPorId.find((nota) => nota.idEstudiante == id);
    notas ? resolve(notas) : reject(`no se encuentran las notas del id ${id}`);
  }));
};

const getUsuario = async (id) => {
  try {
    const estudiante = await getEstudiante(id);
    const materia = await getMateria(id);
    const notas = await getNota(id);
    const { nota1, nota2, nota3 } = notas;
    return `el estudiante: ${estudiante} cursa la materia ${materia} y sus notas fueron: ${
      (nota1 + nota2 + nota3) / 3
    }`;
  } catch (error) {
    throw error;
  }
};

const id = 2;

getUsuario(id)
  .then((estudiante) => console.log(estudiante))
  .catch((error) => console.log(error));

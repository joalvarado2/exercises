/* et msj = "rytufkmbrdpr fmasmegppreemvemeuaiv tmgb";

console.log(msj.length);

let num = "11010";

console.log(parseInt(num, 2))


[
  {
    modelo: "Yaris",
    precio: 58000000,
    stock: 20,
    anio: "2019-12-05",
  },
  {
    modelo: "Corolla",
    precio: 68950000,
    stock: 15,
    anio: "2020-11-01",
  },
  {
    modelo: "Prado",
    precio: 146990000,
    stock: 20,
    anio: "2021-10-04",
  },
  {
    modelo: "Hilux",
    precio: 165990000,
    stock: 10,
    anio: "2021-07-07",
  }
]
 */

let number = prompt("cuantas personas desean ingresar")

for(let i = 1; i <= number; i++){
  let name = prompt(`digame el nombre de la persona numero${i + 1}`);

  fetch(`https://api.agify.io/?name=${name}`)
  .then((resolve) => resolve.json())
  .then((data) => {
    respuesta(data.age, data.name);
  });

const respuesta = (age, name) => {
  if (age > 35) {
    alert(
      `${name} tienes ${age} y no cumples con la edad`
    );
  } else {
    alert(`bienvenido ${name} las bebidas lo estan esperando`);
  }
};

}



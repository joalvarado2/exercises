const fs = require("fs")

console.clear();

console.log("===================");
console.log("Tabla del 5");
console.log("===================");

let num = 5;
let salida = ""
for (let i = 1; i <= 10; i++) {
  let res = num * i;
  salida += (`${num} * ${i} = ${res}\n`);
}

fs.writeFile("tablas-del-5.txt", salida, (err) =>{
    if(err) throw err;

    console.log("tablas del 5 creada")
})




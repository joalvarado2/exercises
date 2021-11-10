// conversion de hora comun en hora militar usando substring("start","final") que nos permite 
// coger caracteres especificos y charAt() para usar la condicion de la letra a evaluar

let s = "08:05:45PM";

function timeConversation(s) {
  let time = s.charAt(8);
  let timeMilitary = "";
  let hourFinal;
  if (time == "A") {
    if (s.substring(0, 2) == "12") {
      timeMilitary = "00";
    } else {
      timeMilitary = s.substring(0, 2);
    }
  } else {
    //PM
    if (s.substring(0, 2) == "12") {
      timeMilitary = s.substring(0, 2);
    } else {
      timeMilitary = parseInt(s.substring(0, 2)) + 12;
    }
  }
  hourFinal = timeMilitary + s.substring(2, 8);
  return console.log(hourFinal);
}

timeConversation(s);

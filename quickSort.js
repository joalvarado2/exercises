//METODO DE ORDENAMIENTO QUICK SORT

function quickSort(array) {
  if (array.length < 1) {
    return [];
  }
  let right = [];
  let left = [];
  let pivot = array[0];

  for (let i = 1; i < array.length; i++) {
    if (array[i] < pivot) {
      left.push(array[i]);
    } else {
      right.push(array[i]);
    }
  }
  console.log(left);
  console.log(right);

  return [].concat(quickSort(left), pivot, quickSort(right));
}

console.log(quickSort([5,2]));

let ary = [0, 1, 1, 2, 3, 5, 8, 13];

function fibs(n) {
  if (n <= 0) return [];
  if (n === 1) return [0];
  if (n === 2) return [0, 1];


  let fibsArr = [0, 1];
  for (let i = 2; i < n; i++) {
    let nextFib = fibsArr[i - 1] + fibsArr[i - 2];
    fibsArr.push(nextFib);
  }
  return fibsArr;
}

console.log(fibs(8));


function fibsRec(n) {
  if (n <= 0) return [];
  if (n === 1) return [0];
  if (n === 2) return [0, 1];

  let fibsArr = fibsRec(n - 1);
  let nextFib = fibsArr[fibsArr.length - 1] + fibsArr[fibsArr.length - 2];
  fibsArr.push(nextFib);
  return fibsArr;
}

console.log(fibsRec(8));


function recurse(x){
   if (x > 0){
       console.log(x)
       recurse(x - 1)
  }
}
recurse(10)


function mergeSort(arr) {
  if (arr.length <= 1) return arr;

  let mid = Math.floor(arr.length / 2);
  let left = mergeSort(arr.slice(0, mid));
  let right = mergeSort(arr.slice(mid));

  return merge(left, right);
}

function merge(left, right) {
  let result = [];
  let i = 0;
  let j = 0;

  while (i < left.length && j < right.length) {
    if (left[i] < right[j]) {
      result.push(left[i]);
      i++;
    } else {
      result.push(right[j]);
      j++;
    }
  }

  return result.concat(left.slice(i)).concat(right.slice(j));
}

console.log(mergeSort([1, 5, 3, 8, 2]));



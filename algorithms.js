const checkPrime = (num, arr) => {
  for (let p of arr) {
    if (num == p || num % p == 0){
      return false;
    }
  }
  arr.push(num);
  return true;
}

const getPrimes = n => {
 let primes = [];
 let i = 2;
 for (let p = 0; p < n; i++){
   if (checkPrime(i, primes) === true){
     p += 1;
   }
 }
 return primes;
}

const binarySearch = (min, max, arr, val) => {
 if (max >= min){
   let index = floor((min + max)/2);
   if(arr[index] === val){
     return index;
   } else if (arr[index] < val){
     return binarySearch(index + 1, max, arr, val);
   } else {
     return binarySearch(min, index - 1, arr, val);
   }
 }
 return -1;
}

Array.prototype.contains = function(val){
 if(binarySearch(0, this.length - 1, this, val) == -1){
   return false;
 } else {
   return true;
 }
}

Array.prototype.swap = function(i_a, i_b){
  let temp = this[i_a];
  this[i_a] = this[i_b];
  this[i_b] = temp;
}

Array.prototype.getRandom = function(n){
  tempArr = this.slice();
  for (var max = tempArr.length - 1; tempArr.length - 1 - max < n; max--){
    tempArr.swap(max, floor(random(0, max)));
  }
  return tempArr.slice(max, tempArr.length - 1);
}

const getGCD  = (n1, n2) => {
  if (n2 == 0){
    return n1;
  } else {
    return getGCD(n2, n1 % n2);
  }
}

const fraction = (x) => {
  let split = x.toString().split(".");
  let decLen = split[1].length;
  let den = pow(10, decLen);
  let num = x * den;

  let gcd = getGCD(num, den);

  return (`${num / gcd}/${den / gcd}`);
}

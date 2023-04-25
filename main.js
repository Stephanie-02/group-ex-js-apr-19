let dataArr = [
  8, 79, 14, 94, 33, 31, 2, 74, 46, 72, 75, 40, 5, 1, 48, 81, 99, 4, 43, 68, 90,
  23, 97, 10, 55, 11, 20, 50, 70, 83, 47, 25, 86, 30, 60, 96, 76, 22, 67, 77,
];

function isPrime(num) {
  if (num == 2 || num == 3) return true;
  if (num <= 1 || num % 2 == 0 || num % 3 == 0) return false;
  for (let i = 5; i * i <= num; i += 6)
    if (num % i == 0 || num % (i + 2) == 0) return false;
  return true;
}

class BaseNumber {
  getNumber (){}
}

class NumberBucket extends BaseNumber {
  constructor (){
    super();
    this._number=1;
  }

  get number() {
    return this._number;
  }

  set number(arg1) {
    this._number = arg1;
  }

  getNumber() {
    return this._number;
  }
}

class PrimeBucket extends BaseNumber {
  constructor(){
    super();
    this._number=2;
  }

  get number() {
    return this._number;
  }

  set number(arg2){
    if (isPrime(arg2)) {
      this._number = arg2;
    }
  }

  getNumber() {
    return this._number;
  }
}

let numbers=[];

for (let i = 0; i < dataArr.length; i++) {
  if (isPrime(dataArr[i])) {
    let obj1 = new PrimeBucket();
    obj1.number = dataArr[i];
    numbers.push(obj1);
  }else {
    let obj2 = new NumberBucket();
    obj2.number = dataArr[i];
    numbers.push(obj2);
  }
}

for (let i = 0; i < numbers.length; i++) {
  const element = numbers[i];
  if (element instanceof BaseNumber) {
    console.log(element.getNumber());
  }
}

console.log (numbers);


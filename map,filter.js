const num=[1,2,3,4,5];
const result=num.map((numb)=> numb*numb);
console.log(result)

const number=[1,2,3,4,5];
const result_num=number.filter((numb)=> numb>2);
console.log(result_num)

const n=[1,2,3,4];
const vv=n.reduce((acc,nu) => acc+nu);
console.log(vv);

//for each
let fruits = ["apple", "orange", "cherry"];

fruits.forEach((fruit) => console.log(fruit));
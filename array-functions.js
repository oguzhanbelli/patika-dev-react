const users = ["Ayşe", "Fatma", "Hayriye"];
const usersObj = [
  {
    name: "Mehmet",
    age: 21,
  },
  { name: "Mehmet", age: 18 },
  { name: "Sevilay", age: 19 },
];
/*

push
map
find
filter
some
every
includes
*/

// //push
// const newArray = users.push("Ayşe");

// console.log(newArray);

// //map

// users.map((item) => {
//   console.log(item);
// });

// usersObj.map((item) => {
//     console.log(item.name);
//   });

//find

// const result = usersObj.find((item) => item.name === "Mehmet" && item.age < 19);
// console.log(result);

//filter

// const result = usersObj.filter(({name,age}) => name === "Mehmet" && age < 19);
// console.log(result);

//some

// const some = usersObj.some((item) =>  item.age === 18);
// console.log(some);

//every

// const every = usersObj.every((item) => item.age > 17);

// console.log(every);

//includes

const meyveler = ["Elma", "Armut", "Çilek", "Muz"];

const isIncluded = meyveler.includes("Armut");
console.log(isIncluded);

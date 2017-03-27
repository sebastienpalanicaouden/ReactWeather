// var names = ['Andrew', 'Julie', 'Thomas', 'Matthieu'];
//
// names.forEach(function (name) {
//   console.log('forEach', name);
// });
//
// names.forEach((name) => {
//   console.log('arrowFunc', name);
// });
//
// names.forEach((name) => console.log(name));

// var returnMe = (name) => name + '!';
// console.log(returnMe('Andrew'));

// var person = {
//   name: 'Sébastien',
//   greet: function() {
//     names.forEach((name) => {
//       console.log(this.name + ' says hello to ' + name);
//     });
//   }
// }
//
// person.greet();

function add(a, b) {
  return a + b;
}

var addStatement = (a, b) => {
  return a + b;
};
console.log(addStatement(1, 3));

console.log(add(1, 3));
console.log(add(9, 0));

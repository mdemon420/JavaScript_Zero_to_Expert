// function name() {
//     console.log("my name is Emon")
// };
// name();

// function juiceMaker(apple, orange) {
//     const juice = `${apple} Apple and ${orange} Orange juice`
//     return juice;
// }

// console.log(juiceMaker(4, 0));

// const orangeAndAppleJuice = juiceMaker(10, 9);
// console.log(orangeAndAppleJuice)


// function declaration
// function calcAge(birthYear) {
//     const currentYEar = 2022;
//     const age = currentYEar - birthYear;
//     return age;
// }
// const emonAge = calcAge(1998);
// console.log(emonAge);

// // function expiration

// const calcAge2 = function (birthYear) {
//     const currentYEar = 2022;
//     const age = currentYEar - birthYear;
//     return age;
// }
// const litonAge = calcAge2(1984);
// console.log(litonAge);

// arrow function

// const calcAge3 = (birthYear) => {
//     const currentYEar = 2022;
//     const age = currentYEar - birthYear;
//     return age;
// }
// console.log(calcAge3(1984));

// const retirement = (birthYear) => {
//     const currentYEar = 2022;
//     const age = currentYEar - birthYear;
//     const retirement = 65 - age;
//     return retirement
// };
// console.log(retirement(1998));


// function calls other function

// const cutFruit = fruit => {
//     return fruit * 4;
// }

// const fruitProcessor = (apple, orange) => {
//     const appleCut = cutFruit(apple);
//     const orangeCut = cutFruit(orange);

//     const juice = `Juice with ${appleCut} piece of apple and ${orangeCut} piece of orange`;
//     return juice;
// }

// console.log(fruitProcessor(5, 3));


// array

// const friends = ['emon', 'liton', 'al-amin'];
// console.log(friends);

// console.log(friends[2])

// friends[2] = 'joy';
// console.log(friends)

// Exercise

// const calcAge = (birthYear) => {
//     return 2050 - birthYear
// };

// const year = [1999, 2001, 184];
// const age1 = calcAge(year[0]);
// const age2 = calcAge(year[1]);
// const age3 = calcAge(year[2]);
// console.log(age1, age2, age3);

// const age = [age1, age2, age3];
// console.log(age)

// const friends = ['Emon', 'Liton', 'Easin'];
// console.log(friends);

// friends.push('Ayaan')
// console.log(friends);

// friends.unshift('Rabu');
// console.log(friends);

// friends.pop();
// console.log(friends);

// friends.shift();
// console.log(friends);

const emon = {
    firstName: 'Md',
    lastName: 'Emon',
    job: "student",
    friends: ['Anik', 'Sagor', 'Bappy']
};

console.log(emon.firstName, emon.lastName);
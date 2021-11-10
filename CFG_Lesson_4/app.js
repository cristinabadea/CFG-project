//  Data types

var myName = 'Tina';
var age = 29;

console.log(myName, age);

var pi = 3.1415;
console.log(pi);

var livesInLondon = false;
var livesInBrighton = true;

console.log(livesInBrighton, livesInLondon);

//null
var pets = null;
console.log(pets);

//undefined
var x
console.log(x); //x is undefined

x = 'Hello';

console.log(x +" "+ myName);

//Joining strings

console.log(` ${x} my name is ${myName} and I am ${age} years old.`);

//Exercices

var tvShow = 'Friends';

var characters = 6;

characters = characters + 2;

var rating = 7.5;

var hasShowFinished = true;

console.log(tvShow, characters, rating, hasShowFinished);

// hasShowFinished = false;

var booleanSentence = `The TV show ${tvShow} has ${hasShowFinished ? '' : 'not' } finished.`;
console.log(booleanSentence);

// If/Else Statements

if (hasShowFinished){
    console.log(`of`);
} else{
    console.log('Yuppy!')
}


if(myName !=='Tina'){
    console.log('Nice to meet you, ' + myName);

}else{
    console.log(`${x}, stranger!`)
}

// Exercices

// var answer = prompt('Would you like to come to my party');

// if (answer.toLowerCase().includes("yes") || answer.toLowerCase() === 'yeah' || 
//     answer.toLowerCase().includes('yeah')){
//     alert('Awesome! See you there!');
// } else if (answer.toLowerCase === "no"){
//     alert('Why?')
// }
//  else {
//     alert('Shame, maybe next time!');
// }

// Arrays

var books = ["Circe", "Harry Potter", "Dark Tower"];
console.log(books[0]);

var countries = ['United Kingdom', 'France'];
console.log(countries);
countries.push(age);
console.log(countries);
countries.shift();
console.log(countries);

countries.splice(1, 0 , 'Romania');
console.log(countries);
countries[2] = 'Japan';

console.log(countries.join('&'));

// Homework!!
// Ex 4.9

// Create a simple game that uses everything you have learned today. For the purpose of demonstration,
// we'll use a 'Going to the shops' example

//The game will alert to display intr and prompt to get feedback!
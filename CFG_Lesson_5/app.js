// Simple for loops

for (var i = 0; i < 5; i++){
    // console.log('The number is ' + i);
}

for (i = 10; i > 0; i--){
    // console.log('The number is ' + i);
}

// Functions

function getName() {
    return prompt('What is your name?');
}

// var yourName = getName();
// console.log(yourName);

//Ex #1
function getMovieDetails(title, released) {
    return(` The movie called ${title} was released in ${released}.`);
}

var firstMovie = getMovieDetails('Titanic', 1987)

var secondMovie = getMovieDetails('No Time To Die', 2021);

//console.log(firstMovie, secondMovie);


//Ex #2

function shoppingCart(item, cost, balance) {
    if (balance >= cost) {
        return `You can afford the ${item}!`;
    } else {
        return `You can't buy the ${item}! :(`
    }
}

console.log(shoppingCart('laptop', 1500, 350));
console.log(shoppingCart('shoes', 90, 90));
console.log(shoppingCart('skirt', 100, 290));

// Ex #3


// Write a function that reverses a string

function reverseString(str) {
    var reverse = '';
    for (var i = str.length-1; i >= 0; i--)
    {
        reverse += str[i];
    }
    return reverse;
}

console.log(reverseString('My name is Tina'));

// Write a functions that sorts a string in alphabetical order.


function sortString(str) {
    return str.split('').sort().join("");

}

console.log(sortString('hello world'));

// Write a function that loops over an array of string and capitalizes each one before
// returning an array

function capitalise(arr) {
    
    var capitalised = [];
    for (var i = 0; i < arr.length; i++){
        var str = arr[i];
        console.log(str);
        // str[0] = str[0].toUpperCase();
        // capitalised.push(arr[i][0].toUpper)
        // (arr[i][0] = arr[i][0].toUpperCase());
    }
    return (arr);
}
//console.log(capitalise(['tina', 'salut']));
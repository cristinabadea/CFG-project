var girl = {
    name: "Tina",
    city: 'London',
}

console.log(girl);

document.addEventListener('DOMContentLoaded', function () {

    var li = document.getElementById('li-id');

    li.style.color = 'blue';


    // Using only JS create another paragraph p called para2
    
    var newPara = document.createElement('p');

    newPara.innerText = "I added this from JS";

    newPara.style.fontSize = '18px';
    newPara.style.fontFamily = 'sans-serif';
    newPara.style.width = '100px';
    newPara.style.border = "1px solid orange";
    newPara.style.padding = '30px';
    console.log(newPara);

    document.body.appendChild(newPara);

    newPara.addEventListener('mouseenter', function () {
        newPara.style.color = 'green';
    });

    newPara.addEventListener('mouseleave', () => {
        newPara.style.color = 'pink';
    });
    newPara.addEventListener('onclick', () => {
        newPara.style.backgroundColor='blue';
    });


});

var user = {
    firstName: 'Tina',
    lastName: 'Georgescu',
    age: 29,
    occupation: 'lawyer',
    address: {
        number: 3,
        street: "Pan Peninsula Square",
        city: 'London',
    }
}
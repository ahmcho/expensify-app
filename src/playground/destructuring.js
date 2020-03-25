//Object

// const person = {
// 	name: 'Ahmad',
// 	age: 25,
// 	location: {
// 		city: 'Baku',
// 		temp: 16
// 	}
// }

// const {name: firstname = 'Anonymous',age} = person;
// const {city,temp: temperature} = person.location;
// console.log(`${firstname} is ${age}.`);

// if(city && temperature){
// 	console.log(`The weather in ${city} is ${temperature}`)
// }

/*
const book = {
	title: 'Ego is the Enemy',
	author: 'Ryan Holiday',
	publisher: {
		name: 'Penguin'
	}
};

const {name: publisherName = 'Self-Published'} = book.publisher;

console.log(publisherName);

*/

//Array

// const address = ['1299 S Juniper Street','Baku','Sabail','1073'];
// const [, city, state] = address;
// console.log(`You are in ${city},${state}`);

const coffees = ['Coffee (hot)','$2.00', '$2.50', '$2.75'];
const [item, ,price] = coffees

console.log(`A medium ${item} costs ${price}`);
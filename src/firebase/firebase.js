import * as firebase from 'firebase';

const firebaseConfig = {
    apiKey: process.env.FIREBASE_API_KEY,
    authDomain: process.env.FIREBASE_AUTH_DOMAIN,
    databaseURL: process.env.FIREBASE_DATABASE_URL,
    projectId: process.env.FIREBASE_PROJECT_ID,
    storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID,
    appId: process.env.FIREBASE_APP_ID,
    measurementId: process.env.FIREBASE_MEASUREMENT_ID
};

firebase.initializeApp(firebaseConfig);
const db = firebase.database();

export {firebase, db as default};
// db.ref('expenses').on('child_removed', (snapshot) => {
//     console.log(snapshot.key, snapshot.val());
// });
// db.ref('expenses').on('child_changed', (snapshot) => {
//     console.log('Changed!',snapshot.key, snapshot.val());
// });
// db.ref('expenses').on('child_added', (snapshot) => {
//     console.log('Changed!',snapshot.key, snapshot.val());
// });
// // db.ref('expenses').on('value', (snapshot) => {
// //     const expenses = [];

// //     snapshot.forEach((childSnapshot) => {
// //         expenses.push({
// //             id: childSnapshot.key,
// //             ...childSnapshot.val()
// //         });
// //     });
// //     console.log(expenses);
// // }, (error) => {
// //     console.log('An error! : ', error);
// // })

// // db.ref('expenses')
// // .once('value')
// // .then((snapshot) => {
// //     const expenses = [];

// //     snapshot.forEach((childSnapshot) => {
// //         expenses.push({
// //             id: childSnapshot.key,
// //             ...childSnapshot.val()
// //         });
// //     });
// //     console.log(expenses);
// // })

// /*
// const expenseList = [
//     {
//         description: 'For computer',
//         note: '',
//         amount: 1200,
//         createdAt: 12000
//     },
//     {
//         description: 'Harry Potter anthology disks',
//         note: '',
//         amount: 21000,
//         createdAt: 125470
//     },
//     {
//         description: 'A test expense',
//         note: 'A note for test expense',
//         amount: 0,
//         createdAt: 0
//     }
// ];

// expenseList.map( (expense) => {
//     db.ref('expenses').push(expense);
// });

// /*
// db.ref('notes/-M3MLlHKiWxx65nyXUMU').remove().then( () => {
//     alert('Removed!');
// });
// db.ref('notes').push({
//     title: 'Course Topics',
//     body: 'React Native, Angular, Python'
// });


// db.ref('notes').set(notes);

// db.ref().on('value', (snapshot) => {
//     const {name, job: {company , title }} = snapshot.val();
//     console.log(`${name} is ${title} at ${company}`);
// }, (error) => {
//     console.log('An error! : ', error);
// })

// const onValueChange = db.ref().on('value', (snapshot) => {
//     console.log(snapshot.val());
// }, (error) => {
//     console.log('Error with data fetching: ', error);
// });

// setTimeout( () => {
//     db.ref('age').set(29);
// }, 3500)

// setTimeout( () => {
//     db.ref().off('value',onValueChange);
// }, 7000)

// setTimeout( () => {
//     db.ref('age').set(30);
// }, 10500)

// db.ref('location/city').once('value')
// .then( (snapshot) => {
//     const val = snapshot.val();
//     console.log(val);
// })
// .catch( (err) => {
//     console.log('error fetching data: ',err);
// })

// firebase.database().ref().set({
//     name: 'Ahmad Cholluyev',
//     age: 25,
//     stressLevel: 6,
//     job: {
//         title: 'Software Developer',
//         company: 'Google Inc.'
//     },
//     location: {
//         city: 'Baku',
//         country: 'Azerbaijan'
//     }
// }).then(() => {
//     console.log('data is saved');
// }).catch((error) => {
//     console.log('Oopsiie! ', error);
// })

// db.ref().update({
//    stressLevel: 9,
//    'job/company' : 'Amazon Inc.',
//    location: {
//        city: 'Seattle',
//        country: 'US'
//    }
// });

// db.ref('isSingle').remove()
// .then(() => {
//     console.log('isSingle has been removed!');
// })
// .catch((error) => {
//     console.log('Error: ',error);
// })
// */
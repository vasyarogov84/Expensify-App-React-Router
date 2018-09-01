import * as firebase from 'firebase';


var config = {
    apiKey: "AIzaSyAjRruuP0bw-hD8OLn46Fxjl58i-qf11Uw",
    authDomain: "expensify-7a50b.firebaseapp.com",
    databaseURL: "https://expensify-7a50b.firebaseio.com",
    projectId: "expensify-7a50b",
    storageBucket: "expensify-7a50b.appspot.com",
    messagingSenderId: "455394917598"
};
firebase.initializeApp(config);

const data = firebase.database();

data.ref().set({
    name: 'Viktor Grom',
    age: 33,
    city: 'Portland',
    nationality: 'Russian',
   });

data.ref('attributes').set({
    height: 5.11,
    weight: 195
});




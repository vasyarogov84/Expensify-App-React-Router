import * as firebase from 'firebase';


var config = {
   
};
firebase.initializeApp(config);

const data = firebase.database();

data.ref().set({
    name: 'Viktor Grom',
    age: 33,
    city: 'Portland',
    nationality: 'Russian',
}).then(() => {
    console.log('Data is saved');
}).catch((error) => {
    console.log(error);
});

//data.ref('attributes').set({
   // height: 5.11,
   // weight: 195
//}).then(() => {
    //console.log('Attributes added');
//}).catch((e) => {
    //console.log(e);
//});

data.ref('age').remove();  // data.ref('age').set(null);
data.ref().update({ city: 'Aloha', nationality: 'Aborigen'});




data.ref('notes').on('value', (snapshot) => {
    const expenses = [];
    snapshot.forEach((expense) => {
        expenses.push({
            id: expense.key,
            ...expense.val()
        });
    });
    console.log(expenses);
}, (e) => {
    console.log('error',e);
    });

data.ref('notes').on('child_removed', (snapshot) => {   // child_changed, child_added
    console.log(snapshot.key, snapshot.val());
});


for (let i = 0; i <= 3; i++) {
    let date = new Date();
    //console.log(typeof date);
    data.ref('notes').push({
        decr: `expense number ${i}`,
        note: '',
        createdAt: i,
        amount: Math.floor(Math.random() * 1000 + 1)
    })
}

data.ref('notes').push({
    decr: `expense number 10`,
    note: '',
    createdAt: 7,
    amount: Math.floor(Math.random() * 1000 + 1)
});


//data.ref('notes')
//    .once('value')
//    .then((snapshot) => {
//        const expenses = [];
//        snapshot.forEach((expense) => {
//            expenses.push({
//                id: expense.key,
//                ...expense.val()
//            });
//        });
//        console.log(expenses);
//    })






 ///// chalenge

//const onValueChange = () => data.ref().on('value', (snapshote) => {
//    let { age, city, name, nationality } = snapshote.val();
//    console.log(`${name} is ${nationality}, ${name === 'viktor grom' ? 'he' : 'she'} is  ${age} years old`);
//}, (e) => {
//    console.log('error', e);
//    })

//onValueChange();

//setTimeout(() => {
//    data.ref().update({
//        name: 'Iryna Grom',
//        age: 31,
//        nationality: 'Ukraine',
//        city: 'San Diego'
//    });
//},2000);

               //// end of chalenge

//data.ref().on('value', (snapshot) => {
//    console.log(snapshot.val());
//});

// unsurbcribe from database data.ref().off();


//data.ref().once('value')
//    .then((snapshot) => {
//        const val = snapshot.val();
//        console.log(val);
//    })
//    .catch((e) => {
//        console.log('e', e);
//    });
//setTimeout(() => {
//    data.ref().set({
//        name: 'viktor grom',
//        age: 33,
//        city: 'portland',
//        nationality: 'ukrainean',
//    }).then(() => {
//        console.log('data is saved');

//    }).catch((error) => {
//        console.log(error);
//    });
//}, 3000);


//data.ref('attributes').set({
//    height: 5.11,
//    weight: 195
//}).then(() => {
//    console.log('Attributes added');
//}).catch((e) => {
//    console.log(e);
//});

//data.ref('age').remove();  // data.ref('age').set(null);
//data.ref().update({
//    city: 'Aloha',
//    nationality: 'Aborigen',
//    location: {
//        state: 'Oregon',
//        zip: 97078
//    },
//    age: null
//});

//data.ref().update({
//    'location/city': 'Krasnodar'
//}).then(() => {
//    console.log('Krasnodar was added');
//    });
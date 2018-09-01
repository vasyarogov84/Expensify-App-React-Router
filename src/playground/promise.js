let promise = new Promise((res, req) => {
    res('I learn what is Promise');
});



promise.then((data) => {
    console.log(data);
});
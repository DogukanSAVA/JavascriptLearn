
You could use some, as in:

arr.some(function (el) { return el > 1000; });
This example which would throw an error:

var a = 1000,
    b = 1000,
    c = 2000;

var arr = [a, b, c];

try {
    if (arr.some(function (el) { return el > 1000; })) {
        throw "err"
    } else {
        console.log('no error')
    }
} catch (err) {
    console.log("You have not entered all three dimensions correctly");
}
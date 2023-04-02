1;
// Given
console.log(hello);
var hello = 'world';
// var hello;
// console.log(hello);// logs undefined
// hello = "world"

2;
//given 
var needle = 'haystack';
test();
function test() {
    var needle = 'magnet';
    console.log(needle);
}
// var needle;
//run the function;
// needle = 'magnet';
// console.log(needle);
//output is magnet

3;
var brendan = 'super cool';
function print() {
    brendan = 'only okay';
    console.log(brendan);
}
console.log(brendan);
// var brendan;
// run the function but no calling the function, hence the console log in the function dont run 
// console.log(brendan);
// output is super cool;


4;
var food = 'chicken';
console.log(food);
eat();
function eat() {
    food = 'half-chicken';
    console.log(food);
    var food = 'gone';
}
// var food;
// console.log(food) ; output is chicken;
// calling the function, run the function;
// inside the function set food to half-chicken
//console log food now the output is half-chicken


5;
mean();
console.log(food);
var mean = function () {
    food = "chicken";
    console.log(food);
    var food = "fish";
    console.log(food);
}
console.log(food);
//console.log(food) , there is no global var called food, the output should be undefined?
// should be a typeerror cuz you cant set a var to a function.



6;
console.log(genre);
var genre = "disco";
rewind();
function rewind() {
    genre = "rock";
    console.log(genre);
    var genre = "r&b";
    console.log(genre);
}
console.log(genre);
// console.log(genre) should be undefined, cuz its at the very top, no var genre is set yet;
//var genre;
// calling the function, run the function;
// genre now = rock;
//console.log(genre), the output is rock, cuz genre set to rock prior to this console.log;
// var genre = r&b;
// console.log(genre) , the output is r&b;
//outside the function console.log(genre), this output should be disco because its console log the global var genre;

7;
dojo = "san jose";
console.log(dojo);
learn();
function learn() {
    dojo = "seattle";
    console.log(dojo);
    var dojo = "burbank";
    console.log(dojo);
}
console.log(dojo);
//dojo = san jose;
//console.log(dojo), output is sanjose;
//calling the function, run the function;
//same concept with the last one, dojo =  seattle, console.log(dojo) output is seattle
//console.log(dojo) output is burbank
//console.log(dojo) output is san jose because its logging the global dojo;


8;
console.log(makeDojo("Chicago", 65));
console.log(makeDojo("Berkeley", 0));
function makeDojo(name, students) {
    const dojo = {};
    dojo.name = name;
    dojo.students = students;
    if (dojo.students > 50) {
        dojo.hiring = true;
    }
    else if (dojo.students <= 0) {
        dojo = "closed for now";
    }
    return dojo;
}
// console.log(makeDojo("Chicago", 65)) calling the function;
//console.log(makeDojo("Berkeley", 0)) calling the function;
// run the function with (name,students) 
// make a new const dojo = {}
//set dojo.name to name , dojo.students to students;
//running the if statement, for the first one it runs because everything is fine.
// the second console.log didnt run because you cant change a const , hence a type error .


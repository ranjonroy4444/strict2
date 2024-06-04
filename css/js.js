//Number Typ--> Math Object
// Math.random()*(max-min)+min;

let rand = Math.round (Math.random ()* (100-50)+50);

// Condition: num % 2 == 0 -->Even

let age =50;

if(rand % 2 == 0){
    console.log(rand +": Even");

}
else{
    console.log(rand +" : Odd");
}
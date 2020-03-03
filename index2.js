console.log('helllllo word!');

//let x = false;
let y = false;
let z = false;

function myF1(x,y) {
    let r;
    console.log(r);
    console.log(x,y);
    //r = ((x && y) || (!(x) && z));
    //r = (!(x) || !(y));
    //r = (!(x) && !(y) && !(z))
    r = !(x && y);
    
    console.log(r);
};

function myF2(x,y,z) {
 let r;
 console.log(r);
 console.log(x,y,z);
 //r = ((x && y) || (!(x) && z));
 //r = (!(x) || !(y));
 //r = (!(x) && !(y) && !(z))
 //r = !(x && y);
 
 console.log(r);
};

// if guess == x/g, then take the guess
// else, guess = ( (guess + (x/guess)))


// define improving guess 
// guess = (guess = (guess + (x/guess)))

// define good enough
// abs((square g) - (square x)) < prec 

const prec = (.00000001);
let g = 1;
//let a;
let x;


function mySqRt(s) {
    x = s;
    console.log(`comparison before loop ${Math.abs(s-(g*g))}`);
  while(Math.abs(s-(g*g)) > prec) {
    console.log(`comparison in loop ${Math.abs(s-(g*g))}`);
  console.log(`before improve ${g}`);
  improveG(g);
  console.log(`after improve ${g}`);
  
  }
 
  console.log(`comparison out/after loop ${Math.abs(s-(g*g))}`); 
  console.log(`final s is: ${s}`);
}

function findAvg(a,b) {
return ((a+b)/2);
}

function improveG(i) {
g = (findAvg(i,(x/i)));
}
console.log(`prec is: ${prec}`);
console.log(`x is: ${x}`);
console.log(`g is: ${g}`);

mySqRt(999);
console.log(`final x is: ${x}`);

console.log(`Final output is ${g}`);
// console.log(g);
// improveG(g);
// console.log(`test: ${g}`);
// improveG(g);
// console.log(g);
// improveG(g);
// console.log(g);
// improveG(g);
// console.log(g);
// improveG(g);
// console.log(g);
// improveG(g);
// console.log(g);
// improveG(g);
// console.log(g);
// improveG(g);
// console.log(g);
// improveG(g);
// console.log(g);
// improveG(g);
// console.log(g);
// improveG(g);
// console.log(g);
// improveG(g);
// console.log(g);
// improveG(g);
// console.log(g);



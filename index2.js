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

/*
 * @param {number} num
 * @return {number}
 */
var numberOfSteps  = function(num) {
  var count = 0;
  while (num !== 0) {
    if(num % 2 === 0){
      (num = num / 2);
      count++;
      } else {
      (num--, count++);
      }
    }
    return count;
  };

 console.log(numberOfSteps(14));
/*
 * @param {string} address
 * @return {string}
 */
var defangIPaddr = function(address) {
  
  return address.split('.').join('[.]');
    
};

console.log(defangIPaddr("1.1.1.1"));

/*
 * @param {string} s
 * @return {number}
 */
var balancedStringSplit = function(s) {
  let counter = 0;
  let numLine = 0;
  for(var i = 0; i < s.length; i++)
  {
    if(s.charAt(i) == 'L')
    {
      numLine--;
    } else if(s.charAt(i) == 'R')
    {
      numLine++;
    }
    if(numLine == 0)
    { counter++}
  }
    console.log(counter);
    return counter;
};

let s1 = "RLRRLLRLRL";
let s2 = "RLLLLRRRLR";
let s3 = "LLLLRRRR";
let s4 = "RLRRRLLRLL";
balancedStringSplit(s1);
balancedStringSplit(s2);
balancedStringSplit(s3);
balancedStringSplit(s4);

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/*
 * @param {ListNode} head
 * @return {number}
 */
 var getDecimalValue = function(head) {
     let sum = 0;  
      let i =0;
  for(var val in head)
   {
      if(val == 1)
       {
         sum += (1 * Math.pow(2,i));
       }
      i++;

}
     return sum;
 };

 function ListNode(val) {
        this.val = val;
       this.next = null;
 }

let head = new ListNode();
head = [1,0,1,1];
console.log(...head);
console.log("the answer is: ");
let ans = getDecimalValue(head);
console.log(ans);

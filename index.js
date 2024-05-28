//  function declaration 
function functionName(){
// code block
}

// function greetings(name){
//     console.log ("hello,name"); 
// }
// console.log(greetings("name"))
// greetings ()


// function greetings(name){
//     console.log(`"hello, ${name}`)
// }
// greetings("Joan")

// const name= Joan

function greetings(name){
    console.log(`"hello,${name}"`)
}
greetings("Robert")

// function expresssion 
const greetings=function(name){

}

// Named function
function trialFunction(){
    console.log("Joan Winga")
}
trialFunction()
// prints Joan Winga 

// Named function with arguments 
function trialFunction(parameter1, parameter2){
console.log(parameter1, parameter2)
}
trialFunction('Joan Winga')
// prints Joan Winga 

// anonymous function 
function(){
console.log(hasNoNameinTrialFunction)
}
// often used as a callback function  

const trialFunction=function(){
    console.log('logsWhateverIsWrittenHereonConsole')
}
trialFunction();
// prints logsWhateverIsWrittenHereOnConsole 

// Anonymous functions with arguments 
const trialFunction=function(parameter1){
    console.log(parameter1)
}
trialFunction(JoanWinga);
// prints JoanWWinga

// Arrow functions with no arguments
const trialFunction=()=>{
    console.log('thisHasNoArguments')

}
trialFunction();
// prints thisHasNoArguments 

// Arrow function with a single argument 
const trialFunction = (parameter1) =>{
console.log(parameter1);
}
trialFunction(logsTheValueofparameter1)
// prints logsTheValueofparameter1 

// Arrow function with 2 arguments 
const trialFunction=(parameter1,parameter2)=>{
console.log(parameter1,parameter2);
}
trialFunction(thisCanBeAnythingFromSumOfNumbersToStrings);
// prints thisCanBeAnythingFromSumOfNumbersToStrings 

const myDivide=(parameter1,parameter2)=>{
console.log(parameter1/parameter2);
}
myDivide(10,2)
// prints 5 

// concise arrow function with arguments 
const trialFunction=(parameter1,parameter2)=>(value1,value2)
console.log(trialFunction(thisGivesOutputOfvalue1Value2))

const mySum=(parameter1,parameter2)=>(10+2)
console.log(mySum(10,2))
// prints 12




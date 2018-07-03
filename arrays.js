var ingredient1 = "bread";
var ingredient2 = "mild cheese";
var ingredient3 = "sharp cheese";
var ingredient4 = "butter";
var ingredient5 = "tomato";
var ingredient6 = "garlic";

var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"]

function addElementToBeginningOfArray(array,element){
  [element, ...array]
}
function destructivelyAddElementToBeginningOfArray(Array,element){
  Array.unshift(element)
}
function addElementToEndOfArray(Array,element){
  [...Array, element]
}
function destructivelyAddElementToEndOfArray(Array,element){
  Array.push(element)
}
function accessElementInArray(Array, index){
  Array[index]
}
function destructivelyRemoveElementFromBeginningOfArray(Array){
  Array.shift()
}

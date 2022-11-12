let origDogs = ["bulldog","tompom","labrador"];
let slicedDog = origDogs.slice(1,3);
let copyDog = [...origDogs]
let dog = origDogs.slice(0);
dog[dog.length]="Poddle"
dog.push("golden retriver");
dog.unshift("german shephard")
// console.log(dog)
dog.shift()
// console.log(dog)
dog.splice(2,1,"pug","boxer")
// console.log(dog)
let sortDog = dog.slice(0).sort()
// console.log(sortDog)
let cats = new Array("american curl", "bengal");
let animals = dog.concat(cats)
console.log(animals)
let newAnimals = [...dog, ...cats].toString();
console.log(newAnimals);
function scanArray([first,second]){
    console.log("Scan :"+ first + " " + second);
}
scanArray(animals);
let joinAnimals = animals.join(" ");
let allAnimals = "";
for(let animal of animals){
    allAnimals += animal + " ";
}
console.log(allAnimals)

let keyString = 'a string'
let keyObj = {}
let keyFunc = function(){}

let myMap = new Map()
myMap.set(keyString,"value associated with a string")
myMap.set(keyObj,"value associated with keyObj")
myMap.set(keyFunc,"value associate with keyFunc")
console.log(myMap)
let valStr = myMap.get(keyString)
console.log(valStr);
let isKeyExists = myMap.has('a string')
console.log(isKeyExists)
for(let [key, value] of myMap.entries()){
    console.log("Loop : " + key + " = "+ value)
}
for(let [key, value] of myMap){
    console.log("Loop : " + key + " = "+ value)
}
//property access
//object
const obj = {
  name: "david",
  age: 30,
  greeting() {
    console.log("hello world");
  },
};

console.log("name is", obj.name);
console.log(obj.greeting());

//array
const arr = [];
arr.name = "white";
console.log(arr);
arr[0] = "hello array";
console.log("total array is", arr);
console.log(arr["name"]);

/*
game characters challenge
create an object using bracket and dot notation 
that represent the characters and related data you may find in game of cube
*/
const gameObj = {};
gameObj.character = "Super Duper";
gameObj.weapon = ["lazer gun", "angry cat"];
gameObj.power = 40;

gameObj.name = [];
gameObj.name[0] = "sctarer scoll";
gameObj.name.push("awesome");
console.log(gameObj);

//es6 destructuring-define variable (extraced) from object or array
const [a, b, c] = [true, false, true];
console.log("result of a is", a);

// destructuring challenge
// create object
const object = { name2: "Rust", room: "kitchen", weapon: "candlestick" };
const { name2, room, weapon } = object;
console.log("name is", name2);
console.log("weapon is ", weapon);

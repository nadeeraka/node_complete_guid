function dog() {
  this.name = "oody";
  this.age = 8;
  this.bark = function() {
    console.log("baww");
  };
}

const myDog = new dog();

console.log(myDog);

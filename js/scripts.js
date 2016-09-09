// I will make an array with a list of different types of milkshakes
var milkshakesArray = ['Blackcurrant','Strawberry','Chocolate','Mango','Oreo'];

// This variable will find the first item in my milkshakesArray
var firstMilkshake = milkshakesArray[0];

// I will make an if... else... conditional that will test to
// see whether the first item in my milkshakesArray is Chocolate
// I will also test whether the third milkshake is a Banana milkshake
if (firstMilkshake == 'Chocolate') {
console.log('The first milkshake is a Chocolate milkshake');
}
else if (milkshakesArray[2] == 'Chocolate') {
  console.log('The third milkshake is a Banana milkshake');
}
else {
  console.log('The first milkshake is not a Chocolate milkshake');
  console.log('Actually, the first milkshake is '+firstMilkshake);
}

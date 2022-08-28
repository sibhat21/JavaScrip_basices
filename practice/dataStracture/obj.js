//array destractiringc
const arr = [1, 2, 3, 4];
const [a, b, c] = arr;
console.log(a, b, c);
//nested array Destracturing
let nested = [2, 3, 4, [5, 6]];
let [x, y, , [w, d]] = nested;
console.log(x, y, w);

//default value
const defualt = [20, 30];
const [x1 = 2, y2 = 8, z = 40] = defualt;
console.log(x1, y2, z);

const restaurant = {
  name: "Classico Italiano",
  Location: "Via Angelo Tavanti 23, Firenze,Italy",
  catagories: ["Italian", "Pizzeria", "Vegetarian", "Organic"],
  starterMenu: ["Focaccia", "Bruschetta", "Garlic Bread", "Caprese Salad"],
  mainMenu: ["Pizza", "Pasta", "Risotto"],
  openingHourse: {
    thu: {
      open: 12,
      close: 22,
    },
    fri: {
      open: 11,
      close: 22,
    },
    sat: {
      open: 0,
      close: 24,
    },
  },

  order: function (starterIndex, mainindex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainindex]];
  },
};

//object destracturing
const { name, openingHourse, catagories } = restaurant;
console.log(name, openingHourse, catagories)
 //nested object

const { fri } =openingHourse;
const { fri:{open,close} } =openingHourse;//more specfice 
console.log(open,close)
console.log("+++++++++++++++++")

const [first, , second] = restaurant.catagories;
console.log(first, second);

console.log(restaurant.order(0, 1));



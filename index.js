
const item = [
    {name: "Bike", price: 100},
    {name: "TV", price: 200},
    {name: "Album", price: 10},
    {name: "Book", price: 5},
    {name: "Phone", price: 5000},
    {name: "Computer", price: 1000},
];

// 1.Filter and show the cheapest product
let cheapOne = item.filter(function (e) {
    return e.price < 10;
});

console.log(cheapOne);


// 2.Filter and show the expensive product

let expensive = item.filter(function (e) {
    return e.price > 1000;
});
console.log(expensive);



// 3.The full price of all product combined
 let  sum = 0;

 item.forEach(element => {
     sum += element.price;
 });
 console.log(sum);


 // 4.The full price of all product combined and remove product that are under 10 dollar.
   let total = 0;
   const newItem = item.filter(object => {
       return object.price !== 5;
   });
    newItem.forEach(element => {
        total += element.price;
    });
    console.log(total);



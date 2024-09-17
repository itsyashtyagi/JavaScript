// const arr = [1, 2, 3]

// const intialValue = 0;
// const myTotal = arr.reduce( (accumulator, currentValue) => {
//     console.log(`Accumulator : ${accumulator} and currentValue : ${currentValue}`);
//     return accumulator + currentValue
// }, intialValue)

// const myTotal = arr.reduce( (acc, curval) => acc + curval , 0)

// console.log(myTotal);

const shoppingCart = [
    {
        itemName: "js course",
        price: 2999
    },
    {
        itemName: "py course",
        price: 999
    },
    {
        itemName: "mobile dev course",
        price: 5999
    },
    {
        itemName: "data science course",
        price: 12999
    },
]

const totalCartBill = shoppingCart.reduce( (acc, item) => acc + item.price, 0)

console.log(totalCartBill);


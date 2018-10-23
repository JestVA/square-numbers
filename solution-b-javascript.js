//- This was my first solution but what if we had a very large set of numbers. So we can fill any array length 

//- var numbersList = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20'];

//- numbersList.forEach(function(item, index, array) {
//-   console.log(item*item);
//- });

//- A better solution is this:


numberList = Array(20).fill('first-20-sqn').map((element, key) => Math.pow(key + 1, 2))
console.log(numberList)
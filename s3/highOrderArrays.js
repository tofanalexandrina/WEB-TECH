const arr = [123, 54, 23, 564];

//create a new array filteredArray that contains only the even numbers from arr
const filteredArray=arr.filter(el=>el%2===0);

// console.log(arr);
// console.log(filteredArray);


//forEach does not return a new array; 
//it simply performs an action on each element of the array
//the newForEachArr will be undefined because forEach doesn't return anything
const newForEachArr=arr.forEach(e1=>{
    return e1;
})

//creates a new array by transforming each element in the original array
const newMapArr=arr.map(e1=>{
    return e1*10;
})

//an array of promises, which will need to be resolved to get the transformed values
const newMapArr2 = arr.map( async (el) => {
    return el * 10;
})

// console.log(newForEachArr);
// console.log(newMapArr);

//uses the reduce method to calculate the sum of all the elements in the arr
const sum=arr.reduce((acc, e1)=>acc+e1, 0);
// let sum2=0;
// arr.forEach(e1=>{
//     sum+=e1;
// })

//searches the array for an element that matches the condition (el === 545)
//returns the first match or undefined if no match is found
const foundNumber = arr.find(el => el === 564)
console.log(foundNumber);
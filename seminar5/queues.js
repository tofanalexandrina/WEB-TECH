console.log(1);
//dupa promise se intoarce la setTimeOut
setTimeout(()=>console.log(2), 0);

//initial se uita la promise - microtask
Promise.resolve().then(()=>console.log(3));
console.log(4);
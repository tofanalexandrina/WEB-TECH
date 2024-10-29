console.log(1);

//intra intr-o coada de asteptare, dupa ce se executa task-urile sincrone
setTimeout(()=>{
    console.log('2 seconds')
}, 2000)
//asta se termina mai repede
setTimeout(()=>{
    console.log('1 second')
}, 1000)

console.log(2);
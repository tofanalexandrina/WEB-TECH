function logger(message){
    console.log(message);
}


//functiile async ar trebui sa aiba elemente async in interior
async function logger2(message){
    console.log(message);
}

const arrLogger=(message)=>{
    console.log(message);
}

const arrLogger2=async(message)=>{
    console.log(message);
}

async function f() { 
    try{
    let promise = new Promise((resolve, reject) => { 
    setTimeout(() => reject("done!"), 1000) 
    }); 
    let result =  await promise; // wait until the promise resolves (*) - asteapta finalizare promise
    console.log(result); // "done!" 
    } 
    catch(error){
        console.log(error)
    }
}

f()
console.log(2);



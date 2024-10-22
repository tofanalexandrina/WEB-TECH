function sum(...args){
    return args.reduce((acc, el)=>acc+el, 0);
}

console.log(sum(1, 2, 3));
console.log(sum(1, 2, 3, 4));

const yearsOld=20;
console.log(`Am varsta de ${yearsOld} ani.`);
console.log('Am varsta de ' + yearsOld + ' ani.')
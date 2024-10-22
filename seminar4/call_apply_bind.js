const person={
    fullName:function(){
        console.log(`${this.firstName} ${this.lastName}`)
    }, 

    //pute
    greet:function(age, punctuation){
        console.log(`I am ${age} old${punctuation}`)
    }
}

const person2={
    firstName:'Alexandrina',
    lastName: 'Tofan'
}


//metoda e aplicata primului obiect, dar cu contextul person 2
person.fullName.call(person2);
person.greet.call(person2, 20, '.');
//parametrii sunt trimisi sub forma de array
person.greet.apply(person2, [20, '.']);

//creeaza o nouă funcție care are un anumit context (this) permanent atașat și, opțional, anumite argumente fixate în mod permanent
const bound = person.greet.bind(person2)
bound(20, '.')


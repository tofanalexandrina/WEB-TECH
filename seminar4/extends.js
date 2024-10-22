class Student{
    constructor(name, age, grade){
        this.name=name;
        this.age=age;
        this.grade=grade;
    }
    greet(){
        console.log(`Hello, my name is ${this.name}`)
    }
}

const student=new Student(`Alexandrina`, 20, 3);
console.log(student);
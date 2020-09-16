function CanFly(constructorFunction: Function){
    console.log("Can Fly Invoked");
    constructorFunction.prototype.fly = true;
}



@CanFly
class Person{
    private name: string;

    constructor(name: string){
        console.log("### constructor called ###");
        this.name = name;
    }
}

console.log("### creating 1st ###");

let clark: Person = new Person("Clark");
console.log(clark);
console.log(`Can I Fly: ${clark['fly']}`);

console.log("### creating 2nd ###");

let josh: Person = new Person("Josh");
console.log(clark);
console.log(`Can I Fly: ${josh['fly']}`);


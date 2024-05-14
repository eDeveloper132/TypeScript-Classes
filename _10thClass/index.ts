// Data Type Of Object by Manually
let person: { name: string, age: number, exp: boolean, Qualities: { HairColour: string, SkinTone: string, Body: string } } = {
    name: "Ali Aftab",
    age: 15,
    exp: true,
    Qualities: {
        HairColour: "Black",
        SkinTone: "White",
        Body: "Muscular"
    }
}
// Data Type Of Object by Automatically
let teacher: any = {
    name: "Ali Aftab",
    age: 15,
    exp: true,
    Qualities: {
        HairColour: "Black",
        SkinTone: "White",
        Body: "Muscular"
    }
}

// Type Aliace

type Student = {
    name: string,
    age: number
}

let student : Student = {
    name: "Rafay",
    age: 23
}

// Union Type Literal
let Name: string | number ; // You can also add other types that you want in website 
Name = "Rafay",360;

// Only Type Literals
let Name1: "ilyas" | 25 | true; // Only accepts that match values
Name1 = "ilyas";

// Another Example

let Name2: string | number | true; // This can only accepts true not false
Name2 = "ilyas" , 25 ;

// Intersection // Means 2 or other types merge in 1 type
type Teacher = {
    Tname: string,
    Tage: number
}
type PersonType = Student & Teacher // Means Student and Teacher merge in 1 type

let Person : PersonType = {
    name: "Ilyas",
    age: 22,
    Tname: "Ali Aftab",
    Tage: 15
}

// Array
let Array : string[] = ["Apple","Mango","Banana"];
let FruitNames : string =  Array[0] + Array[1] + Array[2] ; 
                        //   Apple     Mango     Banana

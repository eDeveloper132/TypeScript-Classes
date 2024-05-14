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

type student = {
    name: string,
    age: number
}

let student : student = {
    name: "Rafay",
    age: 23
}
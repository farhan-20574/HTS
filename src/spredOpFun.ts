function sum (x: number, y: number, z:number):number{
    return x + y + z
}

const numbers: [number, number, number] = [1,2,3]

console.log(sum(...numbers))
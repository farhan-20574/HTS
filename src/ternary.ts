// const isEven = 2;
// const isEvenFuc = isEven ? 'ture':'false'
// if isEvenFuc



// const isEven = (input: number): boolean =>{
//     return input % 2 == 0 ? true : false;
// }

const colors: string[] = ['red ','green','blue']

const favColors: string [] = ['organge', 'purple']

const lightColor: string = 'white'

const allColors: string []= [...favColors,lightColor,...colors]
console.log(allColors)
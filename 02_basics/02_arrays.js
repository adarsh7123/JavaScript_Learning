const marvel_heros = ["thor", "Ironman", "spiderman"]
const dc_heros = ["superman", "flash", "batman"]

// marvel_heros.push(dc_heros)
// console.log(marvel_heros);//[ 'thor', 'Ironman', 'spiderman', [ 'superman', 'flash', 'batman' ] ]
// console.log(marvel_heros[3][1]);//flash

// const allHeros = marvel_heros.concat(dc_heros)
// console.log(allHeros)
// [ 'thor', 'Ironman', 'spiderman', 'superman', 'flash', 'batman' ]

// const all_new_heros = [...marvel_heros, ...dc_heros]
// console.log(all_new_heros)

const another_array = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]]

//flat this array
// const real_another_array = another_array.flat(Infinity)
// const real_anothe_array = another_array.flat(1)
// [ 1, 2, 3, 4, 5, 6, 7, 6, 7, [ 4, 5 ] ]
// const real_anothe_array = another_array.flat(2)
// [1, 2, 3, 4, 5, 6, 7, 6, 7, 4, 5 ]
// console.log(real_anothe_array)

console.log(Array.isArray("Adarsh"))

console.log(Array.from("Hitesh"))
// [ 'H', 'i', 't', 'e', 's', 'h' ]

console.log(Array.from({name: "hitesh"})) // interesting

let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1,score2,score3));
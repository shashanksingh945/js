const marvelHeroes = ["thor","ironman","spiderman"]
const dcHeroes = ["superman","flash","batman"]

// marvelHeroes.push(dcHeroes)
// console.log(marvelHeroes);

// const allHeroes= marvelHeroes.concat(dcHeroes);
// console.log(allHeroes)

const allnewHeroes = [...marvelHeroes, ...dcHeroes]
// console.log(allnewHeroes)

const a2= [1,2,3,[4,5,6],7,[6,7,[4,5]]];
const ra2 = a2.flat(Infinity);
consol
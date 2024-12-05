let tomato = {};
let oregano = tomato;
let potato = {};
tomato = {};

console.log(tomato === oregano);
console.log(oregano === potato);
console.log(potato === tomato);


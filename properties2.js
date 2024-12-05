let singer = {surname: 'Turner'};
let pilot = {surname: 'Kamal'};
singer.surname = pilot.surname;
pilot.surname = singer.surname;
pilot.surname = 'Turner'

console.log(singer.surname);
console.log(pilot.surname);
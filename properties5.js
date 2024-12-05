let station = {
    Owner: {name: 'Fred'}
};
let name = station.owner.name;
console.log(name === station.Owner.name); // it crashes because of case sensitives

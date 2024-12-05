let president = {
    name: 'Pooh',
    next: null
};

president.next = {
    name: 'Paddington',
    next: president
};

console.log(president.next.next.next.name);
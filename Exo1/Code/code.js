function capitalizeNames(input = []) {
    return input.map(element => element[0].toUpperCase() + element.slice(1));
}

console.log(capitalizeNames(["jo", "nelson", "jurie"]));
console.log(capitalizeNames(['KARLY', 'DANIEL', 'KELSEY']));



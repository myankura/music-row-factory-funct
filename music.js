console.log("music.js");

// * JumpStop Records works with Funk and Rap artists.
// * Chatten Records works with Country and Bluegrass artists.
// * Polar Records works with Pop artists.

//Create an array for each of these record labels
const jumpStopRecords = []; //Funk and Rap
const chattenRecords = []; //Country and Bluegrass
const polarRecords = []; //Pop

// Create a factory function for each possible genre (e.g. createBluegrassArtist()). Then invoke the appropriate function for each of the following artists and place the resulting object in the corresponding label array.

//create a factory function for each of the possible genres.
//factory function for Funk artists
const createFunkArtist = (name, age) => ({
    "name": name,
    "age": age
})

//factory function for Rap artists
const createRapArtist = (name, age) => ({
    "name": name,
    "age": age
})

//factory function for Country artists
const createCountryArtist = (name, age) => ({
    "name": name,
    "age": age
})

//factory function for Bluegrass artists
const createBluegrassArtist = (name, age) => ({
    "name": name,
    "age": age
})

//factory funtion for Pop artists
const createPopArtist = (name, age) => ({
    "name": name,
    "age": age
})

//country artists
const bruceAtikins = createCountryArtist("Bruce Atkins", 23);
const avileeDallas = createCountryArtist("Avilee Dallas", 19);
//pop artists
const jensenBrown = createPopArtist("Avilee Dallas", 20);
const austinKinkaid = createPopArtist("Austin Kinkaid", 22);
//funk artists
const dreFunkz = createFunkArtist("Dre Funkz", 25);
//rap artists
const dustaGrimes = createRapArtist("Dusta Grimes", 21);
const loyonceBranis = createRapArtist("Loyoncé Branis", 27)
//bluegrass artists
const bartholomewDanielson = createBluegrassArtist("Bartholomew Danielson", 23);

// const jumpStopRecords = []; //Funk and Rap
// const chattenRecords = []; //Country and Bluegrass
// const polarRecords = []; //Pop

jumpStopRecords.push(dreFunkz, dustaGrimes, loyonceBranis);
chattenRecords.push(bruceAtikins, avileeDallas, bartholomewDanielson);
polarRecords.push(jensenBrown, austinKinkaid);

console.log("Jump Stop Records: ", jumpStopRecords);
console.log("Chatten Records: ", chattenRecords);
console.log("Polar Records: ", polarRecords);
// import the pets array from data.js
const pets = require('./data');

// init express app
const express = require('express');
let app = express();

const PORT = 8080;

// GET - / - returns homepage
app.get('/', (req, res) => {
    // serve up the public folder as static index.html file

});

// hello world route
app.get('/api', (req, res) => {
    res.send('Hello World!');
});

// get all pets from the database
app.get('/api/v1/pets', (req, res) => {
    // send the pets array as a response

});

// get pet by owner with query string
app.get('/api/v1/pets/owner', (req, res) => {
    // get the owner from the request


    // find the pet in the pets array
    const pet = pets.find(pet => pet.owner === owner);

    // send the pet as a response

});

// get pet by name
app.get('/api/v1/pets/:name', (req, res) => {
    // get the name from the request


    // find the pet in the pets array
    const pet = pets.find(pet => pet.name === name);

    // send the pet as a response

});

app.listen(PORT, () => {
    console.log('Server is listening on port ' + PORT);
});

// Import necessary modules
const express = require('express');
let app = express();

// Create an array to store pets data
const petsData = [
  { id: 1, name: 'Buddy', owner: 'John' },
  { id: 2, name: 'Luna', owner: 'Alice' },
  // ... more pets data ...
];

// Create a GET route to fetch all pets
app.get('/api/pets', (req, res) => {
  // Return the petsData array as JSON
  res.json(petsData);
});

// Start the server and listen on a port
app.listen(3000, () => {
  console.log('Server is running on port 3000');
});

// Create a GET route to fetch pets by name
app.get('/api/pets/name/:name', (req, res) => {
    const nameParam = req.params.name;
    // Filter petsData array by matching names
    const matchingPets = petsData.filter((pet) =>
      pet.name.toLowerCase() === nameParam.toLowerCase()
    );
    // Return matchingPets as JSON
    res.json(matchingPets);
  });

  // Create a GET route to fetch pets by owner's name
app.get('/api/pets/owner/:ownerName', (req, res) => {
    const ownerNameParam = req.params.ownerName;
    // Filter petsData array by matching owner's names
    const matchingPets = petsData.filter((pet) =>
      pet.owner.toLowerCase() === ownerNameParam.toLowerCase()
    );
    // Return matchingPets as JSON
    res.json(matchingPets);
  });
  
  


module.exports = app;
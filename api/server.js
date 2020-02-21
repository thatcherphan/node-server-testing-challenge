const express = require('express');
const server = express();
const Characters = require('../characters/characters-model.js');

server.use(express.json());

server.get('/', (req, res) => {
    res.status(200).json({api: "up"})
})

server.get('/characters', (req, res) => {
    Characters.getAll()
        .then(character => {
            res.status(200).json(character)
        })
        .catch(err => {
            console.log(err)
            res.status(500).json({message: "error retrieving all the characters"})
        })
})

server.get('/characters/:id', (req, res) => {
    const {id} = req.params;

    Characters.findById(id)
        .then(char => {
            res.status(200).json(char)
        })
        .catch(err => {
            console.log(err);
            res.status(500).json({message: "Please enter a valid id"})
        })
})

server.post('/characters', (req, res) => {
    const character = req.body;

    Characters.insert(character)
        .then(char => {
            res.status(201).json(char)
        })
        .catch(err => {
            console.log(err)
            res.status(500).json({message: "Error adding this character"})
        })

})

server.delete('/characters/:id', (req, res) => {
    const {id} = req.params;

    Characters.remove(id)
        .then(deleted => {
            if (deleted) {
                res.status(200).json({message: "Character deleted"})
            } else {
                res.status(404).json({message: "Could not find character with given id"})
            }
        })
        .catch(err => {
            console.log(err)
            res.status(500).json({message: "Error deleting this character"})
        })
})

module.exports = server;
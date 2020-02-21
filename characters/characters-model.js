const db = require('../data/db-config');

module.exports = {
    insert,
    remove,
    getAll, 
    findById
}

function getAll() {
    return db('characters')
}

async function insert(character) {
    const [id] = await db('characters').insert(character, "id")

    return db('characters')
        .where({ id })
        .first();
}

function remove(id) {
    return db('characters')
        .where({ id })
        .del();
}

function findById(id) {
    return db('character')
        .where({ id })
        .first();
}
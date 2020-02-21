const db = require('../data/db-config.js');

const { insert, remove} = require('./characters-model.js');

describe('Characters model', function (){
    describe('insert()', () => {
        beforeEach(async () => {
            await db('characters').truncate();
        });

        it ('should insert character', async() => {
            const characters = await db('characters');
            expect(characters).toHaveLength(0);
            console.log(characters)
            await insert({
                name: "Kiryu",
                age: 30,
                species: "human"
            })
            const inserted = await db('characters')
            expect(inserted).toHaveLength(1);
        })

        it('check the name of the inserted character', async () => {
            const characters = await db('characters');
            expect(characters).toHaveLength(0);
            console.log(characters)
            await insert({
                name: "Reina",
                age: 22,
                species: "human"
            })
            const inserted = await db('characters')
            expect(inserted[0].name).toBe("Reina");
        })
    })
})

describe('remove()', () => {
    it ('remove', async () => {
        await remove(2);
        const character = await db('characters');
        expect(character).toHaveLength(1);
    })
    it('remove a character given the ID', async() =>{
        insert({
            name: "kiryu",
            age: 30,
            species: "yakuza"
        })
        await remove(1);
        const characters = await db('characters')
        expect(characters).toHaveLength(1)
    })
})
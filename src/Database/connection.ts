const knex = require('knex')
const path = require('path')

const db = knex({
    client: 'sqlite3',
    connection: {
        filename: path.resolve(path.dirname(''),'database.sqlite')
    },
    useNullasDefault: true
})

module.exports = db
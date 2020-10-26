const knex = require('knex')

const up = async (knex ) => { 

    return knex.schema.createTable('users', table => {
        table.increments('id').primary()
        table.string('name').notNullable()
        table.string('password').notNullable()
    })
}

const down = async (knex ) => {
    return knex.schema.dropTable('users')
}
module.exports = {up,down}
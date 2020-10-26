const knex = require('knex')

const up = async (knex ) => { 

    return knex.schema.createTable('users', table => {
        table.increments('id').primary().notNullable()
        table.string('name').notNullable()
        table.string('password').notNullable()
        table.string('email').notNullable()
    })
}

const down = async (knex ) => {
    return knex.schema.dropTable('users')
}
module.exports = {up,down}
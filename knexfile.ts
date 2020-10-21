const path = require('path')


module.exports = {
    client :'sqlite3',

    connection: {
        filename: path.resolve(path.dirname(''),'src','database','database.sqlite')
    },
    migrations: {
        directory: path.resolve (path.dirname(''),'src','database','migrations') 
    },
    useNullasDefault: true,
}
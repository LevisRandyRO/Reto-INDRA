const connection = require('../connection')

/*
    ** Reemplazar ddbb por el nombre de la base de datos
*/

module.exports = {
    getPlanetas: (callback) => {

        const sqlQuery = 'SELECT * FROM ddbb.planeta';

        connection.query(sqlQuery, (error, rows) => {
            if (error) {
                callback(JSON.stringify(error))
            }
            else {
                callback(null, rows)
            }
        })
    },
    setPlaneta: (paramsData, callback) => {

        const sqlQuery = 'INSERT INTO ddbb.planeta SET nombre = ?, clima = ?, diametro = ?, gravedad = ?, periodo_gravitacion = ?, poblacion = ?, periodo_rotacion = ?, superficie_agua = ?, terreno = ?';

        connection.query(sqlQuery, paramsData, (error, row) => {
            if (error) {
                callback(JSON.stringify(error))
            }
            else {
                callback(null, row.insertId)
            }
        })
    }
}
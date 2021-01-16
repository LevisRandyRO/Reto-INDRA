const mysql = require('mysql')
const config = require('../config/config.json')["production"]

function initializeConnection(config) {
    function addDisconnectHandler(connection) {
        connection.on("error", function(error) {
            if (error instanceof Error) {
                if (error.code === 'PROTOCOL_CONNECTION_LOST') {
                    console.log("Conexión perdida")
                    initializeConnection(connection.config)
                } else if (error.fatal) {
                    throw error
                }
            }
        })
    }

    const connection = mysql.createConnection(config)
    addDisconnectHandler(connection)
    connection.connect()

    return connection
}

const connection = initializeConnection(config)

module.exports = connection
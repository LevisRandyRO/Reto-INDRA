const planeta = require('../models/planeta')

module.exports = {

    all: (req, res) => {

        planeta.getPlanetas((error, rows) => {
            if (error) {
                res.status(500).json({
                    message: 'Lo sentimos, ha ocurrido un error.',
                    data: null
                })
            }
            else {
                res.status(200).json({
                    message: 'Lista de planetas.',
                    data: rows
                })
            }
        })
    },

    create: (req, res) => {

        const { 
            nombre,
            clima,
            diametro,
            gravedad,
            periodo_gravitacion,
            poblacion,
            periodo_rotacion,
            superficie_agua,
            terreno 
        } = req.body

        if (!nombre & !clima & !diametro & !gravedad & !periodo_gravitacion & !poblacion & !periodo_rotacion & !superficie_agua & !terreno) {
            return res.status(400).json({
                message: 'Son necesarios los parámetros ${nombre}, ${clima}, ${diametro}, ${gravedad}, ${periodo_gravitacion}, ${periodo_rotacion}, ${superficie_agua}, ${terreno},',
                data: null
            })
        }

        const paramsData = [
            nombre,
            clima,
            diametro,
            gravedad,
            periodo_gravitacion,
            poblacion,
            periodo_rotacion,
            superficie_agua,
            terreno
        ]

        planeta.setPlaneta(paramsData, (error, row) => {
            if (error) {
                return res.status(200).json({
                    message: 'Lo sentimos, ha ocurrido un problema',
                    data: null
                })
            }
            else {
                return res.status(200).json({
                    message: 'Planeta creado correctamente',
                    data: row
                })
            }
        })
    },
}
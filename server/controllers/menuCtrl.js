const menu = require('../menu')

module.exports = {
    getMenu: (req, res) => {
        res.status(200).send(menu)
    },
    deleteItem: (req, res) => {
        
    }
}
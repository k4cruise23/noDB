const menu = require("../../src/components/Menu.js")


module.exports = {
    getMenu: (req, res) => {
        // console.log(menu)
        res.status(200).send(menu)
    },
    deleteItem: (req, res) => {
        const {id} = req.params
        const index = menu.findIndex(el => el.id === +id)
        menu.splice(index, 1)
        res.status(200).send(menu)
        // console.log(menu)
        // id deconstructed set to req.params. index is finding the menu index and adding 1. splices specific index, and sends back result
    },
    addItem: (req, res) => {
        // console.log(req.body)
        let {item, id, img, description, price} = req.body
        menu.push({...req.body, item, price, id, description, img})
        id++
        res.status(200).send(menu)
        // decontructing all the keys and assigning them to req.body. spreading req.body and pushing new info back into the array.
        //addibg a new id
    },
    editItem: (req, res) => {
        const {id} = req.params
        const {description} = req.body
        const index = menu.findIndex(el => el.id === +id)
        menu[index].description = description
        res.status(200).send(menu)
        //deconstructing id and assigning to req.params
        //deconstructing description and setting it to req.body
        //finding index of item where edit is used and giving new description. sending it back
    }
}
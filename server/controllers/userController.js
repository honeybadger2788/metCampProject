const userCtrl = {}
const User = require('../models/users')

userCtrl.addUser = async (req,res) => {
    // recibimos la info del formulario
    let {playerName,team, score} = req.body
    // creamos un nuevo objeto con los datos recibidos mediante un constructor
    let user = new User({
        playerName,
        team,
        score
    })

    await user.save((err, userDb)=>{
        if (err) {
            // en caso de error, devolvemos un JSON con el mensaje
            return res.status(400).json({
                status: 'ERROR',
                message: err
            })
        }
        // si no hay error, confirma la recepción
        res.json({
            status: 'OK',
            user: userDb
        })
    })
}

module.exports = userCtrl
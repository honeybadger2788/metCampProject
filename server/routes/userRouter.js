const {Router} = require('express')
const router = Router()
const userController = require('../controllers/userController')

router.post('/users/addUser', userController.addUser)
/*router.delete('/users/deleteUser', userController.deleteUser)
router.get('/users/getUsers', userController.getUsers)
router.put('/users/updateUser', userController.updateUser)*/

module.exports = router
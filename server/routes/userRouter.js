const express = require('express')
const router = express.Router()
const userController = require('../controllers/userController')
const publiConroller = require('../controllers/publiController')

 router.post('/register',userController.register)
 router.post('/login',userController.login)

 router.post('/publi', publiConroller.publi)
 
 router.get('/all',publiConroller.allPublis)

module.exports = router

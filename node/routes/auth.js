// import Express from 'express'
const express = require('express')

const { getUserInfo, register, login } = require('../controllers/auth')
// import { getUserInfo } from '../controllers/auth';

const router = express.Router();

router.post('/register', register)
router.post('/login', login)
router.get('/getUserInfo', getUserInfo)


module.exports = router;
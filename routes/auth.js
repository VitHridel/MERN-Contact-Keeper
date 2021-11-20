const express = require('express')
const router = express.Router()

// @route   GET /auth
// @desc    Login a user
// @access  Private
router.get('/', (req, res) => {

})

// @route   POST /auth
// @desc    Auth user & token
// @access  Public
router.post('/', (req, res) => {

})

module.exports = router
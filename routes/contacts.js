const express = require('express')
const router = express.Router()

// @route   GET /contacts
// @desc    Get all user's contacts
// @access  Private
router.get('/', (req, res) => {

})

// @route   POST /contacts
// @desc    Add new user contact
// @access  Private
router.post('/', (req, res) => {
    
})

// @route   PUT /contacts/:id
// @desc    Update contact
// @access  Private
router.put('/:id', (req, res) => {
    
})

// @route   DELETE /contacts/:id
// @desc    Delete contact
// @access  Private
router.delete('/:id', (req, res) => {
    
})

module.exports = router
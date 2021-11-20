const express = require('express')

const connectDB = require('./config/db')

const app = express()

// Connect DB
connectDB()

// Init Middleware
app.use(express.json({extended: false}))

app.get('/', (req, res) => {
    res.json({msg: 'Hello world'})
})

// Define Routes
app.use('/users', require('./routes/users'))
app.use('/auth', require('./routes/auth'))
app.use('/contacts', require('./routes/contacts'))

const PORT = process.env.PORT || 5000
app.listen(PORT, console.log('Server is running on ' + PORT))
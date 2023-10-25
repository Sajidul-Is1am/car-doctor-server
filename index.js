const express = require('express')
const cors = require('cors');
const app = express()
const port = process.env.PORT || 5000



// middle were
app.use(express.json())
app.use(cors())

// userName car-doctor
// password DtGnIPWqxXCpjcjN









app.get('/', (req, res) => {
    res.send('Server site is Running......')
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})
const express = require('express')
const path = require('path')
const port = process.env.PORT || 3050

const app = express()

app.use(express.static(path.join(__dirname, 'display')))

app.get('/', (req,res) => {
    res.sendFile(path.join(__dirname,'display','index.html'))
})

app.listen(3050, ()=> {
    console.log(`server is running on port ${port}`)
})
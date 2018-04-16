
const express = require('express')
const app = express()
//generates new app - spa
//listens to incoming requests and routes them 

app.get('/', (req, res) => {
	res.send({ val: 'NEW APPLICATION' })
})

const PORT = process.env.PORT || 5000
// prod vs dev environments
// env vars - post deployment vars

app.listen(PORT)




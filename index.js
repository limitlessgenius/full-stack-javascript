
const express = require('express')
const app = express()
//generates new app - spa
//listens to incoming requests and routes them 

app.get('/', (req, res) => {
	res.send({ val: 'HELLO' })
})

app.listen(5000)









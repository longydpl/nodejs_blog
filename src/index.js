const path = require('path')
const express = require('express')
const morgan = require('morgan')
const exphbs = require('express-handlebars')
const app = express()
const port = 3000


app.use(express.static(path.join(__dirname,'public')))

//HTTP logger
app.use(morgan('combined'))

//Template Engine
app.engine('hbs', exphbs({extname: '.hbs'}));
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname,'resources/views'))

//Home Page
app.get('/', (req, res) => {
  res.render('home')
}) // arrow function


//News Page
app.get('/tin-tuc', (req, res) => res.render('news'))

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})
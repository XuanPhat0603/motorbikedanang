import express from "express"
import { engine } from 'express-handlebars'
import { dirname } from 'path'
import path from 'path'
import { fileURLToPath } from 'url'
import { connectDB } from "./lib/mongodb.js"

const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)

const app = express()
const port = process.env.PORT || 3000

connectDB()

app.use(express.static(path.join(__dirname, 'public')));
app.engine('hbs', engine({ extname: '.hbs' }))
app.set('view engine', 'hbs')
app.set('views', path.join(__dirname, 'views'))


app.get('/', (req, res) => {
    res.render('index')
})

app.listen(port, () => {
    console.log(`[Server] is running ${port}`)
})
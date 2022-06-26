import express from 'express'
import { engine } from 'express-handlebars'
import path from 'path'
import { fileURLToPath } from 'url'
import morgan from 'morgan'
import favicon from 'serve-favicon'
import bodyParser from 'body-parser'
import routes from './routes/index.js'
import { connectDB } from "./lib/mongodb.js"

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)
const app = express()
const port = process.env.PORT || 3000


app.use(express.static(path.join(__dirname, 'public')))

// parser for post data
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))


app.engine('hbs', engine({ extname: '.hbs' }))
app.set('view engine', 'hbs')
app.set('views', path.join(__dirname, 'views'))
app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')))

connectDB()

app.use(morgan('dev'))

app.use(routes);

app.listen(port, () => {
    console.log("[Server] is running on port " + port);
})
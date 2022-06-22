import express from 'express'
import { engine } from 'express-handlebars'
import path from 'path'
// import { connectDB } from "./lib/mongodb.js"
import { fileURLToPath } from 'url'

// get file path of the current file
const __filename = fileURLToPath(import.meta.url)
// get directory path of the current file
const __dirname = path.dirname(__filename)
import routes from './routes/index.js'
const app = express()
const port = process.env.PORT || 3000

// connectDB()


app.use(express.static(path.join(__dirname, 'public')))
app.engine('hbs', engine({ extname: '.hbs' }))
app.set('view engine', 'hbs')
app.set('views', path.join(__dirname, 'views'))

app.use(routes);

app.listen(port, () => {
    console.log("[Server] is running on port " + port);
})
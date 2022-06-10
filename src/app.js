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

app.get('/shop', (req, res) => {
    res.render('shop')
})

app.get('/about', (req, res) => {
    res.render('about')
})

app.get('/shop-details', (req, res) => {
    res.render('shop-details')
})

app.get('/shopping-cart', (req, res) => {
    res.render('shopping-cart')
})

app.get('/checkout', (req, res) => {
    res.render('checkout')
})

app.get('/blog', (req, res) => {
    res.render('blog')
})

app.get('/blog-details', (req, res) => {
    res.render('blog-details')
})

app.get('/contact', (req, res) => {
    res.render('contact')
})

app.listen(port, () => {
    console.log(`[Server] is running ${port}`)
})
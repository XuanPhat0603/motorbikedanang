import express from "express"
import { engine } from 'express-handlebars'
import path from 'path'
import serverless from 'serverless-http'
// import { connectDB } from "./lib/mongodb.js"
import { dirname } from 'path'
import { fileURLToPath } from 'url'


const app = express()
const port = process.env.PORT || 3000

// connectDB()
const __dirname = dirname(fileURLToPath(import.meta.url))

app.use(express.static(path.join(__dirname, 'public')))
app.engine('hbs', engine({ extname: '.hbs' }))
app.set('view engine', 'hbs')
app.set('views', path.join(__dirname, './views'))

const router = express.Router()

router.get('/', (req, res) => {
    res.render('index')
})

router.get('/shop', (req, res) => {
    res.render('shop')
})

router.get('/about', (req, res) => {
    res.render('about')
})

router.get('/shop-details', (req, res) => {
    res.render('shop-details')
})

router.get('/shopping-cart', (req, res) => {
    res.render('shopping-cart')
})

router.get('/checkout', (req, res) => {
    res.render('checkout')
})

router.get('/blog', (req, res) => {
    res.render('blog')
})

router.get('/blog-details', (req, res) => {
    res.render('blog-details')
})

router.get('/contact', (req, res) => {
    res.render('contact')
})

app.use('/.netlify/functions/server', router);  // path must route to lambda

export default app
export const handler = () => serverless()
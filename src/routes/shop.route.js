import { Router } from 'express'
import axios from 'axios'

const router = Router()

router.get('/', async (req, res) => {

    // get all motorbikes from the database;
    const motorbikes = await axios.get('http://localhost:3000/api/motorbike')
    const data = {
        title: 'Shop',
        products: motorbikes.data,
        totalProduct: motorbikes.data.length
    }

    res.render('shop.hbs', data)
})

router.get('/search', async (req, res) => {

    const type = req.query.type

    const motorbikes = await axios.get('http://localhost:3000/api/motorbike/type/' + type)

    const data = {
        title: 'Shop',
        products: motorbikes.data,
        totalProduct: motorbikes.data.length
    }

    res.render('shop.hbs', data)
})

export default router
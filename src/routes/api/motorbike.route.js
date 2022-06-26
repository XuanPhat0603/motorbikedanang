import { Router } from 'express'
import Motorbike from '../../models/motorbike.model.js'

const router = Router()

router.get('/', (req, res) => {
    try {
        const motorbikes = Motorbike.find()
        res.status(200).json(motorbikes)
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
})

router.post('/', (req, res) => {
    try {
        console.log(req.body)
        // const motorbike = new Motorbike(req.body)
        // motorbike.save()
        // res.status(201).json(motorbike)
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
})

export default router
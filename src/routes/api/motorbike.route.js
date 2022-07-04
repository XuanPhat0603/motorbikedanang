import { Router } from 'express'
import Motorbike from '../../models/motorbike.model.js'
import Type from '../../models/type.model.js'

const router = Router()

router.get('/', async (req, res) => {
    try {
        const motorbikes = await Motorbike.find()
        res.status(200).json(motorbikes)
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
})

router.get('/type/:search', async (req, res) => {
    try {
        const q = req.params.search
        const motorbikes = await Motorbike.find().populate('type')
        const result = motorbikes.filter(motorbike => {
            return motorbike.type.name.toLowerCase().includes(q.toLowerCase())
        })
        res.status(200).json(result)
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
})

router.post('/', async (req, res) => {
    try {
        const motorbike = await new Motorbike(req.body)
        motorbike.save()
        res.status(201).json(motorbike)
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
})

export default router
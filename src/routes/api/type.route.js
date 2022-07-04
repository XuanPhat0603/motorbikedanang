import { Router } from 'express'
import Type from '../../models/type.model.js'
const router = Router()

router.get('/', async (req, res) => {
    try {
        const types = await Type.find()
        res.status(200).json(types)
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
})

router.post('/', async (req, res) => {
    try {
        const newType = new Type(req.body)
        await newType.save()
        res.status(201).json(newType)
    } catch (error) {
        console.log(error)
        res.status(500).json({ message: error.message })
    }
})

export default router
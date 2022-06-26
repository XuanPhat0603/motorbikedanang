import { Router } from "express"
import Brand from "../../models/brand.model.js"

const router = Router()

router.get("/", (req, res) => {
    res.json("Hello World")
})

router.post("/", async (req, res) => {
    try {
        const newBrand = new Brand(req.body)
        await newBrand.save()
        res.status(201).json(newBrand)
    } catch (error) {
        console.log(error)
        res.status(500).json({ message: error.message })
    }
})

export default router
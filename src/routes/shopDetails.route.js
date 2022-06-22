import { Router } from 'express'

const router = Router()

router.get('/', (req, res) => {
    res.render('shop-details')
})

export default router
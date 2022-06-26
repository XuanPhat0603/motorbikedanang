import motorbike from '../models/motorbike.model'

const getAllMotorbikes = async (req, res) => {
    const motorbikes = await motorbike.find()
    res.json(motorbikes)
}
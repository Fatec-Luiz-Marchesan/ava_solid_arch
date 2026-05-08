const router = require('express').Router()

const PetController = require('../controllers/PetController')

const { verifyToken } = require('../helpers/verify-token')
const {imageUpload} = require('../helpers/image-upload')

router.post('/create', verifyToken, imageUpload.array('images', 5), PetController.createPet)
router.get('/all', PetController.getAll)
router.get('/getAllUserPets', verifyToken, PetController.getAllUserPets)
router.get('/getAllUserAdoptions', verifyToken, PetController.getAllUserAdoptions)

router.patch('/schedule/:id', verifyToken, PetController.schedule)
router.patch('/concludeAdoption/:id', verifyToken, PetController.concludeAdoption)

router.patch('/:id', verifyToken, imageUpload.array('images', 5), PetController.updatePet)
router.delete('/:id', verifyToken, PetController.deletePet)
router.get('/:id', PetController.getPetById)


module.exports = router
const router = require("express").Router();

const PetController = require('../controllers/PetController');

const verifytoken = require('../helpers/verifytoken');
const {imageUpload} = require('../helpers/imageUpload');

router.post('/create', verifytoken, imageUpload.array('image', 5), PetController.create);
router.get('/getAll', PetController.getAll);
router.get('/getallUserpets', verifytoken, PetController.getAllUserPets);
router.get('/getallUseradoptions', verifytoken, PetController.getAllUsersadoptions);

router.post('/schedules/id', verifytoken, PetController.schedule);
router.post('/concludeadoption/id', verifytoken, PetController.concludeAdoption);

router.patch('/id', verifytoken, imageUpload.array('image', 5), PetController.update);
router.delete('/id', verifytoken, PetController.removePetbyid);
router.get('/id', PetController.getPetById);

module.exports = router;
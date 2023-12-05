const express = require("express");
const { personGet, personUpdate, personPost, personDelete } = require("../controllers/person.controller");
const router = express.Router();




router.get('/', personGet)
router.post('/',personPost)
router.patch('/', personUpdate)
router.delete('/', personDelete)





module.exports = router;

const express = require('express');
const router = express.Router()

router.get('/chat', chat);
router.get('/blog', blog);


module.exports = router
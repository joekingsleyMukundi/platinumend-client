const express = require('express');
const router = express.Router()

router.get('/dashboard', dashboard);
router.get('/invoices', invoices);
router.get('/profile', profile)
router.get('/jobs', jobs);


module.exports = router
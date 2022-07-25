const express = require('express');
const router = express.Router()

router.get('/dashboard', dashboard);
router.get('/invoices', invoices);
router.get('/invoices/:invoice', invoice)
router.get('/workers', forgotPassword)
router.get('/worker/:worker', worker)
router.get('/profile', profile)
router.get('/jobs', setNewPassword);


module.exports = router
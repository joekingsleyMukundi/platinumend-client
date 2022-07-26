const express = require('express');
const { getProfile } = require('../../controlers/employers/employers');
const { getDashboard, getInvoices, getJobs, getInvoice } = require('../../controlers/writer/writer');
const router = express.Router()

router.get('/dashboard', getDashboard);
router.get('/invoices', getInvoices);
router.get('/invoice', getInvoice)
router.get('/profile', getProfile)
router.get('/jobs', getJobs);


module.exports = router
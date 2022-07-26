const express = require('express');
const { getDashboard, getInvoices, getInvoice, getWorkers, getProfile, getJobs } = require('../../controlers/employers/employers');
const router = express.Router()

router.get('/dashboard', getDashboard);
router.get('/invoices', getInvoices);
router.get('/invoices/:invoice', getInvoice)
router.get('/workers', getWorkers)
router.get('/profile', getProfile)
router.get('/jobs', getJobs);


module.exports = router
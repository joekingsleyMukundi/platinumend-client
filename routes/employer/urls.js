const express = require('express');
const { getDashboard, getInvoices, getInvoice, getWorkers, getProfile, getJobs } = require('../../controlers/employers/employers');
const { is_authenticated } = require('../../middlwares/authentication');
const router = express.Router()

router.get('/dashboard', is_authenticated,getDashboard);
router.get('/invoices', is_authenticated, getInvoices);
router.get('/invoices/:invoice', is_authenticated,getInvoice)
router.get('/workers', is_authenticated,getWorkers)
router.get('/profile', is_authenticated,getProfile)
router.get('/jobs', is_authenticated,getJobs);


module.exports = router
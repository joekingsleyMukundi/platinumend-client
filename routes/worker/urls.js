const express = require('express');
const { getProfile } = require('../../controlers/employers/employers');
const { getDashboard, getInvoices, getJobs, getInvoice } = require('../../controlers/writer/writer');
const { is_authenticated } = require('../../middlwares/authentication');
const router = express.Router()

router.get('/dashboard', is_authenticated, getDashboard);
router.get('/invoices', getInvoices);
router.get('/invoice', getInvoice)
router.get('/profile', is_authenticated,getProfile)
router.get('/jobs', is_authenticated,getJobs);

module.exports = router
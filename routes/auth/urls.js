const express = require('express');
const { getLogin, getRegister, getForgotPassword, getSetForgotPassword, getActivateAccount, getBecomeEmployer } = require('../../controlers/auth/auth');
const router = express.Router()

router.get('/', getLogin);
router.post('/', getLogin);
router.get('/register', getRegister);
router.get('/forgot-password', getForgotPassword)
router.get('/set-new-password', getSetForgotPassword);
router.get('/activate', getActivateAccount);
router.get('/become_employer', getBecomeEmployer);

module.exports = router
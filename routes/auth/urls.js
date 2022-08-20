const express = require('express');
const { getLogin, getRegister, getForgotPassword, getSetForgotPassword, getActivateAccount, getBecomeEmployer, logut } = require('../../controlers/auth/auth');
const { is_authenticated } = require('../../middlwares/authentication');
const { is_not_authenticated } = require('../../middlwares/unAuth');
const router = express.Router()

router.get('/', is_not_authenticated,getLogin);
router.post('/', is_not_authenticated,getLogin);
router.get('/register', is_not_authenticated,getRegister);
router.post('/register', is_not_authenticated,getRegister);
router.get('/forgot-password', getForgotPassword)
router.post('/forgot-password', getForgotPassword)
router.get('/set-new-password', getSetForgotPassword);
router.get('/activate', getActivateAccount);
router.get('/become_employer', getBecomeEmployer);
router.get('/logout', is_authenticated, logut)

module.exports = router
const express = require('express');
const router = express.Router()

router.get('/', login);
router.get('/register', register);
router.get('/forgotPassword', forgotPassword)
router.get('/set_new_password', setNewPassword);
router.get('/activate', activate);
router.get('/become_employer', become_employer);
router.get('/register_company', register_company);

module.exports = router
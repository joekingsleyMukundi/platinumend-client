const express = require('express');
const { is_authenticated } = require('../../middlwares/authentication');
const { is_not_authenticated } = require('../../middlwares/unAuth');
const router = express.Router()


router.get('/logout', is_authenticated, logut)

module.exports = router
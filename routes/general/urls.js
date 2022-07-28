const express = require('express');
const { getChat, getBlogs, publishBlog } = require('../../controlers/general/controllers');
const { is_authenticated } = require('../../middlwares/authentication');
const router = express.Router()

router.get('/chat', is_authenticated,getChat);
router.get('/blog', is_authenticated,getBlogs);
router.get('/publish', is_authenticated,publishBlog)


module.exports = router
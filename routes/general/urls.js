const express = require('express');
const { getChat, getBlogs, publishBlog } = require('../../controlers/general/controllers');
const { is_authenticated } = require('../../middlwares/authentication');
const router = express.Router()

router.get('/chat', getChat);
router.get('/blog', getBlogs);
router.get('/publish',publishBlog)


module.exports = router
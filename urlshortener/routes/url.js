const express=require('express');
const router= express.Router()
const urlController= require('../controllers/url');
const authMiddleware= require('../middlewares/authMiddleware')


router.get('/:shortUrl',urlController.getShortUrl)
router.post('/',authMiddleware,urlController.createShortUrl)

module.exports=router
const express=require('express');
const router= express.Router()
const urlController= require('../controllers/url');

router.get('/:shortUrl',urlController.getShortUrl)
router.post('/',urlController.createShortUrl)

module.exports=router
const express=require('express');
const router= express.Router()
const urlController= require('../controllers/url');
const {authMiddleware,authorisedUser}= require('../middlewares/authMiddleware')

// Endpoint to access the shorturl for a particaular role only
router.get('/:shortUrl',urlController.getShortUrl)
// Endpoint to create a shorturl which will need authentication first
router.post('/',authMiddleware,authorisedUser,urlController.createShortUrl)

module.exports=router
const express = require("express");
const upload = require('../middlewares/multer');
const fileController=require('../controllers/fileController');

const router=express.Router();


// Routes
router.post("/upload", upload.single("file"), fileController.createFile);
router.get("/", fileController.getAllFiles);
router.get("/download/:id", fileController.downloadFile);
router.delete("/:id", fileController.deleteFile);

module.exports = router;

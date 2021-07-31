var express = require('express');
var router = express.Router();

var homeController = require('../controllers/Home');
var aboutUsController = require('../controllers/About');
var projectController = require('../controllers/Project');
var contactUsController = require('../controllers/Contact');


router.get('/', homeController);
router.get('/project', projectController);
router.get('/about', aboutUsController);
router.get('/contact', contactUsController);





module.exports = router;
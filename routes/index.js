var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Ibatis2Mybatis Converter' });
});

router.post('/convert', function(req, res,next ){
   var sourceText = req.body.ibatisXml;
   var targetText = sourceText.replace(/#(.*?)#/g, "#{$1}")
                               .replace(/$(.*?)$/g, "${$1}")
                               .replace(/parameterClass/g, "parameterType")
                               .replace(/resultClass/g, "resultType")
                               .replace(/<sqlMap/g, "<mapper")
                               .replace(/<\/sqlMap>/g, "</mapper>");
    res.status(200).json({targetText : targetText });
});

module.exports = router;

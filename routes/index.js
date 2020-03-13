var express = require('express');
var router = express.Router();
const model = require('../model/user');
const commonController=require('../controller/commonController');

router.get('/',function(req,res){
  res.render('login.html');
});
router.get('/adduser',commonController.checkauth,commonController.checkType,function(req,res){
  res.render('userregister.html');
 });

 router.get('/addsubadmin',commonController.checkauth,commonController.checkType,function(req,res){
  res.render('subadminregister.html');
});
//router.post('/register',commonController.register);
router.post('/registeruser',commonController.checkauth,commonController.registeruser);

router.post('/registersubadmin',commonController.checkauth,commonController.registersubadmin);

router.post('/login',commonController.login);

router.get('/userview',commonController.checkauth,commonController.userview);
 
router.get('/subadminview',commonController.checkauth,commonController.subadminview);

router.get('/modify/:id',commonController.checkauth,commonController.checkType,commonController.mod)

router.post('/update',commonController.checkauth,commonController.checkType,commonController.modify);

router.get('/delete/:id',commonController.checkauth,commonController.checkType,commonController.del)

router.get('/forgotpassword',function(req,res)
{
  res.render('forgot.html');
})

router.post('/forgotsave',commonController.forgot,commonController.forgotsave);

router.get('/change/:id',commonController.checkauth,commonController.checkType,commonController.changepassword)
router.post('/resetsapass',commonController.resetsapass);

router.get('/adminchangepswd',function(req,res)
{
  res.render('changeadminpwd.html');
})
router.post('/adminsavepswd',commonController.checkauth,commonController.passwordsave);

router.post('/resetpass',commonController.checkreset,commonController.resetpass);
router.get('/recover/:id',commonController.checkauth2,commonController.changelinkpass);

router.post('/linkpass',commonController.respass);


router.get('/logout',(req,res)=>{
  res.clearCookie('name').redirect('/');
})


router.get('/notauthorized',commonController.checkauth,(req,res)=>{
  msg="not Authorized";
  pic=req.profilepic,
  name=req.name
  res.render('index.html',{msg,pic,name})
})

router.get('/imageupload',commonController.checkauth,function(req,res)
{
  res.render('imageupload.html');
})
router.post('/imageuploadsave',commonController.checkauth,commonController.imageuploadsave);

module.exports = router;



















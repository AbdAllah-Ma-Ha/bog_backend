const express=require('express')
const router=express.Router();
const user_controller=require('../controller/user_controller');
const blog_controller=require('../controller/blog_controller');

router.get('/',blog_controller.get_all_blogs)

router.post('/signup',user_controller.signup)
router.post('/login',user_controller.login)
router.post('/create',blog_controller.create_blog)
router.get('/getbyid/:id',blog_controller.getbyid)
router.put('/update/:id',blog_controller.update_blog)
router.delete('/delete/:id',blog_controller.delete_blog)
module.exports=router;
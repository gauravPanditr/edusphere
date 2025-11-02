import express from 'express';
import { addCourse, getEducatorCourses, updateRoleToEducator } from '../controllers/educatorController';
import upload from '../configs/multer';
import { protectEducator } from '../middlewares/authmiddlewares';

const educatorRouter=express.Router();


educatorRouter.get('/update-role',updateRoleToEducator);
educatorRouter.post('/add-course',upload.single('image'),protectEducator,addCourse);
educatorRouter.get('/courses',protectEducator,getEducatorCourses);


export default educatorRouter;
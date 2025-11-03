import express from 'express';
import { addCourse, educatorDashboard, getEducatorCourses, getEnrolledStudentsData, updateRoleToEducator } from '../controllers/educatorController.js';
import upload from '../configs/multer.js';
import { protectEducator } from '../middlewares/authmiddlewares.js';

const educatorRouter=express.Router();


educatorRouter.get('/update-role',updateRoleToEducator);
educatorRouter.post('/add-course',upload.single('image'),protectEducator,addCourse);
educatorRouter.get('/courses',protectEducator,getEducatorCourses);
educatorRouter.get('/dashboard',protectEducator,educatorDashboard);
educatorRouter.get('/enrolled-student',protectEducator,getEnrolledStudentsData);


export default educatorRouter;
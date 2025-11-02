
import { clerkClient } from "@clerk/express";
import Course from "../models/Course";
import {v2 as cloudinary} from 'cloudinary'


export const updateRoleToEducator = async (req, res) => {
  try {
    const userId = req.auth.userId;

    await clerkClient.users.updateUserMetadata(userId, {
      publicMetadata: {
        role: "educator",
      },
    });

    res.json({ success: true, message: "You can publish a course now" });
  } catch (error) {
    res.json({ success: false, message: error.message });
  }
};

export const addCourse=async()=>{
    try {
        const {courseData}=req.body;
        const imageFile=req.file;
        const educatorId=req.auth.userId;
        if(!imageFile){
            return res.json({
                success:false,
                message:'Thumbnail not attached'
            })
        }
        const parsedCourseData= await JSON.parse(courseData);
        parsedCourseData.educator=educatorId;

const newCourse=  await Course.create(parsedCourseData);
 const imageupload= await  cloudinary.uploader.upload(imageFile.path);
newCourse.courseThumbnail= imageupload.secure_url;
await newCourse.save();

 res.json({
     success:true,
     message:'Course Added'
 })
        
    } catch (error) {
       res.json({
     success:false,
     message:error.message
 }) 
    }
}
//Get 
export const getEducatorCourses = async (req, res) => {
  try {
    const educator = req.auth.userId;
    const courses = await Course.find({ educator });
    res.json({ success: true, courses });
  } catch (error) {
    res.json({ success: false, message: error.message });
  }
};
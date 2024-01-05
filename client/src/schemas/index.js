import * as YUP from "yup";

export const yupSchema = YUP.object({
    name : YUP.string().min(2).max(25).required("Please enter your name"),
    Email : YUP.string().email().required("Please enter your email"),
    Password : YUP.string().min(6).max(10).required("Please enter your Password"),
    // image : YUP.string().required("Please select your profile photo"),
    Linkedin : YUP.string(),
    Github : YUP.string(),
    insta : YUP.string()
});
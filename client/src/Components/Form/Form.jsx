import { useState } from 'react';
import {useFormik} from 'formik'
import { yupSchema } from '../../schemas'
import Swal from 'sweetalert2'
import axios from 'axios';
const initialValues = {
    name : '',
    Email: '',
    Password: '',
    // image: '',
    Linkedin:'',
    Github:'',
    insta:''
}



// main Form function
const Form = () =>{
    const sweetalert = () =>{
        {Swal.fire({
            title: "You are Registered Successfull",
            icon: "success",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Done!"
          }).then((result) => {
            if (result.isConfirmed) {
              Swal.fire({
                title: "Deleted!",
                text: "Your file has been deleted.",
                icon: "success"
              });
            }
          });}
    }
    const { values , errors , touched , handleBlur , handleChange , handleSubmit} = useFormik({
        initialValues : initialValues,
        validationSchema : yupSchema,
        onSubmit : async (values) =>{
            console.log(values);
            await axios.post('http://localhost:3001/send',values)
            .then(res => {
                console.log(res)
                if(res){
                    sweetalert()
                }
            })
            .catch(err => console.log(err))
        },
     
    });
    
    const [image,setImage] = useState(null)
    const handleUploadImg = async ()=>{
        const formData = new FormData();
            formData.append('file', image);
            console.log(formData);
            await axios.post('http://localhost:3001/upload',
            formData,
            {headers: { "Content-Type": "multipart/form-data" }}
            )
            .then(res => console.log(res))
            .catch(err => console.log(err))
    }
    // handleSubmit
    // console.log(Formik);
    // console.log(errors);

    // const dataSubmit = async () =>{
    
    // }   

    return(
        <>

            <div className="form-div" >
                <form action="" className='form' method='post'>
                    <center><h1>welcome!</h1>
                    <h2>Register now</h2></center>
                    <label htmlFor="name">Name</label>
                    <input type="text"
                    name="name"
                    autoComplete="off"
                    placeholder="Name"
                    id="name" 
                    onChange={handleChange}
                    value={values.name}
                    onBlur={handleBlur}
                    />
                    {
                        errors.name  && touched.name ?
                        ( <p className='form-error'>{errors.name}</p>)
                        :null
                    }

                    <label htmlFor="name">Email</label>
                    <input type="text"
                    name="Email"
                    autoComplete="off"
                    placeholder="Email"
                    id="Email"
                    onChange={handleChange}
                    value={values.Email}
                    onBlur={handleBlur} 
                    />
                    {
                        errors.Email  && touched.Email ?
                        ( <p className='form-error'>{errors.Email}</p>)
                        :null
                    }

                    <label htmlFor="name">Password</label>
                    <input type="text"
                    name="Password"
                    autoComplete="off"
                    placeholder="Password"
                    id="Password" 
                    onChange={handleChange}
                    value={values.Password}
                    onBlur={handleBlur}
                    />
                    {
                        errors.Password  && touched.Password ?
                        ( <p className='form-error'>{errors.Password}</p>)
                        :null
                    }

                    <label htmlFor="name">Links</label>
                    <input type="text"
                    name="Linkedin"
                    autoComplete="off"
                    placeholder="Linkedin"
                    id="Linkedin" 
                    onChange={handleChange}
                    value={values.Linkedin}
                    onBlur={handleBlur}
                    />
                    {
                        errors.Linkedin  && touched.Linkedin ?
                        ( <p className='form-error'>{errors.Linkedin}</p>)
                        :null
                    }

                    <input type="text"
                    name="Github"
                    autoComplete="off"
                    placeholder="Github"
                    id="Github" 
                    onChange={handleChange}
                    value={values.Github}
                    onBlur={handleBlur}
                    />
                    {
                        errors.Github  && touched.Github ?
                        ( <p className='form-error'>{errors.Github}</p>)
                        :null
                    }

                    <input type="text"
                    name="insta"
                    autoComplete="off"
                    placeholder="insta"
                    id="insta" 
                    onChange={handleChange}
                    value={values.insta}
                    onBlur={handleBlur}
                    />
                    {
                        errors.insta  && touched.insta ?
                        ( <p className='form-error'>{errors.insta}</p>)
                        :null
                    }

                    {/* <label htmlFor="name">image</label>
                    <input type="file"
                    name="image"
                    autoComplete="off"
                    placeholder="image"
                    id="image"  
                    onChange={handleChange}
                    value={values.image}
                    onBlur={handleBlur}
                    />
                    {
                        errors.image  && touched.image ?
                        ( <p className='form-error'>{errors.image}</p>)
                        :null
                    } */}

                    {/* image Upload */}
                    <input type="file" 
                    name='file'
                    onChange={(e)=>setImage(e.target.files[0])}
                    />
                    <button onClick={handleUploadImg} type='button'>Register</button>
                    

                    <button type="submit" onClick={handleSubmit}>Register</button>
                </form>
            </div>
        </>
    )
}

export default Form;
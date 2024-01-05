// const { useEffect } = require("react")

import axios from "axios";
import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";

const Profile = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [url, setUrl] = useState('');
    const [insta, setinsta] = useState('');
    const [github, setGithub] = useState('');
    const [Linkedin, setLinkedin] = useState('');

    const getProfileData = async () => {
        await axios.get(`http://localhost:3001/profile/${id}`)
            .then(result => {
                setName(result.data.data.name);
                setEmail(result.data.data.Email);
                setUrl(result.data.data.image);
                setinsta(result.data.data.insta);
                setLinkedin(result.data.data.Linkedin);
                setGithub(result.data.data.Github);
            })
            .catch(err => console.log(err))
    }

    useEffect(() => {
        getProfileData();
    }
        , [id])

    return (
        <>
            <h1>Profile</h1>
            <button onClick={() => navigate('/login')}>LogOut</button>
            <div key={id} className='profile_card'>
                <img src={`/images/${url}`} height={"50px"} width={"50px"} className='img' alt="use profile" />
                <h1 className='name'>{name}</h1>
                <p className='email'>{email}</p>
                <div className='icons'>
                    <a href={Linkedin} className='icon' style={{ color: "lightblue" }}><h2><i className="fa-brands fa-linkedin" color='blue'></i></h2></a>
                    <a href={github} className='icon' style={{ color: "black" }}><h2  ><i className="fa-brands fa-github"></i></h2></a>
                    <a href={insta} className='icon' style={{ color: "pink" }}><h2><i className="fa-brands fa-instagram"></i></h2></a>
                </div>
            </div>
        </>
    )
}
export default Profile;
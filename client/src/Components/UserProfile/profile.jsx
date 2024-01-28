// const { useEffect } = require("react")

import axios from "axios";
import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import Card from '../Card/Card'

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
    const profileObj = {name,email , url , insta, github , Linkedin}
    const updateHandler = () =>{
        navigate(`/profile/update/${id}`)
    }
    useEffect(() => {
        getProfileData();
    },[id])

    return (
        <>
            <h1>Profile</h1>
            <button onClick={() => navigate('/login')}>LogOut</button>
            <Card data={profileObj} />
            {/* <button onClick={updateHandler}>Edit</button> */}
        </>
    )
}
export default Profile;
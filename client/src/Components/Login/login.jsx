import { useState } from "react"
import axios from 'axios'
import { useNavigate } from 'react-router-dom';

const Login = () =>{
    const [Email,setEmail] = useState('');
    const [Password,setPassword] = useState('');
    const navigate = useNavigate();

    const submitHandler = (e) =>{
        e.preventDefault();
        axios.post('http://localhost:3001/login',{Email,Password})
        .then((res)=> {
            console.log(res); 
            navigate(`/profile/${res.data.data._id}`);
        })
        .catch(err => console.log(err))
    }

    return(
        <>
            <form onSubmit={submitHandler}>
                <label htmlFor="email">Email</label>
                <input type="text" 
                onChange={(e)=> setEmail(e.target.value)}
                autoComplete="off"
                required
                />

                <label htmlFor="Password">Password</label>
                <input type="password" 
                onChange={(e)=> setPassword(e.target.value)}
                autoComplete="off"
                required
                />

                <button type="submit">Login</button>
            </form>
        </>
    )
}

export default Login
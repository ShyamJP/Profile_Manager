import axios from 'axios';
import { useEffect, useState } from 'react';
import './user.css'

const User = () =>{
    const [data,setdata] = useState();
    const getData = async() =>{
        await axios.get('http://localhost:3001/getdata')
        .then((res)=> {
            // console.log(res)
            setdata(res.data.data)
        })
        .catch((err)=> console.log(err))
        console.log(data);  
    }
    useEffect(()=>{
        getData()
    },[])
    return(
        <main>
        <main className='users'>
        <center><h1>User Page</h1></center>
        <div className='all_users'>
        {
            data == null ? " Data not found" 
            :data.map(i=>
            <div key={i._id} className='profile_card'>
                <img src={`/images/${i.image}`} height={"50px"} width={"50px"} className='img' alt="use profile" />
                <h1 className='name'>{i.name}</h1>
                <p className='email'>{i.Email}</p>
                <div className='icons'>
                <a href={i.Linkedin} className='icon' style={{color:"lightblue"}}><h2><i className="fa-brands fa-linkedin" color='blue'></i></h2></a>
                <a href={i.Github} className='icon' style={{color:"black"}}><h2  ><i className="fa-brands fa-github"></i></h2></a>
                <a href={i.insta} className='icon' style={{color:"pink"}}><h2><i className="fa-brands fa-instagram"></i></h2></a>
                </div>
            </div>)
        }
        </div>
        </main>
        </main>
    )
}

export default User;
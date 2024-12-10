import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Login(){
    const[username, setUsername]=useState('');
    const[password, setPassword]=useState('');
    const[error, setError]=useState('');
    const navigate=useNavigate();

    const fetchLogin=async ()=>{
        if(username.length==0 || password.length==0){
            setError('Empty username or password');
            return;
        }
        const options={
            method:'POST',
            headers:{
                'Content-Type':'application/json'
            },
            body: JSON.stringify({username, password})
        }

        const result=await fetch('http://localhost:3001/auth/login', options)
        const json=await response.json();

        if(!json.success){
            setError(json.message);
        }else{
            localStorage.setItem('token', json.data.token);
            navigate('/');
        }
    }
    return <div>
        <label htmlFor="username">Username</label>
        <input 
            type="text" 
            id="username" 
            name="username" 
            placeholder="Username"
            onChange={(e)=>setUsername(e.target.value)}
            />
            <br/><br/>

        <label htmlFor="password">Password</label>
        <input 
            type="text" 
            id="password" 
            name="password" 
            placeholder="password"
            onChange={(e)=>setPassword(e.target.value)}/>
            <br/><br/>

        <button onClick={fetchLogin}>Login</button><br/>
        {error.length>0 && <span style={{color:'red'}}>{error}</span>}
    </div>
}

export default Login;
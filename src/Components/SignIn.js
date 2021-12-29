import {useState} from 'react';
import axios from 'axios';

function SignIn(){
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const submitHandler = (e) => {
        e.preventDefault();
        const postData = {username, password};
        
        console.log(postData);
        axios.post(`http://localhost:8080/user-service/user/signin`, postData)
            .then((res)=>{
                console.log(res);
            });
        setUsername('');
        setPassword('');  
    }
    return <>
        <form onSubmit={submitHandler}>
            <h4>Sign In</h4>
            <div class="mb-3">
                <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Email" value={username} onChange={(e)=>{setUsername(e.target.value)}}/> 
                <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
            </div>
            <div class="mb-3">
                <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Password" value={password} onChange={(e)=>{setPassword(e.target.value)}}/>
            </div>
            <div class="mb-3 form-check">
                <input type="checkbox" class="form-check-input" id="exampleCheck1" />
                <label class="form-check-label" for="exampleCheck1">Check me out</label>
            </div>
            <button type="submit" class="btn btn-primary">Sign In</button>
        </form>
    </>
}

export default SignIn;
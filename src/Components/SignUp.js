import {useState} from 'react'
import axios from 'axios';

function SignUp(){
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const submitHandler = (e) => {
        e.preventDefault();
        const postData = {username, password, username};
        
        console.log(postData);
        axios.post(`http://localhost:8080/user-service/user/signup`, postData)
            .then((res)=>{
                console.log(res);
            });
        setUsername('');
        setPassword(''); 
    }

    return <>
        <h4>Sign Up</h4>
        <form class="row g-3" onSubmit={submitHandler}>
            <div class="col-md-6">
                <input type="email" class="form-control" id="inputEmail4" placeholder="Email" value={username} onChange={(e)=>{setUsername(e.target.value)}}/>
            </div>
            <div class="col-md-6">
                <input type="password" class="form-control" id="inputPassword4" placeholder="Password" value={password} onChange={(e)=>{setPassword(e.target.value)}}/>
            </div>
            <div class="col-12">
                <input type="text" class="form-control" id="inputAddress" placeholder="Address" />
            </div>
            <div class="col-md-8">
                <input type="text" class="form-control" id="inputCity"  placeholder="City"/>
            </div>
            <div class="col-md-4">
                <input type="text" class="form-control" id="inputZip" placeholder="Zip"/>
            </div>
            
            <div class="col-12">
                <button type="submit" class="btn btn-primary">Sign Up</button>
            </div>
        </form>
    </>
}

export default SignUp;
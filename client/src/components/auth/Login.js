import React, {useState} from 'react';


const Login = () => {

    const [user, setUser] = useState({
        email:'',
        password: ''
    });

    const {  email, password } = user;

    //Handel Form Inputs
    const onChange = e => setUser({...user, [e.target.name]: e.target.value})


    //Handles Submittions
    const onSubmit = e => {

        e.preventDefault();
        console.log('Login Submitted')
    }
    return (
        <div className='form-container'>
            <h1>Account <span className='text-primary'> Login</span></h1>
            <form onSubmit={onSubmit}>
                
                <div className='form-group'>
                    <label htmlFor='email'>Email Address</label>
                    <input type='text' name='email' value={email} onChange={onChange}/>
                </div>                
                <div className='form-group'>
                    <label htmlFor='password'>Password</label>
                    <input type='password' name='password' value={password} onChange={onChange}/>
                </div>

                <div className='form-group'>
                    <input type='submit' name='Login' value="Login" className='btn btn-primary btn-block'/>

                    
                </div>

            </form>
        </div>
    )
}

export default Login

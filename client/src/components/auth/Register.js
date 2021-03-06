import React, {useState, useContext} from 'react';
import AlertContext from '../../context/alert/alertContext';
import AuthContext from '../../context/auth/authContext'
import { set } from 'mongoose';


const Register = () => {
    const alertContext = useContext(AlertContext)
    const authContext = useContext(AuthContext)

    const {setAlert} = alertContext;

    const {register} = authContext;

    const [user, setUser] = useState({
        name: '',
        email:'',
        password: '',
        password2: ''
    });

    const { name, email, password, password2 } = user;

    //Handles inputs
    const onChange = e => setUser({...user, [e.target.name]: e.target.value})
    
    
    //Handles Submissions 
    const onSubmit = e => {
        e.preventDefault();
        if (name === '' || email === '' || password === ''){
            setAlert('Please fill in all fields', 'danger')
        }else if (password !== password2) {
            setAlert('Passwords do not match', 'danger')
        
        }else {
            register({
                name,
                email,
                password
            })    
            console.log('this passed')
        }
        
    }
    return (
        <div className='form-container'>
            <h1>Account <span className='text-primary'> Register</span></h1>
            <form onSubmit={onSubmit}>
                <div className='form-group'>
                    <label htmlFor='name'>Name</label>
                    <input type='text' name='name' value={name} onChange={onChange} required/>
                </div>
                
                <div className='form-group'>
                    <label htmlFor='email'>Email Address</label>
                    <input type='text' name='email' value={email} onChange={onChange} required/>
                </div>                
                <div className='form-group'>
                    <label htmlFor='password'>Password</label>
                    <input type='password' name='password' value={password} onChange={onChange} required minLength='6'/>
                </div>
                <div className='form-group'>
                    <label htmlFor='password2'>Confirm Password</label>
                    <input type='password' name='password2' value={password2} onChange={onChange} required/>
                </div>
                <div className='form-group'>
                    <input type='submit' name='Register' value="Register" className='btn btn-primary btn-block'/>

                    
                </div>

            </form>
        </div>
    )
}

export default Register

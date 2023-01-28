import './Register.css' ;
import React from 'react';
import { Link,useNavigate } from 'react-router-dom';

const Register = () => {
    const navigate = useNavigate();
    const navigateToLogin = ()=>{
        navigate('./login') ;
    }
    const handleRegister = event =>{
        event.preventDefault();
    }
    return (
        <div className='form-register'>
            <h3 className='text-center'>Please Register</h3>
            <form onSubmit={handleRegister}>
                <input type="text" name="name"required placeholder='Your Name' id="" />
                <input type="email"required placeholder='Email Address' name="" id="" />
                <input type="password" name=""required placeholder='Password' id="" />
                <input type="Password"required placeholder='Confirm-Password' name="" id="" />
                <input type="submit"value={'Register'}></input>
            </form>
            <p>Aready have an account? <Link to={'/login'} onClick={navigateToLogin}  className='text-danger pe-auto text-decoration-none '>Please Login</Link></p>
        </div>
    );
};

export default Register;
import React, { useState } from 'react';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';

const Login = () => {
    const [login, setLogin] = useState(false);
    const [confirmError, setConfirmError] = useState('');

    const [userInfo, setUserInfo] = useState({
        email: '',
        password: '',
        confirmPass: ''
    });

    //for user create with email and password ....
    const [
        createUserWithEmailAndPassword,
        createUser,
        createLoading,
        createError,
    ] = useCreateUserWithEmailAndPassword(auth);

    const handleFormInput = event => {
        userInfo[event.target.name] = event.target.value;
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        if (userInfo.password !== userInfo.confirmPass) {
            setConfirmError('Password can not match!');
            return;
        }

        if (!login) {
            setConfirmError('');
            createUserWithEmailAndPassword(userInfo.email, userInfo.password);
        }

    }

    return (
        <div className='container'>
            <div className="row mt-5">
                <div className="col-12">
                    <h2 className='text-center text-info'>
                        {login ? 'Login' : 'Register'}
                    </h2>
                    <form onSubmit={handleSubmit} className='w-50 mx-auto'>
                        <div className="mb-3">
                            <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                            <input onBlur={(event) => handleFormInput(event)} type="text" name='email' className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                            <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                        </div>
                        <div className="mb-3">
                            <label htmlFor="cExampleInputPassword1" className="form-label">Password</label>
                            <input onBlur={(event) => handleFormInput(event)} type="password" name='password' className="form-control" id="CexampleInputPassword1" />
                        </div>
                        {
                            !login ?
                                <div className="mb-3">
                                    <label htmlFor="exampleInputConfirmPassword1" className="form-label">Confirm Password</label>
                                    <input onBlur={(event) => handleFormInput(event)} type="password" name='confirmPass' className="form-control" id="exampleInputPassword1" />
                                </div>
                                :
                                ''
                        }
                        <div className="mb-3 form-check">
                            <input onChange={() => setLogin(!login)} type="checkbox" className="form-check-input" id="exampleCheck1" />
                            <label className="form-check-label" htmlFor="exampleCheck1">Check me out</label>
                        </div>
                        <button type="submit" className="btn btn-primary">
                            {
                                login ? 'Login' : 'Register'
                            }
                        </button>
                        <p className='text-danger'>{confirmError}</p>
                        {
                            createError && <p className='text-danger'>{createError.message}</p>
                        }
                        {
                            createUser && <p className='text-success'>User Create Successfully</p>
                        }
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Login;
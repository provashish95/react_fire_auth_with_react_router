import React, { useState } from 'react';

const Login = () => {
    const [login, setLogin] = useState(false);
    return (
        <div className='container'>
            <div className="row mt-5">
                <div className="col-12">
                    <h2 className='text-center text-info'>
                        {login ? 'Login' : 'Register'}
                    </h2>
                    <form className='w-50 mx-auto'>
                        <div className="mb-3">
                            <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                            <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                            <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                        </div>
                        <div className="mb-3">
                            <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                            <input type="password" className="form-control" id="exampleInputPassword1" />
                        </div>
                        {
                            !login ?
                                <div className="mb-3">
                                    <label htmlFor="exampleInputConfirmPassword1" className="form-label">Confirm Password</label>
                                    <input type="password" className="form-control" id="exampleInputPassword1" />
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
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Login;
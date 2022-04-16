import React from 'react';
import CustomLink from '../../CustomLink/CustomLink';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import { signOut } from 'firebase/auth';

const Navbar = () => {
    const [user, loading, error] = useAuthState(auth);

    //console.log(user);
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container">
                <CustomLink className="navbar-brand" to="/">Random User</CustomLink>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <CustomLink className="nav-link " aria-current="page" to="/home">Home</CustomLink>
                        </li>
                        <li className="nav-item">
                            <CustomLink className="nav-link" to="/users">Users</CustomLink>
                        </li>
                        <li className="nav-item">
                            <CustomLink className="nav-link" to="/login">Login</CustomLink>
                        </li>
                    </ul>
                    {
                        !user ? 'Login' : <span className='navbar-text'>{user.email}
                            <button onClick={() => signOut(auth)} type="button" class="btn btn-light">Sign Out</button>
                        </span>
                    }

                </div>
            </div>
        </nav>
    );
};

export default Navbar;
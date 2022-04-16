import React from 'react';
import { Link } from 'react-router-dom';

const SingleUsers = ({ user, children }) => {
    const { email, phone, website } = children || {};
    const { name, username, id } = user || {};
    //console.log(user);
    return (
        <div className='col-4 gy-2'>
            <div className="card shadow-sm p-3 mb-2 bg-body rounded" style={{ width: '18rem' }}>
                <div className="card-body">
                    <h5 className="card-title">Name: {name}</h5>
                    <h6 className="card-subtitle mb-2 text-muted">ID: {id}</h6>
                    <p className="card-text">Username: {username}</p>
                    {
                        children
                            ?
                            <>
                                <p className="card-text">Cell: {phone}</p>
                                <p className="card-text">Email: {email}</p>
                                <p className="card-text">Website: {website}</p>
                            </>
                            :
                            ""
                    }
                    <Link to={`/user/${id}`} className="card-link">User Info</Link>
                </div>
            </div>
        </div>
    );
};

export default SingleUsers;
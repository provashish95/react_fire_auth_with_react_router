import React from 'react';
import { Link } from 'react-router-dom';
import useUsers from '../../Hook/useUsers';
import SingleUsers from '../SingleUsers/SingleUsers';

const Home = () => {
    const usersData = useUsers('https://jsonplaceholder.typicode.com/users');
    //console.log(usersData);

    if (usersData.length) {
        usersData.length = 4;
    }

    return (
        <div className='container'>
            <h3>Home: {usersData.length}</h3>
            <div className="row">
                {
                    usersData.map(user => <SingleUsers key={user.id} user={user}></SingleUsers>)
                }
                <Link to='/users'>Load more...</Link>
            </div>
        </div>
    );
};

export default Home;
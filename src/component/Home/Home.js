import React from 'react';
import useUsers from '../../Hook/useUsers';

const Home = () => {
    const data = useUsers('https://jsonplaceholder.typicode.com/users');
    console.log(data);

    return (
        <div>
            <h3>Home</h3>
        </div>
    );
};

export default Home;
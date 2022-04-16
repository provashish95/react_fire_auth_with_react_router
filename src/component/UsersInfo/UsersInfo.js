import React from 'react';
import { useParams } from 'react-router-dom';
import useUsers from '../../Hook/useUsers';
import SingleUsers from '../SingleUsers/SingleUsers';

const UsersInfo = () => {
    let { userId } = useParams();
    const singleData = useUsers(`https://jsonplaceholder.typicode.com/users/${userId}`);
    //const { name, id, phone } = singleData;
    return (
        <div className='container'>

            <div className="row">
                <SingleUsers key={singleData.id} user={singleData}>
                    {
                        {
                            email: singleData?.email,
                            phone: singleData?.phone,
                            website: singleData?.website
                        }
                    }
                </SingleUsers>
            </div>
        </div>
    );
};

export default UsersInfo;
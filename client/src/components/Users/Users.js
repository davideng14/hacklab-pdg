import React from 'react';
import Header from '../../shared/Header';
import { Progress } from 'reactstrap';

const Users = () => {
    return (
        <>
            <Header profile='user' ></Header>
            <div class="container">
                <Progress value="25">1/4</Progress>
            </div>
        </>
    );
}

export default Users;
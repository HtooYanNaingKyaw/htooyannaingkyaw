import React from 'react';
import { Link } from 'react-router-dom';
import Wrapper from '../../components/GeneralWrapper';

const NotFound = () => (
    <Wrapper>
        <h1>404 - Not Found!</h1>
        <Link to="/">
            Go Home
        </Link>
    </Wrapper>
);

export default NotFound;
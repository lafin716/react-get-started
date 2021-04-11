import { Menu } from 'antd';
import React from 'react'
import { Link } from 'react-router-dom';

const NavBar = (props) => {
    return (
        <Menu>
            <Menu.Item><Link to="/">Home</Link></Menu.Item>
            <Menu.Item><Link to="/login">Login</Link></Menu.Item>
            <Menu.Item><Link to="/register">Register</Link></Menu.Item>
        </Menu>
    )
}

export default NavBar
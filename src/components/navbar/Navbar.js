import React from 'react'
import { useTheme, useThemeUpdate } from '../others/ThemeContext';
import { MoonIcon, SunIcon } from '@chakra-ui/icons'
import { Link } from 'react-router-dom';
import { FormControl, FormLabel } from '@chakra-ui/react';
import "./Navbar.css"

export default function Navigation() {
    const darkTheme = useTheme()
    const toggleTheme = useThemeUpdate()
    const navThemeStyles = {
        backgroundColor: darkTheme ? 'rgb(171, 102, 50)' : 'rgb(196, 131, 71)',

    }
    return (
        <div className='navbar-container' style={navThemeStyles}>
            <div className='navbar-brand'>
                <Link to='/'>THE CINEMA</Link>
            </div>

            <div className='navbar-menu'>
                <Link to="/">
                    <h1 className='navbar-items'>Home</h1>
                </Link>
                <Link to="/about">
                    <h1 className='navbar-items'>About</h1>
                </Link>
                <Link to="/news">
                    <h1 className='navbar-items'>News</h1>
                </Link>
                <Link to="/contact">
                    <h1 className='navbar-items'>Contact</h1>
                </Link>
            </div>

            <FormControl display='flex' alignItems='center' className='theme-switch'>
                <FormLabel mb='0' onClick={toggleTheme} style={{ cursor: 'pointer' }}>
                    {darkTheme ? <MoonIcon boxSize={8} /> : <SunIcon boxSize={8} />}
                </FormLabel>
            </FormControl>
        </div>
    )
}

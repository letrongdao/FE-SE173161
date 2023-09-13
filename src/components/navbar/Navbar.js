import React from 'react'
import { useTheme, useThemeUpdate } from '../others/ThemeContext';
import { MoonIcon, SunIcon } from '@chakra-ui/icons'
import { NavLink } from 'react-router-dom';
import { FormControl, FormLabel, Image } from '@chakra-ui/react';
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
                <NavLink to='/'>THE CINEMA</NavLink>
            </div>

            <div className='navbar-menu'>
                <NavLink to="/">
                    <h1 className='navbar-items'>Home</h1>
                </NavLink>
                <NavLink to="/about">
                    <h1 className='navbar-items'>About</h1>
                </NavLink>
                <NavLink to="/news">
                    <h1 className='navbar-items'>News</h1>
                </NavLink>
                <NavLink to="/contact">
                    <h1 className='navbar-items'>Contact</h1>
                </NavLink>
            </div>

            <div className='navbar-end'>
                <span>
                    <NavLink to='/login'>
                        <Image src='https://cdn-icons-png.flaticon.com/512/1144/1144760.png' id='user' alt='user' />
                    </NavLink>
                </span>
                <span>
                    <FormControl display='flex' alignItems='center' className='theme-switch'>
                        <FormLabel mb='0' onClick={toggleTheme} style={{ cursor: 'pointer' }}>
                            {darkTheme ? <MoonIcon boxSize={8} /> : <SunIcon boxSize={8} />}
                        </FormLabel>
                    </FormControl>
                </span>
            </div>
        </div>
    )
}

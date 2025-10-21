import { NavbarBrand, Navbar as NavbarHero, NavbarContent, NavbarItem } from '@heroui/react';
import { BsThreads } from "react-icons/bs";
import React from 'react';
import { Link } from 'react-router-dom';
import { useTheme } from '@heroui/use-theme';
import { FaRegMoon } from "react-icons/fa";
import { MdOutlineWbSunny } from "react-icons/md";


const Navbar = () => {

  const {theme, setTheme} = useTheme()
  const toggleTheme = () => {
    return theme === 'light' ? setTheme('dark') : setTheme('light')
  }

  return (
    <NavbarHero>
      <NavbarBrand className='flex justify-between items-center gap-1'>
        <BsThreads/>
        <p className='font-bold text-inherit'>THREAD</p>
      </NavbarBrand>
      <NavbarContent className='gap-4 justify-center'>
      <NavbarItem>
        <Link to='/followers' color='foreground'>
        Followers
        </Link>
      </NavbarItem>
      <NavbarItem>
        <Link to='/' color='foreground'>
        Posts
        </Link>
      </NavbarItem>
      <NavbarItem>
        <Link to='/following' color='foreground'>
        Following
        </Link>
      </NavbarItem>
      </NavbarContent>
      <NavbarContent justify='end'>
        <NavbarItem onClick={toggleTheme}>
        {theme === 'light' ? <FaRegMoon/> : <MdOutlineWbSunny/>}
        </NavbarItem>
      </NavbarContent>
    </NavbarHero>
  );
};

export default Navbar;
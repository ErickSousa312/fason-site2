'use client'
import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import styles from '@/styles/components/Navbar.module.css';
import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search';
import Image from 'next/image';

const Navbar = () => {
  const [showInput, setShowInput] = useState(false);
  const [searchValue, setSearchValue] = useState('');
  const inputRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (inputRef.current && !inputRef.current.contains(event.target)) {
        setShowInput(false);
      }
    };

    document.addEventListener('click', handleClickOutside);
    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, []);

  const handleSearchClick = (event) => {
    event.preventDefault();
    setShowInput(!showInput);
  };

  const handleSearchInput = (event) => {
    setSearchValue(event.target.value);
  };

  return (
    <nav className={styles.nav}>
       <div className={styles.logo2}> 
        <Image src={'/logo.png'} alt="Logo TFD Marabá" fill={true} priority={true} />
        </div>
    </nav>
  );
};

export default Navbar;

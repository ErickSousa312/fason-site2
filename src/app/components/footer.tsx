'use client'

import styles from '@/styles/components/Footer.module.css';
import Link from 'next/link';

import {AiOutlineWhatsApp, AiOutlineFolder} from 'react-icons/ai'
import { GrCatalogOption } from "react-icons/gr";
const Footer = () => {
  const socialLinks = [
    { name: 'Facebook', url: 'https://www.facebook.com' },
    { name: 'Twitter', url: 'https://www.twitter.com' },
    { name: 'Instagram', url: 'https://www.instagram.com/fasoncouro/' },
  ];

  return (
    <footer className={styles.footer}>
      <div className={styles.footerContent}>
        <div className={styles.footerSection}>
          
        <Link href={'https://api.whatsapp.com/send?phone=5575991056193&text=Ol%C3%A1!%20Gostaria%20de%20ter%20os%20produtos%20da%20Fason%20em%20minha%20loja,%20como%20fa%C3%A7o?'}>
          <h3 className={styles.whats}>Whats app <AiOutlineWhatsApp/></h3>

        </Link>
        <br/>
        <Link href={'https://api.whatsapp.com/send?phone=5575991056193&text=Ol%C3%A1!%20Gostaria%20de%20ter%20os%20produtos%20da%20Fason%20em%20minha%20loja,%20como%20fa%C3%A7o?'}>
          <h3 className={styles.whats}>Catálogo <AiOutlineFolder /></h3>

        </Link>
        </div>
        <div className={styles.footerSection}>
          <h3>Contact Us</h3>
          <p>1234 Main St</p>
          <p>Anytown, USA</p>
          <p>Phone: (555) 555-1234</p>
          <p>Email: info@company.com</p>
        </div>
        <div className={styles.footerSection}> 
        
        
        <h3>Siga-nos</h3>
          <ul className={styles.socialLinks}>
            {socialLinks.map((link, index) => (
              <li className={styles.lista} key={index}>
                <a href={link.url} target="_blank" rel="noopener noreferrer">
                  {link.name}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className={styles.footerBottom}>
        <p>&copy; {new Date().getFullYear()} Company, Inc. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;

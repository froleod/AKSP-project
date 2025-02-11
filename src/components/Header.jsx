import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <header style={styles.header}>
            <nav>
                <ul style={styles.navList}>
                    <li style={styles.navItem}>
                        <Link to="/" style={styles.link}>Home</Link>
                    </li>
                    <li style={styles.navItem}>
                        <Link to="/products" style={styles.link}>Products</Link>
                    </li>
                    <li style={styles.navItem}>
                        <Link to="/about" style={styles.link}>About Us</Link>
                    </li>
                </ul>
            </nav>
        </header>
    );
};

const styles = {
    header: {
        backgroundColor: '#282c34',
        padding: '10px 20px',
    },
    navList: {
        listStyle: 'none',
        display: 'flex',
        gap: '20px',
        margin: 0,
        padding: 0,
    },
    navItem: {
        display: 'inline',
    },
    link: {
        color: 'white',
        textDecoration: 'none',
        fontSize: '18px',
    },
};

export default Header;
// frontend/src/componets/NavbarLoggedIn.jsx
import React from 'react';
import { Link, useNavigate } from 'react-router-dom'; // <--- यहां से '=>' हटा दिया है
import { motion } from 'framer-motion';
import { toast } from 'react-toastify'

const NavbarLoggedIn = () => {
    const navigate = useNavigate();

    const handleLogout = () => {
        localStorage.removeItem('token');
        toast.info('Logged out successfully!');
        navigate('/login');
    };

    const navItemVariants = { /* ... (remaining code) ... */ };
    const buttonVariants = { /* ... (remaining code) ... */ };

    return (
        <motion.nav
            className="navbar navbar-expand-lg navbar-dark shadow-sm py-3"
            style={{ /* ... (remaining style) ... */ }}
            initial={{ y: -100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ type: 'spring', stiffness: 80, damping: 15 }}
        >
            <div className="container-fluid">
                <Link className="navbar-brand d-flex align-items-center fw-bold fs-4 text-white" to="/customers">
                    <motion.span
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.2, duration: 0.5 }}
                    >
                        Leadrr CRM
                    </motion.span>
                </Link>

                <button
                    className="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarNavLoggedIn"
                    aria-controls="navbarNavLoggedIn"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse justify-content-end" id="navbarNavLoggedIn">
                    <ul className="navbar-nav">
                        <motion.li
                            className="nav-item me-3"
                            variants={navItemVariants}
                            initial="hidden"
                            animate="visible"
                            whileHover="hover"
                            transition={{ delay: 0.3 }}
                        >
                            <Link className="nav-link text-white fw-medium" aria-current="page" to="/customers">
                                Dashboard
                            </Link>
                        </motion.li>
                        <motion.li
                            className="nav-item me-3"
                            variants={navItemVariants}
                            initial="hidden"
                            animate="visible"
                            whileHover="hover"
                            transition={{ delay: 0.4 }}
                        >
                            <Link className="nav-link text-white fw-medium" to="/customers">
                                Customers
                            </Link>
                        </motion.li>

                        <motion.li
                            className="nav-item"
                            variants={navItemVariants}
                            initial="hidden"
                            animate="visible"
                            transition={{ delay: 0.6 }}
                        >
                            <motion.button
                                onClick={handleLogout}
                                className="btn btn-sm text-white fw-semibold ms-lg-3"
                                style={{
                                    background: '#dc3545',
                                    border: 'none',
                                    borderRadius: '8px',
                                    padding: '0.4rem 1rem',
                                }}
                                variants={buttonVariants}
                                initial="initial"
                                whileHover="hover"
                                whileTap="tap"
                            >
                                Logout
                            </motion.button>
                        </motion.li>
                    </ul>
                </div>
            </div>
        </motion.nav>
    );
};

export default NavbarLoggedIn;





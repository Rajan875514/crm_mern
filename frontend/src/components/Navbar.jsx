
















// frontend/src/components/Navbar.jsx
import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { toast } from 'react-toastify';

const Navbar = ({ isLoggedIn, handleLogout }) => {
  const navigate = useNavigate();

  const navItemVariants = {
    hidden: { y: -20, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { type: 'spring', stiffness: 100, damping: 15 } },
    hover: { scale: 1.05, transition: { duration: 0.2 } },
  };

  const buttonVariants = {
    initial: { scale: 1 },
    hover: { scale: 1.05, transition: { type: 'spring', stiffness: 300 } },
    tap: { scale: 0.95 },
  };

  return (
    <motion.nav
      className="navbar navbar-expand-lg navbar-light shadow-sm py-3"
      style={{
        
        background: '#FFFFFF',
        padding: '0.75rem 2rem',
        zIndex: 1000,
        // borderRadius: '50px',
        margin: '0px auto 0 auto',
        maxWidth: '100%',
        boxShadow: '0 4px 15px rgba(0, 0, 0, 0.1)',
      }}
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ type: 'spring', stiffness: 80, damping: 15, delay: 0.5 }}
    >
      <div className="container-fluid">
        <Link className="navbar-brand d-flex align-items-center fw-bold fs-4" to="/"
          style={{ color: '#5C0099' }}
        >
          <motion.span
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.8, duration: 0.5 }}
          >
            Rajan
          </motion.span>
        </Link>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
          <ul className="navbar-nav align-items-center">
            <motion.li
              className="nav-item me-4"
              variants={navItemVariants}
              initial="hidden"
              animate="visible"
              whileHover="hover"
              transition={{ delay: 1 }}
            >
              <Link className="nav-link fw-medium" aria-current="page" to="/features"
                style={{ color: '#5C0099' }}
              >
                Feature
              </Link>
            </motion.li>
            <motion.li
              className="nav-item me-4"
              variants={navItemVariants}
              initial="hidden"
              animate="visible"
              whileHover="hover"
              transition={{ delay: 1.1 }}
            >
              <Link className="nav-link fw-medium" to="/how-it-work"
                style={{ color: '#5C0099' }}
              >
                How It Work
              </Link>
            </motion.li>
            <motion.li
              className="nav-item me-4"
              variants={navItemVariants}
              initial="hidden"
              animate="visible"
              whileHover="hover"
              transition={{ delay: 1.2 }}
            >
              <Link className="nav-link fw-medium" to="/personas"
                style={{ color: '#5C0099' }}
              >
                Personas
              </Link>
            </motion.li>
            <motion.li
              className="nav-item me-4"
              variants={navItemVariants}
              initial="hidden"
              animate="visible"
              whileHover="hover"
              transition={{ delay: 1.3 }}
            >
              <Link className="nav-link fw-medium" to="/pricing"
                style={{ color: '#5C0099' }}
              >
                Pricing
              </Link>
            </motion.li>
            <motion.li
              className="nav-item me-4"
              variants={navItemVariants}
              initial="hidden"
              animate="visible"
              whileHover="hover"
              transition={{ delay: 1.4 }}
            >
              <Link className="nav-link fw-medium" to="/contact-us"
                style={{ color: '#5C0099' }}
              >
                Contact Us
              </Link>
            </motion.li>

            {isLoggedIn ? (
              <motion.li
                className="nav-item mt-2 mt-lg-0"
                variants={navItemVariants}
                initial="hidden"
                animate="visible"
                transition={{ delay: 1.6 }}
              >
                <motion.button
                  onClick={() => {
                    handleLogout();
                    toast.info('Logged out successfully!');
                  }}
                  className="btn text-white fw-semibold"
                  style={{
                    background: '#dc3545',
                    border: 'none',
                    borderRadius: '9999px',
                    padding: '0.5rem 1.5rem',
                    minWidth: '100px',
                  }}
                  variants={buttonVariants}
                  initial="initial"
                  whileHover="hover"
                  whileTap="tap"
                >
                  Logout
                </motion.button>
              </motion.li>
            ) : (
              <>
                <motion.li
                  className="nav-item me-2 mt-2 mt-lg-0"
                  variants={navItemVariants}
                  initial="hidden"
                  animate="visible"
                  transition={{ delay: 1.5 }}
                >
                  <motion.button
                    onClick={() => navigate('/login')}
                    className="btn fw-semibold"
                    style={{
                      background: '#FFFFFF',
                      border: '1px solid #E5E7EB',
                      borderRadius: '9999px',
                      padding: '0.5rem 1.5rem',
                      color: '#5C0099',
                      minWidth: '100px',
                    }}
                    variants={buttonVariants}
                    initial="initial"
                    whileHover="hover"
                    whileTap="tap"
                  >
                    Log in
                  </motion.button>
                </motion.li>

                <motion.li
                  className="nav-item mt-2 mt-lg-0"
                  variants={navItemVariants}
                  initial="hidden"
                  animate="visible"
                  transition={{ delay: 1.6 }}
                >
                  <motion.button
                    onClick={() => navigate('/register')}
                    className="btn text-white fw-semibold"
                    style={{
                      background: 'linear-gradient(to right, #6B21A8, #8B5CF6)',
                      border: 'none',
                      borderRadius: '9999px',
                      padding: '0.5rem 1.5rem',
                      minWidth: '100px',
                    }}
                    variants={buttonVariants}
                    initial="initial"
                    whileHover="hover"
                    whileTap="tap"
                  >
                    Register
                  </motion.button>
                </motion.li>
              </>
            )}
          </ul>
        </div>
      </div>
    </motion.nav>
  );
};

export default Navbar;













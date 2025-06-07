
import { useState } from 'react';
import axios from 'axios';
import { useNavigate, Link } from 'react-router-dom';
import { toast } from 'react-toastify';
import { motion } from 'framer-motion';
import avatar from '../assets/avatar.jpg';

// Accept setIsLoggedIn as a prop
const LoginPage = ({ setIsLoggedIn }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const submitHandler = async (e) => {
    e.preventDefault();

    try {
      const config = { headers: { 'Content-Type': 'application/json' } };

      const { data } = await axios.post(
        'http://localhost:5000/api/auth/login',
        { email, password },
        config
      );

      localStorage.setItem('userInfo', JSON.stringify(data));
      setIsLoggedIn(true);
      toast.success('Login successful!');
      navigate('/');
    } catch (error) {
      if (error.response) {
        toast.error(error.response.data.message || 'Login failed');
      } else if (error.request) {
        toast.error('Could not connect to the server.');
      } else {
        toast.error('An unexpected error occurred.');
      }
    }
  };

  // Framer Motion Variants (same as RegisterPage.jsx)
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: 'spring',
        stiffness: 100,
        damping: 15,
      },
    },
  };

  const buttonVariants = {
    initial: { scale: 1 },
    hover: { scale: 1.05, transition: { type: 'spring', stiffness: 300 } },
    tap: { scale: 0.95 },
  };

  // Define bubbles (same as RegisterPage.jsx)
  const bubbles = [
    { size: '150px', bg: 'rgba(255, 182, 193, 0.3)', top: '10%', left: '800px', duration: '6s', blur: '2px' },
    { size: '80px', bg: 'rgba(173, 216, 230, 0.3)', top: '50%', left: '900px', duration: '5s', blur: '2px' },
    { size: '60px', bg: 'rgba(144, 238, 144, 0.3)', top: '70%', left: '700px', duration: '4s', blur: '2px' },
    { size: '120px', bg: 'rgba(221, 160, 221, 0.3)', top: '10%', right: '300px', duration: '7s', blur: '2px' },
    { size: '100px', bg: 'rgba(255, 245, 157, 0.3)', top: '50%', right: '400px', duration: '6s', blur: '2px' },
    { size: '70px', bg: 'rgba(255, 218, 185, 0.3)', top: '70%', right: '300px', duration: '5s', blur: '2px' },
  ];

  return (
    <motion.div
      className="min-vh-100 d-flex align-items-center justify-content-start"
      style={{
        background: 'linear-gradient(to bottom right, #1e3a8a, #2dd4bf)',
        position: 'relative',
        overflow: 'hidden',
        paddingLeft: '5rem',
      }}
      initial={{ x: '-100vw', opacity: 0 }} // Slide in from the left
      animate={{ x: 0, opacity: 1 }}
      transition={{ type: 'spring', stiffness: 60, damping: 15 }}
    >
      {bubbles.map((bubble, index) => (
        <motion.div
          key={index}
          style={{
            position: 'absolute',
            width: bubble.size,
            height: bubble.size,
            background: bubble.bg,
            borderRadius: '50%',
            top: bubble.top,
            left: bubble.left,
            right: bubble.right,
            filter: `blur(${bubble.blur})`,
            zIndex: 1,
          }}
          animate={{
            y: ['0%', '40%', '0%'],
            x: ['0%', `${(index % 2 === 0 ? 1 : -1) * 10}%`, '0%'],
            rotate: [0, 360],
          }}
          transition={{
            duration: parseFloat(bubble.duration),
            ease: 'easeInOut',
            repeat: Infinity,
            delay: index * 0.2,
          }}
        />
      ))}

      <motion.div
        className="bg-white rounded-lg shadow-lg p-3 p-md-4 w-100"
        style={{
          maxWidth: '400px',
          position: 'relative',
          zIndex: 10,
          borderRadius: '20px',
          background: 'linear-gradient(145deg, #ffffff, #f1f5f9)',
          boxShadow: '0 8px 16px rgba(0, 0, 0, 0.15)',
          backdropFilter: 'blur(30px)',
          WebkitBackdropFilter: 'blur(30px)',
          backgroundColor: 'rgba(255, 255, 255, 0.9)',
        }}
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.div variants={itemVariants} className="d-flex justify-content-center">
          <img
            src={avatar}
            alt="Avatar"
            className="rounded-circle border border-4 border-white shadow"
            style={{ width: '80px', height: '80px' }}
          />
        </motion.div>

        <motion.h2 variants={itemVariants} className="text-center h5 fw-semibold text-gray-700 mt-3 mb-3">
          Welcome Back!
        </motion.h2>

        <form onSubmit={submitHandler}>
          <motion.div variants={itemVariants} className="mb-2">
            <label htmlFor="email" className="form-label text-gray-600 fw-medium">
              Email
            </label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="form-control rounded"
              style={{
                background: '#f9fafb',
                borderRadius: '10px',
                border: '1px solid #e5e7eb',
                transition: 'border-color 0.2s ease',
              }}
              onFocus={(e) => (e.target.style.borderColor = '#2dd4bf')}
              onBlur={(e) => (e.target.style.borderColor = '#e5e7eb')}
            />
          </motion.div>

          <motion.div variants={itemVariants} className="mb-3">
            <label htmlFor="password" className="form-label text-gray-600 fw-medium">
              Password
            </label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="form-control rounded"
              style={{
                background: '#f9fafb',
                borderRadius: '10px',
                border: '1px solid #e5e7eb',
                transition: 'border-color 0.2s ease',
              }}
              onFocus={(e) => (e.target.style.borderColor = '#2dd4bf')}
              onBlur={(e) => (e.target.style.borderColor = '#e5e7eb')}
            />
          </motion.div>

          <motion.button
            type="submit"
            className="btn w-100 text-white fw-semibold"
            style={{
              background: '#92400e',
              border: 'none',
              borderRadius: '12px',
              padding: '0.75rem',
            }}
            variants={buttonVariants}
            initial="initial"
            whileHover="hover"
            whileTap="tap"
          >
            Login
          </motion.button>
        </form>

        <motion.p variants={itemVariants} className="mt-3 text-center text-sm text-gray-600">
          New user?{' '}
          <Link
            to="/register"
            className="text-decoration-none fw-semibold"
            style={{ color: '#2dd4bf' }}
            onMouseOver={(e) => (e.target.style.textDecoration = 'underline')}
            onMouseOut={(e) => (e.target.style.textDecoration = 'none')}
          >
            Register here
          </Link>
        </motion.p>
      </motion.div>
    </motion.div>
  );
};

export default LoginPage;
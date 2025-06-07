



// // import { useState } from 'react';
// // import axios from 'axios';
// // import { useNavigate, Link } from 'react-router-dom';
// // import { toast } from 'react-toastify';
// // import avatar from '../assets/avatar.jpg'; // Ensure avatar.jpg is in src/assets

// // const RegisterPage = () => {
// //   const [name, setName] = useState('');
// //   const [email, setEmail] = useState('');
// //   const [password, setPassword] = useState('');
// //   const [confirmPassword, setConfirmPassword] = useState('');
// //   const navigate = useNavigate();

// //   const submitHandler = async (e) => {
// //     e.preventDefault();

// //     if (password !== confirmPassword) {
// //       toast.error('Passwords do not match');
// //       return;
// //     }

// //     try {
// //       const config = {
// //         headers: { 'Content-Type': 'application/json' },
// //       };

// //       await axios.post(
// //         'http://localhost:5000/api/auth/register',
// //         { name, email, password },
// //         config
// //       );

// //       toast.success('Registration successful! Please login.');
// //       navigate('/login');
// //     } catch (error) {
// //       if (error.response) {
// //         toast.error(error.response.data.message || 'Registration failed');
// //       } else if (error.request) {
// //         toast.error('Could not connect to the server.');
// //       } else {
// //         toast.error('An unexpected error occurred.');
// //       }
// //     }
// //   };

// //   return (
// //     <div
// //       className="min-vh-100 d-flex align-items-center justify-content-end"
// //       style={{
// //         background: 'linear-gradient(to bottom right, #1e3a8a, #2dd4bf)',
// //         position: 'relative',
// //         overflow: 'hidden',
// //         paddingRight: '5rem',
// //       }}
// //     >
// //       {/* Decorative Bubbles (Positioned on Left and Right) */}
// //       {/* Left Side Bubbles */}
// //       <div
// //         style={{
// //           position: 'absolute',
// //           width: '150px',
// //           height: '150px',
// //           background: 'rgba(255, 182, 193, 0.3)', // Light Pink
// //           borderRadius: '50%',
// //           top: '10%',
// //           left: '50px',
// //           animation: 'float 6s ease-in-out infinite',
// //           filter: 'blur(2px)',
// //         }}
// //       />
// //       <div
// //         style={{
// //           position: 'absolute',
// //           width: '80px',
// //           height: '80px',
// //           background: 'rgba(173, 216, 230, 0.3)', // Light Blue
// //           borderRadius: '50%',
// //           top: '50%',
// //           left: '40px',
// //           animation: 'float 5s ease-in-out infinite',
// //           filter: 'blur(2px)',
// //         }}
// //       />
// //       <div
// //         style={{
// //           position: 'absolute',
// //           width: '60px',
// //           height: '60px',
// //           background: 'rgba(144, 238, 144, 0.3)', // Light Green
// //           borderRadius: '50%',
// //           top: '70%',
// //           left: '30px',
// //           animation: 'float 4s ease-in-out infinite',
// //           filter: 'blur(2px)',
// //         }}
// //       />
// //       {/* Right Side Bubbles */}
// //       <div
// //         style={{
// //           position: 'absolute',
// //           width: '120px',
// //           height: '120px',
// //           background: 'rgba(221, 160, 221, 0.3)', // Light Purple
// //           borderRadius: '50%',
// //           top: '10%',
// //           right: '600px',
// //           animation: 'float 7s ease-in-out infinite',
// //           filter: 'blur(2px)',
// //         }}
// //       />
// //       <div
// //         style={{
// //           position: 'absolute',
// //           width: '100px',
// //           height: '100px',
// //           background: 'rgba(255, 245, 157, 0.3)', // Light Yellow
// //           borderRadius: '50%',
// //           top: '50%',
// //           right: '700px',
// //           animation: 'float 6s ease-in-out infinite',
// //           filter: 'blur(2px)',
// //         }}
// //       />
// //       <div
// //         style={{
// //           position: 'absolute',
// //           width: '70px',
// //           height: '70px',
// //           background: 'rgba(255, 218, 185, 0.3)', // Light Orange
// //           borderRadius: '50%',
// //           top: '70%',
// //           right: '800px',
// //           animation: 'float 5s ease-in-out infinite',
// //           filter: 'blur(2px)',
// //         }}
// //       />

// //       {/* Form Container */}
// //       <div
// //         className="bg-white rounded-lg shadow-lg p-3 p-md-4 w-100"
// //         style={{
// //           maxWidth: '400px',
// //           position: 'relative',
// //           zIndex: 10,
// //           borderRadius: '20px',
// //           background: 'linear-gradient(145deg, #ffffff, #f1f5f9)',
// //           boxShadow: '0 8px 16px rgba(0, 0, 0, 0.15)',
// //           backdropFilter: 'blur(30px)', // Increased blur effect
// //           WebkitBackdropFilter: 'blur(30px)', // For Safari compatibility
// //           backgroundColor: 'rgba(255, 255, 255, 0.9)',
// //         }}
// //       >
// //         {/* Avatar (Inside Form) */}
// //         <div className="d-flex justify-content-center">
// //           <img
// //             src={avatar}
// //             alt="Avatar"
// //             className="rounded-circle border border-4 border-white shadow"
// //             style={{ width: '80px', height: '80px' }}
// //           />
// //         </div>

// //         <h2 className="text-center h5 fw-semibold text-gray-700 mt-3 mb-3">
// //           User Registration Form
// //         </h2>

// //         <form onSubmit={submitHandler}>
// //           {/* Name Field */}
// //           <div className="mb-2">
// //             <label htmlFor="name" className="form-label text-gray-600 fw-medium">
// //               Name
// //             </label>
// //             <input
// //               type="text"
// //               id="name"
// //               value={name}
// //               onChange={(e) => setName(e.target.value)}
// //               required
// //               className="form-control rounded"
// //               style={{
// //                 background: '#f9fafb',
// //                 borderRadius: '10px',
// //                 border: '1px solid #e5e7eb',
// //                 transition: 'border-color 0.2s ease',
// //               }}
// //               onFocus={(e) => (e.target.style.borderColor = '#2dd4bf')}
// //               onBlur={(e) => (e.target.style.borderColor = '#e5e7eb')}
// //             />
// //           </div>

// //           {/* Email Field */}
// //           <div className="mb-2">
// //             <label htmlFor="email" className="form-label text-gray-600 fw-medium">
// //               Email
// //             </label>
// //             <input
// //               type="email"
// //               id="email"
// //               value={email}
// //               onChange={(e) => setEmail(e.target.value)}
// //               required
// //               autoComplete="email"
// //               className="form-control rounded"
// //               style={{
// //                 background: '#f9fafb',
// //                 borderRadius: '10px',
// //                 border: '1px solid #e5e7eb',
// //                 transition: 'border-color 0.2s ease',
// //               }}
// //               onFocus={(e) => (e.target.style.borderColor = '#2dd4bf')}
// //               onBlur={(e) => (e.target.style.borderColor = '#e5e7eb')}
// //             />
// //           </div>

// //           {/* Password Field */}
// //           <div className="mb-2">
// //             <label htmlFor="password" className="form-label text-gray-600 fw-medium">
// //               Password
// //             </label>
// //             <input
// //               type="password"
// //               id="password"
// //               value={password}
// //               onChange={(e) => setPassword(e.target.value)}
// //               required
// //               autoComplete="new-password"
// //               className="form-control rounded"
// //               style={{
// //                 background: '#f9fafb',
// //                 borderRadius: '10px',
// //                 border: '1px solid #e5e7eb',
// //                 transition: 'border-color 0.2s ease',
// //               }}
// //               onFocus={(e) => (e.target.style.borderColor = '#2dd4bf')}
// //               onBlur={(e) => (e.target.style.borderColor = '#e5e7eb')}
// //             />
// //           </div>

// //           {/* Confirm Password Field */}
// //           <div className="mb-3">
// //             <label htmlFor="confirmPassword" className="form-label text-gray-600 fw-medium">
// //               Confirm Password
// //             </label>
// //             <input
// //               type="password"
// //               id="confirmPassword"
// //               value={confirmPassword}
// //               onChange={(e) => setConfirmPassword(e.target.value)}
// //               required
// //               autoComplete="new-password"
// //               className="form-control rounded"
// //               style={{
// //                 background: '#f9fafb',
// //                 borderRadius: '10px',
// //                 border: '1px solid #e5e7eb',
// //                 transition: 'border-color 0.2s ease',
// //               }}
// //               onFocus={(e) => (e.target.style.borderColor = '#2dd4bf')}
// //               onBlur={(e) => (e.target.style.borderColor = '#e5e7eb')}
// //             />
// //           </div>

// //           {/* Register Button */}
// //           <button
// //             type="submit"
// //             className="btn w-100 text-white fw-semibold"
// //             style={{
// //               background: '#92400e',
// //               border: 'none',
// //               borderRadius: '12px',
// //               padding: '0.75rem',
// //               transition: 'background 0.2s ease',
// //             }}
// //             onMouseOver={(e) => (e.target.style.background = '#7c2d12')}
// //             onMouseOut={(e) => (e.target.style.background = '#92400e')}
// //           >
// //             Register
// //           </button>
// //         </form>

// //         <p className="mt-3 text-center text-sm text-gray-600">
// //           Already have an account?{' '}
// //           <Link
// //             to="/login"
// //             className="text-decoration-none fw-semibold"
// //             style={{ color: '#2dd4bf' }}
// //             onMouseOver={(e) => (e.target.style.textDecoration = 'underline')}
// //             onMouseOut={(e) => (e.target.style.textDecoration = 'none')}
// //           >
// //             Login here
// //           </Link>
// //         </p>
// //       </div>

// //       {/* CSS for Bubble Animation */}
// //       <style>
// //         {`
// //           @keyframes float {
// //             0% { transform: translateY(0px); }
// //             50% { transform: translateY(40px); }
// //             100% { transform: translateY(0px); }
           
// //           }
// //         `}
// //       </style>
// //     </div>
// //   );
// // };

// // export default RegisterPage;







// import { useState } from 'react';
// import axios from 'axios';
// import { useNavigate, Link } from 'react-router-dom';
// import { toast } from 'react-toastify';
// import { motion } from 'framer-motion';
// import avatar from '../assets/avatar.jpg'; // Make sure the path is correct

// const RegisterPage = () => {
//   const [name, setName] = useState('');
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [confirmPassword, setConfirmPassword] = useState('');
//   const navigate = useNavigate();

//   const submitHandler = async (e) => {
//     e.preventDefault();

//     if (password !== confirmPassword) {
//       toast.error('Passwords do not match');
//       return;
//     }

//     try {
//       const config = {
//         headers: { 'Content-Type': 'application/json' },
//       };

//       await axios.post(
//         'http://localhost:5000/api/auth/register',
//         { name, email, password },
//         config
//       );

//       toast.success('Registration successful! Please login.');
//       navigate('/login');
//     } catch (error) {
//       if (error.response) {
//         toast.error(error.response.data.message || 'Registration failed');
//       } else if (error.request) {
//         toast.error('Could not connect to the server.');
//       } else {
//         toast.error('An unexpected error occurred.');
//       }
//     }
//   };

//   return (
//     <motion.div
//       className="min-vh-100 d-flex align-items-center justify-content-end"
//       style={{
//         background: 'linear-gradient(to bottom right, #1e3a8a, #2dd4bf)',
//         position: 'relative',
//         overflow: 'hidden',
//         paddingRight: '5rem',
//       }}
//       initial={{ x: '100vw', opacity: 0 }}
//       animate={{ x: 0, opacity: 1 }}
//       transition={{ type: 'spring', stiffness: 60, damping: 15 }}
//     >
//       {/* Decorative Bubbles (Left & Right) */}
//       <div style={{
//         position: 'absolute', width: '150px', height: '150px', background: 'rgba(255, 182, 193, 0.3)', borderRadius: '50%',
//         top: '10%', left: '50px', animation: 'float 6s ease-in-out infinite', filter: 'blur(2px)',
//       }} />
//       <div style={{
//         position: 'absolute', width: '80px', height: '80px', background: 'rgba(173, 216, 230, 0.3)', borderRadius: '50%',
//         top: '50%', left: '40px', animation: 'float 5s ease-in-out infinite', filter: 'blur(2px)',
//       }} />
//       <div style={{
//         position: 'absolute', width: '60px', height: '60px', background: 'rgba(144, 238, 144, 0.3)', borderRadius: '50%',
//         top: '70%', left: '30px', animation: 'float 4s ease-in-out infinite', filter: 'blur(2px)',
//       }} />
//       <div style={{
//         position: 'absolute', width: '120px', height: '120px', background: 'rgba(221, 160, 221, 0.3)', borderRadius: '50%',
//         top: '10%', right: '600px', animation: 'float 7s ease-in-out infinite', filter: 'blur(2px)',
//       }} />
//       <div style={{
//         position: 'absolute', width: '100px', height: '100px', background: 'rgba(255, 245, 157, 0.3)', borderRadius: '50%',
//         top: '50%', right: '700px', animation: 'float 6s ease-in-out infinite', filter: 'blur(2px)',
//       }} />
//       <div style={{
//         position: 'absolute', width: '70px', height: '70px', background: 'rgba(255, 218, 185, 0.3)', borderRadius: '50%',
//         top: '70%', right: '800px', animation: 'float 5s ease-in-out infinite', filter: 'blur(2px)',
//       }} />

//       {/* Registration Form Container */}
//       <div className="bg-white rounded-lg shadow-lg p-3 p-md-4 w-100"
//         style={{
//           maxWidth: '400px',
//           position: 'relative',
//           zIndex: 10,
//           borderRadius: '20px',
//           background: 'linear-gradient(145deg, #ffffff, #f1f5f9)',
//           boxShadow: '0 8px 16px rgba(0, 0, 0, 0.15)',
//           backdropFilter: 'blur(30px)',
//           WebkitBackdropFilter: 'blur(30px)',
//           backgroundColor: 'rgba(255, 255, 255, 0.9)',
//         }}
//       >
//         <div className="d-flex justify-content-center">
//           <img
//             src={avatar}
//             alt="Avatar"
//             className="rounded-circle border border-4 border-white shadow"
//             style={{ width: '80px', height: '80px' }}
//           />
//         </div>

//         <h2 className="text-center h5 fw-semibold text-gray-700 mt-3 mb-3">
//           User Registration Form
//         </h2>

//         <form onSubmit={submitHandler}>
//           <div className="mb-2">
//             <label htmlFor="name" className="form-label text-gray-600 fw-medium">Name</label>
//             <input
//               type="text"
//               id="name"
//               value={name}
//               onChange={(e) => setName(e.target.value)}
//               required
//               className="form-control rounded"
//               style={{
//                 background: '#f9fafb', borderRadius: '10px',
//                 border: '1px solid #e5e7eb',
//                 transition: 'border-color 0.2s ease',
//               }}
//               onFocus={(e) => (e.target.style.borderColor = '#2dd4bf')}
//               onBlur={(e) => (e.target.style.borderColor = '#e5e7eb')}
//             />
//           </div>

//           <div className="mb-2">
//             <label htmlFor="email" className="form-label text-gray-600 fw-medium">Email</label>
//             <input
//               type="email"
//               id="email"
//               value={email}
//               onChange={(e) => setEmail(e.target.value)}
//               required
//               autoComplete="email"
//               className="form-control rounded"
//               style={{
//                 background: '#f9fafb', borderRadius: '10px',
//                 border: '1px solid #e5e7eb',
//                 transition: 'border-color 0.2s ease',
//               }}
//               onFocus={(e) => (e.target.style.borderColor = '#2dd4bf')}
//               onBlur={(e) => (e.target.style.borderColor = '#e5e7eb')}
//             />
//           </div>

//           <div className="mb-2">
//             <label htmlFor="password" className="form-label text-gray-600 fw-medium">Password</label>
//             <input
//               type="password"
//               id="password"
//               value={password}
//               onChange={(e) => setPassword(e.target.value)}
//               required
//               autoComplete="new-password"
//               className="form-control rounded"
//               style={{
//                 background: '#f9fafb', borderRadius: '10px',
//                 border: '1px solid #e5e7eb',
//                 transition: 'border-color 0.2s ease',
//               }}
//               onFocus={(e) => (e.target.style.borderColor = '#2dd4bf')}
//               onBlur={(e) => (e.target.style.borderColor = '#e5e7eb')}
//             />
//           </div>

//           <div className="mb-3">
//             <label htmlFor="confirmPassword" className="form-label text-gray-600 fw-medium">Confirm Password</label>
//             <input
//               type="password"
//               id="confirmPassword"
//               value={confirmPassword}
//               onChange={(e) => setConfirmPassword(e.target.value)}
//               required
//               autoComplete="new-password"
//               className="form-control rounded"
//               style={{
//                 background: '#f9fafb', borderRadius: '10px',
//                 border: '1px solid #e5e7eb',
//                 transition: 'border-color 0.2s ease',
//               }}
//               onFocus={(e) => (e.target.style.borderColor = '#2dd4bf')}
//               onBlur={(e) => (e.target.style.borderColor = '#e5e7eb')}
//             />
//           </div>

//           <button
//             type="submit"
//             className="btn w-100 text-white fw-semibold"
//             style={{
//               background: '#92400e',
//               border: 'none',
//               borderRadius: '12px',
//               padding: '0.75rem',
//               transition: 'background 0.2s ease',
//             }}
//             onMouseOver={(e) => (e.target.style.background = '#7c2d12')}
//             onMouseOut={(e) => (e.target.style.background = '#92400e')}
//           >
//             Register
//           </button>
//         </form>

//         <p className="mt-3 text-center text-sm text-gray-600">
//           Already have an account?{' '}
//           <Link
//             to="/login"
//             className="text-decoration-none fw-semibold"
//             style={{ color: '#2dd4bf' }}
//             onMouseOver={(e) => (e.target.style.textDecoration = 'underline')}
//             onMouseOut={(e) => (e.target.style.textDecoration = 'none')}
//           >
//             Login here
//           </Link>
//         </p>
//       </div>

//       <style>
//         {`
//           @keyframes float {
//             0% { transform: translateY(0px); }
//             50% { transform: translateY(40px); }
//             100% { transform: translateY(0px); }
//           }
//         `}
//       </style>
//     </motion.div>
//   );
// };

// export default RegisterPage;



import { useState } from 'react';
import axios from 'axios';
import { useNavigate, Link } from 'react-router-dom';
import { toast } from 'react-toastify';
import { motion } from 'framer-motion';
import avatar from '../assets/avatar.jpg'; // Make sure the path is correct

const RegisterPage = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const navigate = useNavigate();

  const submitHandler = async (e) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      toast.error('Passwords do not match');
      return;
    }

    try {
      const config = {
        headers: { 'Content-Type': 'application/json' },
      };

      await axios.post(
        'http://localhost:5000/api/auth/register',
        { name, email, password },
        config
      );

      toast.success('Registration successful! Please login.');
      navigate('/login');
    } catch (error) {
      if (error.response) {
        toast.error(error.response.data.message || 'Registration failed');
      } else if (error.request) {
        toast.error('Could not connect to the server.');
      } else {
        toast.error('An unexpected error occurred.');
      }
    }
  };

  // --- Framer Motion Variants for Staggered Animations ---
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3, // Delay before children animations start
        staggerChildren: 0.1, // Stagger effect for direct children
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

  // Define an array of bubble properties for easier mapping
  const bubbles = [
    { size: '150px', bg: 'rgba(255, 182, 193, 0.3)', top: '10%', left: '50px', duration: '6s' },
    { size: '80px', bg: 'rgba(173, 216, 230, 0.3)', top: '50%', left: '40px', duration: '5s' },
    { size: '60px', bg: 'rgba(144, 238, 144, 0.3)', top: '70%', left: '30px', duration: '4s' },
    { size: '120px', bg: 'rgba(221, 160, 221, 0.3)', top: '10%', right: '600px', duration: '7s' },
    { size: '100px', bg: 'rgba(255, 245, 157, 0.3)', top: '50%', right: '700px', duration: '6s' },
    { size: '70px', bg: 'rgba(255, 218, 185, 0.3)', top: '70%', right: '800px', duration: '5s' },
  ];

  return (
    <motion.div
      className="min-vh-100 d-flex align-items-center justify-content-end"
      style={{
        background: 'linear-gradient(to bottom right, #1e3a8a, #2dd4bf)',
        position: 'relative',
        overflow: 'hidden',
        paddingRight: '5rem',
      }}
      initial={{ x: '100vw', opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ type: 'spring', stiffness: 60, damping: 15 }}
    >
      {/* Decorative Bubbles (Left & Right) with Framer Motion and dynamic animations */}
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
            filter: 'blur(2px)',
            zIndex: 1, // Ensure bubbles are behind the form
          }}
          animate={{
            y: ['0%', '40%', '0%'], // Vertical float
            x: ['0%', `${(index % 2 === 0 ? 1 : -1) * 10}%`, '0%'], // Slight horizontal drift
            rotate: [0, 360], // Gentle rotation
          }}
          transition={{
            duration: parseFloat(bubble.duration), // Use the duration from bubble properties
            ease: 'easeInOut',
            repeat: Infinity,
            delay: index * 0.2, // Stagger the start of each bubble's animation
          }}
        />
      ))}

      {/* Registration Form Container */}
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
        variants={containerVariants} // Apply container variants
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
          User Registration Form
        </motion.h2>

        <form onSubmit={submitHandler}>
          <motion.div variants={itemVariants} className="mb-2">
            <label htmlFor="name" className="form-label text-gray-600 fw-medium">Name</label>
            <input
              type="text"
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
              className="form-control rounded"
              style={{
                background: '#f9fafb', borderRadius: '10px',
                border: '1px solid #e5e7eb',
                transition: 'border-color 0.2s ease',
              }}
              onFocus={(e) => (e.target.style.borderColor = '#2dd4bf')}
              onBlur={(e) => (e.target.style.borderColor = '#e5e7eb')}
            />
          </motion.div>

          <motion.div variants={itemVariants} className="mb-2">
            <label htmlFor="email" className="form-label text-gray-600 fw-medium">Email</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              autoComplete="email"
              className="form-control rounded"
              style={{
                background: '#f9fafb', borderRadius: '10px',
                border: '1px solid #e5e7eb',
                transition: 'border-color 0.2s ease',
              }}
              onFocus={(e) => (e.target.style.borderColor = '#2dd4bf')}
              onBlur={(e) => (e.target.style.borderColor = '#e5e7eb')}
            />
          </motion.div>

          <motion.div variants={itemVariants} className="mb-2">
            <label htmlFor="password" className="form-label text-gray-600 fw-medium">Password</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              autoComplete="new-password"
              className="form-control rounded"
              style={{
                background: '#f9fafb', borderRadius: '10px',
                border: '1px solid #e5e7eb',
                transition: 'border-color 0.2s ease',
              }}
              onFocus={(e) => (e.target.style.borderColor = '#2dd4bf')}
              onBlur={(e) => (e.target.style.borderColor = '#e5e7eb')}
            />
          </motion.div>

          <motion.div variants={itemVariants} className="mb-3">
            <label htmlFor="confirmPassword" className="form-label text-gray-600 fw-medium">Confirm Password</label>
            <input
              type="password"
              id="confirmPassword"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              required
              autoComplete="new-password"
              className="form-control rounded"
              style={{
                background: '#f9fafb', borderRadius: '10px',
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
            Register
          </motion.button>
        </form>

        <motion.p variants={itemVariants} className="mt-3 text-center text-sm text-gray-600">
          Already have an account?{' '}
          <Link
            to="/login"
            className="text-decoration-none fw-semibold"
            style={{ color: '#2dd4bf' }}
            onMouseOver={(e) => (e.target.style.textDecoration = 'underline')}
            onMouseOut={(e) => (e.target.style.textDecoration = 'none')}
          >
            Login here
          </Link>
        </motion.p>
      </motion.div>
    </motion.div>
  );
};

export default RegisterPage;
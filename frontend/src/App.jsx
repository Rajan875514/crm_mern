


// // App.js (Example)
// import React, { useState, useEffect } from 'react';
// import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
// import { toast, ToastContainer } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';

// import LoginPage from './pages/LoginPage'; // Assuming your LoginPage component
// import RegisterPage from './pages/RegisterPage'; // Assuming your RegisterPage component
// import HomePage from './pages/HomePage'; // A placeholder for your main app content

// function App() {
//   const [isLoggedIn, setIsLoggedIn] = useState(false);

//   // Check login status on app load
//   useEffect(() => {
//     const userInfo = localStorage.getItem('userInfo');
//     if (userInfo) {
//       setIsLoggedIn(true);
//     } else {
//       setIsLoggedIn(false);
//     }
//   }, []);

//   const handleLogout = () => {
//     localStorage.removeItem('userInfo'); // Clear user data
//     setIsLoggedIn(false); // Update state
//     toast.info('Logged out successfully!'); // Show success message
//     // You might want to redirect to login page after logout
//     // navigate('/login'); // If you had access to navigate here
//   };

//   return (
//     <Router>
//       <header style={{ padding: '1rem', background: '#333', color: 'white', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
//         <Link to="/" style={{ color: 'white', textDecoration: 'none', fontSize: '1.5rem', fontWeight: 'bold' }}>My App</Link>
//         <nav>
//           {isLoggedIn ? (
//             <button
//               onClick={handleLogout}
//               style={{
//                 background: '#dc3545', // Red for logout
//                 color: 'white',
//                 border: 'none',
//                 padding: '0.75rem 1.5rem',
//                 borderRadius: '8px',
//                 cursor: 'pointer',
//                 fontSize: '1rem',
//                 fontWeight: 'bold',
//                 transition: 'background 0.2s ease',
//               }}
//               onMouseOver={(e) => (e.target.style.background = '#c82333')}
//               onMouseOut={(e) => (e.target.style.background = '#dc3545')}
//             >
//               Logout
//             </button>
//           ) : (
//             <>
//               <Link to="/login" style={{ color: 'white', textDecoration: 'none', marginRight: '1rem' }}>Login</Link>
//               <Link to="/register" style={{ color: 'white', textDecoration: 'none' }}>Register</Link>
//             </>
//           )}
//         </nav>
//       </header>

//       <Routes>
//         <Route path="/login" element={<LoginPage setIsLoggedIn={setIsLoggedIn} />} />
//         <Route path="/register" element={<RegisterPage />} />
//         <Route path="/" element={<HomePage />} /> {/* Your home page */}
//       </Routes>
//       <ToastContainer position="top-right" autoClose={3000} hideProgressBar={false} newestOnTop={false} closeOnClick rtl={false} pauseOnFocusLoss draggable pauseOnHover />
//     </Router>
//   );
// }

// export default App;


// // App


// // frontend/src/App.js
// import React, { useState, useEffect } from 'react';
// // import { BrowserRouter as Router, Routes, Route, useNavigate } from 'react-router-dom'; // <-- Remove BrowserRouter as Router
// import { Routes, Route, useNavigate } from 'react-router-dom'; // <-- Remove BrowserRouter as Router and only import what's needed
// import { toast, ToastContainer } from 'react-toastify';
// // import 'react-toastify/dist/ReactToastify.css'; // This can stay in index.js for global effect

// // Your page components
// import LoginPage from './pages/LoginPage';
// import RegisterPage from './pages/RegisterPage';
// import HomePage from './pages/HomePage';

// // The Navbar component we updated
// import Navbar from './components/Navbar';

// // PrivateRoute and other protected components
// // import CustomerListPage from './pages/CustomerListPage';
// // import AddEditCustomerPage from './pages/AddEditCustomerPage';
// // import PrivateRoute from './components/PrivateRoute';

// function App() {
//   const [isLoggedIn, setIsLoggedIn] = useState(false);
//   const navigate = useNavigate(); // <-- This line is now correctly placed within a component that is a child of Router

//   // Check login status on app load
//   useEffect(() => {
//     const userInfo = localStorage.getItem('userInfo');
//     const token = localStorage.getItem('token'); // 'token' को भी जांचें
//     if (userInfo && token) { // दोनों की जांच करें
//       setIsLoggedIn(true);
//     } else {
//       setIsLoggedIn(false);
//     }
//   }, []);

//   const handleLogout = () => {
//     localStorage.removeItem('userInfo'); // Clear user data
//     localStorage.removeItem('token'); // Clear token
//     setIsLoggedIn(false); // Update state
//     navigate('/login'); // Redirect to login page after logout
//   };

//   return (
//     <> {/* Use a fragment or a div, since Router is now in index.js */}
//       {/* Render the single Navbar component */}
//       <Navbar isLoggedIn={isLoggedIn} handleLogout={handleLogout} />

//       <Routes>
//         <Route path="/login" element={<LoginPage setIsLoggedIn={setIsLoggedIn} />} />
//         <Route path="/register" element={<RegisterPage />} />
//         <Route path="/" element={<HomePage />} />

//         {/* Add protected routes here, if any */}
//         {/*
//         <Route element={<PrivateRoute />}>
//           <Route path="/customers" element={<CustomerListPage />} />
//           <Route path="/customers/add" element={<AddEditCustomerPage />} />
//           <Route path="/customers/edit/:id" element={<AddEditCustomerPage />} />
//         </Route>
//         */}
//       </Routes>
//       <ToastContainer position="top-right" autoClose={3000} hideProgressBar={false} newestOnTop={false} closeOnClick rtl={false} pauseOnFocusLoss draggable pauseOnHover />
//     </>
//   );
// }

// export default App;












// // frontend/src/App.js
// import React, { useState, useEffect } from 'react';
// import { Routes, Route, useNavigate } from 'react-router-dom';
// import { toast, ToastContainer } from 'react-toastify';

// import LoginPage from './pages/LoginPage';
// import RegisterPage from './pages/RegisterPage';
// import HomePage from './pages/HomePage';
// import Navbar from './components/Navbar';

// function App() {
//   const [isLoggedIn, setIsLoggedIn] = useState(false);
//   const navigate = useNavigate();

//   useEffect(() => {
//     const userInfo = localStorage.getItem('userInfo');
//     const token = localStorage.getItem('token');
//     if (userInfo && token) {
//       setIsLoggedIn(true);
//     } else {
//       setIsLoggedIn(false);
//     }
//   }, []);

//   const handleLogout = () => {
//     localStorage.removeItem('userInfo');
//     localStorage.removeItem('token');
//     setIsLoggedIn(false);
//     navigate('/login');
//   };

//   return (
//     <>
//       <Navbar isLoggedIn={isLoggedIn} handleLogout={handleLogout} />

//       <Routes>
//         <Route path="/login" element={<LoginPage setIsLoggedIn={setIsLoggedIn} />} />
//         <Route path="/register" element={<RegisterPage />} />
//         <Route path="/" element={<HomePage />} />
//       </Routes>
//       <ToastContainer position="top-right" autoClose={3000} hideProgressBar={false} newestOnTop={false} closeOnClick rtl={false} pauseOnFocusLoss draggable pauseOnHover />
//     </>
//   );
// }

// export default App;
















// frontend/src/App.js
import React, { useState, useEffect } from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';

import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import HomePage from './pages/HomePage';
import Navbar from './components/Navbar';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false); // Hardcode to false for now
  const navigate = useNavigate();

  // Comment out the useEffect for now to ensure isLoggedIn remains false
  /*
  useEffect(() => {
    const userInfo = localStorage.getItem('userInfo');
    const token = localStorage.getItem('token');
    if (userInfo && token) {
      setIsLoggedIn(true);
    } else {
      setIsLoggedIn(false);
    }
  }, []);
  */

  const handleLogout = () => {
    localStorage.removeItem('userInfo');
    localStorage.removeItem('token');
    setIsLoggedIn(false);
    navigate('/login');
  };

  return (
    <>
      <Navbar isLoggedIn={isLoggedIn} handleLogout={handleLogout} />

      <Routes>
        <Route path="/login" element={<LoginPage setIsLoggedIn={setIsLoggedIn} />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/" element={<HomePage />} />
      </Routes>
      <ToastContainer position="top-right" autoClose={3000} hideProgressBar={false} newestOnTop={false} closeOnClick rtl={false} pauseOnFocusLoss draggable pauseOnHover />
    </>
  );
}

export default App;
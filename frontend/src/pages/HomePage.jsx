





// // // // frontend/src/pages/HomePage.jsx
// // // import React from 'react';
// // // import { useNavigate } from 'react-router-dom';
// // // import { toast } from 'react-toastify';
// // // import { motion } from 'framer-motion';
// // // // import Navbar from '../components/Navbar'; // <-- इस लाइन को हटा दें

// // // const HomePage = () => {
// // //     const navigate = useNavigate();

// // //     const containerVariants = { /* ... */ };
// // //     const itemVariants = { /* ... */ };
// // //     const buttonVariants = { /* ... */ };

// // //     return (
// // //         <div
// // //             className="min-vh-100 d-flex flex-column "
// // //             style={{
// // //                 background: 'linear-gradient(to bottom right, #4a00e0, #8e2de2)',
// // //                 overflow: 'hidden',
// // //                 color: '#fff',
// // //             }}
// // //         >
// // //             {/* <Navbar /> // <-- इस लाइन को हटा दें */}

// // //             <motion.div
// // //                 className="container flex-grow-1 d-flex flex-column justify-content-center p-3 text-center text-md-start"
// // //                 variants={containerVariants}
// // //                 initial="hidden"
// // //                 animate="visible"
// // //             >
// // //                 <div className="row justify-content-center align-items-center flex-grow-1">
// // //                     <div className="col-12 col-lg-7 d-flex flex-column justify-content-center">
// // //                         <motion.h1
// // //                             className="display-4 fw-bold mb-4"
// // //                             style={{ fontSize: '3.8rem', lineHeight: '1.2', color: '#fff' }}
// // //                             variants={itemVariants}
// // //                         >
// // //                             Don't just share a link <br />start a relationship
// // //                         </motion.h1>
// // //                         <motion.p
// // //                             className="lead mb-5 text-white-75"
// // //                             style={{ maxWidth: '600px', margin: '0 auto 3rem auto' }}
// // //                             variants={itemVariants}
// // //                         >
// // //                             Leadrr lets you turn social media traffic into high-quality leads — with built-in forms, analytics, and CRM relationship.
// // //                         </motion.p>

// // //                         <motion.div
// // //                             className="d-flex flex-column flex-md-row justify-content-center justify-content-md-start gap-3 mb-5"
// // //                             variants={itemVariants}
// // //                         >
// // //                             <motion.div
// // //                                 className="input-group mb-3 mb-md-0"
// // //                                 style={{ maxWidth: '350px' }}
// // //                                 variants={itemVariants}
// // //                             >
// // //                                 <span className="input-group-text rounded-start" style={{ background: '#3A008A', border: 'none', color: '#B0A2DA' }}>lea.link/</span>
// // //                                 <input
// // //                                     type="text"
// // //                                     className="form-control rounded-end"
// // //                                     placeholder="yourname"
// // //                                     aria-label="Your Link Name"
// // //                                     style={{ background: '#5E00B3', border: 'none', color: '#fff' }}
// // //                                 />
// // //                             </motion.div>
// // //                             <motion.button
// // //                                 className="btn text-white fw-semibold"
// // //                                 style={{
// // //                                     background: 'linear-gradient(to right, #00c6ff, #0072ff)',
// // //                                     borderColor: 'transparent',
// // //                                     padding: '0.75rem 1.5rem',
// // //                                     borderRadius: '8px',
// // //                                     minWidth: '150px'
// // //                                 }}
// // //                                 variants={buttonVariants}
// // //                                 whileHover="hover"
// // //                                 whileTap="tap"
// // //                                 onClick={() => toast.info("Create Link functionality coming soon!")}
// // //                             >
// // //                                 Create Link
// // //                             </motion.button>
// // //                         </motion.div>
// // //                     </div>

// // //                     <div className="col-12 col-lg-5 d-none d-lg-flex justify-content-center align-items-center">
// // //                         <motion.img
// // //                             src="https://via.placeholder.com/600x700/8e2de2/FFFFFF?text=Awesome+Leadrr+Mockup"
// // //                             alt="Leadrr App Mockup"
// // //                             className="img-fluid rounded-lg shadow-lg"
// // //                             variants={itemVariants}
// // //                             initial={{ scale: 0.8, opacity: 0 }}
// // //                             animate={{ scale: 1, opacity: 1 }}
// // //                             transition={{ delay: 1.5, type: 'spring', stiffness: 80, damping: 15 }}
// // //                             style={{ maxHeight: '700px', width: 'auto' }}
// // //                         />
// // //                     </div>
// // //                 </div>
// // //             </motion.div>
// // //         </div>
// // //     );
// // // };

// // // export default HomePage;


















// // // frontend/src/pages/HomePage.jsx
// // import React from 'react';
// // import { useNavigate } from 'react-router-dom';
// // import { toast } from 'react-toastify';
// // import { motion } from 'framer-motion';

// // const HomePage = () => {
// //     const navigate = useNavigate();

// //     const containerVariants = { /* ... */ };
// //     const itemVariants = { /* ... */ };
// //     const buttonVariants = { /* ... */ };

// //     return (
// //         <div
// //             className="min-vh-100 d-flex flex-column"
// //             style={{
// //                 background: 'linear-gradient(to bottom right, #4a00e0, #8e2de2)',
// //                 overflow: 'hidden',
// //                 color: '#fff',
// //             }}
// //         >
// //             {/* Removed <Navbar /> from here since it's already in App.jsx */}

// //             <motion.div
// //                 className="container flex-grow-1 d-flex flex-column justify-content-center p-3 text-center text-md-start"
// //                 variants={containerVariants}
// //                 initial="hidden"
// //                 animate="visible"
// //             >
// //                 <div className="row justify-content-center align-items-center flex-grow-1">
// //                     <div className="col-12 col-lg-7 d-flex flex-column justify-content-center">
// //                         <motion.h1
// //                             className="display-4 fw-bold mb-4"
// //                             style={{ fontSize: '3.8rem', lineHeight: '1.2', color: '#fff' }}
// //                             variants={itemVariants}
// //                         >
// //                             Don't just share a link <br />start a relationship
// //                         </motion.h1>
// //                         <motion.p
// //                             className="lead mb-5 text-white-75"
// //                             style={{ maxWidth: '600px', margin: '0 auto 3rem auto' }}
// //                             variants={itemVariants}
// //                         >
// //                             Leadrr lets you turn social media traffic into high-quality leads — with built-in forms, analytics, and CRM relationship.
// //                         </motion.p>

// //                         <motion.div
// //                             className="d-flex flex-column flex-md-row justify-content-center justify-content-md-start gap-3 mb-5"
// //                             variants={itemVariants}
// //                         >
// //                             <motion.div
// //                                 className="input-group mb-3 mb-md-0"
// //                                 style={{ maxWidth: '350px' }}
// //                                 variants={itemVariants}
// //                             >
// //                                 <span className="input-group-text rounded-start" style={{ background: '#3A008A', border: 'none', color: '#B0A2DA' }}>lea.link/</span>
// //                                 <input
// //                                     type="text"
// //                                     className="form-control rounded-end"
// //                                     placeholder="yourname"
// //                                     aria-label="Your Link Name"
// //                                     style={{ background: '#5E00B3', border: 'none', color: '#fff' }}
// //                                 />
// //                             </motion.div>
// //                             <motion.button
// //                                 className="btn text-white fw-semibold"
// //                                 style={{
// //                                     background: 'linear-gradient(to right, #00c6ff, #0072ff)',
// //                                     borderColor: 'transparent',
// //                                     padding: '0.75rem 1.5rem',
// //                                     borderRadius: '8px',
// //                                     minWidth: '150px'
// //                                 }}
// //                                 variants={buttonVariants}
// //                                 whileHover="hover"
// //                                 whileTap="tap"
// //                                 onClick={() => toast.info("Create Link functionality coming soon!")}
// //                             >
// //                                 Create Link
// //                             </motion.button>
// //                         </motion.div>
// //                     </div>

// //                     <div className="col-12 col-lg-5 d-none d-lg-flex justify-content-center align-items-center">
// //                         <motion.img
// //                             src="https://via.placeholder.com/600x700/8e2de2/FFFFFF?text=Awesome+Leadrr+Mockup"
// //                             alt="Leadrr App Mockup"
// //                             className="img-fluid rounded-lg shadow-lg"
// //                             variants={itemVariants}
// //                             initial={{ scale: 0.8, opacity: 0 }}
// //                             animate={{ scale: 1, opacity: 1 }}
// //                             transition={{ delay: 1.5, type: 'spring', stiffness: 80, damping: 15 }}
// //                             style={{ maxHeight: '700px', width: 'auto' }}
// //                         />
// //                     </div>
// //                 </div>
// //             </motion.div>
// //         </div>
// //     );
// // };

// // export default HomePage;

















// frontend/src/pages/HomePage.jsx
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { motion } from 'framer-motion';

const HomePage = () => {
    const navigate = useNavigate();

    const containerVariants = { /* ... */ };
    const itemVariants = { /* ... */ };
    const buttonVariants = { /* ... */ };

    return (
        <div
            className="min-vh-100 d-flex flex-column"
            style={{
                background: 'linear-gradient(to bottom right, #4a00e0, #8e2de2)',
                overflow: 'hidden',
                color: '#fff',
            }}
        >
            <motion.div
                className="container flex-grow-1 d-flex flex-column justify-content-center p-3 text-center text-md-start"
                variants={containerVariants}
                initial="hidden"
                animate="visible"
            >
                <div className="row justify-content-center align-items-center flex-grow-1">
                    <div className="col-12 col-lg-7 d-flex flex-column justify-content-center">
                        <motion.h1
                            className="display-4 fw-bold mb-4"
                            style={{ fontSize: '3.8rem', lineHeight: '1.2', color: '#fff' }}
                            variants={itemVariants}
                        >
                            Don't just share a link <br />start a relationship
                        </motion.h1>
                        <motion.p
                            className="lead mb-5 text-white-75"
                            style={{ maxWidth: '600px', margin: '0 auto 3rem auto' }}
                            variants={itemVariants}
                        >
                            Leadrr lets you turn social media traffic into high-quality leads — with built-in forms, analytics, and CRM relationship.
                        </motion.p>

                        <motion.div
                            className="d-flex flex-column flex-md-row justify-content-center justify-content-md-start gap-3 mb-5"
                            variants={itemVariants}
                        >
                            <motion.div
                                className="input-group mb-3 mb-md-0"
                                style={{ maxWidth: '350px' }}
                                variants={itemVariants}
                            >
                                <span className="input-group-text rounded-start" style={{ background: '#3A008A', border: 'none', color: '#B0A2DA' }}>lea.link/</span>
                                <input
                                    type="text"
                                    className="form-control rounded-end"
                                    placeholder="yourname"
                                    aria-label="Your Link Name"
                                    style={{ background: '#5E00B3', border: 'none', color: '#fff' }}
                                />
                            </motion.div>
                            <motion.button
                                className="btn text-white fw-semibold"
                                style={{
                                    background: 'linear-gradient(to right, #00c6ff, #0072ff)',
                                    borderColor: 'transparent',
                                    padding: '0.75rem 1.5rem',
                                    borderRadius: '8px',
                                    minWidth: '150px'
                                }}
                                variants={buttonVariants}
                                whileHover="hover"
                                whileTap="tap"
                                onClick={() => toast.info("Create Link functionality coming soon!")}
                            >
                                Create Link
                            </motion.button>
                        </motion.div>
                    </div>

                    <div className="col-12 col-lg-5 d-none d-lg-flex justify-content-center align-items-center">
                        <motion.img
                            src="https://via.placeholder.com/600x700/8e2de2/FFFFFF?text=Awesome+Leadrr+Mockup"
                            alt="Leadrr App Mockup"
                            className="img-fluid rounded-lg shadow-lg"
                            variants={itemVariants}
                            initial={{ scale: 0.8, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            transition={{ delay: 1.5, type: 'spring', stiffness: 80, damping: 15 }}
                            style={{ maxHeight: '700px', width: 'auto' }}
                        />
                    </div>
                </div>
            </motion.div>
        </div>
    );
};

export default HomePage;

















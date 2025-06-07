



// frontend/src/pages/AddEditCustomerPage.jsx
import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { motion } from 'framer-motion';
import { toast } from 'react-toastify';
// IMPORTANT: Ensure this import path uses 'componets' (your folder's spelling)
import NavbarLoggedIn from '../components/NavbarLoggedIn';

const AddEditCustomerPage = () => {
    const { id } = useParams(); // Get ID from URL for editing (e.g., /customers/edit/:id)
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        company: ''
    });
    const [loading, setLoading] = useState(false);
    const [isEditing, setIsEditing] = useState(false);

    useEffect(() => {
        if (id) {
            setIsEditing(true);
            // In a real application, you'd fetch customer data by ID from your backend here
            // setLoading(true);
            // const token = localStorage.getItem('token'); // Get token for authentication
            // fetch(`/api/customers/${id}`, { headers: { 'Authorization': `Bearer ${token}` } })
            //     .then(res => res.json())
            //     .then(data => {
            //         setFormData(data);
            //         setLoading(false);
            //     })
            //     .catch(err => {
            //         toast.error('Failed to load customer data.');
            //         console.error(err);
            //         setLoading(false);
            //     });

            // --- Placeholder data for editing (REMOVE IN PRODUCTION) ---
            // This dummy data should match the data you're using in CustomerListPage for testing
            const dummyCustomers = [
                { _id: '1', name: 'Alice Smith', email: 'alice@example.com', phone: '111-222-3333', company: 'ABC Corp' },
                { _id: '2', name: 'Bob Johnson', email: 'bob@example.com', phone: '444-555-6666', company: 'XYZ Ltd' },
                { _id: '3', name: 'Charlie Brown', email: 'charlie@example.com', phone: '777-888-9999', company: 'Peanuts Inc' },
            ];
            const customerToEdit = dummyCustomers.find(c => c._id === id);
            if (customerToEdit) {
                setFormData(customerToEdit);
            } else {
                toast.error('Customer not found!');
                navigate('/customers'); // Redirect if ID doesn't match dummy data
            }
            setLoading(false); // Set to false after dummy data is loaded
            // --- End Placeholder data ---

        }
    }, [id, navigate]); // Depend on 'id' and 'navigate' to re-run effect when id changes

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault(); // Prevent default form submission behavior
        setLoading(true);
        try {
            // In a real application, you'd send formData to your backend API
            // const method = isEditing ? 'PUT' : 'POST'; // Use PUT for update, POST for create
            // const url = isEditing ? `/api/customers/${id}` : '/api/customers';
            // const token = localStorage.getItem('token');
            // const response = await fetch(url, {
            //     method,
            //     headers: {
            //         'Content-Type': 'application/json',
            //         'Authorization': `Bearer ${token}`
            //     },
            //     body: JSON.stringify(formData)
            // });
            // if (!response.ok) {
            //     throw new Error(`HTTP error! status: ${response.status}`);
            // }

            toast.success(`Customer ${isEditing ? 'updated' : 'added'} successfully!`);
            navigate('/customers'); // Redirect to customer list after success
        } catch (error) {
            toast.error(`Failed to ${isEditing ? 'update' : 'add'} customer.`);
            console.error(error);
        } finally {
            setLoading(false); // Always stop loading, even on error
        }
    };

    // Framer Motion Variants for page and form elements
    const pageVariants = {
        initial: { opacity: 0, y: 20 },
        in: { opacity: 1, y: 0 },
        out: { opacity: 0, y: -20 }
    };

    const formItemVariants = {
        hidden: { opacity: 0, x: -20 },
        visible: { opacity: 1, x: 0, transition: { type: 'spring', stiffness: 100, damping: 10 } }
    };

    return (
        <div className="min-vh-100 d-flex flex-column" style={{ background: '#f8f9fa' }}> {/* Light background */}
            <NavbarLoggedIn /> {/* Render the logged-in Navbar */}

            <motion.div
                className="container my-5 flex-grow-1 d-flex justify-content-center align-items-center"
                initial="initial"
                animate="in"
                exit="out"
                variants={pageVariants}
                transition={{ duration: 0.5 }}
            >
                <motion.div
                    className="card p-4 shadow-sm w-100"
                    style={{ maxWidth: '600px', borderRadius: '15px' }}
                    initial={{ scale: 0.9, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ type: 'spring', stiffness: 50, damping: 10, delay: 0.2 }}
                >
                    <h2 className="card-title text-center mb-4 text-primary fw-bold">
                        {isEditing ? 'Edit Customer' : 'Add New Customer'}
                    </h2>
                    {loading ? (
                        <div className="text-center py-5">
                            <div className="spinner-border text-primary" role="status">
                                <span className="visually-hidden">Loading...</span>
                            </div>
                            <p className="text-muted mt-2">Loading data...</p>
                        </div>
                    ) : (
                        <form onSubmit={handleSubmit}>
                            <motion.div className="mb-3" variants={formItemVariants}>
                                <label htmlFor="name" className="form-label fw-semibold">Name</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="name"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    required // Make name required
                                />
                            </motion.div>
                            <motion.div className="mb-3" variants={formItemVariants} transition={{ delay: 0.1 }}>
                                <label htmlFor="email" className="form-label fw-semibold">Email</label>
                                <input
                                    type="email"
                                    className="form-control"
                                    id="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    required // Make email required
                                />
                            </motion.div>
                            <motion.div className="mb-3" variants={formItemVariants} transition={{ delay: 0.2 }}>
                                <label htmlFor="phone" className="form-label fw-semibold">Phone</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="phone"
                                    name="phone"
                                    value={formData.phone}
                                    onChange={handleChange}
                                />
                            </motion.div>
                            <motion.div className="mb-4" variants={formItemVariants} transition={{ delay: 0.3 }}>
                                <label htmlFor="company" className="form-label fw-semibold">Company</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="company"
                                    name="company"
                                    value={formData.company}
                                    onChange={handleChange}
                                />
                            </motion.div>
                            <motion.button
                                type="submit"
                                className="btn btn-primary w-100 fw-bold py-2"
                                disabled={loading}
                                whileHover={{ scale: 1.02 }}
                                whileTap={{ scale: 0.98 }}
                            >
                                {loading ? 'Saving...' : (isEditing ? 'Update Customer' : 'Add Customer')}
                            </motion.button>
                            <motion.button
                                type="button"
                                className="btn btn-outline-secondary w-100 mt-3 py-2"
                                onClick={() => navigate('/customers')} // Go back to customer list
                                whileHover={{ scale: 1.02 }}
                                whileTap={{ scale: 0.98 }}
                            >
                                Cancel
                            </motion.button>
                        </form>
                    )}
                </motion.div>
            </motion.div>
        </div>
    );
};

export default AddEditCustomerPage;

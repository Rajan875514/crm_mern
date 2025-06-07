// frontend/src/pages/CustomerListPage.jsx
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate, Link } from 'react-router-dom';
import { toast } from 'react-toastify';

const CustomerListPage = () => {
    const [customers, setCustomers] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const navigate = useNavigate();

    useEffect(() => {
        const fetchCustomers = async () => {
            try {
                setLoading(true);
                const token = localStorage.getItem('token'); // Get token from localStorage
                if (!token) {
                    toast.error('You are not authorized. Please log in.');
                    navigate('/login');
                    return;
                }

                const config = {
                    headers: {
                        Authorization: `Bearer ${token}`, // Send token in headers
                    },
                };
                const response = await axios.get('http://localhost:5000/api/customers', config);
                setCustomers(response.data);
                setLoading(false);
            } catch (err) {
                console.error('Error fetching customers:', err);
                setError(err);
                setLoading(false);
                if (err.response && err.response.status === 401) {
                    toast.error('Session expired or unauthorized. Please log in again.');
                    localStorage.removeItem('token'); // Clear invalid token
                    navigate('/login');
                } else {
                    toast.error(err.response?.data?.message || 'Failed to fetch customers.');
                }
            }
        };

        fetchCustomers();
    }, [navigate]);

    const handleDelete = async (id) => {
        if (window.confirm('Are you sure you want to delete this customer?')) {
            try {
                const token = localStorage.getItem('token');
                const config = {
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                };
                await axios.delete(`http://localhost:5000/api/customers/${id}`, config);
                toast.success('Customer deleted successfully!');
                // Remove the deleted customer from the state
                setCustomers(customers.filter((customer) => customer._id !== id));
            } catch (err) {
                console.error('Error deleting customer:', err);
                toast.error(err.response?.data?.message || 'Failed to delete customer.');
            }
        }
    };

    if (loading) {
        return (
            <div className="min-vh-100 d-flex justify-content-center align-items-center" style={{ background: 'linear-gradient(to bottom right, #fcd34d, #f59e0b)' }}>
                <div className="text-white h4">Loading Customers...</div>
            </div>
        );
    }

    if (error) {
        return (
            <div className="min-vh-100 d-flex justify-content-center align-items-center text-danger" style={{ background: 'linear-gradient(to bottom right, #fcd34d, #f59e0b)' }}>
                <div>Error: {error.message || 'Something went wrong!'}</div>
                <button className="btn btn-warning mt-3" onClick={() => navigate('/')}>Go to Home</button>
            </div>
        );
    }

    return (
        <div className="min-vh-100 d-flex flex-column align-items-center p-3" style={{ background: 'linear-gradient(to bottom right, #fcd34d, #f59e0b)' }}>
            <div className="bg-white rounded-lg shadow-lg p-4 p-md-5 w-100" style={{ maxWidth: '900px', position: 'relative', zIndex: 10 }}>
                <h2 className="text-center h5 fw-semibold text-gray-700 mb-4">Customer List</h2>

                <div className="d-flex justify-content-end mb-4">
                    <Link
                        to="/add-customer"
                        className="btn btn-primary fw-semibold"
                        style={{
                            background: '#10b981', // Green for Add
                            borderColor: '#10b981',
                            color: 'white',
                        }}
                    >
                        + Add New Customer
                    </Link>
                </div>

                {customers.length === 0 ? (
                    <p className="text-center text-gray-600">No customers found. Click "Add New Customer" to get started.</p>
                ) : (
                    <div className="table-responsive">
                        <table className="table table-hover table-striped">
                            <thead>
                                <tr>
                                    <th scope="col">Name</th>
                                    <th scope="col">Email</th>
                                    <th scope="col">Address</th>
                                    <th scope="col">Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                {customers.map((customer) => (
                                    <tr key={customer._id}>
                                        <td>{customer.name}</td>
                                        <td>{customer.email}</td>
                                        <td>{customer.address}</td>
                                        <td>
                                            <Link
                                                to={`/edit-customer/${customer._id}`}
                                                className="btn btn-sm btn-info me-2"
                                                style={{
                                                    background: '#3b82f6', // Blue for Edit
                                                    borderColor: '#3b82f6',
                                                    color: 'white',
                                                }}
                                            >
                                                Edit
                                            </Link>
                                            <button
                                                onClick={() => handleDelete(customer._id)}
                                                className="btn btn-sm btn-danger"
                                                style={{
                                                    background: '#dc2626', // Red for Delete
                                                    borderColor: '#dc2626',
                                                    color: 'white',
                                                }}
                                            >
                                                Delete
                                            </button>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                )}
            </div>
        </div>
    );
};

export default CustomerListPage;
// frontend/src/pages/CustomerFormPage.jsx
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';
import { toast } from 'react-toastify';

const CustomerFormPage = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [address, setAddress] = useState('');
    // Add more fields as needed for your customer model (e.g., phone, company, notes)
    // const [phone, setPhone] = useState('');
    // const [company, setCompany] = useState('');

    const navigate = useNavigate();
    const { id } = useParams(); // Get customer ID from URL for editing

    useEffect(() => {
        if (id) {
            // If ID exists, we are in edit mode, so fetch customer data
            const fetchCustomer = async () => {
                try {
                    const token = localStorage.getItem('token');
                    if (!token) {
                        toast.error('You are not authorized. Please log in.');
                        navigate('/login');
                        return;
                    }
                    const config = {
                        headers: {
                            Authorization: `Bearer ${token}`,
                        },
                    };
                    const response = await axios.get(`http://localhost:5000/api/customers/${id}`, config);
                    const customerData = response.data;
                    setName(customerData.name);
                    setEmail(customerData.email);
                    setAddress(customerData.address);
                    // Set other fields if you add them
                    // setPhone(customerData.phone || '');
                    // setCompany(customerData.company || '');
                } catch (err) {
                    console.error('Error fetching customer for edit:', err);
                    toast.error(err.response?.data?.message || 'Failed to fetch customer data for editing.');
                    navigate('/customers'); // Redirect if customer not found or error
                }
            };
            fetchCustomer();
        }
    }, [id, navigate]); // Depend on 'id' and 'navigate'

    const submitHandler = async (e) => {
        e.preventDefault();

        const customerData = { name, email, address };
        // Add other fields to customerData if you include them

        try {
            const token = localStorage.getItem('token');
            if (!token) {
                toast.error('You are not authorized. Please log in.');
                navigate('/login');
                return;
            }
            const config = {
                headers: {
                    'Content-Type': 'application/json',
                    Authorization: `Bearer ${token}`,
                },
            };

            if (id) {
                // Update existing customer
                await axios.put(`http://localhost:5000/api/customers/${id}`, customerData, config);
                toast.success('Customer updated successfully!');
            } else {
                // Add new customer
                await axios.post('http://localhost:5000/api/customers', customerData, config);
                toast.success('Customer added successfully!');
            }
            navigate('/customers'); // Redirect to customer list after submission
        } catch (err) {
            console.error('Error saving customer:', err);
            toast.error(err.response?.data?.message || 'Failed to save customer.');
        }
    };

    return (
        <div className="min-vh-100 d-flex align-items-center justify-content-center p-3" style={{ background: 'linear-gradient(to bottom right, #fcd34d, #f59e0b)' }}>
            <div className="bg-white rounded-lg shadow-lg p-4 p-md-5 w-100" style={{ maxWidth: '500px', position: 'relative', zIndex: 10 }}>
                <h2 className="text-center h5 fw-semibold text-gray-700 mb-4">
                    {id ? 'Edit Customer' : 'Add New Customer'}
                </h2>

                <form onSubmit={submitHandler}>
                    <div className="mb-3">
                        <label htmlFor="name" className="form-label text-gray-600 fw-medium">
                            Name
                        </label>
                        <input
                            type="text"
                            id="name"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            required
                            className="form-control rounded"
                            style={{ background: '#f9fafb', borderColor: '#e5e7eb' }}
                            placeholder="Customer Name"
                        />
                    </div>

                    <div className="mb-3">
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
                            style={{ background: '#f9fafb', borderColor: '#e5e7eb' }}
                            placeholder="Customer Email"
                        />
                    </div>

                    <div className="mb-4">
                        <label htmlFor="address" className="form-label text-gray-600 fw-medium">
                            Address
                        </label>
                        <input
                            type="text"
                            id="address"
                            value={address}
                            onChange={(e) => setAddress(e.target.value)}
                            required
                            className="form-control rounded"
                            style={{ background: '#f9fafb', borderColor: '#e5e7eb' }}
                            placeholder="Customer Address"
                        />
                    </div>

                    {/* Add more fields here as needed */}
                    {/* <div className="mb-3">
                        <label htmlFor="phone" className="form-label text-gray-600 fw-medium">
                            Phone
                        </label>
                        <input
                            type="text"
                            id="phone"
                            value={phone}
                            onChange={(e) => setPhone(e.target.value)}
                            className="form-control rounded"
                            style={{ background: '#f9fafb', borderColor: '#e5e7eb' }}
                            placeholder="Phone Number"
                        />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="company" className="form-label text-gray-600 fw-medium">
                            Company
                        </label>
                        <input
                            type="text"
                            id="company"
                            value={company}
                            onChange={(e) => setCompany(e.target.value)}
                            className="form-control rounded"
                            style={{ background: '#f9fafb', borderColor: '#e5e7eb' }}
                            placeholder="Company Name"
                        />
                    </div> */}

                    <button
                        type="submit"
                        className="btn w-100 text-white fw-semibold"
                        style={{
                            background: '#92400e',
                            border: 'none',
                            padding: '0.75rem 1.25rem',
                            borderRadius: '0.375rem',
                        }}
                        onMouseOver={(e) => (e.target.style.background = '#7c2d12')}
                        onMouseOut={(e) => (e.target.style.background = '#92400e')}
                    >
                        {id ? 'Update Customer' : 'Add Customer'}
                    </button>
                    <Link
                        to="/customers"
                        className="btn btn-outline-secondary w-100 mt-3 fw-semibold"
                        style={{ borderColor: '#6b7280', color: '#4b5563' }}
                    >
                        Cancel
                    </Link>
                </form>
            </div>
        </div>
    );
};

export default CustomerFormPage;
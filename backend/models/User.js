// backend/models/User.js
const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

const userSchema = mongoose.Schema(
    {
        name: {
            type: String,
            required: true,
        },
        email: {
            type: String,
            required: true,
            unique: true, // Ensure emails are unique
        },
        password: {
            type: String,
            required: true,
        },
        // You can add more fields like role, phone, etc. later
        // role: {
        //     type: String,
        //     enum: ['admin', 'sales', 'marketing', 'support'],
        //     default: 'sales'
        // }
    },
    {
        timestamps: true, // Adds createdAt and updatedAt fields
    }
);

// Middleware to hash password before saving
userSchema.pre('save', async function (next) {
    if (!this.isModified('password')) {
        next(); // If password is not modified, skip hashing
    }

    const salt = await bcrypt.genSalt(10);
    this.password = await bcrypt.hash(this.password, salt);
});

// Method to compare entered password with hashed password in DB
userSchema.methods.matchPassword = async function (enteredPassword) {
    return await bcrypt.compare(enteredPassword, this.password);
};

const User = mongoose.model('User', userSchema);

module.exports = User;
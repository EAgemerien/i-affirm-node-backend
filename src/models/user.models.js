import { pool } from '../config/mysql.config.js'
import QUERY from '../config/user.query.js'


// User model
const UserModel = {
    // Create a new user
    createUser: async (user) => {
        const { username, email, password } = user;
        const [rows] = await pool.query(
            QUERY.CREATE_USER,
            [username, email, password]
        );
        return rows.insertId; // Returns the ID of the newly inserted user
    },

    // Get a user by ID
    getUserById: async (id) => {
        const [rows] = await pool.query(
            QUERY.SELECT_USER_ID,
            [id]
        );
        return rows[0]; // Return the first row of results
    },

    // Get a user by username
    getUserByUsername: async (username) => {
        const [rows] = await pool.query(
            QUERY.SELECT_USER_USER_ID,
            [username]
        );
        return rows[0]; // Return the first row of results
    },

    // Update a user's information
    updateUser: async (id, user) => {
        const { password, img_url } = user;
        await pool.query(
            QUERY.UPDATE_USER,
            [  password, img_url, id ]
        );
    },

    // Delete a user by ID
    deleteUser: async (id) => {
        await pool.query(
            QUERY.DELETE_USER,
            [id]
        );
    },

    // Get all users
    getAllUsers: async () => {
        const [rows] = await pool.query(QUERY.SELECT_USERS);
        return rows;
    }
};

export default UserModel;

import express from 'express';
import {User} from '../schema/user.js'
import { Message } from '../schema/userMessage.js';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import authenticateToken from '../middleware/authenticateToken.js';


const router = express.Router();
const JWT_SECRET = 'your_jwt_secret'; 

// Signup route
router.post('/signup', async (req, res) => {
    try {
      if (await User.findOne({ username: req.body.username })) {
        return res.status(400).json('This User is already Registered');
      } else {
        const hashedPassword = await bcrypt.hash(req.body.password, 10);
        const user = new User({
          firstName: req.body.firstName,
          lastName: req.body.lastName,
          username: req.body.username,
          password: hashedPassword
        });
  
        await user.save();
  
        const token = jwt.sign({ id: user._id }, JWT_SECRET, { expiresIn: '1h' });
  
        res.status(201).json({
          message: 'Data Successfully Inserted',
          user,
          token
        });
      }
    } catch (error) {
      console.error('Error inserting data:', error);
      res.status(500).json('Internal Server Error');
    }
  });
  
  // Login route
  router.post('/login', async (req, res) => {
    try {
      const user = await User.findOne({ username: req.body.username });
      if (!user) {
        return res.status(400).json('Invalid username');
      }
  
      const isMatch = await bcrypt.compare(req.body.password, user.password);
      if (!isMatch) {
        return res.status(400).json('Invalid password');
      }
      
      const token = jwt.sign({ id: user._id }, JWT_SECRET, { expiresIn: '1h' });
  
      res.cookie('token', token, { httpOnly: true, secure: true });
      res.json({
        message: 'Login successful',
        token,
        user: {
            id: user._id,
            username: user.username,
            isAdmin: user.isAdmin,
          }
      });
    } catch (error) {
      console.error('Login error:', error);
      res.status(500).json('Internal Server Error');
    }
  });
  //Admin login
  router.post('/loginadmin', async (req, res) => {
    try {
      const user = await User.findOne({ username: req.body.username });
      if (!user) {
        return res.status(400).json('Invalid username');
      }
  
      const isMatch = await bcrypt.compare(req.body.password, user.password);
      if (!isMatch) {
        return res.status(400).json('Invalid password');
      }
      
      if (!user.isAdmin) {
        return res.status(403).json('Not Admin');
      }

      const token = jwt.sign({ id: user._id }, JWT_SECRET, { expiresIn: '1h' });
  
      res.cookie('token', token, { httpOnly: true, secure: true });
      res.json({
        message: 'Login successful',
        token,
        user: {
            id: user._id,
            username: user.username,
            isAdmin: user.isAdmin,
          }
      });
    } catch (error) {
      console.error('Login error:', error);
      res.status(500).json('Internal Server Error');
    }
  });

  //Logout route
router.post('/logout', (req, res) => {
    res.clearCookie('token', { httpOnly: true, secure: true });
    res.status(200).json({ message: 'Logout successful' });
  });

//   logic for "Is user is loggedin or not" in routes.js
  router.get('/profile', authenticateToken, async (req, res) => {
    try {
      const user = await User.findById(req.user.id);
      res.json(user);
    } catch (error) {
      res.status(500).json('Internal Server Error');
    }
  });


  // API endpoint to get data
router.get('/getUsers', async (req, res) => {
    try {
      const data = await User.find();
      res.json(data);
    } catch (err) {
      res.status(400).send('Error: ' + err);
    }
  });
router.get('/countUsers', async (req, res) => {
    try {
      const count = await User.countDocuments();
      res.json({count});
    } catch (err) {
      res.status(400).send('Error: ' + err);
    }
  });

// API endpoint to delete data
router.delete('/getUsers/:id', async (req, res) => {
    try {
      await User.findByIdAndDelete(req.params.id);
      res.status(200).json('Data deleted.');
    } catch (err) {
      res.status(400).send('Error: ' + err);
    }
  });

  // API endpoint to get message
  router.get('/getMessage', async (req, res) => {
    try {
      const data = await Message.find();
      res.json(data);
    } catch (err) {
      res.status(400).send('Error: ' + err);
    }
  });

// API endpoint to delete message
router.delete('/getMessage/:id', async (req, res) => {
  try {
    await Message.findByIdAndDelete(req.params.id);
    res.status(200).json('Message deleted.');
  } catch (err) {
    res.status(400).send('Error: ' + err);
  }
});


  router.post('/message', async (req, res) => {
    try {
      const messages = new Message({
        name: req.body.name,
        email: req.body.email,
        subject: req.body.subject,
        message: req.body.message, // Ensure the field name is correct
      });
  
      await messages.save();
  
      res.status(201).json({
        message: 'Data Successfully Inserted',
      });
    } catch (error) {
      console.error('Error inserting data:', error);
      res.status(500).json('Internal Server Error');
    }
  });
  

  export default router;

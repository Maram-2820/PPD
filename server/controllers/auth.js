const mysql = require('mysql');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');



const db = mysql.createConnection ({
    host: process.env.DATABASE_HOST,
    user: process.env.DATABASE_USER,
    password: process.env.DATABASE_PASSWORD,
    database: process.env.DATABASE,
})

exports.register = async (req, res) => {
    console.log(req.body);
  
    const {
      first_name,
      last_name,
      email,
      password,
      cpassword,
      phone,
      dob,
      gender
    } = req.body;
  
    // Check for missing fields (optional but recommended)
    if (!first_name || !last_name || !email || !password || !cpassword || !phone || !dob || !gender) {
      return res.render('register', {
        message: "Please fill in all fields"
      });
    }
  
    // Check if email already exists
    db.query('SELECT email FROM user_info WHERE email = ?', [email], async (error, result) => {
      if (error) {
        console.log(error);
      }
  
      if (result.length > 0) {
        return res.render('register', {
          message: "Email already registered"
        });
      } else if (password !== cpassword) {
        return res.render('register', {
          message: "Passwords do not match"
        });
      }
  
      // Hash the password
      let hashedPassword = await bcrypt.hash(password, 8);
      console.log("Hashed password:", hashedPassword);
  
      // Insert new user into the database
      db.query(
        'INSERT INTO user_info SET ?',
        {
          first_name: first_name,
          last_name: last_name,
          email: email,
          password: hashedPassword,
          phone: phone,
          dob: dob,
          gender: gender
        },
        (error, result) => {
          if (error) {
            console.log(error);
          } else {
            console.log(result);
            return res.render('register', {
              message: "User registered successfully"
            });
          }
        }
      );
    });
  };
exports.login = (req, res) => {
    const { email, password } = req.body;
  
    db.query('SELECT * FROM user_info WHERE email = ?', [email], async (error, result) => {
      if (error) {
        console.log(error);
        return res.status(500).json({ message: 'Server error' });
      }
  
      if (result.length === 0) {
        return res.status(400).json({ message: 'Email not registered' });
      }
  
      const isMatch = await bcrypt.compare(password, result[0].password);
      if (!isMatch) {
        return res.status(401).json({ message: 'Incorrect password' });
      }
  
      const token = jwt.sign({ id: result[0].id, email: result[0].email }, process.env.JWT_SECRET, { expiresIn: '90d' });
  
      res.cookie('auth_token', token, { httpOnly: true });
  
      return res.status(200).json({ message: 'Login successful' });
    });
  };
  
-- Create the database (if not already created)
CREATE DATABASE IF NOT EXISTS devotions_db;
USE devotions_db;

-- Create the devotions table
CREATE TABLE devotions (
  id INT AUTO_INCREMENT PRIMARY KEY,
  title VARCHAR(255) NOT NULL,
  content TEXT NOT NULL,
  date DATE NOT NULL,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
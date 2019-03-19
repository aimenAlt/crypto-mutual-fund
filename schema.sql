DROP DATABASE IF EXISTS Crypto;

CREATE DATABASE Crypto;

USE Crypto;

CREATE TABLE funds (
  id INT NOT NULL AUTO_INCREMENT,
  crypto_symbol VARCHAR(255) NOT NULL,
  crypto_name VARCHAR(255) NOT NULL,
  amount_owned INT NOT NULL,
  PRIMARY KEY (id)
);


CREATE TABLE investors (
  id INT NOT NULL AUTO_INCREMENT,
  investor_name VARCHAR(255) NOT NULL,
  email VARCHAR(255) NOT NULL,
  PRIMARY KEY (id)
);


CREATE TABLE investments (
  id INT NOT NULL AUTO_INCREMENT,
  investor_id INT NOT NULL,
  investment_amount DECIMAL NOT NULL,
  time_invested BIGINT NOT NULL,
  total_before INT NOT NULL,
  PRIMARY KEY (id),
  FOREIGN KEY (investor_id) REFERENCES investors(id)
);

INSERT INTO funds (crypto_symbol, crypto_name, amount_owned) VALUES ("USD", "United States Dollar", 1800);

INSERT INTO investors (investor_name, email) VALUES ("Aimen Alt", "ssj21000@gmail.com");
INSERT INTO investors (investor_name, email) VALUES ("Person 1", "someone1@gmail.com");


INSERT INTO investments (investor_id, investment_amount, time_invested, total_before) VALUES (1, 1000.00, 1552968006180, 0);
INSERT INTO investments (investor_id, investment_amount, time_invested, total_before) VALUES (2, 500.00, 1552968125687, 1000);
INSERT INTO investments (investor_id, investment_amount, time_invested, total_before) VALUES (1, 300.00, 1552968142009, 1500);


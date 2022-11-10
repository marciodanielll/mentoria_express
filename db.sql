DROP DATABASE IF EXISTS heroes;

CREATE DATABASE IF NOT EXISTS heroes;

CREATE TABLE heroes.users(
  id INT PRIMARY KEY AUTO_INCREMENT,
  name VARCHAR(50) NOT NULL,
  email VARCHAR(50) UNIQUE NOT NULL,
  rule VARCHAR(50) NOT NULL,
  passsword VARCHAR(50) NOT NULL
);

INSERT INTO
  heroes.users (name, email, rule, passsword)
VALUES
  (
    "Clark Kent",
    "clark.kent@dailyplanet.com",
    "user",
    "martha123"
  ),
  (
    "Bruce Wayne",
    "bruce@waynecorp.com",
    "user",
    "123martha"
  ),
  (
    "Daiana Prince",
    "daiana.prince@louvre.com",
    "user",
    "monalisa123"
  );
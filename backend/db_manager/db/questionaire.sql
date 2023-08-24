-- to create table from terminal, run:
-- mysql -P 3306 -u <user> -p < ./questionaire.sql 

CREATE DATABASE IF NOT EXISTS questionaire;
USE questionaire;
CREATE TABLE stakeholders (
    id INT NOT NULL AUTO_INCREMENT,
    sector VARCHAR(20) NOT NULL,
    suggestion VARCHAR(1000) NOT NULL,
    PRIMARY KEY (id)
);

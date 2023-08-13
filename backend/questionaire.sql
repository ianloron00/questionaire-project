-- to run this script, run:
-- mysql -P 3306 -u <user> -p < ./questionaire.sql 

CREATE DATABASE IF NOT EXISTS questionaire;
USE questionaire;
CREATE TABLE stakeholders (
    sector INT NOT NULL,
    suggestion VARCHAR(1000) NOT NULL
);

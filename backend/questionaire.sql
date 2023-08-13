CREATE DATABASE IF NOT EXISTS questionaire;
USE questionaire;
CREATE TABLE stakeholders (
    sector INT NOT NULL,
    suggestion VARCHAR(1000) NOT NULL
);
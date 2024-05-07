CREATE DATABASE composite_materials;
USE composite_materials;

CREATE TABLE materials (
    id integer PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(100) NOT NULL,
    description TEXT NULL,
    image TEXT,
);

INSERT INTO materials (name, description)
VALUES ('test-material', 'test description of material');
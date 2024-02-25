CREATE DATABASE angry_letters;
USE angry_letters;

CREATE TABLE tasks (
    id integer PRIMARY KEY AUTO_INCREMENT,
    title VARCHAR(100) NOT NULL,
    description TEXT NOT NULL,
    image TEXT,
    letters VARCHAR(100),
    default_timer_min INT,
    default_timer_sec INT,
    bonus_timer_3_letters INT,
    bonus_timer_4_letters INT,
    bonus_timer_5_letters INT,
    bonus_timer_6_plus_letters INT
);

INSERT INTO angry_letters (tasks, description)
VALUES ('test', 'test description');
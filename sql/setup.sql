-- Use this file to define your SQL tables
-- The SQL in this file will be executed when you run `npm run setup-db`

DROP table if exists starbucks;

CREATE table starbucks (
    id BIGINT GENERATED ALWAYS AS IDENTITY, 
    name VARCHAR NOT NULL,
    calories INT NOT NULL,
    fat INT NOT NULL,
    carb INT NOT NULL,
    protein INT NOT NULL,
    sodium INT NOT NULL
);

INSERT INTO starbucks (name, calories, fat, carb, protein, sodium) VALUES
('Iced Vanilla Latte', 190, 4, 30, 7, 100),
('Mocha Frappuccino', 280, 3, 60, 4, 220),
('White Chocolate Mocha', 360, 11, 53, 14, 240),
('Strawberry Acai Refreshers', 80, 0, 18, 0, 10),
('Shaken Sweet Tea', 80, 0, 19, 0, 10),
('Iced Carmel Macchiato', 130, 3, 21, 5, 65),
('Hot Chocolate', 320, 9, 47, 14, 160);
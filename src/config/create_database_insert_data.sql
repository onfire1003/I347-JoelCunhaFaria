DROP DATABASE IF EXISTS app_macdo;
CREATE DATABASE app_macdo;
USE app_macdo;

CREATE TABLE ingredients (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(30) NOT NULL,
    description VARCHAR(300),
    availability BOOLEAN NOT NULL DEFAULT TRUE
);

CREATE TABLE menus (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(30) NOT NULL,
    description VARCHAR(300) NOT NULL,
    price DECIMAL(10, 2) NOT NULL,
    availability BOOLEAN NOT NULL DEFAULT FALSE,
    size VARCHAR(30) NOT NULL,
    image_url VARCHAR(255) NOT NULL
);

CREATE TABLE dishes (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(30) NOT NULL,
    description VARCHAR(300) NOT NULL,
    price DECIMAL(10, 2) NOT NULL,
    availability BOOLEAN NOT NULL DEFAULT FALSE,
    size VARCHAR(30) NOT NULL,
    image_url VARCHAR(255) NOT NULL
);

INSERT INTO ingredients (name, description, availability) VALUES
    ('Pain burger', 'Pain utilisé pour les burgers', TRUE),
    ('Steak de boeuf', 'Steak haché de boeuf', TRUE),
    ('Poulet pané', 'Filet de poulet pané', TRUE),
    ('Fromage', 'Tranche de fromage', TRUE),
    ('Salade', 'Feuilles de salade', TRUE),
    ('Tomate', 'Tranche de tomate', TRUE),
    ('Oignons', 'Oignons frais', TRUE),
    ('Cornichons', 'Cornichons tranchés', TRUE),
    ('Sauce spéciale', 'Sauce signature McDonald''s', TRUE),
    ('Mayonnaise', 'Sauce mayonnaise', TRUE),
    ('Sauce Big Tasty', 'Sauce Big Tasty', TRUE),
    ('Sauce tartare', 'Sauce tartare pour poisson', TRUE),
    ('Frites', 'Pommes de terre frites', TRUE),
    ('Coca-Cola', 'Boisson gazeuse', TRUE);

INSERT INTO menus (name, description, price, availability, size, image_url) VALUES
    ('Menu Big Mac', 'Inclut un Big Mac, frites et boisson', 10.50, TRUE, 'Petit', '/images/BigMac.avif'),
    ('Menu Big Mac', 'Inclut un Big Mac, frites et boisson', 11.50, TRUE, 'Moyen', '/images/BigMac.avif'),
    ('Menu Double Big Mac', 'Inclut un Double Big Mac, frites et boisson', 12.00, TRUE, 'Petit', '/images/DoubleBigMac.avif'),
    ('Menu Double Big Mac', 'Inclut un Double Big Mac, frites et boisson', 13.00, TRUE, 'Moyen', '/images/DoubleBigMac.avif'),
    ('Menu Cheeseburger Royal', 'Inclut un Cheeseburger Royal, frites et boisson', 9.50, TRUE, 'Petit', '/images/CheeseBurgerRoyal.avif'),
    ('Menu Cheeseburger Royal', 'Inclut un Cheeseburger Royal, frites et boisson', 10.50, TRUE, 'Moyen', '/images/CheeseBurgerRoyal.avif'),
    ('Menu McChicken', 'Inclut un McChicken, frites et boisson', 10.00, TRUE, 'Petit', '/images/McChicken.webp'),
    ('Menu McChicken', 'Inclut un McChicken, frites et boisson', 11.00, TRUE, 'Moyen', '/images/McChicken.webp'),
    ('Menu Big Tasty Single', 'Inclut un Big Tasty Single, frites et boisson', 11.50, TRUE, 'Petit', '/images/BigTastySingle.avif'),
    ('Menu Big Tasty Single', 'Inclut un Big Tasty Single, frites et boisson', 12.50, TRUE, 'Moyen', '/images/BigTastySingle.avif'),
    ('Menu Big Tasty Double', 'Inclut un Big Tasty Double, frites et boisson', 13.50, TRUE, 'Petit', '/images/BigTastyDouble.webp'),
    ('Menu Big Tasty Double', 'Inclut un Big Tasty Double, frites et boisson', 14.50, TRUE, 'Moyen', '/images/BigTastyDouble.webp'),
    ('Menu Filet-O-Fish', 'Inclut un Filet-O-Fish, frites et boisson', 10.00, TRUE, 'Petit', '/images/Filet-O-Fish.avif'),
    ('Menu Filet-O-Fish', 'Inclut un Filet-O-Fish, frites et boisson', 11.00, TRUE, 'Moyen', '/images/Filet-O-Fish.avif'),
    ('Menu McNuggets 6 pcs', 'Inclut 6 McNuggets, frites et boisson', 9.50, TRUE, 'Petit', '/images/McNuggets6.avif'),
    ('Menu McNuggets 6 pcs', 'Inclut 6 McNuggets, frites et boisson', 10.50, TRUE, 'Moyen', '/images/McNuggets6.avif'),
    ('Menu McNuggets 9 pcs', 'Inclut 9 McNuggets, frites et boisson', 11.50, TRUE, 'Petit', '/images/McNuggets9.avif'),
    ('Menu McNuggets 9 pcs', 'Inclut 9 McNuggets, frites et boisson', 12.50, TRUE, 'Moyen', '/images/McNuggets9.avif');

INSERT INTO dishes (name, description, price, availability, size, image_url) VALUES
    ('Big Mac', 'Burger emblématique avec double steak, sauce spéciale, salade, fromage, cornichons, oignons', 7.50, TRUE, 'Standard', '/images/BigMac.avif'),
    ('Double Big Mac', 'Double Big Mac avec double steak, sauce spéciale, salade, fromage, cornichons, oignons', 9.00, TRUE, 'Standard', '/images/DoubleBigMac.avif'),
    ('Cheeseburger Royal', 'Burger avec steak, fromage, ketchup, oignons', 6.50, TRUE, 'Standard', '/images/CheeseBurgerRoyal.avif'),
    ('McChicken', 'Burger au poulet pané avec salade et mayonnaise', 7.00, TRUE, 'Standard', '/images/McChicken.webp'),
    ('Big Tasty Single', 'Burger au bœuf, sauce Big Tasty, fromage, salade, tomate', 8.00, TRUE, 'Standard', '/images/BigTastySingle.avif'),
    ('Big Tasty Double', 'Double Big Tasty avec double steak, sauce Big Tasty, fromage, salade, tomate', 10.00, TRUE, 'Standard', '/images/BigTastyDouble.webp'),
    ('Filet-O-Fish', 'Filet de poisson pané avec sauce tartare et fromage', 7.00, TRUE, 'Standard', '/images/Filet-O-Fish.avif'),
    ('McNuggets 6 pcs', '6 Chicken McNuggets croustillants', 6.50, TRUE, 'Standard', '/images/McNuggets6.avif'),
    ('McNuggets 9 pcs', '9 Chicken McNuggets croustillants', 9.00, TRUE, 'Standard', '/images/McNuggets9.avif'),
    ('Frites Mini', 'Frites croustillantes mini', 2.50, TRUE, 'Mini', '/images/FritesMini.avif'),
    ('Frites Petit', 'Frites croustillantes petites', 3.00, TRUE, 'Petit', '/images/FritesSmall.avif'),
    ('Frites Moyen', 'Frites croustillantes moyennes', 3.50, TRUE, 'Moyen', '/images/FritesMedium.avif'),
    ('Coca-Cola Mini', 'Boisson gazeuse', 2.00, TRUE, 'Mini', '/images/Coca-ColaMini.avif'),
    ('Coca-Cola Petit', 'Boisson gazeuse', 2.50, TRUE, 'Petit', '/images/Coca-ColaSmall.avif'),
    ('Coca-Cola Moyen', 'Boisson gazeuse', 3.00, TRUE, 'Moyen', '/images/Coca-ColaMedium.avif');

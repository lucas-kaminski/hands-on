DROP TABLE IF EXISTS dogs;
DROP TABLE IF EXISTS cats;

CREATE TABLE dogs (
     id INT PRIMARY KEY,
     name VARCHAR NOT NULL
);

CREATE TABLE cats(
     id INT PRIMARY KEY,
     name VARCHAR NOT NULL
);

INSERT INTO dogs (id, name) VALUES (1, 'SCOOBY');
INSERT INTO dogs (id, name) VALUES (2, 'SPIKE');
INSERT INTO dogs (id, name) VALUES (3, 'FAROFA');
INSERT INTO dogs (id, name) VALUES (4, 'NARUTO');
INSERT INTO dogs (id, name) VALUES (5, 'FAROFA');

INSERT INTO cats (id, name) VALUES (1, 'FAROFA');
INSERT INTO cats (id, name) VALUES (2, 'MADOKAZINHA');
INSERT INTO cats (id, name) VALUES (3, 'RAIO');

SELECT name FROM dogs
UNION
SELECT name from cats
ORDER BY name ASC;

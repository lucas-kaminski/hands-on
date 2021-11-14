CREATE TABLE Alunos (
     id INT PRIMARY KEY,
     nome VARCHAR NOT NULL,
     valor INT DEFAULT 0
);

CREATE TABLE Notas(
  nota INT PRIMARY KEY,
  valor_min INT DEFAULT 0,
  valor_max INT DEFAULT 0
);

INSERT INTO Notas('nota','valor_min','valor_max')
VALUES
(1,0,9),
(2,10,19),
(3,20,29),
(4,30,39),
(5,40,49),
(6,50,59),
(7,60,69),
(8,70,79),
(9,80,89),
(10,90,100);

INSERT INTO Alunos('id','nome','valor')
VALUES
(1,'Julia',81),
(2,'Carol',68),
(3,'Maria',99),
(4,'Andreia',78),
(5,'Jaqueline',63),
(6,'Marcela',88);

SELECT CASE WHEN nota < 8 then NULL else nome END as nome_, CASE WHEN valor BETWEEN valor_min AND valor_max then nota else null END as nota_, valor
FROM Notas, Alunos
WHERE (nota_ IS NOT NULL)
ORDER by nota DESC, valor DESC, nome ASC;

DROP TABLE Alunos;
DROP TABLE Notas;
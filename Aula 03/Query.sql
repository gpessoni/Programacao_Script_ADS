CREATE DATABASE escola;

CREATE TABLE Aluno (
	id INT PRIMARY KEY,
	nome VARCHAR(50),
	idade INT 
)

INSERT INTO Aluno (id, nome, idade) VALUES (1, 'João', 20) 
INSERT INTO Aluno (id, nome, idade) VALUES (2, 'Maria', 22) 
INSERT INTO Aluno (id, nome, idade) VALUES (3, 'Pedro', 19) 


select * from Aluno

select * from Aluno where idade > = 20

UPDATE Aluno
SET idade = 20
WHERE id = 3;

DELETE Aluno where id = 1
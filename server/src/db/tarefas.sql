-- DROP DATABASE IF EXISTS estoque;
-- Cria banco de dados
-- CREATE DATABASE tarefa;


CREATE TABLE IF NOT EXISTS tarefa (
    id INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
    titulo VARCHAR(45) unique not null,
    descricao VARCHAR(255) not null
    

);

INSERT INTO tarefa (titulo, descricao) VALUES ('Aprender SQL', 'Estudar comandos básicos.',"#D9D9D9");
SELECT * FROM tarefa;
-- Inserindo usuários
INSERT INTO users (id, name, email, password, created_at) VALUES (1, 'Erik Silva', 'erik@example.com', 'senha123', CURRENT_TIMESTAMP)
-- Inserindo tarefas associadas aos usuários existentes
INSERT INTO tasks (id, title, description, status, user_id, created_at) VALUES (1, 'Finalizar relatório', 'Escrever o relatório final do projeto.', 'PENDING', 1, CURRENT_TIMESTAMP)
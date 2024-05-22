CREATE TABLE constructs (
    id SERIAL PRIMARY KEY,
    theory_id INTEGER NOT NULL,
    name VARCHAR(255) NOT NULL,
    description TEXT,
    FOREIGN KEY (theory_id) REFERENCES theories(id)
);

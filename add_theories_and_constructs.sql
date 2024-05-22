-- SQL Migration Script to add new theories and constructs

BEGIN;

-- Create a new table for constructs with a foreign key to the theories table
CREATE TABLE IF NOT EXISTS constructs (
    id SERIAL PRIMARY KEY,
    theory_id INTEGER NOT NULL,
    name VARCHAR(255) NOT NULL,
    description TEXT,
    FOREIGN KEY (theory_id) REFERENCES theories (id)
);

-- Create a new table for theories that includes a name and description
CREATE TABLE IF NOT EXISTS new_theories (
    id SERIAL PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    description TEXT
);

-- Assuming the existing theories table has a simple structure, we will migrate data to the new structure
-- Copy existing theories into the new_theories table
INSERT INTO new_theories (name)
SELECT name FROM theories;

-- For each theory, insert related constructs into the constructs table
-- This is a placeholder for the actual construct data to be inserted
-- Repeat the following block for each theory with its constructs
-- Example for one theory and its constructs
INSERT INTO constructs (theory_id, name, description)
VALUES
    ((SELECT id FROM new_theories WHERE name = 'Social Learning Theory'), 'Observational Learning', 'Learning by observing others'),
    ((SELECT id FROM new_theories WHERE name = 'Social Learning Theory'), 'Reinforcement', 'Learning is affected by the consequences of actions'),
    ((SELECT id FROM new_theories WHERE name = 'Social Cognitive Theory'), 'Self-Efficacy', 'Belief in one’s capabilities to organize and execute the courses of action required to manage prospective situations'),
    ((SELECT id FROM new_theories WHERE name = 'Social Cognitive Theory'), 'Reciprocal Determinism', 'The dynamic interaction of the person, behavior, and the environment in which the behavior is performed'),
    ((SELECT id FROM new_theories WHERE name = 'Stages of Change Model'), 'Precontemplation', 'Not yet acknowledging that there is a problem behavior that needs to be changed'),
    ((SELECT id FROM new_theories WHERE name = 'Stages of Change Model'), 'Contemplation', 'Acknowledging that there is a problem but not yet ready or sure of wanting to make a change'),
    ((SELECT id FROM new_theories WHERE name = 'Stages of Change Model'), 'Preparation', 'Getting ready to change'),
    ((SELECT id FROM new_theories WHERE name = 'Stages of Change Model'), 'Action', 'Changing behavior'),
    ((SELECT id FROM new_theories WHERE name = 'Stages of Change Model'), 'Maintenance', 'Maintaining the behavior change'),
    ((SELECT id FROM new_theories WHERE name = 'Stages of Change Model'), 'Relapse', 'Returning to older behaviors and abandoning the new changes');

-- Additional theories and constructs to be added
-- Note: The following is an example and should be repeated for each theory and its constructs
INSERT INTO constructs (theory_id, name, description)
VALUES
    ((SELECT id FROM new_theories WHERE name = 'Prospect Theory'), 'Loss Aversion', 'Tendency to prefer avoiding losses to acquiring equivalent gains'),
    ((SELECT id FROM new_theories WHERE name = 'Prospect Theory'), 'Endowment Effect', 'Tendency to value things more highly simply because they own them'),
    ((SELECT id FROM new_theories WHERE name = 'Nudge Theory'), 'Default Options', 'Setting default options that require an active choice to deviate from can influence behavior'),
    ((SELECT id FROM new_theories WHERE name = 'Nudge Theory'), 'Social Proof', 'The tendency to see an action as more appropriate when others are doing it');

-- Drop the old theories table once data migration is complete
DROP TABLE IF EXISTS theories;

-- Rename new_theories to theories
ALTER TABLE new_theories RENAME TO theories;

COMMIT;
